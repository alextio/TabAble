"use strict";function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,defineProperty = Object.defineProperty || function (obj, key, desc) {obj[key] = desc.value;},$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();} });}function makeInvokeMethod(innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (val) {var object = Object(val),keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, "catch": function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var
Window = /*#__PURE__*/function (_React$Component) {_inherits(Window, _React$Component);var _super = _createSuper(Window);
  function Window(props) {var _this2;_classCallCheck(this, Window);
    _this2 = _super.call(this, props);
    var colors = localStorage["windowColors"];
    if (!!colors) {
      colors = JSON.parse(colors);
    } else {
      colors = {};
    }
    var color = colors[_this2.props.window.id] || "default";
    var names = localStorage["windowNames"];
    if (!!names) {
      names = JSON.parse(names);
    } else {
      names = {};
    }
    var name = names[_this2.props.window.id] || "";
    if (!!_this2.props.window.titlePreface) {
      name = _this2.props.window.titlePreface;
    }
    _this2.state = {
      colorActive: false,
      windowTitles: [],
      color: color,
      name: name,
      tabs: 0
    };

    _this2.addTab = _this2.addTab.bind(_assertThisInitialized(_this2));
    _this2.changeColors = _this2.changeColors.bind(_assertThisInitialized(_this2));
    _this2.changeName = _this2.changeName.bind(_assertThisInitialized(_this2));
    _this2.checkKey = _this2.checkKey.bind(_assertThisInitialized(_this2));
    _this2.closePopup = _this2.closePopup.bind(_assertThisInitialized(_this2));
    _this2.close = _this2.close.bind(_assertThisInitialized(_this2));
    _this2.colors = _this2.colors.bind(_assertThisInitialized(_this2));
    _this2.dragOver = _this2.dragOver.bind(_assertThisInitialized(_this2));
    _this2.drop = _this2.drop.bind(_assertThisInitialized(_this2));
    _this2.maximize = _this2.maximize.bind(_assertThisInitialized(_this2));
    _this2.minimize = _this2.minimize.bind(_assertThisInitialized(_this2));
    _this2.save = _this2.save.bind(_assertThisInitialized(_this2));
    _this2.stop = _this2.stop.bind(_assertThisInitialized(_this2));
    _this2.windowClick = _this2.windowClick.bind(_assertThisInitialized(_this2));
    _this2.selectToFromTab = _this2.selectToFromTab.bind(_assertThisInitialized(_this2));return _this2;
  }_createClass(Window, [{ key: "render", value:

    function render() {
      var _this = this;
      var colors = localStorage["windowColors"];
      if (!!colors) {
        colors = JSON.parse(colors);
      } else {
        colors = {};
      }
      var color = colors[this.props.window.id] || "default";
      var names = localStorage["windowNames"];
      if (!!names) {
        names = JSON.parse(names);
      } else {
        names = {};
      }
      var name = names[this.props.window.id] || "";
      var hideWindow = true;
      var titleAdded = false;
      var tabsperrow = this.props.layout.indexOf("blocks") > -1 ? Math.ceil(Math.sqrt(this.props.tabs.length + 2)) : this.props.layout == "vertical" ? 1 : 15;
      var tabs = this.props.tabs.map(function (tab) {
        // var isHidden = !!_this.props.hiddenTabs[tab.id] && _this.props.filterTabs;
        // var isSelected = !!_this.props.selection[tab.id];
        // var isHidden = (_this.props.hiddenTabs.indexOf(tab.id) !== -1 && _this.props.filterTabs);
        var isSelected = _this.props.selection.indexOf(tab.id) !== -1;
        var isHidden = !isSelected && _this.props.filterTabs && _this.props.searchActive;
        hideWindow &= isHidden;
        return /*#__PURE__*/(
          React.createElement(Tab, {
            key: "windowtab_" + _this.props.window.id + "_" + tab.id,
            window: _this.props.window,
            layout: _this.props.layout,
            tab: tab,
            selected: isSelected,
            hidden: isHidden,
            middleClick: _this.props.tabMiddleClick,
            hoverHandler: _this.props.hoverHandler,
            searchActive: _this.props.searchActive,
            select: _this.props.select,
            selectTo: _this.selectToFromTab,
            drag: _this.props.drag,
            drop: _this.props.drop,
            dropWindow: _this.props.dropWindow,
            ref: "tab" + tab.id,
            id: "tab-" + tab.id }));


      });
      if (!hideWindow) {
        if (!!this.props.tabactions) {
          tabs.push( /*#__PURE__*/
          React.createElement("div", { className: "newliner" }), /*#__PURE__*/
          React.createElement("div", { className: "window-actions" },
          this.props.sessionsFeature ? /*#__PURE__*/
          React.createElement("div", {
            className: "icon tabaction save " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title:
            "Save this window for later\nWill save " +
            tabs.length +
            " tabs with this window for later. Please note : The saved tabs will lose their history.",

            onClick: this.save,
            onMouseEnter: this.props.hoverIcon }) :


          false, /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction add " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Open a new tab",
            onClick: this.addTab,
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction colors " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change window name or color",
            onClick: this.colors,
            onMouseEnter: this.props.hoverIcon }),

          this.props.window.state == "minimized" ? /*#__PURE__*/
          React.createElement("div", {
            className: "icon tabaction maximize " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Maximize this window\nWill maximize " + tabs.length + " tabs",
            onClick: this.maximize,
            onMouseEnter: this.props.hoverIcon }) : /*#__PURE__*/


          React.createElement("div", {
            className: "icon tabaction minimize " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Minimize this window\nWill minimize " + tabs.length + " tabs",
            onClick: this.minimize,
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/


          React.createElement("div", {
            className: "icon tabaction close " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Close this window\nWill close " + tabs.length + " tabs",
            onClick: this.close,
            onMouseEnter: this.props.hoverIcon })));



        }
        if (this.state.colorActive) {
          tabs.push( /*#__PURE__*/
          React.createElement("div", { className: "window-colors " + (this.state.colorActive ? "" : "hidden"), onClick: this.stop, onKeyDown: this.checkKey }, /*#__PURE__*/
          React.createElement("h2", { className: "window-x", onClick: this.closePopup }, "x"), /*#__PURE__*/


          React.createElement("h3", { className: "center" }, "Name the window"), /*#__PURE__*/
          React.createElement("input", {
            className: "window-name-input",
            type: "text",
            onChange: this.changeName,
            value: this.state.name,
            placeholder: this.state.windowTitles ? this.topEntries(this.state.windowTitles).join("") : "Name window...",
            tabIndex: "1",
            ref: "namebox",
            onKeyDown: this.checkKey }), /*#__PURE__*/

          React.createElement("h3", { className: "center" }, "Pick a color"), /*#__PURE__*/
          React.createElement("div", { className: "colors-box" }, /*#__PURE__*/
          React.createElement("div", {
            className: "icon tabaction default " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "default" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color1 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color1" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color2 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color2" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color3 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color3" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color4 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color4" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color5 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color5" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color6 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color6" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color7 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color7" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color8 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color8" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color9 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color9" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color10 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color10" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color11 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color11" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color12 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color12" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color13 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color13" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color14 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color14" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color15 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color15" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color16 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color16" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color17 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color17" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color18 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color18" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color19 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color19" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color20 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color20" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color21 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color21" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color22 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color22" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color23 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color23" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color24 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color24" }),
            onMouseEnter: this.props.hoverIcon }), /*#__PURE__*/

          React.createElement("div", {
            className: "icon tabaction color25 " + (this.props.layout.indexOf("blocks") > -1 ? "" : "windowaction"),
            title: "Change background color",
            onClick: this.changeColors.bind(this, { colorActive: false, color: "color25" }),
            onMouseEnter: this.props.hoverIcon }))));




        }

        if (this.props.windowTitles) {
          if (name) {
            tabs.unshift( /*#__PURE__*/
            React.createElement("h3", {
              key: "window-" + this.props.window.id + "-windowTitle",
              className: "editName center windowTitle",
              onClick: this.colors,
              title: "Change the name of this window",
              onMouseEnter: this.props.hoverIcon },

            name));


            titleAdded = true;
          } else {
            if (this.state.windowTitles.length == 0 || this.state.tabs != tabs.length + this.props.window.id * 99) {
              this.state.windowTitles = [];
              this.state.tabs = tabs.length + this.props.window.id * 99;
              for (var i = 0; i < tabs.length; i++) {
                if (!!tabs[i].props && !!tabs[i].props.tab && !!tabs[i].props.tab.url) {
                  var url = new URL(tabs[i].props.tab.url);
                  var protocol = url.protocol;
                  var hostname = url.hostname;
                  if (protocol.indexOf("chrome-extension") > -1) {
                    hostname = tabs[i].props.tab.title;
                  } else if (protocol.indexOf("about") > -1) {
                    hostname = tabs[i].props.tab.title;
                  } else if (hostname.indexOf("mail.google") > -1) {
                    hostname = "gmail";
                  } else {
                    hostname = hostname.replace("www.", "");
                    var regex_var = new RegExp(/(\.[^\.]{0,2})(\.[^\.]{0,2})(\.*$)|(\.[^\.]*)(\.*$)/);
                    hostname = hostname.
                    replace(regex_var, "").
                    split(".").
                    pop();
                  }
                  if (hostname.length > 18) {
                    hostname = tabs[i].props.tab.title;
                    while (hostname.length > 18 && hostname.indexOf(" ") > -1) {
                      hostname = hostname.split(" ");
                      hostname.pop();
                      hostname = hostname.join(" ");
                    }
                  }
                  this.state.windowTitles.push(hostname);
                }
              }
            }

            if (this.state.windowTitles.length > 0) {
              tabs.unshift( /*#__PURE__*/
              React.createElement("h3", {
                key: "window-" + this.props.window.id + "-windowTitle",
                className: "editName center windowTitle",
                onClick: this.colors,
                title: "Change the name of this window",
                onMouseEnter: this.props.hoverIcon },

              this.topEntries(this.state.windowTitles).join("")));


              titleAdded = true;
            }
          }
        }

        if (tabsperrow < 5) {
          tabsperrow = 5;
        }
        var children = [];
        if (!!titleAdded) {
          children.push(tabs.shift());
        }
        var z = -1;
        for (var j = 0; j < tabs.length; j++) {
          var tab = tabs[j].props.tab;
          var isHidden = !!tab && !!tab.id && !!this.props.hiddenTabs[tab.id] && this.props.filterTabs;
          if (!isHidden) {
            z++;
            children.push(tabs[j]);
          }
          if ((z + 1) % tabsperrow == 0 && z && this.props.layout.indexOf("blocks") > -1) {
            children.push( /*#__PURE__*/React.createElement("div", { className: "newliner" }));
          }
        }
        var focused = false;
        if (this.props.window.focused || this.props.lastOpenWindow == this.props.window.id) {
          focused = true;
        }
        return /*#__PURE__*/(
          React.createElement("div", {
            key: "window-" + this.props.window.id,
            id: "window-" + this.props.window.id,
            className:
            "window " +
            this.props.window.state +
            " window-" +
            this.props.window.id +
            " " + (
            focused ? "activeWindow" : "") +
            " " +
            color +
            " " + (
            this.props.layout.indexOf("blocks") > -1 ? "block" : "") +
            " " +
            this.props.layout +
            " " + (
            this.props.window.incognito ? " incognito" : "") +
            " " + (
            focused ? " focused" : ""),

            onDragOver: this.dragOver,
            onClick: this.windowClick,
            title: "Focus this window\nWill select this window with " + tabs.length + " tabs",
            onMouseEnter: this.props.hoverIcon,
            onDrop: this.drop }, /*#__PURE__*/

          React.createElement("div", { className: "windowcontainer", title: "Focus this window\nWill select this window with " + tabs.length + " tabs" }, children)));


      } else {
        return null;
      }
    } }, { key: "stop", value:
    function stop(e) {
      this.stopProp(e);
    } }, { key: "addTab", value:
    function addTab(e) {
      this.stopProp(e);
      browser.tabs.create({ windowId: this.props.window.id });
    } }, { key: "dragOver", value:
    function dragOver(e) {
      this.stopProp(e);
    } }, { key: "drop", value:
    function drop(e) {
      this.stopProp(e);
      this.props.dropWindow(this.props.window.id);
    } }, { key: "checkKey", value:
    function checkKey(e) {
      // close popup when enter or escape have been pressed
      if (e.keyCode == 13 || e.keyCode == 27) {
        this.stopProp(e);
        this.closePopup();
      }
    } }, { key: "windowClick", value: function () {var _windowClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee(e) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt("return",










                false);case 1:case "end":return _context.stop();}}}, _callee);}));function windowClick(_x) {return _windowClick.apply(this, arguments);}return windowClick;}() }, { key: "focusOnTabAndWindow", value: function () {var _focusOnTabAndWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee2(tab) {var windowId, tabId;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                windowId = tab.windowId;

                if (!!tab.tabId) {
                  tabId = tab.tabId;
                } else {
                  tabId = tab.id;
                }

                browser.windows.update(windowId, { focused: true }).then(function (tabId, windowId) {
                  browser.tabs.update(tabId, { active: true }).then(function (tabId, windowId) {
                    tabActiveChanged({ tabId: tabId, windowId: windowId });
                  }.bind(this, tabId, windowId));
                }.bind(this, tabId, windowId));case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function focusOnTabAndWindow(_x2) {return _focusOnTabAndWindow.apply(this, arguments);}return focusOnTabAndWindow;}() }, { key: "tabActiveChanged", value:


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
    } }, { key: "selectToFromTab", value:

    function selectToFromTab(tabId) {
      if (tabId) this.props.selectTo(tabId, this.props.tabs);
    } }, { key: "close", value:
    function close(e) {
      this.stopProp(e);
      browser.windows.remove(this.props.window.id);
    } }, { key: "uuidv4", value:
    function uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    } }, { key: "save", value: function () {var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee3(e) {var sessionName, session, queryInfo, tabs, tabkey, newTab, obj, value;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                this.stopProp(e);

                console.log("session name", this.state.name);
                sessionName = this.state.name || this.topEntries(this.state.windowTitles).join("");
                console.log("session name", sessionName);

                session = {
                  tabs: [],
                  windowsInfo: {},
                  name: sessionName,
                  date: Date.now(),
                  sessionStartTime: Date.now(),
                  id: this.uuidv4()
                };

                if (this.state.name) {
                  session.customName = true;
                }

                queryInfo = {};
                //queryInfo.currentWindow = true;
                queryInfo.windowId = this.props.window.id;
                console.log(queryInfo);_context3.next = 11;return (

                  browser.tabs.query(queryInfo));case 11:tabs = _context3.sent;
                console.log(tabs);_context3.t0 = _regeneratorRuntime().keys(
                tabs);case 14:if ((_context3.t1 = _context3.t0()).done) {_context3.next = 23;break;}tabkey = _context3.t1.value;if (!(
                navigator.userAgent.search("Firefox") > -1)) {_context3.next = 20;break;}
                newTab = tabs[tabkey];if (!(
                !!newTab.url && newTab.url.search("about:") > -1)) {_context3.next = 20;break;}return _context3.abrupt("continue", 14);case 20:



                session.tabs.push(tabs[tabkey]);_context3.next = 14;break;case 23:

                console.log(session.tabs);_context3.next = 26;return (
                  browser.windows.get(this.props.window.id));case 26:session.windowsInfo = _context3.sent;

                console.log(session);
                obj = {};
                obj[session.id] = session;
                console.log(obj);_context3.next = 33;return (

                  browser.storage.local.set(obj)["catch"](function (err) {
                    console.log(err);
                    console.error(err.message);
                  }));case 33:value = _context3.sent;
                this.props.parentUpdate();
                console.log("Value is set to " + value);

                setTimeout(function () {
                  this.props.scrollTo("session", session.id);
                }.bind(this), 250);case 37:case "end":return _context3.stop();}}}, _callee3, this);}));function save(_x3) {return _save.apply(this, arguments);}return save;}() }, { key: "minimize", value: function () {var _minimize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee4(e) {return _regeneratorRuntime().wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                this.stopProp(e);_context4.next = 3;return (
                  browser.windows.update(this.props.window.id, {
                    state: "minimized"
                  }));case 3:
                this.props.parentUpdate();case 4:case "end":return _context4.stop();}}}, _callee4, this);}));function minimize(_x4) {return _minimize.apply(this, arguments);}return minimize;}() }, { key: "maximize", value: function () {var _maximize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee5(e) {return _regeneratorRuntime().wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                this.stopProp(e);_context5.next = 3;return (
                  browser.windows.update(this.props.window.id, {
                    state: "normal"
                  }));case 3:
                this.props.parentUpdate();case 4:case "end":return _context5.stop();}}}, _callee5, this);}));function maximize(_x5) {return _maximize.apply(this, arguments);}return maximize;}() }, { key: "colors", value:

    function colors(e) {
      this.stopProp(e);
      this.props.toggleColors(!this.state.colorActive, this.props.window.id);
      this.setState({
        colorActive: !this.state.colorActive
      });
      setTimeout(function () {
        if (this.state.colorActive) {
          this.refs.namebox.focus();
        }
      }.bind(this), 250);
    } }, { key: "changeColors", value:
    function changeColors(a) {
      this.setState(a);
      var colors = localStorage["windowColors"];
      if (!!colors) {
        colors = JSON.parse(colors);
      } else {
        colors = {};
      }
      colors[this.props.window.id] = a.color;
      localStorage["windowColors"] = JSON.stringify(colors);
    } }, { key: "closePopup", value:
    function closePopup() {
      this.props.toggleColors(!this.state.colorActive, this.props.window.id);
      this.setState({
        colorActive: !this.state.colorActive
      });
      this.props.parentUpdate();
    } }, { key: "changeName", value: function () {var _changeName = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee6(e) {var name, names;return _regeneratorRuntime().wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                // this.setState(a);
                name = "";
                if (e && e.target && e.target.value) name = e.target.value;

                names = localStorage["windowNames"];
                if (!!names) {
                  names = JSON.parse(names);
                } else {
                  names = {};
                }
                names[this.props.window.id] = name;
                localStorage["windowNames"] = JSON.stringify(names);
                this.setState({
                  name: name
                });
                if (navigator.userAgent.search("Firefox") > -1) {
                  if (!!name) {
                    browser.windows.update(this.props.window.id, {
                      titlePreface: name + " - "
                    });
                  } else {
                    browser.windows.update(this.props.window.id, {
                      titlePreface: name
                    });
                  }
                }case 8:case "end":return _context6.stop();}}}, _callee6, this);}));function changeName(_x6) {return _changeName.apply(this, arguments);}return changeName;}() }, { key: "topEntries", value:

    function topEntries(arr) {
      var cnts = arr.reduce(function (obj, val) {
        obj[val] = (obj[val] || 0) + 1;
        return obj;
      }, {});
      var sorted = Object.keys(cnts).sort(function (a, b) {
        return cnts[b] - cnts[a];
      });

      var more = 0;
      if (sorted.length == 3) {
      } else {
        while (sorted.length > 2) {
          sorted.pop();
          more++;
        }
      }
      for (var i = 0; i < sorted.length; i++) {
        if (i > 0) {
          sorted[i] = ", " + sorted[i];
        }
      }
      if (more > 0) {
        sorted.push(" & " + more + " more");
      }
      return sorted;
    } }, { key: "stopProp", value:
    function stopProp(e) {
      if (e && e.nativeEvent) {
        e.nativeEvent.preventDefault();
        e.nativeEvent.stopPropagation();
      }
      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }
    } }]);return Window;}(React.Component);