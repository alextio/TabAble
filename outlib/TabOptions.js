"use strict";function _typeof(obj) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {return typeof obj;} : function (obj) {return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}, _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var

TabOptions = /*#__PURE__*/function (_React$Component) {_inherits(TabOptions, _React$Component);var _super = _createSuper(TabOptions);
  function TabOptions(props) {var _this;_classCallCheck(this, TabOptions);
    _this = _super.call(this, props);
    _this.state = {};return _this;
  }_createClass(TabOptions, [{ key: "logo", value:
    function logo() {
      var logo = [/*#__PURE__*/React.createElement("img", { src: "images/browsers.svg", style: { maxWidth: "3rem" } }), /*#__PURE__*/React.createElement("h2", null, "Tab Manager Plus ", "5.2.0")];

      return /*#__PURE__*/(
        React.createElement("div", { className: "logo-options" }, /*#__PURE__*/
        React.createElement("div", { className: "logo-box" }, logo)));


    } }, { key: "optionsSection", value:
    function optionsSection() {
      var opts = [/*#__PURE__*/
      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Tab options"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("input", {
        type: "number",
        onMouseEnter: this.props.tabLimitText,
        onChange: this.props.changeTabLimit,
        value: this.props.tabLimit,
        id: "enable_tabLimit",
        name: "enable_tabLimit" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.tabLimitText, htmlFor: "enable_tabLimit", style: { whiteSpace: "pre", lineHeight: "2rem" } }), /*#__PURE__*/
      React.createElement("label", { className: "textlabel", htmlFor: "enable_tabLimit", style: { textAlign: "", whiteSpace: "pre", lineHeight: "2rem" } }, "Limit Tabs Per Window"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Once you reach this number of tabs, Tab Manager will move new tabs to a new window instead. No more windows with 60 tabs open!", /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: 0 ( disabled )"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "Suggested value: 15")))), /*#__PURE__*/



      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Popup size"), /*#__PURE__*/
      React.createElement("div", { className: "option-description" }, "You can resize the popup here up to a maximum size of 800x600. This limitation is a browser limitation, and we cannot display a bigger popup due to this. If you want to have a better overview, instead you can right click on the Tab Manager Plus icon, and `open in own tab`. This will open the Tab Manager in a new tab."), /*#__PURE__*/




      React.createElement("div", { className: "toggle-box half-size float-right" }, /*#__PURE__*/
      React.createElement("label", { className: "textlabel", htmlFor: "enable_tabWidth", style: { textAlign: "", whiteSpace: "pre", lineHeight: "2rem" } }, "Popup Width"), /*#__PURE__*/


      React.createElement("input", {
        type: "number",
        min: "450",
        max: "800",
        step: "25",
        onMouseEnter: this.props.tabWidthText,
        onChange: this.props.changeTabWidth,
        value: this.props.tabWidth,
        id: "enable_tabWidth",
        name: "enable_tabWidth" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.tabWidthText, htmlFor: "enable_tabWidth", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("div", { className: "toggle-box half-size" }, /*#__PURE__*/
      React.createElement("label", { className: "textlabel", htmlFor: "enable_tabHeight", style: { textAlign: "", whiteSpace: "pre", lineHeight: "2rem" } }, "Popup Height"), /*#__PURE__*/


      React.createElement("input", {
        type: "number",
        min: "400",
        max: "600",
        step: "25",
        onMouseEnter: this.props.tabHeightText,
        onChange: this.props.changeTabHeight,
        value: this.props.tabHeight,
        id: "enable_tabHeight",
        name: "enable_tabHeight" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.tabHeightText, htmlFor: "enable_tabHeight", style: { whiteSpace: "pre", lineHeight: "2rem" } }))), /*#__PURE__*/


      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Window style"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.darkText,
        onChange: this.props.toggleDark,
        checked: this.props.dark,
        id: "dark_mode",
        name: "dark_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.darkText, htmlFor: "dark_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "dark_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Dark mode"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Dark mode, for working at night time. ", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: disabled"))), /*#__PURE__*/


      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.compactText,
        onChange: this.props.toggleCompact,
        checked: this.props.compact,
        id: "compact_mode",
        name: "compact_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.compactText, htmlFor: "compact_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "compact_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Compact mode"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Saves a little bit of space around the icons. Makes it less beautiful, but more space efficient. ", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: disabled"))), /*#__PURE__*/


      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.animationsText,
        onChange: this.props.toggleAnimations,
        checked: this.props.animations,
        id: "enable_animations",
        name: "enable_animations" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.animationsText, htmlFor: "enable_animations", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "enable_animations", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Animations"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Disables/enables animations and transitions in the popup. ", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: enabled"))), /*#__PURE__*/


      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.windowTitlesText,
        onChange: this.props.toggleWindowTitles,
        checked: this.props.windowTitles,
        id: "enable_windowTitles",
        name: "enable_windowTitles" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.windowTitlesText, htmlFor: "enable_windowTitles", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "enable_windowTitles", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Window titles"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Disables/enables window titles. ", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: enabled")))), /*#__PURE__*/



      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Session Management"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.sessionsText,
        onChange: this.props.toggleSessions,
        checked: this.props.sessionsFeature,
        id: "session_mode",
        name: "session_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.sessionsText, htmlFor: "session_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "session_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Save Windows for Later"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Allows you to save windows as sessions ( saved windows ). You can restore these saved windows later on. The restored windows won't have the history restored. This feature is currently in beta.", /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: disabled ( experimental feature )"))),


      this.props.sessionsFeature && /*#__PURE__*/React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("label", { className: "textlabel", htmlFor: "session_export", style: { whiteSpace: "pre", lineHeight: "2rem" } }, /*#__PURE__*/
      React.createElement("h4", null, "Export/Backup Sessions")), /*#__PURE__*/

      React.createElement("button", { type: "button", onMouseEnter: this.props.exportSessionsText, onClick: this.props.exportSessions, id: "session_export", name: "session_export" }, "Export/Backup Sessions"), /*#__PURE__*/


      React.createElement("label", { onMouseEnter: this.props.exportSessionsText, htmlFor: "session_export", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("div", { className: "option-description" }, "Allows you to backup your saved windows to an external file.")),

      this.props.sessionsFeature && /*#__PURE__*/React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("label", { className: "textlabel", htmlFor: "session_import", style: { whiteSpace: "pre", lineHeight: "2rem" } }, /*#__PURE__*/
      React.createElement("h4", null, "Import/Restore Sessions")), /*#__PURE__*/

      React.createElement("input", {
        type: "file",
        accept: "application/json",
        onMouseEnter: this.props.importSessionsText,
        onChange: this.props.importSessions,
        id: "session_import",
        name: "session_import",
        placeholder: "Import/Restore Sessions" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.importSessionsText, htmlFor: "session_import", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("div", { className: "option-description" }, "Allows you to restore your backup from an external file. The restored windows will be added to your current saved windows."))), /*#__PURE__*/




      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Popup icon"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.badgeText,
        onChange: this.props.toggleBadge,
        checked: this.props.badge,
        id: "badge_mode",
        name: "badge_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.badgeText, htmlFor: "badge_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "badge_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Count Tabs"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Shows you the number of open tabs over the Tab Manager icon in the top right of your browser.", /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: enabled"))), /*#__PURE__*/


      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.openInOwnTabText,
        onChange: this.props.toggleOpenInOwnTab,
        checked: this.props.openInOwnTab,
        id: "openinowntab_mode",
        name: "openinowntab_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.openInOwnTabText, htmlFor: "openinowntab_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "openinowntab_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Open in own Tab by default"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Opens the Tab Manager in own tab by default, instead of the popup.", /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: disabled")))), /*#__PURE__*/



      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Window settings"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.hideText,
        onChange: this.props.toggleHide,
        checked: this.props.hideWindows,
        id: "auto_hide",
        name: "auto_hide" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.hideText, htmlFor: "auto_hide", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "auto_hide", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Minimize inactive windows"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "With this option enabled, you will only have 1 open window per monitor at all times. When you switch to another window, the other windows will be minimized to the tray automatically.", /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: disabled"))), /*#__PURE__*/


      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox",
        onMouseEnter: this.props.tabActionsText,
        onChange: this.props.toggleTabActions,
        checked: this.props.tabactions,
        id: "tabactions_mode",
        name: "tabactions_mode" }), /*#__PURE__*/

      React.createElement("label", { onMouseEnter: this.props.tabActionsText, htmlFor: "tabactions_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } })), /*#__PURE__*/

      React.createElement("label", { className: "textlabel", htmlFor: "tabactions_mode", style: { whiteSpace: "pre", lineHeight: "2rem" } }, "Show action buttons"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "Displays buttons in every window for : opening a new tab, minimizing the window, assigning a color to the window and closing the window.", /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", null, "By default: enabled")))), /*#__PURE__*/



      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("h4", null, "Advanced settings"), /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("a", { href: "#", onClick: this.openIncognitoOptions }, "Allow in Incognito")), /*#__PURE__*/



      React.createElement("div", { className: "option-description" }, "If you also want to see your incognito tabs in the Tab Manager overview, then enable incognito access for this extension.")), /*#__PURE__*/



      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("a", { href: "#", onClick: this.openShortcuts }, "Change shortcut key"), /*#__PURE__*/


      React.createElement("div", { className: "option-description" }, "If you want to disable or change the shortcut key with which to open Tab Manager Plus, you can do so here."))), /*#__PURE__*/


      React.createElement("div", { className: "optionsBox" }, /*#__PURE__*/
      React.createElement("div", { className: "toggle-box" }, /*#__PURE__*/
      React.createElement("h4", null, "Right mouse button"), /*#__PURE__*/
      React.createElement("div", { className: "option-description" }, "With the right mouse button you can select tabs"), /*#__PURE__*/
      React.createElement("h4", null, "Shift+Right mouse button"), /*#__PURE__*/
      React.createElement("div", { className: "option-description" }, "While holding shift, and pressing the right mouse button you can select all tabs between the last selected tab and the current one"), /*#__PURE__*/


      React.createElement("h4", null, "Middle mouse button"), /*#__PURE__*/
      React.createElement("div", { className: "option-description" }, "With the middle mouse button you can close a tab"), /*#__PURE__*/
      React.createElement("h4", null, "[Enter / Return] button"), /*#__PURE__*/
      React.createElement("div", { className: "option-description" }, "With the return button you can switch to the currently selected tab, or move multiple selected tabs to a new window")))];






      return /*#__PURE__*/React.createElement("div", { className: "toggle-options" }, opts);
    } }, { key: "openIncognitoOptions", value:
    function openIncognitoOptions() {
      browser.tabs.create({
        url: "chrome://extensions/?id=cnkdjjdmfiffagllbiiilooaoofcoeff"
      });
    } }, { key: "openShortcuts", value:
    function openShortcuts() {
      browser.tabs.create({ url: "chrome://extensions/shortcuts" });
    } }, { key: "licenses", value:
    function licenses() {
      var licenses = [];
      licenses.push( /*#__PURE__*/
      React.createElement("div", { className: "license" }, "Tab Manager Plus is based on",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "https://github.com/dsc/Tab-Manager", target: "_blank", title: "Tab-Manager" }, "dsc/Tab-Manager"), ",",


      " ", /*#__PURE__*/
      React.createElement("a", { href: "https://github.com/joshperry/Tab-Manager", target: "_blank", title: "Tab-Manager" }, "joshperry/Tab-Manager"),

      " ", "and",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "https://github.com/JonasNo/Tab-Manager", target: "_blank", title: "Tab-Manager" }, "JonasNo/Tab-Manager"), ".", /*#__PURE__*/


      React.createElement("br", null), "Licensed by",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "http://creativecommons.org/licenses/by/3.0/", target: "_blank", title: " Mozilla Public License (MPL)" }, "MPLv2"), ". Icons made by",


      " ", /*#__PURE__*/
      React.createElement("a", { href: "http://www.freepik.com", title: "Freepik" }, "Freepik"),

      " ", "from",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "http://www.flaticon.com", title: "Flaticon" }, "www.flaticon.com"), ". Licensed by",


      " ", /*#__PURE__*/
      React.createElement("a", { href: "http://creativecommons.org/licenses/by/3.0/", target: "_blank", title: "Creative Commons BY 3.0" }, "CC 3.0 BY"), "."));






      return /*#__PURE__*/React.createElement("div", { className: "licenses" }, licenses);
    } }, { key: "render", value:
    function render() {
      var children = [];

      children.push(this.logo());
      children.push(this.optionsSection());
      children.push( /*#__PURE__*/React.createElement("div", { className: "clearfix" }));
      //children.push(React.createElement('h4', {}, this.props.getTip()));
      children.push(this.licenses());

      return /*#__PURE__*/(
        React.createElement("div", { className: "options-window" }, /*#__PURE__*/
        React.createElement("div", null, children)));


    } }]);return TabOptions;}(React.Component);