Prefetch.js
===========

A JS library that use [link prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) on links to preload the page before it's shown, therefore delivering the page faster to the user.
Link prefetching can be disabled by some ads blocker.

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
* Firefox 3.5+
* Safari doesn't support link prefetching
