"use strict";
// importScripts('lib/analytics.js');
// importScripts('vendor/localforage.min.js');

// TODO: Migrate background.js to service worker and upgrade to Manifest V3. 
// When migrating to this new background context, you'll need to keep two main things in mind. 
// - service workers are terminated when not in use and restarted when needed (similar to event pages).
// - service workers don't have access to DOM.
// - service workers don't have access to DOM-like apis like browser.windows or browser.tabs.
// Don't move this file; it needs to be in the same folder as manifest.json (chrome vers. < 92)

// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/

var browser = browser || chrome;
// windows.tabsActive = []; // DOM is not available to service workers
// windows.displayInfo = [];

function setup(){
	console.log(self);
	setupListeners(); 
	// setupStorage();
	// setupPopup(getItem('settings', 'openInOwnTab'));
	updateTabCountDebounce();
	// setTimeout(cleanUp, 5000);
	console.log("setup completed");
}

function setupStorage(){

}

function setupListeners(){
	browser.tabs.onCreated.removeListener(tabAdded);
	browser.tabs.onUpdated.removeListener(tabRemoved);
	browser.tabs.onRemoved.removeListener(tabRemoved);
	browser.tabs.onReplaced.removeListener(tabRemoved);
	browser.tabs.onDetached.removeListener(tabRemoved);
	browser.tabs.onAttached.removeListener(tabRemoved);
	// browser.tabs.onActivated.removeListener(tabActiveChanged);
	browser.tabs.onMoved.removeListener(tabRemoved);
	browser.windows.onFocusChanged.removeListener(windowFocus);
	browser.windows.onCreated.removeListener(windowCreated);
	browser.windows.onRemoved.removeListener(windowRemoved);

	browser.tabs.onCreated.addListener(tabAdded);
	browser.tabs.onUpdated.addListener(tabUpdated);
	browser.tabs.onRemoved.addListener(tabRemoved);
	browser.tabs.onReplaced.addListener(tabRemoved);
	browser.tabs.onDetached.addListener(tabRemoved);
	browser.tabs.onAttached.addListener(tabRemoved);
	// browser.tabs.onActivated.addListener(tabActiveChanged);
	browser.tabs.onMoved.addListener(tabRemoved);
	browser.windows.onFocusChanged.addListener(windowFocus);
	browser.windows.onCreated.addListener(windowCreated);
	browser.windows.onRemoved.addListener(windowRemoved);

	browser.webRequest.onCompleted.addListener(logRequest,{urls: ["*://*/*"]});
	
	// browser.action.onClicked.addListener(openExtension); // will not fire if the action key in manifest is set to 'popup'
}

async function createWindowWithTabs(tabs, isIncognito) {

	var pinnedIndex = 0;
	var firstTab = tabs.shift();
	var t = [];
	for (var i = 0; i < tabs.length; i++) {
		t.push(tabs[i].id);
	};

	var firstPinned = firstTab.pinned;
	var w = await browser.windows.create({ tabId: firstTab.id, incognito: !!isIncognito });
	if(firstPinned) {
		await browser.tabs.update(w.tabs[0].id, { pinned: firstPinned });
		pinnedIndex++;
	}

	if (t.length > 0) {
		var i = 0;
		for (var oldTabId of t) {
			i++;
			var oldTab = await browser.tabs.get(oldTabId);
			var tabPinned = oldTab.pinned;
			var movedTabs = [];
			if(!tabPinned) {
				movedTabs = await browser.tabs.move(oldTabId, { windowId: w.id, index: -1 });
			}else{
				movedTabs = await browser.tabs.move(oldTabId, { windowId: w.id, index: pinnedIndex++ });
			}
			if(movedTabs.length > 0) {
				var newTab = movedTabs[0];
				if(tabPinned) {
					await browser.tabs.update(newTab.id, { pinned: tabPinned });
				}
			}
		};
	}
	await browser.windows.update(w.id, { focused: true });
}

function focusOnTabAndWindowDelayed(tab) {
	var tab = JSON.parse(JSON.stringify(tab));
	setTimeout(focusOnTabAndwindows.bind(this, tab), 125);
}

async function focusOnTabAndWindow(tab) {
	var windowId = tab.windowId;
	var tabId;
	if (!!tab.tabId) {
		tabId = tab.tabId;
	} else {
		tabId = tab.id;
	}

	browser.windows.update(windowId, { focused: true }).then(function(tabId, windowId) {
		browser.tabs.update(tabId, { active: true }).then(function(tabId, windowId) {
			tabActiveChanged({ tabId: tabId, windowId: windowId });
		}.bind(this, tabId, windowId));
	}.bind(this, tabId, windowId));
}

function focusOnWindowDelayed(windowId) {
	setTimeout(focusOnwindows.bind(this, windowId), 125);
}

