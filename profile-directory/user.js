// #region Requirements to work

// enables the userChrome.css and userContent.css files.
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true)
// enables the CSS :has() selector, required for style fixes.
user_pref('layout.css.has-selector.enabled', true)

// #endregion

// enables rounded corners
user_pref('custom.css.rounded-corners.enabled', true)

// removes tabs
user_pref('custom.css.no-tabs.enabled', true)

// enables border with rounded corners between devtools and browser window
// by default false because browser scrollbars can be less accessible by mouse
user_pref('custom.css.devtools-splitter.enabled', false)
