# Manifest V3 Extension

> This project is a boilerplate project to allow you to quickly build an manifest v3 chrome extensions using TypeScript.

## Building

1.  Clone repo
2.  `npm install`
3.  `npm run dev` to compile once or `npm run watch` to run the dev task in watch mode
4.  `npm run build` to build a production (minified) version

## Installation

1.  Complete the steps to build the project above
2.  Go to [_chrome://extensions_](chrome://extensions) in Google Chrome
3.  With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dist_ folder from this repo
4.  Open chrome://inspect/#service-workers or chrome://serviceworker-internals to verify service worker activity and get access to the service worker background page
