Prefetch.js
===========

A simple JavaScript library that use link prefetching on the mousedown event to cache the page before the user see it.

## Installation

Using bower

bower install prefetch.js --save

## Utilisation

Add the following code

```
var prefetch = new Prefetch();
```

## Compatibility

* [Chrome 13+](https://web.archive.org/web/20140928205735/https://developers.google.com/chrome/whitepapers/prerender?csw=1)
* [Internet Explorer 9+](http://msdn.microsoft.com/en-us/library/ie/dn265039%28v=vs.85%29.aspx)
* Firefox support link prefetching since 3.5 but not dynamically
* Safari doesn't support link prefetching