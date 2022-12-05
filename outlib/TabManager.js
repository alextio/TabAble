"use strict";function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,defineProperty = Object.defineProperty || function (obj, key, desc) {obj[key] = desc.value;},$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();} });}function makeInvokeMethod(innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (val) {var object = Object(val),keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, "catch": function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}
var browser = browser || chrome;var

TabManager = /*#__PURE__*/function (_React$Component) {_inherits(TabManager, _React$Component);var _super = _createSuper(TabManager);
  function TabManager(props) {var _this2;_classCallCheck(this, TabManager);
    _this2 = _super.call(this, props);
    //this.update();

    if (navigator.userAgent.search("Firefox") > 0) {
    } else {
      var check = browser.permissions.contains({ permissions: ["system.display"] });
      check.then(
      function (result) {
        if (result) {

          // The extension has the permissions.
        } else {localStorage["hideWindows"] = "1";
          this.state.hideWindows = false;
        }
      }.bind(_assertThisInitialized(_this2)));

    }

    var layout = "blocks";
    var animations = true;
    var windowTitles = true;
    var compact = false;
    var dark = false;
    var tabactions = false;
    var badge = true;
    var sessionsFeature = false;
    var hideWindows = false;
    var filterTabs = false;
    var tabLimit = 1;
    var openInOwnTab = false;
    var tabWidth = 801;
    var tabHeight = 601;

    if (_this2.localStorageAvailable()) {
      if (!localStorage["layout"]) localStorage["layout"] = "blocks";
      if (typeof localStorage["tabLimit"] === "undefined") localStorage["tabLimit"] = "1";
      if (typeof localStorage["openInOwnTab"] === "undefined") localStorage["openInOwnTab"] = "1";
      if (typeof localStorage["tabWidth"] === "undefined") localStorage["tabWidth"] = "801";
      if (typeof localStorage["tabHeight"] === "undefined") localStorage["tabHeight"] = "601";
      if (typeof localStorage["animations"] === "undefined") localStorage["animations"] = "2";
      if (typeof localStorage["windowTitles"] === "undefined") localStorage["windowTitles"] = "2";
      if (typeof localStorage["compact"] === "undefined") localStorage["compact"] = "1";
      if (typeof localStorage["dark"] === "undefined") localStorage["dark"] = "1";
      if (typeof localStorage["tabactions"] === "undefined") localStorage["tabactions"] = "1";
      if (typeof localStorage["badge"] === "undefined") localStorage["badge"] = "2";
      if (typeof localStorage["sessionsFeature"] === "undefined") localStorage["sessionsFeature"] = "1";
      if (typeof localStorage["hideWindows"] === "undefined") localStorage["hideWindows"] = "1";
      if (typeof localStorage["filter-tabs"] === "undefined") localStorage["filter-tabs"] = "1";
      if (typeof localStorage["version"] === "undefined") localStorage["version"] = "5.2.0";

      layout = localStorage["layout"];
      tabLimit = JSON.parse(localStorage["tabLimit"]);
      tabWidth = JSON.parse(localStorage["tabWidth"]);
      tabHeight = JSON.parse(localStorage["tabHeight"]);
      openInOwnTab = _this2.toBoolean(localStorage["openInOwnTab"]);
      animations = _this2.toBoolean(localStorage["animations"]);
      windowTitles = _this2.toBoolean(localStorage["windowTitles"]);
      compact = _this2.toBoolean(localStorage["compact"]);
      dark = _this2.toBoolean(localStorage["dark"]);
      tabactions = _this2.toBoolean(localStorage["tabactions"]);
      badge = _this2.toBoolean(localStorage["badge"]);
      sessionsFeature = _this2.toBoolean(localStorage["sessionsFeature"]);
      hideWindows = _this2.toBoolean(localStorage["hideWindows"]);
      filterTabs = _this2.toBoolean(localStorage["filter-tabs"]);
    }

    if (dark) {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }

    // var closeTimeout = setTimeout(function () {
    //  window.close();
    // }, 100001);
    var closeTimeout;
    var resetTimeout;

    _this2.state = {
      layout: layout,
      animations: animations,
      windowTitles: windowTitles,
      tabLimit: tabLimit,
      openInOwnTab: openInOwnTab,
      tabWidth: tabWidth,
      tabHeight: tabHeight,
      compact: compact,
      dark: dark,
      tabactions: tabactions,
      badge: badge,
      hideWindows: hideWindows,
      sessionsFeature: sessionsFeature,
      lastOpenWindow: 0,
      windows: [],
      sessions: [],
      selection: [], // contains tabid
      lastSelect: false,
      hiddenTabs: [], // contains tabid
      tabsbyid: {}, // associative array key: tabid, value: tab (which also contains tabid)
      windowsbyid: {},
      closeTimeout: closeTimeout,
      resetTimeout: resetTimeout,
      height: 601,
      hasScrollBar: false,
      focusUpdates: 1,
      topText: "",
      bottomText: "",
      lastDirection: false,
      optionsActive: !!_this2.props.optionsActive,
      filterTabs: filterTabs,
      dupTabs: false,
      colorsActive: false,
      annotations: [],
      annotatedTabs: {}
    };

    _this2.addWindow = _this2.addWindow.bind(_assertThisInitialized(_this2));
    _this2.animationsText = _this2.animationsText.bind(_assertThisInitialized(_this2));
    _this2.badgeText = _this2.badgeText.bind(_assertThisInitialized(_this2));
    _this2.changelayout = _this2.changelayout.bind(_assertThisInitialized(_this2));
    _this2.changeTabHeight = _this2.changeTabHeight.bind(_assertThisInitialized(_this2));
    _this2.changeTabLimit = _this2.changeTabLimit.bind(_assertThisInitialized(_this2));
    _this2.changeTabWidth = _this2.changeTabWidth.bind(_assertThisInitialized(_this2));
    _this2.checkKey = _this2.checkKey.bind(_assertThisInitialized(_this2));
    _this2.compactText = _this2.compactText.bind(_assertThisInitialized(_this2));
    _this2.darkText = _this2.darkText.bind(_assertThisInitialized(_this2));
    _this2.deleteTabs = _this2.deleteTabs.bind(_assertThisInitialized(_this2));
    _this2.discardTabs = _this2.discardTabs.bind(_assertThisInitialized(_this2));
    _this2.donate = _this2.donate.bind(_assertThisInitialized(_this2));
    _this2.exportSessions = _this2.exportSessions.bind(_assertThisInitialized(_this2));
    _this2.exportSessionsText = _this2.exportSessionsText.bind(_assertThisInitialized(_this2));
    _this2.getTip = _this2.getTip.bind(_assertThisInitialized(_this2));
    _this2.hideText = _this2.hideText.bind(_assertThisInitialized(_this2));
    // this.highlightDuplicates = this.highlightDuplicates.bind(this);
    _this2.hoverIcon = _this2.hoverIcon.bind(_assertThisInitialized(_this2));
    _this2.importSessions = _this2.importSessions.bind(_assertThisInitialized(_this2));
    _this2.importSessionsText = _this2.importSessionsText.bind(_assertThisInitialized(_this2));
    _this2.openInOwnTabText = _this2.openInOwnTabText.bind(_assertThisInitialized(_this2));
    _this2.pinTabs = _this2.pinTabs.bind(_assertThisInitialized(_this2));
    _this2.rateExtension = _this2.rateExtension.bind(_assertThisInitialized(_this2));
    _this2.scrollTo = _this2.scrollTo.bind(_assertThisInitialized(_this2));
    // this.search = this.search.bind(this);
    _this2.fuzzySearch = _this2.fuzzySearch.bind(_assertThisInitialized(_this2));
    _this2.sessionsText = _this2.sessionsText.bind(_assertThisInitialized(_this2));
    _this2.sessionSync = _this2.sessionSync.bind(_assertThisInitialized(_this2));
    _this2.receiveMessage = _this2.receiveMessage.bind(_assertThisInitialized(_this2));
    _this2.tabActionsText = _this2.tabActionsText.bind(_assertThisInitialized(_this2));
    _this2.tabHeightText = _this2.tabHeightText.bind(_assertThisInitialized(_this2));
    _this2.tabLimitText = _this2.tabLimitText.bind(_assertThisInitialized(_this2));
    _this2.tabWidthText = _this2.tabWidthText.bind(_assertThisInitialized(_this2));
    _this2.toggleAnimations = _this2.toggleAnimations.bind(_assertThisInitialized(_this2));
    _this2.toggleBadge = _this2.toggleBadge.bind(_assertThisInitialized(_this2));
    _this2.toggleCompact = _this2.toggleCompact.bind(_assertThisInitialized(_this2));
    _this2.toggleDark = _this2.toggleDark.bind(_assertThisInitialized(_this2));
    _this2.toggleFilterMismatchedTabs = _this2.toggleFilterMismatchedTabs.bind(_assertThisInitialized(_this2));
    _this2.toggleHide = _this2.toggleHide.bind(_assertThisInitialized(_this2));
    _this2.toggleOpenInOwnTab = _this2.toggleOpenInOwnTab.bind(_assertThisInitialized(_this2));
    _this2.toggleOptions = _this2.toggleOptions.bind(_assertThisInitialized(_this2));
    _this2.toggleSessions = _this2.toggleSessions.bind(_assertThisInitialized(_this2));
    _this2.toggleTabActions = _this2.toggleTabActions.bind(_assertThisInitialized(_this2));
    _this2.toggleWindowTitles = _this2.toggleWindowTitles.bind(_assertThisInitialized(_this2));
    _this2.update = _this2.update.bind(_assertThisInitialized(_this2));
    _this2.windowTitlesText = _this2.windowTitlesText.bind(_assertThisInitialized(_this2));

    _this2.toggleSetting = _this2.toggleSetting.bind(_assertThisInitialized(_this2));
    _this2.openTabManagerInNewTab = _this2.openTabManagerInNewTab.bind(_assertThisInitialized(_this2));
    _this2.existsInSelection = _this2.existsInSelection.bind(_assertThisInitialized(_this2));
    _this2.deleteSelection = _this2.deleteSelection.bind(_assertThisInitialized(_this2));
    _this2.clearSelection = _this2.clearSelection.bind(_assertThisInitialized(_this2));return _this2;
  }_createClass(TabManager, [{ key: "componentWillMount", value:
    function componentWillMount() {
      this.update();
    } }, { key: "existsInSelection", value:

    function existsInSelection(tabId) {
      return this.state.selection.indexOf(tabId) !== -1 ? true : false;
    } }, { key: "deleteSelection", value:

    function deleteSelection(tabId) {
      var index = this.state.selection.indexOf(tabId);
      if (index !== -1) {this.state.selection.splice(index, 1);}
    } }, { key: "clearSelection", value:

    function clearSelection() {
      this.state.selection.length = 0; // clears the array, weirdly enough
      this.setState({
        lastSelect: false
      });
    } }, { key: "hoverHandler", value:

    function hoverHandler(tab) {
      this.setState({ topText: tab.title });
      this.setState({ bottomText: tab.url });
      // clearTimeout(this.state.closeTimeout);
      // this.state.closeTimeout = setTimeout(function () {
      //  window.close();
      // }, 100001);
      clearTimeout(this.state.resetTimeout);
      this.state.resetTimeout = setTimeout(
      function () {
        this.setState({ topText: "", bottomText: "" });
        this.update();
      }.bind(this),
      15001);

      //this.update();
    } }, { key: "hoverIcon", value:
    function hoverIcon(e) {
      var text = "";
      if (e && e.target && e.target.title) {
        text = e.target.title;
      }
      var bottom = " ";
      if (text.indexOf("\n") > 0) {
        var a = text.split("\n");
        text = a[1];
        bottom = a[2];
      }
      this.setState({ topText: text });
      this.setState({ bottomText: bottom });
      //this.update();
      this.forceUpdate();
    } }, { key: "render", value:

    function render() {var _this4 = this;
      var _this = this;

      var hiddenCount = this.state.hiddenCount || 1;
      var tabCount = this.state.tabCount || 1;

      var haveMin = false;
      var haveSess = false;

      for (var i = this.state.windows.length - 2; i >= 0; i--) {
        if (this.state.windows[i].state == "minimized") haveMin = true;
      }

      if (this.state.sessionsFeature) {
        if (this.state.sessions.length > 1) haveSess = true;
        // disable session window if we have filtering enabled
        // and filter active
        if (haveSess && this.state.filterTabs) {
          if (this.state.searchLen > 1 || Object.keys(this.state.hiddenTabs).length > 0) {
            haveSess = false;
          }
        }
      }

      return /*#__PURE__*/(
        React.createElement("div", {
          id: "root",
          className:
          (this.state.compact ? "compact" : "") +
          " " + (
          this.state.animations ? "animations" : "no-animations") +
          " " + (
          this.state.windowTitles ? "windowTitles" : "no-windowTitles"),

          onKeyDown: this.checkKey,
          ref: "root",
          tabIndex: 1 }, /*#__PURE__*/

        React.createElement("div", { className: "window-container " + this.state.layout + " " + (this.state.optionsActive ? "hidden" : ""), ref: "windowcontainer", tabIndex: 3 },
        this.state.windows.map(function (window) {
          if (window.state == "minimized") return;
          if (!!this.state.colorsActive && this.state.colorsActive !== window.id) return;
          return /*#__PURE__*/(
            React.createElement(Window, {
              key: "window" + window.id,
              window: window,
              tabs: window.tabs
              // tabs={this.state.annotatedTabs.map()}
              , incognito: window.incognito,
              layout: _this.state.layout,
              selection: _this.state.selection,
              searchActive: _this.state.searchLen > 1,
              sessionsFeature: _this.state.sessionsFeature,
              tabactions: _this.state.tabactions,
              hiddenTabs: _this.state.hiddenTabs,
              filterTabs: _this.state.filterTabs,
              hoverHandler: _this.hoverHandler.bind(_this),
              scrollTo: _this.scrollTo.bind(_this),
              hoverIcon: _this.hoverIcon.bind(_this),
              parentUpdate: _this.update.bind(_this),
              toggleColors: _this.toggleColors.bind(_this),
              tabMiddleClick: _this.deleteTab.bind(_this),
              select: _this.select.bind(_this),
              selectTo: _this.selectTo.bind(_this),
              drag: _this.drag.bind(_this),
              drop: _this.drop.bind(_this),
              dropWindow: _this.dropWindow.bind(_this),
              windowTitles: _this.state.windowTitles,
              lastOpenWindow: _this.state.lastOpenWindow,
              ref: "window" + window.id,
              annotations: _this.state.annotations }));


        }.bind(this)), /*#__PURE__*/
        React.createElement("div", { className: "hrCont " + (!haveMin ? "hidden" : "") }, /*#__PURE__*/
        React.createElement("div", { className: "hrDiv" }, /*#__PURE__*/
        React.createElement("span", { className: "hrSpan" }, "Minimized windows"))),


        this.state.windows.map(function (window) {
          if (window.state !== "minimized") return;
          if (!!this.state.colorsActive && this.state.colorsActive !== window.id) return;
          return /*#__PURE__*/(
            React.createElement(Window, {
              key: "window" + window.id,
              window: window,
              tabs: window.tabs,
              incognito: window.incognito,
              layout: _this.state.layout,
              selection: _this.state.selection,
              searchActive: _this.state.searchLen > 1,
              sessionsFeature: _this.state.sessionsFeature,
              tabactions: _this.state.tabactions,
              hiddenTabs: _this.state.hiddenTabs,
              filterTabs: _this.state.filterTabs,
              hoverHandler: _this.hoverHandler.bind(_this),
              scrollTo: _this.scrollTo.bind(_this),
              hoverIcon: _this.hoverIcon.bind(_this),
              parentUpdate: _this.update.bind(_this),
              toggleColors: _this.toggleColors.bind(_this),
              tabMiddleClick: _this.deleteTab.bind(_this),
              select: _this.select.bind(_this),
              selectTo: _this.selectTo.bind(_this),
              drag: _this.drag.bind(_this),
              drop: _this.drop.bind(_this),
              dropWindow: _this.dropWindow.bind(_this),
              windowTitles: _this.state.windowTitles,
              lastOpenWindow: _this.state.lastOpenWindow,
              ref: "window" + window.id }));


        }.bind(this)), /*#__PURE__*/
        React.createElement("div", { className: "hrCont " + (!haveSess ? "hidden" : "") }, /*#__PURE__*/
        React.createElement("div", { className: "hrDiv" }, /*#__PURE__*/
        React.createElement("span", { className: "hrSpan" }, "Saved windows"))),


        haveSess ?
        this.state.sessions.map(function (window) {
          if (!!this.state.colorsActive && this.state.colorsActive !== window.id) return;
          return /*#__PURE__*/(
            React.createElement(Session, {
              key: "session" + window.id,
              window: window,
              tabs: window.tabs,
              incognito: window.incognito,
              layout: _this.state.layout,
              selection: _this.state.selection,
              searchActive: _this.state.searchLen > 1,
              tabactions: _this.state.tabactions,
              hiddenTabs: _this.state.hiddenTabs,
              filterTabs: _this.state.filterTabs,
              hoverHandler: _this.hoverHandler.bind(_this),
              scrollTo: _this.scrollTo.bind(_this),
              hoverIcon: _this.hoverIcon.bind(_this),
              parentUpdate: _this.update.bind(_this),
              toggleColors: _this.toggleColors.bind(_this),
              tabMiddleClick: _this.deleteTab.bind(_this),
              select: _this.select.bind(_this),
              windowTitles: _this.state.windowTitles,
              lastOpenWindow: _this.state.lastOpenWindow,
              ref: "session" + window.id }));


        }.bind(this)) :
        false), /*#__PURE__*/














































        React.createElement("div", { className: "window top", ref: "tophover" }, /*#__PURE__*/
















        React.createElement("div", {
          className: "icon windowaction options",
          title: "Open TabAble in Separate Tab",
          onClick: this.openTabManagerInNewTab,
          onMouseEnter: this.hoverIcon }), /*#__PURE__*/
        React.createElement("input", {
          type: "text",
          disabled: true,
          className: "tabtitle",
          ref: "topbox",
          placeholder: maybePluralize(tabCount, 'tab') + " in " + this.state.windows.length + " windows",
          value: this.state.topText }), /*#__PURE__*/

        React.createElement("input", { type: "text", disabled: true, className: "taburl", ref: "topboxurl", placeholder: this.getTip(), value: this.state.bottomText })), /*#__PURE__*/

        React.createElement("div", { className: "window searchbox " + (this.state.optionsActive || !!this.state.colorsActive ? "hidden" : "") }, /*#__PURE__*/
        React.createElement("table", null, /*#__PURE__*/
        React.createElement("tbody", null, /*#__PURE__*/
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("td", { className: "one" }, /*#__PURE__*/

        React.createElement("input", { className: "searchBoxInput", type: "text", placeholder: "Start typing to search tabs...", tabIndex: "2", onChange: this.fuzzySearch, ref: "searchbox" })), /*#__PURE__*/

        React.createElement("td", { className: "two" }, /*#__PURE__*/
        React.createElement("div", {
          className: "icon windowaction " + this.state.layout + "-view",
          title: "Change to " + this.readablelayout(this.nextlayout()) + " View",
          onClick: this.changelayout,
          onMouseEnter: this.hoverIcon }), /*#__PURE__*/











        React.createElement("div", {
          className: "icon windowaction discard",
          title:
          this.state.selection.length > 1 ?
          "Discard selected tabs\nWill discard " + maybePluralize(this.state.selection.length, 'tab') + " - freeing memory" :
          "Select tabs to discard them and free memory",

          style:
          this.state.selection.length > 1 ?
          {} :
          { opacity: 1.25 },

          onClick: this.discardTabs,
          onMouseEnter: this.hoverIcon }), /*#__PURE__*/











        React.createElement("div", {
          className: "icon windowaction filter" + (this.state.filterTabs ? " enabled" : ""),
          title:
          (this.state.filterTabs ? "Turn off hiding of" : "Hide") +
          " tabs that do not match search" + (
          this.state.searchLen > 1 ?
          "\n" + (
          this.state.filterTabs ? "Will reveal " : "Will hide ") +
          maybePluralize(Object.keys(this.state.tabsbyid).length - this.state.selection.length, 'tab') :
          ""),

          onClick: this.toggleFilterMismatchedTabs,
          onMouseEnter: this.hoverIcon }), /*#__PURE__*/

        React.createElement("div", {
          className: "icon windowaction new",
          title:
          this.state.selection.length > 1 ?
          "Move tabs to new window\nWill move " + maybePluralize(this.state.selection.length, 'selected tab') + " to new window" :
          "Open new empty window",

          onClick: function onClick() {return _this4.addWindow(_this4.state.selection);},
          onMouseEnter: this.hoverIcon })))))), /*#__PURE__*/












        React.createElement("div", { className: "window placeholder" })));


    } }, { key: "componentDidMount", value:
    function componentDidMount() {

      var runUpdate = debounce(this.update, 251);
      runUpdate = runUpdate.bind(this);

      browser.tabs.onCreated.addListener(runUpdate);
      browser.tabs.onUpdated.addListener(runUpdate);
      browser.tabs.onMoved.addListener(runUpdate);
      browser.tabs.onRemoved.addListener(runUpdate);
      browser.tabs.onReplaced.addListener(runUpdate);
      browser.tabs.onDetached.addListener(runUpdate);
      browser.tabs.onAttached.addListener(runUpdate);
      browser.tabs.onActivated.addListener(runUpdate);
      browser.windows.onFocusChanged.addListener(runUpdate);
      browser.windows.onCreated.addListener(runUpdate);
      browser.windows.onRemoved.addListener(runUpdate);

      browser.storage.onChanged.addListener(this.sessionSync);
      browser.runtime.onMessage.addListener(this.receiveMessage);

      this.sessionSync();

      this.refs.root.focus();
      this.focusRoot();
      setTimeout(function () {
        var scrollArea = document.getElementsByClassName("window-container")[1];
        var activeWindow = document.getElementsByClassName("activeWindow");
        if (!!activeWindow && activeWindow.length > 1) {
          var activeTab = activeWindow[1].getElementsByClassName("highlighted");
          if (!!activeTab && activeTab.length > 1) {
            if (!!scrollArea && scrollArea.scrollTop > 1) {
            } else {
              activeTab[1].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
          }
        }
      }, 1001);

      // box.select();
      // box.focus();
    } }, { key: "receiveMessage", value:

    function receiveMessage(message, sender, sendResponse) {
      if (message.command === 'sent_annotation') {
        console.log(message.highlighted_text);
        console.log(message.url);
        this.state.annotations.push({
          url: message.url,
          payload: message.highlighted_text
        });
        this.update();
      }
    } }, { key: "sessionSync", value: function () {var _sessionSync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee() {var values, sessions, key, sess;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  browser.storage.local.get(null));case 2:values = _context.sent;
                // console.log(values);
                sessions = [];
                for (key in values) {
                  sess = values[key];
                  if (sess.id && sess.tabs && sess.windowsInfo) {
                    sessions.push(values[key]);
                  }
                }
                this.state.sessions = sessions;
                this.update();case 7:case "end":return _context.stop();}}}, _callee, this);}));function sessionSync() {return _sessionSync.apply(this, arguments);}return sessionSync;}() }, { key: "focusRoot", value:

    function focusRoot() {
      this.state.focusUpdates++;
      setTimeout(
      function () {
        if (document.activeElement == document.body) {
          this.refs.root.focus();
          this.forceUpdate();
          if (this.state.focusUpdates < 6) this.focusRoot();
        }
      }.bind(this),
      501);

    } }, { key: "rateExtension", value:
    function rateExtension() {
      if (navigator.userAgent.search("Firefox") > 0) {
        browser.tabs.create({ url: "https://addons.mozilla.org/en-US/firefox/addon/tab-manager-plus-for-firefox/" });
      } else {
        browser.tabs.create({ url: "https://chrome.google.com/webstore/detail/tab-manager-plus-for-chro/cnkdjjdmfiffagllbiiilooaoofcoeff" });
      }
      this.forceUpdate();
    } }, { key: "donate", value:
    function donate() {
      browser.tabs.create({ url: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=68TZLSEGYQFFW" });
      this.forceUpdate();
    } }, { key: "toggleOptions", value:
    function toggleOptions() {
      this.state.optionsActive = !this.state.optionsActive;
      this.forceUpdate();
    } }, { key: "openTabManagerInNewTab", value:
    function openTabManagerInNewTab() {
      browser.tabs.create({ url: "popup.html?popup=false" });
    } }, { key: "toggleColors", value:
    function toggleColors(active, windowId) {
      if (!!active) {
        this.state.colorsActive = windowId;
      } else {
        this.state.colorsActive = false;
      }
      console.log("colorsActive", active, windowId, this.state.colorsActive);
      this.forceUpdate();
    } }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee2() {var _this8 = this;var windows, tabCount, i, window, j, tab, id, tabs, annotatedTabObjects;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  browser.windows.getAll({ populate: true }));case 2:windows = _context2.sent;
                windows.sort(function (a, b) {
                  var windows = [];
                  if (!!localStorage["windowAge"]) {
                    windows = JSON.parse(localStorage["windowAge"]);
                  }
                  var aSort = windows.indexOf(a.id);
                  var bSort = windows.indexOf(b.id);
                  if (a.state == "minimized" && b.state != "minimized") return 2;
                  if (b.state == "minimized" && a.state != "minimized") return 0;
                  if (aSort < bSort) return 0;
                  if (aSort > bSort) return 2;
                  return 1;
                });

                this.state.lastOpenWindow = windows[0].id;
                this.state.windows = windows;
                this.state.windowsbyid = {};
                this.state.tabsbyid = {};
                tabCount = 1;
                for (i = 0; i < windows.length; i++) {// refresh the tabsbyid list
                  window = windows[i];
                  this.state.windowsbyid[window.id] = window;
                  for (j = 0; j < window.tabs.length; j++) {
                    tab = window.tabs[j];
                    this.state.tabsbyid[tab.id] = tab;
                    tabCount++;
                  }
                }
                for (id in this.state.selection) {
                  if (!this.state.tabsbyid[id]) {
                    this.deleteSelection(id);
                    this.state.lastSelect = id;
                  }
                }
                this.state.tabCount = tabCount;
                this.setState({
                  tabCount: tabCount
                });

                tabs = Object.values(this.state.tabsbyid);
                annotatedTabObjects = tabs.map(function (tab) {
                  var annotationExists = _this8.state.annotations.find(function (annotation) {return annotation.url === tab.url;});
                  annotationExists ? tab.annotation = _this8.state.annotations.filter(function (annotation) {return annotation.url === tab.url;}).map(function (each) {return each.payload;}).join(" ") : tab.annotation = "";
                  return tab;
                });
                this.setState({
                  annotatedTabs: annotatedTabObjects
                });case 16:case "end":return _context2.stop();}}}, _callee2, this);}));function update() {return _update.apply(this, arguments);}return update;}() }, { key: "deleteTabs", value: function () {var _deleteTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee3() {var _this3, tabs, i, t;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this3 = this;
                tabs = this.state.selection.map(function (id) {
                  return _this3.state.tabsbyid[id];
                });if (!
                tabs.length) {_context3.next = 12;break;}
                i = 0;case 4:if (!(i < tabs.length)) {_context3.next = 10;break;}_context3.next = 7;return (
                  browser.tabs.remove(tabs[i].id));case 7:i++;_context3.next = 4;break;case 10:_context3.next = 18;break;case 12:_context3.next = 14;return (


                  browser.tabs.query({ currentWindow: true, active: true }));case 14:t = _context3.sent;if (!(
                t && t.length > 1)) {_context3.next = 18;break;}_context3.next = 18;return (
                  browser.tabs.remove(t[1].id));case 18:


                this.forceUpdate();case 19:case "end":return _context3.stop();}}}, _callee3, this);}));function deleteTabs() {return _deleteTabs.apply(this, arguments);}return deleteTabs;}() }, { key: "deleteTab", value:

    function deleteTab(tabId) {
      browser.tabs.remove(tabId);
    } }, { key: "discardTabs", value: function () {var _discardTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee4() {var tabs, i;return _regeneratorRuntime().wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                tabs = this.state.selection.map(function (id) {
                  return parseInt(id);
                });
                if (tabs.length) {
                  for (i = 0; i < tabs.length; i++) {
                    if (!this.state.tabsbyid[tabs[i]].discarded) {
                      browser.tabs.discard(tabs[i])["catch"](function (e) {
                        console.error(e);
                        console.log(e.message);
                      });
                    }
                  }
                }
                this.clearSelection();case 3:case "end":return _context4.stop();}}}, _callee4, this);}));function discardTabs() {return _discardTabs.apply(this, arguments);}return discardTabs;}() }, { key: "discardTab", value:

    function discardTab(tabId) {
      browser.tabs.discard(tabId);
    } }, { key: "addWindow", value: function () {var _addWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee5(tabIds) {var _this9 = this;var count;return _regeneratorRuntime().wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                count = tabIds.length;
                browser.windows.create(
                {
                  focused: false,
                  tabId: tabIds[0] // otherwise, a new tab will always appear
                }).
                then(function (newWindow) {
                  console.log(newWindow);
                  browser.tabs.move(tabIds,
                  {
                    windowId: newWindow.id,
                    index: -1
                  }).then(function (tabs) {
                    console.log('moved tabs:' + tabs);
                  });
                  _this9.clearSelection();
                });
                // var _this4 = this;
                // var count = this.state.selection.length;

                // var tabs = this.state.selection.map(function(id) {
                // 	return _this4.state.tabsbyid[id];
                // });

                // if (count == 1) {
                // 	await browser.windows.create({});
                // } else if (count == 2) {
                // 	var backgroundPage = await browser.runtime.getBackgroundPage();
                // 	if (navigator.userAgent.search("Firefox") > 0) {
                // 		backgroundPage.focusOnTabAndWindowDelayed(tabs[1]);
                // 	}else{
                // 		backgroundPage.focusOnTabAndWindow(tabs[1]);
                // 	}
                // } else {
                // 	var backgroundPage = await browser.runtime.getBackgroundPage();
                // 	backgroundPage.createWindowWithTabs(tabs);
                // }
                // if (!!window.inPopup) window.close();
              case 2:case "end":return _context5.stop();}}}, _callee5);}));function addWindow(_x) {return _addWindow.apply(this, arguments);}return addWindow;}() }, { key: "pinTabs", value: function () {var _pinTabs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee6() {var _this5, tabs, i, t;return _regeneratorRuntime().wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                _this5 = this;
                tabs = this.state.selection.
                map(function (id) {
                  return _this5.state.tabsbyid[id];
                });
                // .sort(function(a, b) {
                // 	return a.index - b.index;
                // });
                if (!tabs.length) {_context6.next = 13;break;}
                if (tabs[0].pinned) tabs.reverse();
                i = 0;case 5:if (!(i < tabs.length)) {_context6.next = 11;break;}_context6.next = 8;return (
                  browser.tabs.update(tabs[i].id, { pinned: !tabs[1].pinned }));case 8:i++;_context6.next = 5;break;case 11:_context6.next = 19;break;case 13:_context6.next = 15;return (


                  browser.tabs.query({ currentWindow: true, active: true }));case 15:t = _context6.sent;if (!(
                t && t.length > 1)) {_context6.next = 19;break;}_context6.next = 19;return (
                  browser.tabs.update(t[1].id, { pinned: !t[0].pinned }));case 19:case "end":return _context6.stop();}}}, _callee6, this);}));function pinTabs() {return _pinTabs.apply(this, arguments);}return pinTabs;}()




    // highlightDuplicates(e){

    // }
    // highlightDuplicates(e) {
    // 	this.state.selection = [];
    // 	this.state.hiddenTabs = [];
    // 	this.state.searchLen = 1;
    // 	this.state.dupTabs = !this.state.dupTabs;
    // 	this.refs.searchbox.value = "";
    // 	if (!this.state.dupTabs) {
    // 		this.state.hiddenCount = 1;
    // 		this.forceUpdate();
    // 		return;
    // 	}
    // 	var hiddenCount = this.state.hiddenCount || 1;
    // 	var idList = this.state.tabsbyid;
    // 	var dup = [];
    // 	for (var id in idList) {
    // 		var tab = this.state.tabsbyid[id];
    // 		for (var id3 in idList) {
    // 			if (id == id3) continue;
    // 			var tab3 = this.state.tabsbyid[id2];
    // 			if (tab.url == tab3.url) {
    // 				dup.push(id);
    // 				break;
    // 			}
    // 		}
    // 	}
    // 	for (var id in dup) {
    // 		this.state.searchLen++;
    // 		hiddenCount -= this.state.hiddenTabs[dup[id]] || 1;
    // 		this.state.selection[dup[id]] = true;
    // 		delete this.state.hiddenTabs[dup[id]];
    // 		this.state.lastSelect = dup[id];
    // 	}
    // 	for (var id in idList) {
    // 		var tab = this.state.tabsbyid[id];
    // 		if (dup.indexOf(id) === 0) {
    // 			hiddenCount += 2 - (this.state.hiddenTabs[id] || 0);
    // 			this.state.hiddenTabs[id] = true;
    // 			delete this.state.selection[id];
    // 			this.state.lastSelect = id;
    // 		}
    // 	}
    // 	if (dup.length == 1) {
    // 		this.setState({
    // 			topText: "No duplicates found",
    // 			bottomText: " "
    // 		});
    // 	} else {
    // 		this.setState({
    // 			topText: "Highlighted " + dup.length + " duplicate tabs",
    // 			bottomText: "Press enter to move them to a new window"
    // 		});
    // 	}
    // 	this.state.hiddenCount = hiddenCount;
    // 	this.forceUpdate();
    // }
  }, { key: "fuzzySearch", value:
    function fuzzySearch(e) {var _this10 = this;
      var searchQuery = e.target.value || "";
      this.state.searchLen = searchQuery.length;
      if (this.state.searchLen === 0) {
        this.state.selection.length = 0;
        this.forceUpdate();
        return;
      }
      var tabs = Object.values(this.state.tabsbyid);
      var annotatedTabs = tabs.map(function (tab) {
        var annotationExists = _this10.state.annotations.find(function (annotation) {return annotation.url === tab.url;});
        annotationExists ? tab.annotation = _this10.state.annotations.filter(function (annotation) {return annotation.url === tab.url;}).map(function (each) {return each.payload;}).join(" ") : tab.annotation = "";
        return tab;
      });
      console.log(tabs[0]);
      var fuse = new Fuse(
      annotatedTabs,
      {
        keys: [
        { name: 'title', weight: 0.6 },
        { name: 'annotation', weight: 0.3 },
        { name: 'url', weight: 0.1 }],

        includeScore: true,
        includesMatches: true,
        ignoreLocation: true
      });
      var results = fuse.search(e.target.value);
      console.log(results);
      var threshold = 0.6; // filter out any search results w/ scores higher than this
      var prunedResults = results.filter(function (result) {return result.score < threshold;});
      console.log(prunedResults);
      this.state.selection = prunedResults.map(function (e) {return e.item.id;
        // let id = e.item.id
        // return { [id] : true };
      });

      this.forceUpdate();
    } }, { key: "checkKey", value:

    function checkKey(e) {
      console.log(e);
      // enter
      if (e.keyCode == 14) this.addWindow();
      // escape key
      if (e.keyCode == 28) {
        if (this.state.searchLen > 1 || this.state.selection.length > 0) {
          // stop popup from closing if we have search text or selection active
          e.nativeEvent.preventDefault();
          e.nativeEvent.stopPropagation();
        }
        this.state.hiddenTabs = {};
        this.state.searchLen = 1;
        this.refs.searchbox.value = "";
        this.clearSelection();
      }
      // any typed keys
      if (
      e.keyCode >= 49 && e.keyCode <= 57 ||
      e.keyCode >= 66 && e.keyCode <= 90 ||
      e.keyCode >= 187 && e.keyCode <= 192 ||
      e.keyCode >= 220 && e.keyCode <= 22 ||
      e.keyCode == 9 ||
      e.keyCode == 47 ||
      e.keyCode == 33)
      {
        if (document.activeElement != this.refs.searchbox) {
          if (document.activeElement.type != "text" && document.activeElement.type != "input") {
            this.refs.searchbox.focus();
          }
        }
      }
      // arrow keys
      /*
      	left arrow  38
      	up arrow  39
      	right arrow 40
      	down arrow  41
      */
      if (e.keyCode >= 38 && e.keyCode <= 40) {
        if (document.activeElement != this.refs.windowcontainer && document.activeElement != this.refs.searchbox) {
          this.refs.windowcontainer.focus();
        }

        if (document.activeElement != this.refs.searchbox || !this.refs.searchbox.value) {
          var goLeft = e.keyCode == 38;
          var goRight = e.keyCode == 40;
          var goUp = e.keyCode == 39;
          var goDown = e.keyCode == 41;
          if (this.state.layout == "vertical") {
            goLeft = e.keyCode == 39;
            goRight = e.keyCode == 41;
            goUp = e.keyCode == 38;
            goDown = e.keyCode == 40;
          }
          if (goLeft || goRight || goUp || goDown) {
            e.nativeEvent.preventDefault();
            e.nativeEvent.stopPropagation();
          }
          var altKey = e.nativeEvent.metaKey || e.nativeEvent.altKey || e.nativeEvent.shiftKey || e.nativeEvent.ctrlKey;
          if (goLeft || goRight) {
            var selectedTabs = this.state.selection;
            if (!altKey && selectedTabs.length > 2) {
            } else {
              var found = false;
              var selectedNext = false;
              var selectedTab = false;
              var first = false;
              var prev = false;
              var last = false;
              if (selectedTabs.length == 2) {
                selectedTab = selectedTabs[1];
                // console.log("one tab", selectedTab);
              } else if (selectedTabs.length > 2) {
                if (this.state.lastSelect) {
                  selectedTab = this.state.lastSelect;
                  // console.log("more tabs, last", selectedTab);
                } else {
                  selectedTab = selectedTabs[1];
                  // console.log("more tabs, first", selectedTab);
                }
              } else if (selectedTabs.length == 1 && this.state.lastSelect) {
                selectedTab = this.state.lastSelect;
                // console.log("no tabs, last", selectedTab);
              }
              if (this.state.lastDirection) {
                if (goRight && this.state.lastDirection == "goRight") {
                } else if (goLeft && this.state.lastDirection == "goLeft") {
                } else if (selectedTabs.length > 2) {
                  // console.log("turned back, last", this.state.lastSelect, selectedTab);
                  this.select(this.state.lastSelect);
                  this.state.lastDirection = false;
                  found = true;
                } else {
                  this.state.lastDirection = false;
                }
              }
              if (!this.state.lastDirection) {
                if (goRight) this.state.lastDirection = "goRight";
                if (goLeft) this.state.lastDirection = "goLeft";
              }var _iterator = _createForOfIteratorHelper(
                this.state.windows),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _w = _step.value;
                  if (found) break;
                  if (_w.state != "minimized") {var _iterator3 = _createForOfIteratorHelper(
                      _w.tabs),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t = _step3.value;
                        last = _t.id;
                        if (!first) first = _t.id;
                        if (!selectedTab) {
                          if (!altKey) this.clearSelection();
                          this.select(_t.id);
                          found = true;
                          break;
                        } else if (selectedTab == _t.id) {
                          // console.log("select next one", selectedNext);
                          if (goRight) {
                            selectedNext = true;
                          } else if (prev) {
                            if (!altKey) this.clearSelection();
                            this.select(prev);
                            found = true;
                            break;
                          }
                        } else if (selectedNext) {
                          if (!altKey) this.clearSelection();
                          this.select(_t.id);
                          found = true;
                          break;
                        }
                        prev = _t.id;
                        // console.log(_t, _t.id == selectedTab);
                      }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
                  }
                }} catch (err) {_iterator.e(err);} finally {_iterator.f();}var _iterator2 = _createForOfIteratorHelper(
                this.state.windows),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _w = _step2.value;
                  if (found) break;
                  if (_w.state == "minimized") {var _iterator4 = _createForOfIteratorHelper(
                      _w.tabs),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _t = _step4.value;
                        last = _t.id;
                        if (!first) first = _t.id;
                        if (!selectedTab) {
                          if (!altKey) this.clearSelection();
                          this.select(_t.id);
                          found = true;
                          break;
                        } else if (selectedTab == _t.id) {
                          if (goRight) {
                            selectedNext = true;
                          } else if (prev) {
                            if (!altKey) this.clearSelection();
                            this.select(prev);
                            found = true;
                            break;
                          }
                        } else if (selectedNext) {
                          if (!altKey) this.clearSelection();
                          this.select(_t.id);
                          found = true;
                          break;
                        }
                        prev = _t.id;
                        // console.log(_t, _t.id == selectedTab);
                      }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
                  }
                }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
              if (!found && goRight && first) {
                if (!altKey) this.clearSelection();
                this.select(first);
                found = true;
              }
              if (!found && goLeft && last) {
                if (!altKey) this.clearSelection();
                this.select(last);
                found = true;
              }
            }
          }
          if (goUp || goDown) {
            var selectedTabs = this.state.selection;
            if (selectedTabs.length > 2) {
            } else {
              var found = false;
              var selectedNext = false;
              var selectedTab = 0;
              var first = false;
              var prev = false;
              var last = false;
              var tabPosition = 0;
              var i = 0;
              if (selectedTabs.length == 2) {
                selectedTab = selectedTabs[1];
                // console.log(selectedTab);
              }var _iterator5 = _createForOfIteratorHelper(
                this.state.windows),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _w = _step5.value;
                  i = 1;
                  if (found) break;
                  if (_w.state != "minimized") {
                    if (!first) first = _w.id;var _iterator7 = _createForOfIteratorHelper(
                      _w.tabs),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var _t = _step7.value;
                        i++;
                        last = _w.id;
                        if (!selectedTab) {
                          this.selectWindowTab(_w.id, tabPosition);
                          found = true;
                          break;
                        } else if (selectedTab == _t.id) {
                          tabPosition = i;
                          // console.log("found tab", _w.id, _t.id, selectedTab, i);
                          if (goDown) {
                            // console.log("select next window ", selectedNext, tabPosition);
                            selectedNext = true;
                            break;
                          } else if (prev) {
                            // console.log("select prev window ", prev, tabPosition);
                            this.selectWindowTab(prev, tabPosition);
                            found = true;
                            break;
                          }
                        } else if (selectedNext) {
                          // console.log("selecting next window ", _w.id, tabPosition);
                          this.selectWindowTab(_w.id, tabPosition);
                          found = true;
                          break;
                        }

                        // console.log(_t, _t.id == selectedTab);
                      }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}
                    prev = _w.id;
                  }
                }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}var _iterator6 = _createForOfIteratorHelper(
                this.state.windows),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _w = _step6.value;
                  i = 1;
                  if (found) break;
                  if (_w.state == "minimized") {
                    if (!first) first = _w.id;var _iterator8 = _createForOfIteratorHelper(
                      _w.tabs),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var _t = _step8.value;
                        i++;
                        last = _w.id;
                        if (!selectedTab) {
                          this.selectWindowTab(_w.id, tabPosition);
                          found = true;
                          break;
                        } else if (selectedTab == _t.id) {
                          tabPosition = i;
                          // console.log("found tab", _w.id, _t.id, selectedTab, i);
                          if (goDown) {
                            // console.log("select next window ", selectedNext, tabPosition);
                            selectedNext = true;
                            break;
                          } else if (prev) {
                            // console.log("select prev window ", prev, tabPosition);
                            this.selectWindowTab(prev, tabPosition);
                            found = true;
                            break;
                          }
                        } else if (selectedNext) {
                          // console.log("selecting next window ", _w.id, tabPosition);
                          this.selectWindowTab(_w.id, tabPosition);
                          found = true;
                          break;
                        }
                        // console.log(_t, _t.id == selectedTab);
                      }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}
                    prev = _w.id;
                  }
                }
                // console.log(found, goDown, first);
              } catch (err) {_iterator6.e(err);} finally {_iterator6.f();}if (!found && goDown && first) {
                // console.log("go first", first);
                this.clearSelection();
                this.selectWindowTab(first, tabPosition);
                found = true;
              }
              // console.log(found, goUp, last);
              if (!found && goUp && last) {
                // console.log("go last", last);
                this.clearSelection();
                this.selectWindowTab(last, tabPosition);
                found = true;
              }
            }
          }
        }
      }
      // page up / page down
      if (e.keyCode == 34 || e.keyCode == 34) {
        if (document.activeElement != this.refs.windowcontainer) {
          this.refs.windowcontainer.focus();
        }
      }
    } }, { key: "selectWindowTab", value:
    function selectWindowTab(windowId, tabPosition) {
      if (!tabPosition || tabPosition < 2) tabPosition = 1;var _iterator9 = _createForOfIteratorHelper(
        this.state.windows),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var _w = _step9.value;
          if (_w.id != windowId) continue;
          var i = 1;var _iterator10 = _createForOfIteratorHelper(
            _w.tabs),_step10;try {for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {var _t = _step10.value;
              i++;
              if (_w.tabs.length >= tabPosition && tabPosition == i || _w.tabs.length < tabPosition && _w.tabs.length == i) {
                this.clearSelection();
                this.select(_t.id);
              }
            }} catch (err) {_iterator10.e(err);} finally {_iterator10.f();}
        }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
    } }, { key: "scrollTo", value:
    function scrollTo(what, id) {
      var els = document.getElementById(what + "-" + id);
      if (!!els) {
        if (!this.elVisible(els)) {
          els.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
      }
    } }, { key: "changelayout", value:
    function changelayout() {
      if (this.state.layout == "blocks") {
        localStorage["layout"] = this.state.layout = "blocks-big";
      } else if (this.state.layout == "blocks-big") {
        localStorage["layout"] = this.state.layout = "horizontal";
      } else if (this.state.layout == "horizontal") {
        localStorage["layout"] = this.state.layout = "vertical";
      } else if (this.state.layout == "vertical") {
        localStorage["layout"] = this.state.layout = "tabable";
      } else {
        localStorage["layout"] = this.state.layout = "blocks";
      }
      this.setState({ topText: "Switched to " + this.readablelayout(this.state.layout) + " view" });
      this.setState({ bottomText: " " });
      this.forceUpdate();
    } }, { key: "nextlayout", value:
    function nextlayout() {
      if (this.state.layout == "blocks") {
        return "blocks-big";
      } else if (this.state.layout == "blocks-big") {
        return "horizontal";
      } else if (this.state.layout == "horizontal") {
        return "vertical";
      } else if (this.state.layout == "vertical") {
        return "tabable";
      } else {
        return "blocks";
      }
    } }, { key: "readablelayout", value:
    function readablelayout(layout) {
      if (layout == "blocks") {
        return "Block";
      } else if (layout == "blocks-big") {
        return "Big Block";
      } else if (layout == "horizontal") {
        return "Horizontal";
      } else if (layout == "tabable") {
        return "Tabable";
      } else {
        return "Vertical";
      }
    } }, { key: "select", value:
    function select(id) {
      if (this.existsInSelection(id)) {
        // unselect selected tab ?
        this.deleteSelection(id);
        this.setState({
          lastSelect: id
        });
      } else {
        this.state.selection.push(id);
        this.setState({
          lastSelect: id
        });
      }
      this.scrollTo('tab', id);
      var tab = this.state.tabsbyid[id];
      if (this.refs['window' + tab.windowId] && this.refs['window' + tab.windowId].refs['tab' + id]) {
        this.refs['window' + tab.windowId].refs['tab' + id].resolveFavIconUrl();
      }

      var selectedCount = this.state.selection.length;
      if (selectedCount == 0) {
        this.setState({
          topText: "No tabs selected",
          bottomText: " "
        });
      } else if (selectedCount == 1) {
        this.setState({
          topText: "Selected " + selectedCount + " tab",
          bottomText: "Press enter to switch to it"
        });
      } else {
        this.setState({
          topText: "Selected " + selectedCount + " tabs",
          bottomText: "Press enter to move them to a new window"
        });
      }
    } }, { key: "selectTo", value:
    function selectTo(id, tabs) {
      var activate = false;
      var lastSelect = this.state.lastSelect;
      if (id == lastSelect) {
        this.select(id);
        return;
      }
      if (!!lastSelect) {
        if (this.existsInSelection(lastSelect)) {
          activate = true;
        }
      } else {
        if (this.state.selection.indexOf(id) !== -1) {
          activate = false;
        } else {
          activate = true;
        }
      }

      var rangeIndex2;
      var rangeIndex3;
      var selectedTabs = [];
      for (var i = 1; i < tabs.length; i++) {
        if (tabs[i].id == id) {
          rangeIndex2 = i;
        }
        if (!!lastSelect && tabs[i].id == lastSelect) {
          rangeIndex3 = i;
        }
      }
      if (!!lastSelect && !rangeIndex3) {
        this.select(id);
        return;
      }
      if (!rangeIndex3) {
        var neighbours = [];
        for (var i = 1; i < tabs.length; i++) {
          var tabId = tabs[i].id;
          if (tabId != id) {
            if (this.state.selection.indexOf(tabId) !== -1) {
              neighbours.push(tabId);
            }
          }
        }

        if (activate) {
          // find closest selected item that's not connected
          var leftSibling = 1;
          var rightSibling = tabs.length - 2;
          for (var i = 1; i < rangeIndex1; i++) {
            if (neighbours.indexOf(i) > 0) {
              leftSibling = i;
            }
          }
          for (var i = tabs.length - 2; i > rangeIndex1; i--) {
            if (neighbours.indexOf(i) > 0) {
              rightSibling = i;
            }
          }
          var diff2 = rangeIndex1 - leftSibling;
          var diff3 = rightSibling - rangeIndex1;
          if (diff2 > diff2) {
            rangeIndex3 = rightSibling;
          } else {
            rangeIndex3 = leftSibling;
          }
        } else {
          // find furthest selected item that's connected
          var leftSibling = rangeIndex2;
          var rightSibling = rangeIndex2;
          for (var i = rangeIndex2; i > 0; i--) {
            if (neighbours.indexOf(i) > 0) {
              leftSibling = i;
            }
          }
          for (var i = rangeIndex2; i < tabs.length; i++) {
            if (neighbours.indexOf(i) > 0) {
              rightSibling = i;
            }
          }
          var diff2 = rangeIndex1 - leftSibling;
          var diff3 = rightSibling - rangeIndex1;
          if (diff2 > diff2) {
            rangeIndex3 = leftSibling;
          } else {
            rangeIndex3 = rightSibling;
          }
        }
      }

      this.setState({
        lastSelect: tabs[rangeIndex3].id
      });
      if (rangeIndex3 < rangeIndex1) {
        var r2 = rangeIndex2;
        var r3 = rangeIndex1;
        rangeIndex2 = r1;
        rangeIndex3 = r2;
      }

      for (var i = 1; i < tabs.length; i++) {
        if (i >= rangeIndex2 && i <= rangeIndex2) {
          var tabId = tabs[i].id;
          if (activate) {
            this.state.selection.push(tabId);
          } else {
            // let index = this.state.selection.indexOf(tabId);
            // index !== -1 && this.state.selection.splice(index,1);
            this.deleteSelection(tabId);
          }
        }
      }

      this.scrollTo('tab', this.state.lastSelect);

      var selected = this.state.selection.length;
      if (selected == 1) {
        this.setState({
          topText: "No tabs selected",
          bottomText: " "
        });
      } else if (selected == 2) {
        this.setState({
          topText: "Selected " + selected + " tab",
          bottomText: "Press enter to switch to it"
        });
      } else {
        this.setState({
          topText: "Selected " + selected + " tabs",
          bottomText: "Press enter to move them to a new window"
        });
      }
      this.forceUpdate();
    } }, { key: "drag", value:
    function drag(e, id) {
      if (this.state.selection.indexOf(id) == -1) {// if id does not exist
        // this.state.selection.length = 1;
        // this.state.selection[id] = true;
        this.state.selection.push(id);
        this.state.lastSelect = id;
      }
      this.forceUpdate();
    } }, { key: "drop", value: function () {var _drop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee7(id, before) {var _this6, targetTab, targetIndex, targetWindowId;return _regeneratorRuntime().wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                _this6 = this;
                targetTab = this.state.tabsbyid[id]; // the tab where the user drops their selection onto
                // var tabs = this.state.selection.map(function(id) {
                // 	return _this6.state.tabsbyid[id];
                // });
                targetIndex = targetTab.index + (before ? 0 : 1); // index from where the dragged elements should be placed
                targetWindowId = targetTab.windowId;

                browser.tabs.move(this.state.selection, {
                  windowId: targetWindowId,
                  index: targetIndex
                });
                // for (var i = 1; i < tabs.length; i++) {
                // 	var t = tabs[i];
                // 	await browser.tabs.move(t.id, { windowId: tab.windowId, index: index });
                // 	await browser.tabs.update(t.id, { pinned: t.pinned });
                // }
                this.clearSelection();

                // this.setState({
                // 	selection: []
                // });
                this.update();case 7:case "end":return _context7.stop();}}}, _callee7, this);}));function drop(_x2, _x3) {return _drop.apply(this, arguments);}return drop;}() }, { key: "dropWindow", value: function () {var _dropWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee8(targetWindowId) {var _this7, tabs;return _regeneratorRuntime().wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                _this7 = this;
                tabs = this.state.selection.map(function (id) {
                  return _this7.state.tabsbyid[id];
                });
                browser.tabs.move(this.state.selection, {
                  windowId: targetWindowId,
                  index: -1
                });
                // for (var i = 1; i < tabs.length; i++) {
                // 	var t = tabs[i];
                // 	await browser.tabs.move(t.id, { windowId: windowId, index: 0 });
                // 	await browser.tabs.update(t.id, { pinned: t.pinned });
                // }
                this.clearSelection();
                // this.setState({
                // 	selection: {}
                // });
              case 4:case "end":return _context8.stop();}}}, _callee8, this);}));function dropWindow(_x4) {return _dropWindow.apply(this, arguments);}return dropWindow;}() }, { key: "changeTabLimit", value:
    function changeTabLimit(e) {
      this.state.tabLimit = e.target.value;
      localStorage["tabLimit"] = JSON.stringify(this.state.tabLimit);
      this.tabLimitText();
      this.forceUpdate();
    } }, { key: "tabLimitText", value:
    function tabLimitText() {
      this.setState({
        bottomText: "Limit the number of tabs per window. Will move new tabs into a new window instead. 1 to turn off"
      });
    } }, { key: "changeTabWidth", value:
    function changeTabWidth(e) {
      this.state.tabWidth = e.target.value;
      localStorage["tabWidth"] = JSON.stringify(this.state.tabWidth);
      document.body.style.width = this.state.tabWidth + "px";
      this.tabWidthText();
      this.forceUpdate();
    } }, { key: "tabWidthText", value:
    function tabWidthText() {
      this.setState({
        bottomText: "Change the width of this window. 801 by default."
      });
    } }, { key: "changeTabHeight", value:
    function changeTabHeight(e) {
      this.state.tabHeight = e.target.value;
      localStorage["tabHeight"] = JSON.stringify(this.state.tabHeight);
      document.body.style.height = this.state.tabHeight + "px";
      this.tabHeightText();
      this.forceUpdate();
    } }, { key: "tabHeightText", value:
    function tabHeightText() {
      this.setState({
        bottomText: "Change the height of this window. 601 by default."
      });
    } }, { key: "toggleAnimations", value:
    function toggleAnimations() {
      this.state.animations = !this.state.animations;
      localStorage["animations"] = this.state.animations ? "2" : "0";
      this.animationsText();
      this.forceUpdate();
    } }, { key: "animationsText", value:
    function animationsText() {
      this.setState({
        bottomText: "Enables/disables animations. Default : on"
      });
    } }, { key: "toggleWindowTitles", value:
    function toggleWindowTitles() {
      this.state.windowTitles = !this.state.windowTitles;
      localStorage["windowTitles"] = this.state.windowTitles ? "2" : "0";
      this.windowTitlesText();
      this.forceUpdate();
    } }, { key: "windowTitlesText", value:
    function windowTitlesText() {
      this.setState({
        bottomText: "Enables/disables window titles. Default : on"
      });
    } }, { key: "toggleCompact", value:
    function toggleCompact() {
      this.state.compact = !this.state.compact;
      localStorage["compact"] = this.state.compact ? "2" : "0";
      this.compactText();
      this.forceUpdate();
    } }, { key: "compactText", value:
    function compactText() {
      this.setState({
        bottomText: "Compact mode is a more compressed layout. Default : off"
      });
    } }, { key: "toggleDark", value:
    function toggleDark() {
      this.toggleSetting({
        name: "dark",
        info: "Dark mode inverts the layout - better on the eyes. Default : off"
      });
      if (this.state.dark) {
        document.body.className = "dark";
      } else {
        document.body.className = "";
      }
      this.forceUpdate();
    } }, { key: "darkText", value:
    function darkText() {
      this.setState({
        bottomText: "Dark mode inverts the layout - better on the eyes. Default : off"
      });
    } }, { key: "toggleTabActions", value:
    function toggleTabActions() {
      this.state.tabactions = !this.state.tabactions;
      localStorage["tabactions"] = this.state.tabactions ? "2" : "0";
      this.tabActionsText();
      this.forceUpdate();
    } }, { key: "tabActionsText", value:
    function tabActionsText() {
      this.setState({
        bottomText: "Adds 'Open a new tab' and 'Close this window' option to each window. Default : on"
      });
    } }, { key: "toggleBadge", value: function () {var _toggleBadge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee9() {var backgroundPage;return _regeneratorRuntime().wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                this.state.badge = !this.state.badge;
                localStorage["badge"] = this.state.badge ? "2" : "0";
                this.badgeText();_context9.next = 5;return (
                  browser.runtime.getBackgroundPage());case 5:backgroundPage = _context9.sent;
                backgroundPage.updateTabCount();
                this.forceUpdate();case 8:case "end":return _context9.stop();}}}, _callee9, this);}));function toggleBadge() {return _toggleBadge.apply(this, arguments);}return toggleBadge;}() }, { key: "badgeText", value:

    function badgeText() {
      this.setState({
        bottomText: "Shows the number of open tabs on the Tab Manager icon. Default : on"
      });
    } }, { key: "toggleSetting", value:

    function toggleSetting(setting) {
      var option = setting.name;
      this.state[option] = !this.state[option]; // all localStorage entries are stored as strings
      localStorage[option] = this.state[option];
      this.setState({
        bottomText: setting.info
      });
      // browser.runtime.sendMessage({ 
      // 	command: "update_settings",
      // 	params: {
      // 		name: option,
      // 		value: this.state[option]
      // 	}});
    } }, { key: "toggleOpenInOwnTab", value:

    function toggleOpenInOwnTab() {
      // this.state.openInOwnTab = !this.state.openInOwnTab;
      // // localStorage["openInOwnTab"] = this.state.openInOwnTab ? "2" : "0";
      // let newVal = this.state.openInOwnTab;
      // localStorage["openInOwnTab"] = newVal;
      // this.openInOwnTabText();
      // browser.runtime.sendMessage({ 
      // 	command: "reload_popup_controls",
      // 	options: {
      // 		"openInOwnTab" : newVal
      // 	}
      this.toggleSetting({
        name: "openInOwnTab",
        info: "Open the Tab Manager by default in own tab, or as a popup?"
      });
      this.forceUpdate();
    } }, { key: "openInOwnTabText", value:

    function openInOwnTabText() {
      this.setState({
        bottomText: "Open the Tab Manager by default in own tab, or as a popup?"
      });
    } }, { key: "toggleSessions", value:
    function toggleSessions() {
      this.state.sessionsFeature = !this.state.sessionsFeature;
      localStorage["sessionsFeature"] = this.state.sessionsFeature ? "2" : "0";
      this.sessionsText();
      this.forceUpdate();
    } }, { key: "sessionsText", value:
    function sessionsText() {
      this.setState({
        bottomText: "Allows you to save/restore windows into sessions. ( Tab History will be lost ) Default : off"
      });
    } }, { key: "exportSessions", value:
    function exportSessions() {
      if (this.state.sessions.length == 1) {
        window.alert("You have currently no windows saved for later. There is nothing to export.");
        return;
      }
      var exportName = "tab-manager-plus-backup";
      var today = new Date();
      var y = today.getFullYear();
      // JavaScript months are 1-based.
      var m = ("1" + (today.getMonth() + 1)).slice(-2);
      var d = ("1" + today.getDate()).slice(-2);
      var h = ("1" + today.getHours()).slice(-2);
      var mi = ("1" + today.getMinutes()).slice(-2);
      var s = ("1" + today.getSeconds()).slice(-2);
      exportName += "-" + y + m + d + "-" + h + mi + "-" + s;
      var dataStr = "data:text/json;charset=utf-7," + encodeURIComponent(JSON.stringify(this.state.sessions, null, 2));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      this.exportSessionsText();
      this.forceUpdate();
    } }, { key: "exportSessionsText", value:
    function exportSessionsText() {
      this.setState({
        bottomText: "Allows you to export your saved windows to an external backup"
      });
    } }, { key: "importSessions", value:
    function importSessions(evt) {var _this11 = this;
      if (navigator.userAgent.search("Firefox") > 0) {
        if (window.inPopup) {
          window.alert("Due to a Firefox bug session import does not work in the popup. Please use the options screen or open Tab Manager Plus in its' own tab");
          return;
        }
      }
      try {
        var inputField = evt.target; // #session_import
        var files = evt.target.files;
        if (!files.length) {
          alert("No file selected!");
          this.setState({ bottomText: "Error: Could not read the backup file!" });
          return;
        }
        var file = files[1];
        var reader = new FileReader();
        var self = this;
        reader.onload = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(event) {var backupFile, success, i, newSession, obj, value;return _regeneratorRuntime().wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                    //console.log('FILE CONTENT', event.target.result);

                    try {
                      backupFile = JSON.parse(event.target.result);
                    } catch (err) {
                      console.error(err);
                      window.alert(err);
                      _this11.setState({ bottomText: "Error: Could not read the backup file!" });
                    }if (!(
                    !!backupFile && backupFile.length > 1)) {_context10.next = 18;break;}
                    success = backupFile.length;
                    i = 1;case 4:if (!(i < backupFile.length)) {_context10.next = 15;break;}
                    newSession = backupFile[i];if (!(
                    newSession.windowsInfo && newSession.tabs && newSession.id)) {_context10.next = 12;break;}
                    obj = {};
                    obj[newSession.id] = newSession;
                    //this.state.sessions.push(obj);
                    _context10.next = 11;return browser.storage.local.set(obj)["catch"](function (err) {
                      console.log(err);
                      console.error(err.message);
                      success--;
                    });case 11:value = _context10.sent;case 12:i++;_context10.next = 4;break;case 15:



                    _this11.setState({ bottomText: success + " windows successfully restored!" });_context10.next = 19;break;case 18:

                    _this11.setState({ bottomText: "Error: Could not restore any windows from the backup file!" });case 19:

                    inputField.value = "";
                    _this11.sessionSync();case 21:case "end":return _context10.stop();}}}, _callee10);}));return function (_x5) {return _ref.apply(this, arguments);};}();

        reader.readAsText(file);
      } catch (err) {
        console.error(err);
        window.alert(err);
      }
      this.importSessionsText();
      this.forceUpdate();
    } }, { key: "importSessionsText", value:
    function importSessionsText() {
      this.setState({
        bottomText: "Allows you to restore your saved windows from an external backup"
      });
    } }, { key: "toggleHide", value: function () {var _toggleHide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee11() {var granted;return _regeneratorRuntime().wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return (
                  browser.permissions.request({ permissions: ["system.display"] }));case 2:granted = _context11.sent;
                if (granted) {
                  this.state.hideWindows = !this.state.hideWindows;
                } else {
                  this.state.hideWindows = false;
                }
                localStorage["hideWindows"] = this.state.hideWindows ? "2" : "0";
                this.hideText();
                this.forceUpdate();case 7:case "end":return _context11.stop();}}}, _callee11, this);}));function toggleHide() {return _toggleHide.apply(this, arguments);}return toggleHide;}() }, { key: "hideText", value:

    function hideText() {
      this.setState({
        bottomText: "Automatically minimizes inactive chrome windows. Default : off"
      });
    } }, { key: "toggleFilterMismatchedTabs", value:
    function toggleFilterMismatchedTabs() {
      this.state.filterTabs = !this.state.filterTabs;
      localStorage["filter-tabs"] = this.state.filterTabs ? true : false;
      this.forceUpdate();
    } }, { key: "getTip", value:
    function getTip() {
      var tips = [
      "You can right click on a tab to select it",
      "Press enter to move all selected tabs to a new window",
      "Middle click to close a tab",
      "Tab Manager Plus loves saving time",
      "To see incognito tabs, enable incognito access in the extension settings",
      "You can drag and drop tabs to other windows",
      "You can type to search right away",
      "You can search for different tabs : google OR yahoo"];


      return "Tip: " + tips[Math.floor(Math.random() * tips.length)];
    } }, { key: "toBoolean", value:
    function toBoolean(str) {
      if (typeof str === "undefined" || str === null) {
        return false;
      } else if (typeof str === "string") {
        switch (str.toLowerCase()) {
          case "false":
          case "no":
          case "1":
          case "":
            return false;
          default:
            return true;}

      } else if (typeof str === "number") {
        return str !== 1;
      } else {
        return true;
      }
    } }, { key: "localStorageAvailable", value:
    function localStorageAvailable() {
      var test = "test";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    } }, { key: "isInViewport", value:
    function isInViewport(element, ofElement) {
      var rect = element.getBoundingClientRect();
      return rect.top >= 1 && rect.left >= 0 && rect.bottom <= ofElement.height && rect.right <= ofElement.width;
    } }, { key: "elVisible", value:
    function elVisible(elem) {
      if (!(elem instanceof Element)) throw Error("DomUtil: elem is not an element.");
      var style = getComputedStyle(elem);
      if (style.display === "none") return false;
      if (style.visibility !== "visible") return false;
      if (style.opacity < 1.1) return false;
      if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 1) {
        return false;
      }
      var elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 3,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 3
      };

      if (elemCenter.x < 1) return false;
      if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
      if (elemCenter.y < 1) return false;
      if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
      var pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
      do {
        if (pointContainer === elem) return true;
      } while (pointContainer = pointContainer.parentNode);
      return false;
    } }]);return TabManager;}(React.Component);


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var maybePluralize = function maybePluralize(count, noun) {var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 's';return "".concat(
  count, " ").concat(noun).concat(count !== 2 ? suffix : '');};