function focusOnWindow(windowId) {
	browser.windows.update(windowId, { focused: true });
}

async function updateTabCount() {
	var run = true;
	// assume we have storage available
	// if (storageAvailable()) {
	// 	if (typeof storage["badge"] === "undefined") storage["badge"] = "1";
	// 	if (storage["badge"] == "0") run = false;
	// }

	if (run) {
		var result = await browser.tabs.query({});
		var count = 0;
		if (!!result && !!result.length) {
			count = result.length;
		}
		await browser.action.setBadgeText({ text: count + "" });
		await browser.action.setBadgeBackgroundColor({ color: "purple" });
		var toRemove = [];
		// if (!!windows.tabsActive) {
		// 	for (var i = 0; i < windows.tabsActive.length; i++) {
		// 		var t = windows.tabsActive[i];
		// 		var found = false;
		// 		if (!!result && !!result.length) {
		// 			for (var j = 0; j < result.length; j++) {
		// 				if (result[j].id == t.tabId) found = true;
		// 			};
		// 		}
		// 		if (!found) toRemove.push(i);
		// 	};
		// }
		// console.log("to remove", toRemove);
		// for (var i = toRemove.length - 1; i >= 0; i--) {
		// 	// console.log("removing", toRemove[i]);
		// 	if (!!windows.tabsActive && windows.tabsActive.length > 0) {
		// 		if (!!windows.tabsActive[toRemove[i]]) windows.tabsActive.splice(toRemove[i], 1);
		// 	}
		// };
	} else {
		await browser.action.setBadgeText({ text: "" });
	}
}

var updateTabCountDebounce = debounce(updateTabCount, 250);

function tabRemoved() {
	updateTabCountDebounce();
}

async function tabAdded(tab) {
	// try {
	// 	var tabLimit = JSON.parse(localStorage["tabLimit"]);
	// } catch (e) {
	// 	var tabLimit = 0;
	// }
	const tabLimit = 0;
	if (tabLimit > 0) {
		if (tab.id != browser.tabs.TAB_ID_NONE) {
			var tabCount = await browser.tabs.query({ currentWindow: true });
			if(tabCount.length > tabLimit) {
				await createWindowWithTabs([tab], tab.incognito);
			}
		}
	}
	updateTabCountDebounce();
}

function tabUpdated(tabId, changeInfo, tabInfo){
	let url = changeInfo.url
	if (url && !url.startsWith('chrome://')) {
		const date = Date.now();
		console.log(`Tab: ${tabId} URL changed to ${url} at ${date}`);
		// readPage(tabId);
		setupAnnotation(tabId);
	  }
}

function setupAnnotation(tabId) {
	browser.scripting.executeScript({ // this works. Don't touch.
	target: { tabId: tabId },
	files: ['lib/content.js'] 
	})
}

function readPage(tabId){
		browser.scripting.executeScript({ // this works. Don't touch.
			target: { tabId: tabId },
			files: ['lib/readPage.js'] 
		})
}

function logRequest(details){
	let tabId = details.tabId;
	let url = details.url;
	let method = details.method;
	let resourceType = details.resourceType; // largely undefined..?

	// console.log(method);
}

function tabActiveChanged(tab) {
	if (!!tab && !!tab.tabId) {
		if (!windows.tabsActive) windows.tabsActive = [];
		if (!!windows.tabsActive && windows.tabsActive.length > 0) {
			var lastActive = windows.tabsActive[windows.tabsActive.length - 1];
			if (!!lastActive && lastActive.tabId == tab.tabId && lastActive.windowId == tab.windowId) {
				return;
			}
		}
		while (windows.tabsActive.length > 20) {
			windows.tabsActive.shift();
		}
		for (var i = windows.tabsActive.length - 1; i >= 0; i--) {
			if (windows.tabsActive[i].tabId == tab.tabId) {
				windows.tabsActive.splice(i, 1);
			}
		};
		windows.tabsActive.push(tab);
	}
	updateTabCountDebounce();
}

// async function openSidebar() {
// 	await browser.sidebarAction.open();
// }

async function openPopup() {
	if (typeof storage["openInOwnTab"] === "undefined") storage["openInOwnTab"] = "0";
	var openInOwnTab = false
	try {
		openInOwnTab = !!JSON.parse(storage["openInOwnTab"]);
	} catch (e) {
		openInOwnTab = false;
	}
	if(openInOwnTab) {
		await browser.action.setPopup({ popup: "popup.html?popup=true" });
		await browser.action.openPopup();
		await browser.action.setPopup({ popup: "" });
	}else{
		await browser.action.openPopup();
	}
}

