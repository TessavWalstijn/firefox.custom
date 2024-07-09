# Firefox.custom

Custom styling to make Firefox more like Arc and/or Edge

**NOTE: Mostly tested and worked in Ubuntu**

## How to install

> NOTE: Please have a side tab add-on installed on your Firefox before using this theme!!
>
> I recommend using [Sidebery](https://addons.mozilla.org/en-US/Firefox/addon/sidebery/)
>
> Others in no particular order
>
> - [Tab Center Reborn](https://addons.mozilla.org/en-US/Firefox/addon/tabcenter-reborn/)
> - [Sidebar Tabs](https://addons.mozilla.org/en-US/Firefox/addon/sidebartabs/)
> - [Sidetabs](https://addons.mozilla.org/en-US/Firefox/addon/sidetabs/)

1. Open a new tab with `about:support`
1. Open profile directory
1. Download this repository
1. Extract the files
1. Copy content from `profile-directory` in to the Firefox profile directory
1. [OPTIONAL] Follow [Sidebery installation](#additional-sidebery-installation)
1. Close and restart Firefox
1. If there is no change please check `about:config`
    - `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`
    - `layout.css.has-selector.enabled` to `true`
    - `custom.css.rounded-corners.enabled` default `true`
    - `custom.css.no-tabs.enabled` default `true`
    - `custom.css.devtools-splitter.enabled` default `false`

### Additional Sidebery installation

1. Install the [Sidebery](https://addons.mozilla.org/en-US/Firefox/addon/sidebery/) add-on
1. Copy `sidebery.json` in to the Firefox profile directory
1. Open the Sidebery settings
1. Go to `Styles Editor`
1. Copy the content of `custom-sidebar.css` in to the `Write custom CSS here...`

## Contributing

[Contributing](./CONTRIBUTING.md)

## Code of Conduct

[Code of Conduct](https://github.com/TessavWalstijn/tessavwalstijn/blob/master/CODE_OF_CONDUCT.md)

## License

[License](./LICENSE)
