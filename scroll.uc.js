// ==UserScript==
// @name           userChrome.js
// @namespace      scrollbars_win10
// @note           Windows 10 style by /u/mrkwatz https://www.reddit.com/r/FirefoxCSS/comments/7fkha6/firefox_57_windows_10_uwp_style_overlay_scrollbars/
// @note           Brought to Firefox 57 by /u/Wiidesire https://www.reddit.com/r/firefox/comments/7f6kc4/floating_scrollbar_finally_possible_in_firefox_57/
// @note           userChrome.js https://github.com/nuchi/firefox-quantum-userchromejs
// @note           Forked from https://github.com/Endor8/userChrome.js/blob/master/floatingscrollbar/FloatingScrollbar.uc.js
// ==/UserScript==

(function () {    
    var css = `
		@namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
		:not(select):not(hbox) > scrollbar {
			-moz-appearance: none!important;
			position: relative!important;
			box-sizing: border-box!important;
			background-color: transparent;
			background-image: none;
			z-index: 2147483647;
			padding: 0px;
			display: flex!important;
			justify-content: flex-end;
			pointer-events: auto;
			width: auto!important}
		:not(select):not(hbox) > scrollbar thumb {
			-moz-appearance: none!important;
			border-radius: 0px!important;
			background-color: rgba(100, 100, 100, 0);
			pointer-events: auto
		}
		:not(select):not(hbox) > scrollbar[orient = "vertical"] {
			width: 16px!important;
			-moz-margin-start: -16px;/*margin to fill the whole render window with content and overlay the scrollbars*/}
		:not(select):not(hbox) > scrollbar[orient = "horizontal"] {
			height: 16px!important;
			margin-top: -16px}
		:not(select):not(hbox) > scrollbar[orient = "vertical"] thumb {
			border-left: 3px solid rgba(80, 80, 80, 0.75);
			min-height: 16px;
			transform: translate(11px, 0px);
			transition: transform 0.1s linear}
		:not(select):not(hbox) > scrollbar[orient = "horizontal"] thumb {
			border-top: 3px solid rgba(80, 80, 80, 0.75);
			min-width: 16px;
			transform: translate(0px, 11px);
			transition: transform 0.1s linear}
		:not(select):not(hbox) > scrollbar:hover {
			background-color: rgba(90, 90, 90, 0.15)}
		:not(select):not(hbox) > scrollbar:hover thumb {
			background-color: rgba(100, 100, 100, 0.5)!important;
			border-left: 0px;
			border-top: 0px;
			transform: translate(0px, 0px);
			transition: transform 0.1s linear}
		:not(select):not(hbox) > scrollbar thumb:hover {
			background-color: rgba(100, 100, 100, 0.8)!important}
		:not(select):not(hbox) > scrollbar thumb:active {
			background-color: rgba(110, 110, 110, 1)!important}
		:not(select):not(hbox) > scrollbar scrollbarbutton, :not(select):not(hbox) > scrollbar gripper {
			display: none}
	`;
	var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
	var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));

    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();