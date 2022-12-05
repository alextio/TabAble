"use strict";
class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favIcon: "",
			name: "",
			lastAccessed: "12/4 11:00",
			keywords: ["1", "2", "3"],
			annotations: "",
		};

		this.onHover = this.onHover.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.click = this.click.bind(this);
		this.dragStart = this.dragStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.dragOut = this.dragOut.bind(this);
		this.drop = this.drop.bind(this);
		this.resolveFavIconUrl = this.resolveFavIconUrl.bind(this);

		// this.receiveMessage = this.receiveMessage.bind(this);

	}
	componentWillMount() {
		this.resolveFavIconUrl();
	}
	componentDidMount() {
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
	render() {
		var children = [];
		if (this.props.layout == "vertical") {
			children.push(
				<div key={"tab-pinned-" + this.props.tab.id} className={"tab-pinned " + (!this.props.tab.pinned ? "hidden" : "")}>
					Pinned
				</div>
			);
			children.push(
				<div key={"tab-highlighted-" + this.props.tab.id} className={"tab-highlighted " + (!this.props.tab.highlighted ? "hidden" : "")}>
					Active
				</div>
			);
			children.push(
				<div key={"tab-selected-" + this.props.tab.id} className={"tab-selected " + (!this.props.selected ? "hidden" : "")}>
					Selected
				</div>
			);
			children.push(
				<div
					key={"tab-icon-" + this.props.tab.id}
					className="iconoverlay "
					style={{
						backgroundImage: this.state.favIcon
					}}
				/>
			);
			children.push(
				<div key={"tab-title-" + this.props.tab.id} className="tabtitle">
					{this.props.tab.title}
				</div>
			);
		}


		if (this.props.layout == "tabable") {
			children.push(
				<div class="holder">
					<div class="row">
						<div class="column"><img src={this.props.tab.favIconUrl} className="iconimage"></img></div>
						{this.state.annotations.length > 0 && <div class="column"><img src="../images/annotation_marker.svg" width="30" className="annotation_marker"></img></div>}
					</div>
					<div className="name">{this.props.tab.title}</div>
					<div className="lastAccessed">Accessed: {this.state.lastAccessed}</div>
					<div className="keywords">Keywords: {this.props.annotations}</div>
				</div>
			);
		}

		var tabDom = {
			className:
				"icon tab " +
				(this.props.selected ? "selected " : "") +
				(this.props.tab.pinned ? "pinned " : "") +
				(this.props.tab.highlighted ? "highlighted " : "") +
				(this.props.hidden ? "hidden " : "") +
				((this.props.tab.mutedInfo && this.props.tab.mutedInfo.muted) ? "muted " : "") +
				(this.props.tab.audible ? "audible " : "") +
				(this.props.tab.discarded ? "discarded " : "") +
				(this.props.layout == "vertical" ? "full " : "") +
				(this.props.tab.incognito ? "incognito " : "") +
				(this.state.draggingOver || "") +
				(this.props.searchActive ? "search-active " : "") +
				" tab-" +
				this.props.tab.id +
				" " +
				(this.props.layout == "vertical" ? "vertical " : "blocks "),
			style: 
				(this.props.layout == "tabable"
					? { }
					: { backgroundImage: this.state.favIcon }
				)
			,
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

		return (
			<div {...tabDom}>
				{children}
				<div className="limiter" />
			</div>
		);
	}
	onHover(e) {
		this.props.hoverHandler(this.props.tab);
		this.resolveFavIconUrl();
	}
	onMouseDown(e) {
		if (e.button === 0) return;
		if (!this.props.drag) return;
		this.click(e);
	}
	async click(e) {
		if (!this.props.drag) return;
		this.stopProp(e);

		var tabId = this.props.tab.id;
		var windowId = this.props.window.id;

		var currTime = new Date();
		var time = currTime.getMonth()+1 + "/" + currTime.getDate() + " " + ("0" + currTime.getHours()).slice(-2) + ':' + currTime.getMinutes();
		this.setState({
			lastAccessed: time
		});
 
		if (e.button === 1) {
			this.props.middleClick(tabId);
		} else if (e.button === 2 || e.nativeEvent.metaKey || e.nativeEvent.altKey || e.nativeEvent.shiftKey || e.nativeEvent.ctrlKey) {
			// console.log("right click!");
			this.props.select(tabId);
			// right click
			// e.preventDefault();
			// if (e.button === 2 && (e.nativeEvent.metaKey || e.nativeEvent.altKey || e.nativeEvent.shiftKey || e.nativeEvent.ctrlKey)) {
			// 	this.props.selectTo(tabId);
			// } else {
			// 	this.props.select(tabId);
			// }
		} else {
			// left click
			// Go to clicked tab
			// TODO: Bubble these functions up to TabManager instead of calling them here.
			let activeTab = await browser.tabs.update(tabId, { active: true}); 
			let activeWindow = await browser.windows.update(windowId, {focused: true});
			console.log(`${activeWindow.id}, ${activeTab.id} clicked`);
		}
		return false;
	}


	dragStart(e) {
		if (!!this.props.drag) {
			e.dataTransfer.setData("Text", this.props.tab.id);
			e.dataTransfer.setData("text/uri-list", this.props.tab.url);
			this.props.drag(e, this.props.tab.id);
		} else {
			return false;
		}
	}
	dragOver(e) {
		this.stopProp(e);
		if (!this.props.drag) return;
		var before = this.state.draggingOver;
		if (this.props.layout == "vertical") {
			this.state.draggingOver = e.nativeEvent.offsetY > ReactDOM.findDOMNode(this).clientHeight / 2 ? "bottom" : "top";
		} else {
			this.state.draggingOver = e.nativeEvent.offsetX > ReactDOM.findDOMNode(this).clientWidth / 2 ? "right" : "left";
		}
		if (before != this.state.draggingOver) this.forceUpdate();
	}
	dragOut() {
		if (!this.props.drag) return;
		delete this.state.draggingOver;
		this.forceUpdate();
	}
	drop(e) {
		if (!!this.props.drop) {
			this.stopProp(e);
			var before = this.state.draggingOver == "top" || this.state.draggingOver == "left";
			delete this.state.draggingOver;
			this.props.drop(this.props.tab.id, before);
		} else {
			return false;
		}
	}
	async resolveFavIconUrl() {
		var image;
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
			var favIcons = ["bookmarks", "chrome", "crashes", "downloads", "extensions", "flags", "history", "settings"];
			var iconName = this.props.tab.url.slice(9).match(/^\w+/g);
			image = !iconName || favIcons.indexOf(iconName[0]) < 0 ? "" : "url(../images/chrome/" + iconName[0] + ".png)";
		}
		this.setState({
			favIcon: image
		});
	}
	stopProp(e) {
		if(e && e.nativeEvent) {
			e.nativeEvent.preventDefault();
			e.nativeEvent.stopPropagation();
		}
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
}