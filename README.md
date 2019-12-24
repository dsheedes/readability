# Readablity
This is a jQuery plugin that returns an approximation of an article's difficulty and time to read.
## Prerequisites
This plugin was developed using jQuery 3.4.1 slim min, so it should be the most stable on this version.
Also, this plugin uses ES6, so some browsers might not support it.

## Usage
### Installation
Download `readability.js` and place in within your website's folder.

Include [jQuery](https://jquery.com/ "jQuery") to your website. (*Usually above `</body>` tag.*)

Include `readability.js` file below jQuery, but above `</body>` tag like so:
```html
...
<script src="path-to-file/readability.js"></script>
</body>
</html>
```

Your plugin is now ready to be used.

### How to use
This plugin will bind to an element and read it's textual contents. Don't worry because it filters out any html code.

You can bind to an element like so:
```javascript
$(element).readability();
```

Now, in order to process data, you also need to pass a function that will do so.

```javascript
$(element).readability(function(result){
//do something with result
});
```

The results that our plugin returns looks like this:
```javascript
result = {
	time: 0,
	readingEase: 0-100
}
```
- **result.time** - Approximation of time to read in minutes.
- **result.readingEase** - [Flesch reading ease formula](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests "Flesch reading ease formula") result. values from 0-100, 0 being hardest.

Feel free to check out the example `index.html` page in case you are struggling.
## Author
Plugin created by **Gvozden Despotovski**.
2019-12-24 21:21:42

## License 
MIT License, check [LICENSE.md](https://github.com/dsheedes/readability/blob/master/LICENSE "LICENSE.md") for more details.