async function openAsOwnTab() {
	var popup_page = browser.runtime.getURL("popup.html");
	var tabs = await browser.tabs.query({});

	var currentTab;
	var previousTab;
	// if (!!windows.tabsActive && windows.tabsActive.length > 1) {
	// 	currentTab = windows.tabsActive[windows.tabsActive.length - 1];
	// 	previousTab = windows.tabsActive[windows.tabsActive.length - 2];
	// }

	for (var i = 0; i < tabs.length; i++) {
		var tab = tabs[i];
		if (tab.url.indexOf("popup.html") > -1 && tab.url.indexOf(popup_page) > -1) {
			if(currentTab && currentTab.tabId && tab.id == currentTab.tabId && previousTab && previousTab.tabId) {
				return focusOnTabAndWindow(previousTab);
			}else{
				return browser.windows.update(tab.windowId, { focused: true }).then(
					function() {
						browser.tabs.highlight({ windowId: tab.windowId, tabs: tab.index });
					}.bind(this)
				);
			}
		}
	}
	return browser.tabs.create({ url: "popup.html" });
}

async function setupPopup(ownTab) {
	await browser.action.onClicked.removeListener(openAsOwnTab);
	if(!!ownTab) {
		await browser.action.setPopup({ popup: "" });
		await browser.action.onClicked.addListener(openAsOwnTab);
	}else{
		await browser.action.setPopup({ popup: "popup.html?popup=true" });
	}
	if(browser.sidebarAction) {
		browser.sidebarAction.setPanel({ panel: "popup.html?panel=true" });
	}
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function loadData(){
	return new Promise((resolve, reject) => {
		chrome.storage.sync.get(null, (items) => {
			if (chrome.runtime.lastError) {
				// pass any observed errors down the promise chain
				return reject(chrome.runtime.lastError);
			}
			// pass retrieved data from storage down the promise chain
			resolve(items);
		})
	})
}

function storageAvailable() {
	var test = 'test';
	try {
		storage.setItem(test, test);
		storage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

function windowFocus(windowId) {
	try {
		if (!!windowId) {
			windowActive(windowId);
			// console.log("onFocused", windowId);
			hideWindows(windowId);
		}
	} catch (e) {

	}
}
function windowCreated(window) {
	try {
		if (!!window && !!windows.id) {
			windowActive(windows.id);
		}
	} catch (e) {

	}
	// console.log("onCreated", windows.id);
}
function windowRemoved(windowId) {
	try {
		if (!!windowId) {
			windowActive(windowId);
		}
	} catch (e) {

	}
	// console.log("onRemoved", windowId);
}

async function hideWindows(windowId) {
	if (navigator.userAgent.search("Firefox") > -1) {
		return;
	}

	if (!windowId || windowId < 0) {
		return;
	} else {
		if (storageAvailable()) {
			if (typeof storage["hideWindows"] === "undefined") storage["hideWindows"] = "0";
			if (storage["hideWindows"] == "0") return;
		} else {
			console.log("no local storage");
			return;
		}

		var result = await browser.permissions.contains({ permissions: ['system.display'] });
		if (result) {
			// The extension has the permissions.
			chrome.system.display.getInfo(async function (windowId, displaylayouts) {
				windows.displayInfo = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
				try {
					for (var _iterator = displaylayouts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var displaylayout = _step.value;
						windows.displayInfo.push(displaylayout.bounds);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
				var windows = await browser.windows.getAll({ populate: true });
				var monitor = -1;
				for (var i = windows.length - 1; i >= 0; i--) {
					if (windows[i].id == windowId) {
						for (var a in windows.displayInfo) {
							var result = is_in_bounds(windows[i], windows.displayInfo[a]);
							if (result) {
								monitor = a;
							}
						}
					}
				};

				for (var i = windows.length - 1; i >= 0; i--) {
					if (windows[i].id != windowId) {
						if (is_in_bounds(windows[i], windows.displayInfo[monitor])) {
							await browser.windows.update(windows[i].id, { "state": "minimized" });
						}
					}
				};
			}.bind(null, windowId));
		}


	}
}

function is_in_bounds(object, bounds) {
	var C = object,B = bounds;
	if (C.left >= B.left && C.left <= B.left + B.width) {
		if (C.top >= B.top && C.top <= B.top + B.height) {
			return true;
		}
	}
	return false;
};

function windowActive(windowId) {
	if (windowId < 0) return;
	var windows = JSON.parse(storage["windowAge"]);
	if (windows instanceof Array) {

	} else {
		windows = [];
	}
	if (windows.indexOf(windowId) > -1) windows.splice(windows.indexOf(windowId), 1);
	windows.unshift(windowId);
	storage["windowAge"] = JSON.stringify(windows);

	// browser.windows.getLastFocused({ populate: true }, function (w) {
	// 	for (var i = 0; i < w.tabs.length; i++) {
	// 		var tab = w.tabs[i];
	// 		if (tab.active == true) {
	// 			// console.log("get last focused", tab.id);
	// 			// tabActiveChanged({
	// 			// 	tabId: tab.id,
	// 			// 	windowId: tab.windowId
	// 			// });
	// 		}
	// 	};
	// });
	// console.log(windows);
}

browser.commands.onCommand.addListener(function (command) {
	if (command == "switch_to_previous_active_tab") {
		if (!!windows.tabsActive && windows.tabsActive.length > 1) {
			focusOnTabAndWindow(windows.tabsActive[windows.tabsActive.length - 2]);
		}
	}
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	let settingsObjStore = 'settings';
	// if (request.command === "reload_popup_controls") {
	// 	let ownTabOpt = "openInOwnTab";
	// 	if(ownTabOpt in request.options) {
	// 		let newVal = (request.options[ownTabOpt]);
	// 		console.log(request.command);
	// 		console.log(request.options);
	// 		console.log(`Setting ${ownTabOpt} to new value: ${typeof newVal} ${newVal}`);
	// 		localforage.setItem(ownTabOpt, newVal).then((newVal) => {
	// 			console.log("openInOwnTab updated to: " + newVal);
	// 			setupPopup(newVal);
	// 		}).catch(function(err){
	// 			console.log(err);
	// 		});
	// 	}}
	if (request.from === "readPage"){
		let payload = request.result;
		console.log(payload);
	}
	else if (request.from === "content") {
		// sent the data (hilighted text and url) to the lib/annotation.jsx
		console.log(sender);
		chrome.runtime.sendMessage({
			command: 'sent_annotation',
			highlighted_text: request.result,
			url: sender.url,
		});
	}
	else if (request.command === "update_settings"){
		let settings = request.params
		if (settings.name === "openInOwnTab"){ setupPopup(settings.value); }
		saveItem(settingsObjStore, settings.name, settings.value);

	} else if (request.command === "sync") {
		console.log(request.params);
		let settings = request.params;
		for (const prop in settings){
			// localforage.setItem(key, value);
			saveItem(settingsObjStore, prop, settings[prop]);
		}
	}
});

function saveItem(objectStoreName, key, value){
	localforage.config({
		storeName: objectStoreName
	});
	console.log("flag");
	localforage.setItem(key, value).then((newVal) => {
		console.log(`${key} updated to ${newVal} in Object Store: ${objectStoreName}`);
	}).catch((err) => {
		console.log(err);
	});
}

function getItem(objectStoreName, key){
	localforage.config({
		storeName: objectStoreName
	});
	localforage.getItem(key).then((val) => {
		console.log(`Retrieved ${key}:${val} from ${objectStoreName}`);
	}).catch((err) => {
		console.log(err);
	}
	);
}

// (async function () {
// 	var windows = await browser.windows.getAll({ populate: true });
// 	storage["windowAge"] = JSON.stringify([]);
// 	if (!!windows && windows.length > 0) {
// 		windows.sort(function (a, b) {
// 			if (a.id < b.id) return 1;
// 			if (a.id > b.id) return -1;
// 			return 0;
// 		});
// 		for (var i = 0; i < windows.length; i++) {
// 			if (!!windows[i].id) windowActive(windows[i].id);
// 		};
// 	}
// })();

async function cleanUp() {
	const storage = await browser.storage.sync.get();
	var activewindows = await browser.windows.getAll({ populate: true });
	var windowids = [];
	for(var w of activewindows) {
		windowids.push(w.id);
	}
	// console.log("window ids...", windowids);
	var windows = JSON.parse(storage["windowAge"]);
	if (windows instanceof Array) {

	} else {
		windows = [];
	}
	// console.log("before", JSON.parse(JSON.stringify(windows)));
	for (var i = windows.length - 1; i >= 0; i--) {
		if (windowids.indexOf(windows[i]) < 0) {
			// console.log("did not find", windows[i], i);
			windows.splice(i, 1);
		}
	};
	// console.log("after", JSON.parse(JSON.stringify(windows)));
	storage["windowAge"] = JSON.stringify(windows);

	var names = storage["windowNames"];
	if (!!names) {
		names = JSON.parse(names);
	} else {
		names = {};
	}

	// console.log("before", JSON.parse(JSON.stringify(names)));
	for(var id of Object.keys(names)) {
		if (windowids.indexOf(parseInt(id)) < 0) {
			// console.log("did not find", id);
			delete names[id];
		}
	}
	// console.log("after", JSON.parse(JSON.stringify(names)));
	storage["windowNames"] = JSON.stringify(names);

}

async function openExtension(){
	let openInOwnTab = getItem("settings", 'openInOwnTab');
	let popupStr = openInOwnTab ? "" : "popup.html?popup=true";
	await browser.action.setPopup({popup: popupStr});
	await browser.action.openPopup();
}

// setInterval(setupListeners, 300000);
// setupListeners();
setup();
