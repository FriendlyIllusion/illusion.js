Prefetch.js
===========

A proof of concept JS library that use browser link prefetching when the user click on a link to "load the page faster".
Dynamic creation of link prefetching only works in Chrome in Internet Explorer, for now.

## Installation

Using bower

bower install prefetch.js --save

## Usage

Add the following code and that's all

```
var prefetch = new Prefetch();
```

## Compatibility

* [Chrome 13+](https://web.archive.org/web/20140928205735/https://developers.google.com/chrome/whitepapers/prerender?csw=1)
* [Internet Explorer 9+](http://msdn.microsoft.com/en-us/library/ie/dn265039%28v=vs.85%29.aspx)
* Firefox support link prefetching since 3.5 but not dynamically
* Safari doesn't support link prefetching