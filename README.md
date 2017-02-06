Prefetch.js
===========

A proof of concept JS library that dynamically use [link prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) when the user click on a link to preload the page.
Dynamic link prefetching only works in Chrome in Internet Explorer, for now.

## Installation

Using bower

```
bower install prefetch.js --save
```

## Usage

```
var prefetch = new Prefetch();
```

## Compatibility

* [Chrome 13+](https://www.chromium.org/developers/design-documents/prerender)
* [Internet Explorer 9+](http://msdn.microsoft.com/en-us/library/ie/dn265039%28v=vs.85%29.aspx)
* Firefox support link prefetching since 3.5 but not dynamically
* Safari doesn't support link prefetching