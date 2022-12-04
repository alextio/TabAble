"use strict";function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,defineProperty = Object.defineProperty || function (obj, key, desc) {obj[key] = desc.value;},$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();} });}function makeInvokeMethod(innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}function maybeInvokeDelegate(delegate, context) {var methodName = context.method,method = delegate.iterator[methodName];if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (val) {var object = Object(val),keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, "catch": function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return _typeof(key) === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (_typeof(input) !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (_typeof(res) !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var Tab = /*#__PURE__*/function (_React$Component) {_inherits(Tab, _React$Component);var _super = _createSuper(Tab);
  function Tab(props) {var _this;_classCallCheck(this, Tab);
    _this = _super.call(this, props);
    _this.state = {
      favIcon: "",
      name: "",
      lastAccessed: "12/4 11:00",
      keywords: ["1", "2", "3"],
      annotations: []
    };

    _this.onHover = _this.onHover.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.click = _this.click.bind(_assertThisInitialized(_this));
    _this.dragStart = _this.dragStart.bind(_assertThisInitialized(_this));
    _this.dragOver = _this.dragOver.bind(_assertThisInitialized(_this));
    _this.dragOut = _this.dragOut.bind(_assertThisInitialized(_this));
    _this.drop = _this.drop.bind(_assertThisInitialized(_this));
    _this.resolveFavIconUrl = _this.resolveFavIconUrl.bind(_assertThisInitialized(_this));

    // this.receiveMessage = this.receiveMessage.bind(this);
    return _this;
  }_createClass(Tab, [{ key: "componentWillMount", value:
    function componentWillMount() {
      this.resolveFavIconUrl();
    } }, { key: "componentDidMount", value:
    function componentDidMount() {
      browser.runtime.onMessage.addListener(this.receiveMessage);
    }
    // receiveMessage(message, sender, sendResponse) {
    // 	if(message.command === 'sent_annotation' && message.url === this.props.tab.url){
    //     	console.log(message.highlighted_text);
    // 		console.log(message.url);
    // 		this.state.annotations.push({
    // 			url: message.url,
    // 			annotation: message.highlighted_text
    // 		});
    // }
    // }
  }, { key: "render", value: function render() {
      var children = [];
      if (this.props.layout == "vertical") {
        children.push( /*#__PURE__*/
        React.createElement("div", { key: "tab-pinned-" + this.props.tab.id, className: "tab-pinned " + (!this.props.tab.pinned ? "hidden" : "") }, "Pinned"));



        children.push( /*#__PURE__*/
        React.createElement("div", { key: "tab-highlighted-" + this.props.tab.id, className: "tab-highlighted " + (!this.props.tab.highlighted ? "hidden" : "") }, "Active"));



        children.push( /*#__PURE__*/
        React.createElement("div", { key: "tab-selected-" + this.props.tab.id, className: "tab-selected " + (!this.props.selected ? "hidden" : "") }, "Selected"));



        children.push( /*#__PURE__*/
        React.createElement("div", {
          key: "tab-icon-" + this.props.tab.id,
          className: "iconoverlay ",
          style: {
            backgroundImage: this.state.favIcon
          } }));


        children.push( /*#__PURE__*/
        React.createElement("div", { key: "tab-title-" + this.props.tab.id, className: "tabtitle" },
        this.props.tab.title));


      }


      if (this.props.layout == "tabable") {
        children.push( /*#__PURE__*/
        React.createElement("div", { "class": "holder" }, /*#__PURE__*/
        React.createElement("div", { "class": "row" }, /*#__PURE__*/
        React.createElement("div", { "class": "column" }, /*#__PURE__*/React.createElement("img", { src: this.props.tab.favIconUrl, className: "iconimage" })),
        this.state.annotations.length > 0 && /*#__PURE__*/React.createElement("div", { "class": "column" }, /*#__PURE__*/React.createElement("img", { src: "../images/annotation_marker.svg", width: "30", className: "annotation_marker" }))), /*#__PURE__*/

        React.createElement("div", { className: "name" }, this.props.tab.title), /*#__PURE__*/
        React.createElement("div", { className: "lastAccessed" }, "Accessed: ", this.state.lastAccessed), /*#__PURE__*/
        React.createElement("div", { className: "keywords" }, "Keywords: ", this.state.keywords.join(', '))));


      }

      var tabDom = {
        className:
        "icon tab " + (
        this.props.selected ? "selected " : "") + (
        this.props.tab.pinned ? "pinned " : "") + (
        this.props.tab.highlighted ? "highlighted " : "") + (
        this.props.hidden ? "hidden " : "") + (
        this.props.tab.mutedInfo && this.props.tab.mutedInfo.muted ? "muted " : "") + (
        this.props.tab.audible ? "audible " : "") + (
        this.props.tab.discarded ? "discarded " : "") + (
        this.props.layout == "vertical" ? "full " : "") + (
        this.props.tab.incognito ? "incognito " : "") + (
        this.state.draggingOver || "") + (
        this.props.searchActive ? "search-active " : "") +
        " tab-" +
        this.props.tab.id +
        " " + (
        this.props.layout == "vertical" ? "vertical " : "blocks "),
        style:
        this.props.layout == "tabable" ?
        {} :
        { backgroundImage: this.state.favIcon },


        id: this.props.id,
        title: this.props.tab.title,
        lastAccessed: this.state.lastAccessed,
        keywords: this.state.keywords,
        annotations: this.state.annotations,
        onClick: this.click,
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onHover
      };

      if (!!this.props.drag) {
        tabDom["onDragStart"] = this.dragStart;
        tabDom["onDragOver"] = this.dragOver;
        tabDom["onDragLeave"] = this.dragOut;
        tabDom["onDrop"] = this.drop;
        tabDom["draggable"] = "true";
      }

      return /*#__PURE__*/(
        React.createElement("div", tabDom,
        children, /*#__PURE__*/
        React.createElement("div", { className: "limiter" })));


    } }, { key: "onHover", value:
    function onHover(e) {
      this.props.hoverHandler(this.props.tab);
      this.resolveFavIconUrl();
    } }, { key: "onMouseDown", value:
    function onMouseDown(e) {
      if (e.button === 0) return;
      if (!this.props.drag) return;
      this.click(e);
    } }, { key: "click", value: function () {var _click = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee(e) {var tabId, windowId, currTime, time, activeTab, activeWindow;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                this.props.drag) {_context.next = 2;break;}return _context.abrupt("return");case 2:
                this.stopProp(e);

                tabId = this.props.tab.id;
                windowId = this.props.window.id;

                currTime = new Date();
                time = currTime.getMonth() + 1 + "/" + currTime.getDate() + " " + ("0" + currTime.getHours()).slice(-2) + ':' + currTime.getMinutes();
                this.setState({
                  lastAccessed: time
                });if (!(

                e.button === 1)) {_context.next = 12;break;}
                this.props.middleClick(tabId);_context.next = 23;break;case 12:if (!(
                e.button === 2 || e.nativeEvent.metaKey || e.nativeEvent.altKey || e.nativeEvent.shiftKey || e.nativeEvent.ctrlKey)) {_context.next = 16;break;}
                // console.log("right click!");
                this.props.select(tabId);
                // right click
                // e.preventDefault();
                // if (e.button === 2 && (e.nativeEvent.metaKey || e.nativeEvent.altKey || e.nativeEvent.shiftKey || e.nativeEvent.ctrlKey)) {
                // 	this.props.selectTo(tabId);
                // } else {
                // 	this.props.select(tabId);
                // }
                _context.next = 23;break;case 16:_context.next = 18;return (



                  browser.tabs.update(tabId, { active: true }));case 18:activeTab = _context.sent;_context.next = 21;return (
                  browser.windows.update(windowId, { focused: true }));case 21:activeWindow = _context.sent;
                console.log("".concat(activeWindow.id, ", ").concat(activeTab.id, " clicked"));case 23:return _context.abrupt("return",

                false);case 24:case "end":return _context.stop();}}}, _callee, this);}));function click(_x) {return _click.apply(this, arguments);}return click;}() }, { key: "dragStart", value:



    function dragStart(e) {
      if (!!this.props.drag) {
        e.dataTransfer.setData("Text", this.props.tab.id);
        e.dataTransfer.setData("text/uri-list", this.props.tab.url);
        this.props.drag(e, this.props.tab.id);
      } else {
        return false;
      }
    } }, { key: "dragOver", value:
    function dragOver(e) {
      this.stopProp(e);
      if (!this.props.drag) return;
      var before = this.state.draggingOver;
      if (this.props.layout == "vertical") {
        this.state.draggingOver = e.nativeEvent.offsetY > ReactDOM.findDOMNode(this).clientHeight / 2 ? "bottom" : "top";
      } else {
        this.state.draggingOver = e.nativeEvent.offsetX > ReactDOM.findDOMNode(this).clientWidth / 2 ? "right" : "left";
      }
      if (before != this.state.draggingOver) this.forceUpdate();
    } }, { key: "dragOut", value:
    function dragOut() {
      if (!this.props.drag) return;
      delete this.state.draggingOver;
      this.forceUpdate();
    } }, { key: "drop", value:
    function drop(e) {
      if (!!this.props.drop) {
        this.stopProp(e);
        var before = this.state.draggingOver == "top" || this.state.draggingOver == "left";
        delete this.state.draggingOver;
        this.props.drop(this.props.tab.id, before);
      } else {
        return false;
      }
    } }, { key: "resolveFavIconUrl", value: function () {var _resolveFavIconUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(
      function _callee2() {var image, favIcons, iconName;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                // firefox screenshots; needs <all_urls>
                // if(!!browser.tabs.captureTab) {
                // 	console.log("tabs captureTab");
                // 	image = await browser.tabs.captureTab(this.props.tab.id);
                // 	image = "url(" + image + ")";
                // }else
                if (this.props.tab.url.indexOf("chrome://") !== 0 && this.props.tab.url.indexOf("about:") !== 0) {
                  // chrome screenshots / only for active tabs; needs <all_urls>
                  // if(!!browser.tabs.captureVisibleTab && this.props.tab.highlighted) {
                  // 	console.log("tabsCapture");
                  // 	try {
                  // 		image = await browser.tabs.captureVisibleTab( this.props.window.id, {} );
                  // 		//console.log(image);
                  // 	} catch ( e ) {
                  // 		console.log(e.message);
                  // 	}
                  // 	image = "url(" + image + ")";
                  // }else{
                  image = this.props.tab.favIconUrl ? "url(" + this.props.tab.favIconUrl + ")" : "";
                  //}
                } else {
                  favIcons = ["bookmarks", "chrome", "crashes", "downloads", "extensions", "flags", "history", "settings"];
                  iconName = this.props.tab.url.slice(9).match(/^\w+/g);
                  image = !iconName || favIcons.indexOf(iconName[0]) < 0 ? "" : "url(../images/chrome/" + iconName[0] + ".png)";
                }
                this.setState({
                  favIcon: image
                });case 2:case "end":return _context2.stop();}}}, _callee2, this);}));function resolveFavIconUrl() {return _resolveFavIconUrl.apply(this, arguments);}return resolveFavIconUrl;}() }, { key: "stopProp", value:

    function stopProp(e) {
      if (e && e.nativeEvent) {
        e.nativeEvent.preventDefault();
        e.nativeEvent.stopPropagation();
      }
      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }
    } }]);return Tab;}(React.Component);