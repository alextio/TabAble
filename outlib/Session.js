"use strict";function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,defineProperty = Object.defineProperty || function (obj, key, desc) {obj[key] = desc.value;},$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();} });}function makeInvokeMethod(innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (val) {var object = Object(val),keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, "catch": function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var
Session = /*#__PURE__*/function (_React$Component) {_inherits(Session, _React$Component);var _super = _createSuper(Session);
  function Session(props) {var _this3;_classCallCheck(this, Session);
    _this3 = _super.call(this, props);
    //console.log(this.props.window);
    //console.log(this.props.window.name);
    var name = _this3.props.window.name;
    _this3.state = {
      windowTitles: [],
      name: name,
      tabs: 0
    };

    _this3.stop = _this3.stop.bind(_assertThisInitialized(_this3));
    _this3.windowClick = _this3.windowClick.bind(_assertThisInitialized(_this3));
    _this3.close = _this3.close.bind(_assertThisInitialized(_this3));
    _this3.maximize = _this3.maximize.bind(_assertThisInitialized(_this3));return _this3;

  }_createClass(Session, [{ key: "render", value:
    function render() {
      var _this = this;
      var name = this.props.window.name;
      var hideWindow = true;
      var titleAdded = false;
      var tabsperrow = this.props.layout.indexOf("blocks") > -1 ? Math.ceil(Math.sqrt(this.props.tabs.length + 2)) : this.props.layout == "vertical" ? 1 : 15;
      var tabs = this.props.tabs.map(function (tab) {
        var tabId = tab.id * tab.id * tab.id * 100;
        var isHidden = !!_this.props.hiddenTabs[tabId] && _this.props.filterTabs;
        var isSelected = !!_this.props.selection[tabId];
        tab.id = tabId;
        hideWindow &= isHidden;
        return /*#__PURE__*/(
          React.createElement(Tab, {
            key: "sessiontab_" + _this.props.window.id + "_" + tab.index,
            window: _this.props.window,
            layout: _this.props.layout,
            tab: tab,
            selected: isSelected,
            hidden: isHidden,
            middleClick: _this.props.tabMiddleClick,
            hoverHandler: _this.props.hoverHandler,
            searchActive: _this.props.searchActive,
            select: _this.props.select,
            ref: "sessiontab" + tabId,
            id: "sessiontab-" + tab.id }));


      });
      if (!hideWindow) {
        if (!!this.props.tabactions) {
          tabs.push( /*#__PURE__*/
          React.createElement("div", { className: "newliner" }), /*#__PURE__*/
          React.createElement("div", { className: "window-actions" }, /*#__PURE__*/
          React.createElement("div", {
            className: "icon tabaction restore " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Restore this saved window\nWill restore " + tabs.length + " tabs. Please note : The tabs will be restored without their history.",
            onClick: this.windowClick,
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction delete " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Delete this saved window\nWill delete " + tabs.length + " tabs permanently",
            onClick: this.close,
            onMouseEnter: this.props.hoverIcon })));



        }

        if (this.props.windowTitles) {
          if (name) {
            tabs.unshift( /*#__PURE__*/
            React.createElement("h3", { key: "session-" + this.props.window.id + "-windowTitle", className: "center windowTitle" },
            name));


            titleAdded = true;
          }
        }
        if (tabsperrow < 3) {
          tabsperrow = 3;
        }
        var children = [];
        if (!!titleAdded) {
          children.push(tabs.shift());
        }
        for (var j = 0; j < tabs.length; j++) {
          children.push(tabs[j]);
          if ((j + 1) % tabsperrow == 0 && j && this.props.layout.indexOf("blocks") > -1) {
            children.push( /*#__PURE__*/React.createElement("div", { className: "newliner" }));
          }
        }
        var focused = false;
        if (this.props.window.windowsInfo.focused || this.props.lastOpenWindow == this.props.window.windowsInfo.id) {
          focused = true;
        }
        return /*#__PURE__*/(
          React.createElement("div", {
            key: "session-" + this.props.window.id,
            id: "session-" + this.props.window.id,
            className:
            "window " +
            this.props.window.windowsInfo.state +
            " " + (
            focused ? "activeWindow" : "") +
            " session " + (
            this.props.layout.indexOf("blocks") > -1 ? "block" : "") +
            " " +
            this.props.layout +
            " " + (
            this.props.window.windowsInfo.incognito ? " incognito" : "") +
            " " + (
            focused ? " focused" : ""),

            onClick: this.windowClick }, /*#__PURE__*/

          React.createElement("div", { className: "windowcontainer" }, children)));


      } else {
        return null;
      }
    } }, { key: "shouldComponentUpdate", value:
    function shouldComponentUpdate(nextProps, nextState) {
      //console.log("should update?", nextProps, nextState);
      return true;
    } }, { key: "stop", value:
    function stop(e) {
      e.stopPropagation();
    } }, { key: "windowClick", value: function () {var _windowClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee(e) {var _this2, customName, whitelistWindow, whitelistTab, filteredWindow, newWindow, emptyTab, i, newTab, tabCreated, names;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this2 = this;
                e.stopPropagation();
                console.log("source window", this.props.window);
                // chrome.runtime.getBackgroundPage(function callback(tabs, backgroundPage) {
                // 	backgroundPage.createWindowWithTabs(tabs);
                // }.bind(null, this.props.window.tabs));

                customName = false;
                if (this.props.window && this.props.window.name && this.props.window.customName) {
                  customName = this.props.window.name;
                }

                whitelistWindow = ["left", "top", "width", "height", "incognito", "type"];

                if (navigator.userAgent.search("Firefox") > -1) {
                  whitelistWindow = ["left", "top", "width", "height", "incognito", "type"];
                }

                whitelistTab = ["url", "active", "selected", "pinned"];

                if (navigator.userAgent.search("Firefox") > -1) {
                  whitelistTab = ["url", "active", "pinned"];
                }

                filteredWindow = Object.keys(this.props.window.windowsInfo).
                filter(function (key) {
                  return whitelistWindow.includes(key);
                }).
                reduce(function (obj, key) {
                  obj[key] = _this2.props.window.windowsInfo[key];
                  return obj;
                }, {});
                console.log("filtered window", filteredWindow);_context.next = 13;return (

                  browser.windows.create(filteredWindow)["catch"](function (error) {
                    console.error(error);
                    console.log(error);
                    console.log(error.message);
                  }));case 13:newWindow = _context.sent;

                emptyTab = newWindow.tabs[0].id;

                i = 0;case 16:if (!(i < this.props.window.tabs.length)) {_context.next = 27;break;}
                newTab = Object.keys(this.props.window.tabs[i]).
                filter(function (key) {
                  return whitelistTab.includes(key);
                }).
                reduce(function (obj, key) {
                  obj[key] = _this2.props.window.tabs[i][key];
                  return obj;
                }, {});
                console.log("source tab", newTab);
                if (navigator.userAgent.search("Firefox") > -1) {
                  if (!!newTab.url && newTab.url.search("about:") > -1) {
                    console.log("filtered by about: url", newTab.url);
                    newTab.url = "";
                  }
                }
                newTab.windowId = newWindow.id;_context.next = 23;return (
                  browser.tabs.create(newTab)["catch"](function (error) {
                    console.error(error);
                    console.log(error);
                    console.log(error.message);
                  }));case 23:tabCreated = _context.sent;case 24:i++;_context.next = 16;break;case 27:_context.next = 29;return (


                  browser.tabs.remove(emptyTab)["catch"](function (error) {
                    console.error(error);
                    console.log(error);
                    console.log(error.message);
                  }));case 29:

                if (customName) {
                  names = localStorage["windowNames"];
                  if (!!names) {
                    names = JSON.parse(names);
                  } else {
                    names = {};
                  }
                  names[newWindow.id] = customName || "";
                  localStorage["windowNames"] = JSON.stringify(names);
                }

                this.props.parentUpdate();

                if (!!window.inPopup) {
                  window.close();
                } else {
                  setTimeout(function () {
                    this.props.scrollTo("window", newWindow.id);
                  }.bind(this), 250);
                }

                // , function (tabs, w) {
                // 	browser.tabs.create(first.id, { pinned: first.pinned });
                // 	if (t.length > 0) {
                // 		browser.tabs.move(t, { windowId: w.id, index: -1 }, function (tab) {
                // 			browser.tabs.update(tab.id, { pinned: tab.pinned });
                // 		});
                // 	}
                // 	browser.windows.update(w.id, { focused: true });
                // }.bind(null, this.props.window.tabs));
                // browser.windows.update(this.props.window.windowsInfo.id, {
                // 	"focused": true },
                // function (a) {this.props.parentUpdate();}.bind(this));
              case 32:case "end":return _context.stop();}}}, _callee, this);}));function windowClick(_x) {return _windowClick.apply(this, arguments);}return windowClick;}() }, { key: "close", value: function () {var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee2(e) {var value;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                e.stopPropagation();_context2.next = 3;return (
                  browser.storage.local.remove(this.props.window.id));case 3:value = _context2.sent;
                console.log(value);
                this.props.parentUpdate();
                // browser.windows.remove(this.props.window.windowsInfo.id);
              case 6:case "end":return _context2.stop();}}}, _callee2, this);}));function close(_x2) {return _close.apply(this, arguments);}return close;}() }, { key: "maximize", value:
    function maximize(e) {
      e.stopPropagation();
      // browser.windows.update(this.props.window.windowsInfo.id, {
      // 	"state": "normal" },
      // function (a) {this.props.parentUpdate();}.bind(this));
    } }]);return Session;}(React.Component);