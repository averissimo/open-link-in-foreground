

//
// Open Selected Links web extension
//
// URL/Link helper extension, primarily for dealing with mass links.
// The extension adds context menus to handle links in various ways,
// especially bulk actions on multiple selected links
//

//
// Open selected links
//
// a context menu item that opens selected HTML links in background tabs.
// Since a background script can't see page content we have to ask
// the tab that was clicked to return it to us.
//
chrome.contextMenus.create( {
  id: "open-link-foreground",
  title: browser.i18n.getMessage("openLinkForeground"),
  contexts: [ "link" ],
  onclick: openLinkForeground
} );

function openLinkForeground( info, tab ) {
  // prior to bug 1250631 tab was part of the info object
  if ( !tab ) { tab = info.tab; }
  console.log('info', info);
  chrome.tabs.create({
    url: info.linkUrl,
    openerTabId: tab.id,
    active: true
  })
}
