/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/styles/style.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml, body {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow: hidden;\r\n    background-color: #000000;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.panel {\r\n    position: absolute;\r\n    left: 50px;\r\n    top: 50px;\r\n    width: 300px;\r\n    background-color: rgba(255, 255, 255, 0.1); \r\n    border: 1px;\r\n    border-radius: 10px;\r\n\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color: #f78300;\r\n}\r\n\r\n.title {\r\n    position: relative;\r\n    text-align: left;   \r\n    background-color: rgba(0, 0, 0, 0);\r\n    border-bottom: 1px solid #f78300;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.controls {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    padding: 5px 10px 10px 10px;\r\n}\r\n\r\n.controls span {\r\n    vertical-align: top;\r\n}\r\n\r\n.controls input {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    vertical-align: bottom;\r\n}\r\n\r\n.small {\r\n    display: block;\r\n    font-size: 11px;\r\n    padding: 0 0 0 5px;\r\n}\r\n\r\n.large {\r\n    font-size: 30px;\r\n    \r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./src/app/renderer.js");
/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics */ "./src/app/physics.js");
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/vector */ "./src/app/math/vector.js");
/* harmony import */ var _builders_starBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders/starBuilder */ "./src/app/builders/starBuilder.js");
/* harmony import */ var _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders/orbitingBodyBuilder */ "./src/app/builders/orbitingBodyBuilder.js");
/* harmony import */ var _objects_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/background */ "./src/app/objects/background.js");
/* harmony import */ var _images_backgrounds_default_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/backgrounds/default.jpg */ "./src/images/backgrounds/default.jpg");
/* harmony import */ var _images_backgrounds_default_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_backgrounds_default_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_planets_sun_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/planets/sun.png */ "./src/images/planets/sun.png");
/* harmony import */ var _images_planets_sun_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_planets_sun_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_planets_mercury_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/planets/mercury.png */ "./src/images/planets/mercury.png");
/* harmony import */ var _images_planets_mercury_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_planets_mercury_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_planets_venus_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/planets/venus.png */ "./src/images/planets/venus.png");
/* harmony import */ var _images_planets_venus_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_planets_venus_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_planets_earth_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/planets/earth.png */ "./src/images/planets/earth.png");
/* harmony import */ var _images_planets_earth_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_planets_earth_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_planets_moon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/planets/moon.png */ "./src/images/planets/moon.png");
/* harmony import */ var _images_planets_moon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_planets_moon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_planets_mars_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/planets/mars.png */ "./src/images/planets/mars.png");
/* harmony import */ var _images_planets_mars_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_planets_mars_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controller */ "./src/app/controller.js");


















class App {
    constructor(document, view, canvas, panel) {
        this.document = document;
        this.view = view;
        this.canvas = canvas;

        this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas);
        this.physics = new _physics__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.controller = new _controller__WEBPACK_IMPORTED_MODULE_13__["default"](this.view, this.canvas, panel, this.renderer, this.physics);

        this.lastUpdate = Date.now();

        this.objects = {};
        this.initialize();
    }

    initialize() {
        this.renderer.onResize(this.view.innerWidth, this.view.innerHeight);
        this.renderer.onMove(new _math_vector__WEBPACK_IMPORTED_MODULE_2__["default"](this.view.innerWidth / 2, this.view.innerHeight / 2));

        this.objects.background = new _objects_background__WEBPACK_IMPORTED_MODULE_5__["default"](_images_backgrounds_default_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);
        this.renderer.addRenderable(this.objects.background);

        this.objects.sun = new _builders_starBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](this.document)
            .withLabel("Sun")
            .withImage(_images_planets_sun_png__WEBPACK_IMPORTED_MODULE_7___default.a)
            .withMass(1.989e30)
            .withRadius(695700)
            .withAngularVelocity(1)
            .build();
        this.physics.addUpdateable(this.objects.sun);
        this.renderer.addRenderable(this.objects.sun);

        this.objects.mercury = new _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.document)
        .withLabel("Mercury")
        .withImage(_images_planets_mercury_png__WEBPACK_IMPORTED_MODULE_8___default.a)
        .withMass(3.3022e23)
        .withRadius(2439.7)
        .withAngularVelocity(1)
        .withParent(this.objects.sun)
        .withOrbitalParameters({
            semiMajorAxis: 57909050,
            eccentricity: 0.205630,
            meanAnomaly: 174.796,
            period: 87.969 * 24 * 60 * 60
        })
        .build();
        this.physics.addUpdateable(this.objects.mercury);
        this.renderer.addRenderable(this.objects.mercury);

        this.objects.venus = new _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.document)
        .withLabel("Venus")
        .withImage(_images_planets_venus_png__WEBPACK_IMPORTED_MODULE_9___default.a)
        .withMass(4.8685e24)
        .withRadius(6051.8)
        .withAngularVelocity(1)
        .withParent(this.objects.sun)
        .withOrbitalParameters({
            semiMajorAxis: 108208000,
            eccentricity: 0.006772,
            meanAnomaly: 50.115,
            period: 224.701 * 24 * 60 * 60
        })
        .build();
        this.physics.addUpdateable(this.objects.venus);
        this.renderer.addRenderable(this.objects.venus);


        this.objects.earth = new _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.document)
        .withLabel("Earth")
        .withImage(_images_planets_earth_png__WEBPACK_IMPORTED_MODULE_10___default.a)
        .withMass(5.9736e24)
        .withRadius(6000)
        .withAngularVelocity(1)
        .withParent(this.objects.sun)
        .withOrbitalParameters({
            semiMajorAxis: 149598023,
            eccentricity: 0.0167086,
            meanAnomaly: 358.617,
            period: 365.256363004 * 24 * 60 * 60
        })
        .build();
        this.physics.addUpdateable(this.objects.earth);
        this.renderer.addRenderable(this.objects.earth);

        this.objects.moon = new _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.document)
        .withLabel("Moon")
        .withImage(_images_planets_moon_png__WEBPACK_IMPORTED_MODULE_11___default.a)
        .withMass(7.349e22)
        .withRadius(1700)
        .withAngularVelocity(1)
        .withParent(this.objects.earth)
        .withOrbitalParameters({
            semiMajorAxis: 384399,
            eccentricity: 0.0549,
            meanAnomaly: 40.7,
            period: 60 * 60 * 24
        })
        .build();
        this.physics.addUpdateable(this.objects.moon);
        this.renderer.addRenderable(this.objects.moon);

        this.objects.earth = new _builders_orbitingBodyBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](this.document)
        .withLabel("Mars")
        .withImage(_images_planets_mars_png__WEBPACK_IMPORTED_MODULE_12___default.a)
        .withMass(6.4185e23)
        .withRadius(1794)
        .withAngularVelocity(1)
        .withParent(this.objects.sun)
        .withOrbitalParameters({
            semiMajorAxis: 227939200,
            eccentricity: 0.0934,
            meanAnomaly: 320.45776,
            period: 686.971 * 60 * 60 * 24
        })
        .build();
        this.physics.addUpdateable(this.objects.earth);
        this.renderer.addRenderable(this.objects.earth);
    }

    update(timeStep) {
        this.physics.update(timeStep);
        this.controller.update();
    }

    render() {
        this.renderer.render();
        this.view.requestAnimationFrame(() => this.render());
    }

    run() {
        const timeStep = 1.0 / 60.0;

        setInterval(() => {
            const now = Date.now();
            let deltaTime = (now - this.lastUpdate) / 1000.0;
            this.lastUpdate = now;

            let remainingDeltaTime = deltaTime;
            while(remainingDeltaTime > 0.0) {
                this.update(Math.min(timeStep, remainingDeltaTime));
                remainingDeltaTime -= timeStep;
            }
        }, 1000.0 / 60.0);

        this.view.requestAnimationFrame(() => this.render());
    }
}



/***/ }),

/***/ "./src/app/builders/bodyBuilder.js":
/*!*****************************************!*\
  !*** ./src/app/builders/bodyBuilder.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BodyBuilder; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector */ "./src/app/math/vector.js");
/* harmony import */ var _objects_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/body */ "./src/app/objects/body.js");



class BodyBuilder {
    constructor(document) {
        this.document = document;

        this.label = 'Unknown';
        this.image = null;
        this.mass = 0.0;
        this.radius = 0.0;
        this.positon = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.velocity = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.rotation = 0.0;
        this.angularVelocity = 0.0;
        this.parent = null;
    }

    withLabel(label) {
        this.label = label;
        return this;
    }

    withImage(image) {
        this.image = image;
        return this;
    }

    withMass(mass) {
        this.mass = mass;
        return this;
    }

    withRadius(radius) {
        this.radius = radius;
        return this;
    }

    withAngularVelocity(angularVelocity) {
        this.angularVelocity = angularVelocity;
        return this;
    }

    withParent(parent) {
        this.parent = parent;
        return this;
    }

    withPosition(position) {
        this.positon = position;
        return this;
    }

    build() {
        return new _objects_body__WEBPACK_IMPORTED_MODULE_1__["default"](
            this.label, this.image, this.document.createElement('canvas'), this.mass, 
            this.radius, this.positon, this.velocity, this.rotation, 
            this.angularVelocity
        );
    }
}

/***/ }),

/***/ "./src/app/builders/orbitingBodyBuilder.js":
/*!*************************************************!*\
  !*** ./src/app/builders/orbitingBodyBuilder.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrbitingBodyBuilder; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector */ "./src/app/math/vector.js");
/* harmony import */ var _bodyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyBuilder */ "./src/app/builders/bodyBuilder.js");
/* harmony import */ var _objects_orbitingBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/orbitingBody */ "./src/app/objects/orbitingBody.js");




class OrbitingBodyBuilder extends _bodyBuilder__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(document) {
        super(document);
        this.orbitPrediction = {
            eccentricity: 0,
            semiMajorAxis: 0,
            meanAnomaly: 0,
            period: 0
        }
    }

    withOrbitalParameters(orbitalParameters) {
        this.orbitalParameters = orbitalParameters;
        return this;
    }

    build() {
        return new _objects_orbitingBody__WEBPACK_IMPORTED_MODULE_2__["default"](
            this.label, this.image, this.document.createElement('canvas'), this.mass, 
            this.radius, this.positon, this.velocity, this.rotation,
            this.angularVelocity, this.parent, this.orbitalParameters
        );
    }
}

/***/ }),

/***/ "./src/app/builders/starBuilder.js":
/*!*****************************************!*\
  !*** ./src/app/builders/starBuilder.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StarBuilder; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector */ "./src/app/math/vector.js");
/* harmony import */ var _bodyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyBuilder */ "./src/app/builders/bodyBuilder.js");
/* harmony import */ var _objects_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/star */ "./src/app/objects/star.js");




class StarBuilder extends _bodyBuilder__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(document) {
        super(document);
    }

    build() {
        return new _objects_star__WEBPACK_IMPORTED_MODULE_2__["default"](
            this.label, this.image, this.document.createElement('canvas'), this.mass, 
            this.radius, this.positon, this.velocity, this.rotation,
            this.angularVelocity, this.parent, 
        );
    }
}

/***/ }),

/***/ "./src/app/controller.js":
/*!*******************************!*\
  !*** ./src/app/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/vector */ "./src/app/math/vector.js");


class Controller {
    constructor(view, canvas, panel, renderer, physics) {
        this.view = view;
        this.canvas = canvas;
        this.panel = panel;
        this.simulationStarDate = this.panel.querySelector('.simulationStarDate');
        this.simulationSpeedSelector = this.panel.querySelector('.simulationSpeedSelector');
        this.simulationSpeedValue = this.panel.querySelector('.simulationSpeedValue');
        this.renderer = renderer;
        this.physics = physics;
        
        this.lastMousePosition = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.isRightMouseDown = false;

        this.setupCallbacks();

        this.simulationSpeedSelector.value = 1.0;
        this.setSimulationSpeed();
    }

    
    setupCallbacks() {
        this.view.addEventListener('resize', () => this.resize());
        this.view.addEventListener('contextmenu', (event) => event.preventDefault());

        this.canvas.addEventListener('wheel', (event) => this.changeScale(event));
        this.canvas.addEventListener('mousedown', (event) => this.mouseDown(event));
        this.canvas.addEventListener('mousemove', (event) => this.mouseMove(event), false);
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event));
        this.canvas.addEventListener('mouseout', () => this.mouseOut());

        this.simulationSpeedSelector.addEventListener('input', () => this.setSimulationSpeed());
    }

    resize() {
        this.renderer.onResize(this.view.innerWidth, this.view.innerHeight)
    }

    changeScale(event) {
        this.renderer.onChangeScale(-Math.abs(event.deltaY) / event.deltaY, this.lastMousePosition)
    }

    mouseDown(event) {
        switch(event.button) {
        case 2:
            this.isRightMouseDown = true;
            break;
        default:
        }
    }

    mouseMove(event) {
        const movement = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](event.movementX, event.movementY);
        this.lastMousePosition = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](event.clientX, event.clientY);

        if(this.isRightMouseDown) {
            this.renderer.onMove(movement);
        }
    }

    mouseUp(event) {
        switch(event.button) {
        case 2:
            this.isRightMouseDown = false;
            break;
        default:
        }
    }

    mouseOut() {
        this.isRightMouseDown = false;
    }

    setSimulationSpeed() {
        const simulationSpeedSelectorValue = this.simulationSpeedSelector.value;
        if(simulationSpeedSelectorValue != 0) {
            const direction = Math.abs(this.simulationSpeedSelector.value) / this.simulationSpeedSelector.value;
            const simulationSpeed = direction * Math.pow(10, Math.abs(this.simulationSpeedSelector.value - 1 * direction));
            this.physics.onSimulationSpeedChanged(simulationSpeed);
            this.simulationSpeedValue.textContent = `Current simulation speed: ${direction + " * 10^" + Math.abs(this.simulationSpeedSelector.value - 1 * direction)}`;
        }
        else {
            this.physics.onSimulationSpeedChanged(0);
            this.simulationSpeedValue.textContent = `Current simulation speed: Paused`;
        }
    }

    update() {
        const currentDate = new Date(this.physics.totalElapsedTime * 1000);
        const options = { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric' 
        };
        this.simulationStarDate.textContent = `Current date: ${currentDate.toLocaleDateString("en-US", options)}`;
    }
}

/***/ }),

/***/ "./src/app/math/constants.js":
/*!***********************************!*\
  !*** ./src/app/math/constants.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    G: 6.67408e-11,
    AU: 14960000
});

/***/ }),

/***/ "./src/app/math/vector.js":
/*!********************************!*\
  !*** ./src/app/math/vector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2D; });
class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    multiply(constant) {
        return new Vector2D(this.x * constant, this.y * constant);
    }

    divide(constant) {
        return new Vector2D(this.x / constant, this.y / constant);
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize() {
        const length = this.length();
        this.x /= length;
        this.y /= length;
    }
}

/***/ }),

/***/ "./src/app/objects/background.js":
/*!***************************************!*\
  !*** ./src/app/objects/background.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
class Background {
    constructor(image) {
        this.image = new Image();
        this.image.src = image;
    }

    onUpdate(timeStep, totalElapsedTime) {
        
    }

    onRender(context, properties) {
        context.clearRect(0, 0, properties.viewWidth, properties.viewHeight);
        context.drawImage(this.image, 0, 0, properties.viewWidth, properties.viewHeight);
    }
}

/***/ }),

/***/ "./src/app/objects/body.js":
/*!*********************************!*\
  !*** ./src/app/objects/body.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Body; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector */ "./src/app/math/vector.js");


class Body {
    constructor(label, image, imageCanvas, mass, radius, position, velocity, rotation, angularVelocity, parent) {
        this.label = label;
        this.imageCanvas = imageCanvas;
        this.imageCanvasContext = this.imageCanvas.getContext('2d');
        this.image = this.prepareImage(image);
        this.mass = mass;
        this.radius = radius;
        this.position = position;
        this.velocity = velocity;
        this.rotation = rotation;
        this.angularVelocity = angularVelocity;
        this.parent = parent;
    }

    onRender(context, properties) {
        if(this.isBodyVisible(properties)) {
            this.renderImage(context, properties);
            this.renderArc(context, properties);
            this.renderLabel(context, properties);
        }
    }

    onUpdate(timeStep, totalElapsedTime) {
        this.position = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](this.position.x + this.velocity.x * timeStep, this.position.y + this.velocity.y * timeStep);
        this.rotation = (this.rotation + this.angularVelocity * timeStep) % 360;
    }

    isBodyVisible(properties) {
        const minBounds = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const maxBounds = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](properties.viewWidth, properties.viewHeight);
        const position = this.getAbsolutePosition(properties);
        const radius = this.radius * properties.scale;
        if(position.x + radius < minBounds.x || position.x - radius > maxBounds.x || position.y + radius < minBounds.y || position.y - radius > maxBounds.y) {
            return false;
        }
        return true;
    }

    prepareImage(imageSource) {
        const image = new Image();
        image.src = imageSource;
        image.addEventListener('load', () => {
            this.imageCanvas.width = image.width;
            this.imageCanvas.height = image.height;
        });

        return image;
    }

    getAbsolutePosition(properties) {
        let absolutePosition = null;
        if(this.parent) {
            const parentAbsolutePosition = this.parent.getAbsolutePosition(properties);
            absolutePosition = parentAbsolutePosition.add(this.position.multiply(properties.scale));
        }
        else {
            absolutePosition = this.position.add(properties.offset).multiply(properties.scale);
        }

        return new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](Math.floor(absolutePosition.x), Math.floor(absolutePosition.y));
    }

    renderArc(context, properties) {
        const absolutePosition = this.getAbsolutePosition(properties);
        context.beginPath();
        context.fillStyle = properties.defaultFillStyle;
        context.strokeStyle = properties.defaultStrokeStyle;
        context.arc(
            absolutePosition.x,
            absolutePosition.y,
            5, 0, 2 * Math.PI
        );
        context.stroke();
        context.fill();
        context.closePath();
    }

    renderImage(context, properties) {
        const absolutePosition = this.getAbsolutePosition(properties);

        this.imageCanvasContext.save();
        this.imageCanvasContext.translate(this.imageCanvas.width / 2, this.imageCanvas.height / 2);
        this.imageCanvasContext.rotate(this.rotation * Math.PI / 180);
        this.imageCanvasContext.drawImage(this.image, Math.floor(-this.imageCanvas.width / 2), Math.floor(-this.imageCanvas.height / 2));
        this.imageCanvasContext.restore();

        const scaledRadius = Math.floor(this.radius * properties.scale);
        context.drawImage(
            this.imageCanvas,
            absolutePosition.x - scaledRadius,
            absolutePosition.y - scaledRadius,
            2 * scaledRadius,
            2 * scaledRadius
        );
    }

    renderLabel(context, properties) {
        const absolutePosition = this.getAbsolutePosition(properties);
        const startTextPointOffset = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](20, -25);
        const endTextPointOffset = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](100, -25);
        context.beginPath();
        context.fillStyle = properties.defaultFillStyle;
        context.strokeStyle = properties.defaultStrokeStyle;

        context.moveTo(absolutePosition.x, absolutePosition.y);
        context.lineTo(absolutePosition.x + startTextPointOffset.x, absolutePosition.y + startTextPointOffset.y);
        context.lineTo(absolutePosition.x + endTextPointOffset.x, absolutePosition.y + endTextPointOffset.y)

        context.font = properties.defaultFontStyle;
        context.fillText(
            this.label, 
            Math.floor(absolutePosition.x + startTextPointOffset.x * 1.5), 
            Math.floor(absolutePosition.y + startTextPointOffset.y / 3.0)
        );

        context.stroke();
        context.closePath();
    }
}

/***/ }),

/***/ "./src/app/objects/orbitingBody.js":
/*!*****************************************!*\
  !*** ./src/app/objects/orbitingBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrbitingBody; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/app/objects/body.js");
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector */ "./src/app/math/vector.js");
/* harmony import */ var _math_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/constants */ "./src/app/math/constants.js");




class OrbitingBody extends _body__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(label, image, imageCanvas, mass, radius, position, velocity, rotation, angularVelocity, parent, orbitalParameters) {
        super(label, image, imageCanvas, mass, radius, position, velocity, rotation, angularVelocity, parent);
        this.orbitalParameters = orbitalParameters;
        
        this.orbitPrediction = this.calculateOrbitPrediction();
        this.visibleOrbitPredictionPoints = [];
        
        this.position = this.orbitPrediction[0];

        this.lastOffset = new _math_vector__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.lastScale = 0.0;
    }

    onRender(context, properties) {
        this.visibleOrbitPredictionPoints = this.calculateVisibleOrbitPredictionPoints(properties);
        this.renderOrbitPrediction(context, properties);
        super.onRender(context, properties);
    }

    onUpdate(timeStep, totalElapsedTime) {
        const stateVectors = this.getStateVectors(totalElapsedTime);
        this.position = stateVectors.position;
        this.velocity = stateVectors.velocity;
        this.rotation += this.angularVelocity * timeStep;
    }

    calculateVisibleOrbitPredictionPoints(properties) {      
        const minBounds = new _math_vector__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const maxBounds = new _math_vector__WEBPACK_IMPORTED_MODULE_1__["default"](properties.viewWidth, properties.viewHeight);
        const parentAbsolutePosition = this.parent.getAbsolutePosition(properties);
        let foundFirstOutOfBoundsPoint = false;
        let lastOutOfBoundsPointIndex = null;

        const visibleOrbitPredictionPoints = [];
        this.orbitPrediction.forEach((point, index) => {
            point = point.multiply(properties.scale).add(parentAbsolutePosition);
            if(point.x >= minBounds.x && point.x <= maxBounds.x && point.y >= minBounds.y && point.y <= maxBounds.y) {
                visibleOrbitPredictionPoints.push(index);

                if(index + 1 == this.orbitPrediction.length) {
                    visibleOrbitPredictionPoints.push(0);
                } else if(lastOutOfBoundsPointIndex) {
                    visibleOrbitPredictionPoints.push(lastOutOfBoundsPointIndex);
                }
                foundFirstOutOfBoundsPoint = false;
                lastOutOfBoundsPointIndex = null;
            }
            else if(!foundFirstOutOfBoundsPoint && visibleOrbitPredictionPoints.length) {
                foundFirstOutOfBoundsPoint = true;
                visibleOrbitPredictionPoints.push(index);
            }
            else {
                lastOutOfBoundsPointIndex = index;
            }
        });
        return visibleOrbitPredictionPoints;
    }

    getStateVectors(totalElapsedTime) {
        const e = this.orbitalParameters.eccentricity;
        const a = this.orbitalParameters.semiMajorAxis;
        const M = (this.orbitalParameters.meanAnomaly + Math.PI * 2 * totalElapsedTime / this.orbitalParameters.period) % Math.PI * 2;

        // Eccentric anomaly
        let E = M;
        while (true)
        {
            let E_next = E - (E - e * Math.sin(E) - M) / (1.0 - e * Math.cos(E));
            let delta = E_next - E;
            E = E_next;
            if(Math.abs(delta) < 1e-8) {
                break;
            }
        }

        // True anomaly
        const halfE = E * 0.5;
        const v = Math.atan2(Math.sqrt(1.0 + e) * Math.sin(halfE), Math.sqrt(1.0 - e) * Math.cos(halfE)) * 2;

        // Distance to central body
        const r = a * (1.0 - e * Math.cos(E));

        // Vectors relative to orbital plane
        const term = Math.sqrt(a * _math_constants__WEBPACK_IMPORTED_MODULE_2__["default"].G * parent.mass) / r;

        return {
            position: new _math_vector__WEBPACK_IMPORTED_MODULE_1__["default"](r * Math.cos(v), -r * Math.sin(v)),
            velocity: new _math_vector__WEBPACK_IMPORTED_MODULE_1__["default"](term * - Math.sin(E), -term * Math.sqrt(1.0 - e * e) * Math.cos(E))
        };
    }

    calculateOrbitPrediction() {
        this.orbitPrediction = [];
        for (let time = 0.0; time < this.orbitalParameters.period / 2; time += this.orbitalParameters.period / (2 * 1800)) {
            const stateVectors = this.getStateVectors(time);
            this.orbitPrediction.push(stateVectors.position);
        }

        return this.orbitPrediction;
    }

    renderOrbitPrediction(context, properties) {
        const parentAbsolutePosition = this.parent.getAbsolutePosition(properties);

        if(this.visibleOrbitPredictionPoints.length) {      
            context.beginPath();
            context.strokeStyle = properties.defaultStrokeStyle;
            this.visibleOrbitPredictionPoints.forEach((visibleIndex) => {
                const sourcePoint = this.orbitPrediction[visibleIndex];
                context.moveTo(
                    parentAbsolutePosition.x + sourcePoint.x * properties.scale, 
                    parentAbsolutePosition.y + sourcePoint.y * properties.scale
                );

                if(this.visibleOrbitPredictionPoints.includes((visibleIndex + 1) % this.orbitPrediction.length)) {                   
                    const targetPoint = this.orbitPrediction[(visibleIndex + 1) % this.orbitPrediction.length];
                    context.lineTo(parentAbsolutePosition.x + targetPoint.x * properties.scale, parentAbsolutePosition.y + targetPoint.y * properties.scale);
                }
            });
            context.stroke();
            context.closePath();
        }
    }
}

/***/ }),

/***/ "./src/app/objects/star.js":
/*!*********************************!*\
  !*** ./src/app/objects/star.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/app/objects/body.js");


class Star extends _body__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(label, image, imageCanvas, mass, radius, position, velocity, rotation, angularVelocity, parent) {
        super(label, image, imageCanvas, mass, radius, position, velocity, rotation, angularVelocity, parent);
    }

    onRender(context, properties) {
        super.onRender(context, properties);
    }

    onUpdate(timeStep, totalElapsedTime) {
        super.onUpdate(timeStep, totalElapsedTime);
    }
}

/***/ }),

/***/ "./src/app/physics.js":
/*!****************************!*\
  !*** ./src/app/physics.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Physics; });
class Physics {
    constructor() {
        this.totalElapsedTime = Math.round(new Date().getTime() / 1000);
        this.simulationSpeed = 1;
        this.updatables = []
    }

    addUpdateable(updatable) {
        this.updatables.push(updatable);
    }

    update(timeStep) {
        timeStep *= this.simulationSpeed;
        this.totalElapsedTime +=  timeStep;
        this.updatables.forEach((updatable) => {
            updatable.onUpdate(timeStep, this.totalElapsedTime);
        });
    } 

    onSimulationSpeedChanged(simulationSpeed) {
        this.simulationSpeed = simulationSpeed;
    }
}

/***/ }),

/***/ "./src/app/renderer.js":
/*!*****************************!*\
  !*** ./src/app/renderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/vector */ "./src/app/math/vector.js");


class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.context.imageSmoothingEnabled = true;

        this.scrollStep = 0.2;
        this.minScroll = 1e-1,
        this.maxScroll = 1e-10;

        this.width = 0;
        this.height = 0;
        this.scale = 1e-6;
        this.moveStep = 1.0;

        this.offset = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"]();
        
        this.defaultFillStyle = 'white';
        this.defaultStrokeStyle = 'white';
        this.defaultFontStyle = '18px Calibri';
        this.renderables = [];
    }

    addRenderable(renderable) {
        this.renderables.push(renderable);
    }

    render() {
        const properties = {
            viewWidth: this.width,
            viewHeight: this.height,
            scale: this.scale,
            offset: this.offset,
            defaultFillStyle: this.defaultFillStyle,
            defaultStrokeStyle: this.defaultStrokeStyle,
            defaultFontStyle: this.defaultFontStyle
        };

        this.renderables.forEach((renderable) => {
            renderable.onRender(this.context, properties);
        });
    }

    onResize(width, height) {
        this.canvas.width = this.width = width;
        this.canvas.height = this.height = height;
    }

    onChangeScale(direction, mousePosition) {
        const currentPosition = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](mousePosition.x / this.scale - this.offset.x, mousePosition.y / this.scale - this.offset.y);
        this.scale = Math.min(this.minScroll, Math.max(this.maxScroll, this.scrollStep * this.scale * direction + this.scale));
        const newPosition = new _math_vector__WEBPACK_IMPORTED_MODULE_0__["default"](mousePosition.x / this.scale - this.offset.x, mousePosition.y / this.scale - this.offset.y);
        
        const displacement = newPosition.subtract(currentPosition);
        this.offset = this.offset.add(displacement);
    }

    onMove(offset) {
        this.offset = this.offset.add(offset.multiply(this.moveStep / this.scale));
    }
}

/***/ }),

/***/ "./src/images/backgrounds/default.jpg":
/*!********************************************!*\
  !*** ./src/images/backgrounds/default.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba284e1cca6572c3206e3fe813dd75ba.jpg";

/***/ }),

/***/ "./src/images/planets/earth.png":
/*!**************************************!*\
  !*** ./src/images/planets/earth.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "808d0d966aa0c93fe32cb03067d9f26b.png";

/***/ }),

/***/ "./src/images/planets/mars.png":
/*!*************************************!*\
  !*** ./src/images/planets/mars.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d768f96eb89473d7d51cc8f92175fa3.png";

/***/ }),

/***/ "./src/images/planets/mercury.png":
/*!****************************************!*\
  !*** ./src/images/planets/mercury.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "47204e58a6cb2d1bcbcd74c48bf7e024.png";

/***/ }),

/***/ "./src/images/planets/moon.png":
/*!*************************************!*\
  !*** ./src/images/planets/moon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "22de366448394d440c427cebccc6694c.png";

/***/ }),

/***/ "./src/images/planets/sun.png":
/*!************************************!*\
  !*** ./src/images/planets/sun.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db8a7e61ee87952db2142632df38240b.png";

/***/ }),

/***/ "./src/images/planets/venus.png":
/*!**************************************!*\
  !*** ./src/images/planets/venus.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e61b4b486e8e684a3beff78533d3395.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);



(() => {
    const canvas = document.querySelector('canvas');
    const panel = document.querySelector('.panel');
    const app = new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"](document, document.defaultView, canvas, panel);
    app.run();
})();



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/styles/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYnVpbGRlcnMvYm9keUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9idWlsZGVycy9vcmJpdGluZ0JvZHlCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYnVpbGRlcnMvc3RhckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWF0aC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYXRoL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29iamVjdHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29iamVjdHMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29iamVjdHMvb3JiaXRpbmdCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvb2JqZWN0cy9zdGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFja2dyb3VuZHMvZGVmYXVsdC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wbGFuZXRzL2VhcnRoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5ldHMvbWFycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wbGFuZXRzL21lcmN1cnkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGxhbmV0cy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5ldHMvc3VuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5ldHMvdmVudXMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz82ZDA4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUE2QixtQkFBbUIsa0JBQWtCLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsS0FBSyxjQUFjLHlCQUF5QixrQ0FBa0MsS0FBSyxnQkFBZ0Isb0JBQW9CLHFCQUFxQixLQUFLLGdCQUFnQiwyQkFBMkIsbUJBQW1CLGtCQUFrQixxQkFBcUIsbURBQW1ELHFCQUFxQiw0QkFBNEIsMEZBQTBGLHVCQUF1QixLQUFLLGdCQUFnQiwyQkFBMkIseUJBQXlCLDhDQUE4Qyx5Q0FBeUMsMEJBQTBCLEtBQUssbUJBQW1CLDJDQUEyQyxvQ0FBb0MsS0FBSyx3QkFBd0IsNEJBQTRCLEtBQUsseUJBQXlCLDJDQUEyQywrQkFBK0IsS0FBSyxnQkFBZ0IsdUJBQXVCLHdCQUF3QiwyQkFBMkIsS0FBSyxnQkFBZ0Isd0JBQXdCLGFBQWE7O0FBRTFxQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsb0ZBQW9GO0FBQ3JLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGlEQUFpRDtBQUNoSDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM5REEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1BEOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwcHg7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxcclxcbiAgICBib3JkZXI6IDFweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiAjZjc4MzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjc4MzAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2xzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMgc3BhbiB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyBpbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5zbWFsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL3BoeXNpY3MnO1xyXG5cclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vbWF0aC92ZWN0b3InO1xyXG5cclxuaW1wb3J0IFN0YXJCdWlsZGVyIGZyb20gJy4vYnVpbGRlcnMvc3RhckJ1aWxkZXInO1xyXG5pbXBvcnQgT3JiaXRpbmdCb2R5QnVpbGRlciBmcm9tICcuL2J1aWxkZXJzL29yYml0aW5nQm9keUJ1aWxkZXInO1xyXG5cclxuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9vYmplY3RzL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gJy4uL2ltYWdlcy9iYWNrZ3JvdW5kcy9kZWZhdWx0LmpwZyc7XHJcbmltcG9ydCBTdW5JbWFnZSBmcm9tICcuLi9pbWFnZXMvcGxhbmV0cy9zdW4ucG5nJztcclxuaW1wb3J0IE1lcmN1cnlJbWFnZSBmcm9tICcuLi9pbWFnZXMvcGxhbmV0cy9tZXJjdXJ5LnBuZyc7XHJcbmltcG9ydCBWZW51c0ltYWdlIGZyb20gJy4uL2ltYWdlcy9wbGFuZXRzL3ZlbnVzLnBuZyc7XHJcbmltcG9ydCBFYXJ0aEltYWdlIGZyb20gJy4uL2ltYWdlcy9wbGFuZXRzL2VhcnRoLnBuZyc7XHJcbmltcG9ydCBNb29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3BsYW5ldHMvbW9vbi5wbmcnO1xyXG5pbXBvcnQgTWFyc0ltYWdlIGZyb20gJy4uL2ltYWdlcy9wbGFuZXRzL21hcnMucG5nJztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgdmlldywgY2FudmFzLCBwYW5lbCkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MgPSBuZXcgUGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRoaXMudmlldywgdGhpcy5jYW52YXMsIHBhbmVsLCB0aGlzLnJlbmRlcmVyLCB0aGlzLnBoeXNpY3MpO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIub25SZXNpemUodGhpcy52aWV3LmlubmVyV2lkdGgsIHRoaXMudmlldy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5vbk1vdmUobmV3IFZlY3RvcjJEKHRoaXMudmlldy5pbm5lcldpZHRoIC8gMiwgdGhpcy52aWV3LmlubmVySGVpZ2h0IC8gMikpO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdHMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKEJhY2tncm91bmRJbWFnZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRSZW5kZXJhYmxlKHRoaXMub2JqZWN0cy5iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnN1biA9IG5ldyBTdGFyQnVpbGRlcih0aGlzLmRvY3VtZW50KVxyXG4gICAgICAgICAgICAud2l0aExhYmVsKFwiU3VuXCIpXHJcbiAgICAgICAgICAgIC53aXRoSW1hZ2UoU3VuSW1hZ2UpXHJcbiAgICAgICAgICAgIC53aXRoTWFzcygxLjk4OWUzMClcclxuICAgICAgICAgICAgLndpdGhSYWRpdXMoNjk1NzAwKVxyXG4gICAgICAgICAgICAud2l0aEFuZ3VsYXJWZWxvY2l0eSgxKVxyXG4gICAgICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkVXBkYXRlYWJsZSh0aGlzLm9iamVjdHMuc3VuKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZFJlbmRlcmFibGUodGhpcy5vYmplY3RzLnN1bik7XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5tZXJjdXJ5ID0gbmV3IE9yYml0aW5nQm9keUJ1aWxkZXIodGhpcy5kb2N1bWVudClcclxuICAgICAgICAud2l0aExhYmVsKFwiTWVyY3VyeVwiKVxyXG4gICAgICAgIC53aXRoSW1hZ2UoTWVyY3VyeUltYWdlKVxyXG4gICAgICAgIC53aXRoTWFzcygzLjMwMjJlMjMpXHJcbiAgICAgICAgLndpdGhSYWRpdXMoMjQzOS43KVxyXG4gICAgICAgIC53aXRoQW5ndWxhclZlbG9jaXR5KDEpXHJcbiAgICAgICAgLndpdGhQYXJlbnQodGhpcy5vYmplY3RzLnN1bilcclxuICAgICAgICAud2l0aE9yYml0YWxQYXJhbWV0ZXJzKHtcclxuICAgICAgICAgICAgc2VtaU1ham9yQXhpczogNTc5MDkwNTAsXHJcbiAgICAgICAgICAgIGVjY2VudHJpY2l0eTogMC4yMDU2MzAsXHJcbiAgICAgICAgICAgIG1lYW5Bbm9tYWx5OiAxNzQuNzk2LFxyXG4gICAgICAgICAgICBwZXJpb2Q6IDg3Ljk2OSAqIDI0ICogNjAgKiA2MFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJ1aWxkKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZFVwZGF0ZWFibGUodGhpcy5vYmplY3RzLm1lcmN1cnkpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkUmVuZGVyYWJsZSh0aGlzLm9iamVjdHMubWVyY3VyeSk7XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0cy52ZW51cyA9IG5ldyBPcmJpdGluZ0JvZHlCdWlsZGVyKHRoaXMuZG9jdW1lbnQpXHJcbiAgICAgICAgLndpdGhMYWJlbChcIlZlbnVzXCIpXHJcbiAgICAgICAgLndpdGhJbWFnZShWZW51c0ltYWdlKVxyXG4gICAgICAgIC53aXRoTWFzcyg0Ljg2ODVlMjQpXHJcbiAgICAgICAgLndpdGhSYWRpdXMoNjA1MS44KVxyXG4gICAgICAgIC53aXRoQW5ndWxhclZlbG9jaXR5KDEpXHJcbiAgICAgICAgLndpdGhQYXJlbnQodGhpcy5vYmplY3RzLnN1bilcclxuICAgICAgICAud2l0aE9yYml0YWxQYXJhbWV0ZXJzKHtcclxuICAgICAgICAgICAgc2VtaU1ham9yQXhpczogMTA4MjA4MDAwLFxyXG4gICAgICAgICAgICBlY2NlbnRyaWNpdHk6IDAuMDA2NzcyLFxyXG4gICAgICAgICAgICBtZWFuQW5vbWFseTogNTAuMTE1LFxyXG4gICAgICAgICAgICBwZXJpb2Q6IDIyNC43MDEgKiAyNCAqIDYwICogNjBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5idWlsZCgpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGRVcGRhdGVhYmxlKHRoaXMub2JqZWN0cy52ZW51cyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRSZW5kZXJhYmxlKHRoaXMub2JqZWN0cy52ZW51cyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm9iamVjdHMuZWFydGggPSBuZXcgT3JiaXRpbmdCb2R5QnVpbGRlcih0aGlzLmRvY3VtZW50KVxyXG4gICAgICAgIC53aXRoTGFiZWwoXCJFYXJ0aFwiKVxyXG4gICAgICAgIC53aXRoSW1hZ2UoRWFydGhJbWFnZSlcclxuICAgICAgICAud2l0aE1hc3MoNS45NzM2ZTI0KVxyXG4gICAgICAgIC53aXRoUmFkaXVzKDYwMDApXHJcbiAgICAgICAgLndpdGhBbmd1bGFyVmVsb2NpdHkoMSlcclxuICAgICAgICAud2l0aFBhcmVudCh0aGlzLm9iamVjdHMuc3VuKVxyXG4gICAgICAgIC53aXRoT3JiaXRhbFBhcmFtZXRlcnMoe1xyXG4gICAgICAgICAgICBzZW1pTWFqb3JBeGlzOiAxNDk1OTgwMjMsXHJcbiAgICAgICAgICAgIGVjY2VudHJpY2l0eTogMC4wMTY3MDg2LFxyXG4gICAgICAgICAgICBtZWFuQW5vbWFseTogMzU4LjYxNyxcclxuICAgICAgICAgICAgcGVyaW9kOiAzNjUuMjU2MzYzMDA0ICogMjQgKiA2MCAqIDYwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkVXBkYXRlYWJsZSh0aGlzLm9iamVjdHMuZWFydGgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkUmVuZGVyYWJsZSh0aGlzLm9iamVjdHMuZWFydGgpO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdHMubW9vbiA9IG5ldyBPcmJpdGluZ0JvZHlCdWlsZGVyKHRoaXMuZG9jdW1lbnQpXHJcbiAgICAgICAgLndpdGhMYWJlbChcIk1vb25cIilcclxuICAgICAgICAud2l0aEltYWdlKE1vb25JbWFnZSlcclxuICAgICAgICAud2l0aE1hc3MoNy4zNDllMjIpXHJcbiAgICAgICAgLndpdGhSYWRpdXMoMTcwMClcclxuICAgICAgICAud2l0aEFuZ3VsYXJWZWxvY2l0eSgxKVxyXG4gICAgICAgIC53aXRoUGFyZW50KHRoaXMub2JqZWN0cy5lYXJ0aClcclxuICAgICAgICAud2l0aE9yYml0YWxQYXJhbWV0ZXJzKHtcclxuICAgICAgICAgICAgc2VtaU1ham9yQXhpczogMzg0Mzk5LFxyXG4gICAgICAgICAgICBlY2NlbnRyaWNpdHk6IDAuMDU0OSxcclxuICAgICAgICAgICAgbWVhbkFub21hbHk6IDQwLjcsXHJcbiAgICAgICAgICAgIHBlcmlvZDogNjAgKiA2MCAqIDI0XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkVXBkYXRlYWJsZSh0aGlzLm9iamVjdHMubW9vbik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRSZW5kZXJhYmxlKHRoaXMub2JqZWN0cy5tb29uKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmVhcnRoID0gbmV3IE9yYml0aW5nQm9keUJ1aWxkZXIodGhpcy5kb2N1bWVudClcclxuICAgICAgICAud2l0aExhYmVsKFwiTWFyc1wiKVxyXG4gICAgICAgIC53aXRoSW1hZ2UoTWFyc0ltYWdlKVxyXG4gICAgICAgIC53aXRoTWFzcyg2LjQxODVlMjMpXHJcbiAgICAgICAgLndpdGhSYWRpdXMoMTc5NClcclxuICAgICAgICAud2l0aEFuZ3VsYXJWZWxvY2l0eSgxKVxyXG4gICAgICAgIC53aXRoUGFyZW50KHRoaXMub2JqZWN0cy5zdW4pXHJcbiAgICAgICAgLndpdGhPcmJpdGFsUGFyYW1ldGVycyh7XHJcbiAgICAgICAgICAgIHNlbWlNYWpvckF4aXM6IDIyNzkzOTIwMCxcclxuICAgICAgICAgICAgZWNjZW50cmljaXR5OiAwLjA5MzQsXHJcbiAgICAgICAgICAgIG1lYW5Bbm9tYWx5OiAzMjAuNDU3NzYsXHJcbiAgICAgICAgICAgIHBlcmlvZDogNjg2Ljk3MSAqIDYwICogNjAgKiAyNFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJ1aWxkKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZFVwZGF0ZWFibGUodGhpcy5vYmplY3RzLmVhcnRoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZFJlbmRlcmFibGUodGhpcy5vYmplY3RzLmVhcnRoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZVN0ZXApIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlKHRpbWVTdGVwKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgdGltZVN0ZXAgPSAxLjAgLyA2MC4wO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YVRpbWUgPSAobm93IC0gdGhpcy5sYXN0VXBkYXRlKSAvIDEwMDAuMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gbm93O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ0RlbHRhVGltZSA9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgd2hpbGUocmVtYWluaW5nRGVsdGFUaW1lID4gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShNYXRoLm1pbih0aW1lU3RlcCwgcmVtYWluaW5nRGVsdGFUaW1lKSk7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmdEZWx0YVRpbWUgLT0gdGltZVN0ZXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwLjAgLyA2MC4wKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcigpKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvdmVjdG9yJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vb2JqZWN0cy9ib2R5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keUJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSAnVW5rbm93bic7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tYXNzID0gMC4wO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gMC4wO1xyXG4gICAgICAgIHRoaXMucG9zaXRvbiA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMC4wO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gMC4wO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB3aXRoTGFiZWwobGFiZWwpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgd2l0aEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHdpdGhNYXNzKG1hc3MpIHtcclxuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHdpdGhSYWRpdXMocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgd2l0aEFuZ3VsYXJWZWxvY2l0eShhbmd1bGFyVmVsb2NpdHkpIHtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSA9IGFuZ3VsYXJWZWxvY2l0eTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB3aXRoUGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHdpdGhQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9keShcclxuICAgICAgICAgICAgdGhpcy5sYWJlbCwgdGhpcy5pbWFnZSwgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSwgdGhpcy5tYXNzLCBcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIHRoaXMucG9zaXRvbiwgdGhpcy52ZWxvY2l0eSwgdGhpcy5yb3RhdGlvbiwgXHJcbiAgICAgICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL3ZlY3Rvcic7XHJcbmltcG9ydCBCb2R5QnVpbGRlciBmcm9tICcuL2JvZHlCdWlsZGVyJztcclxuaW1wb3J0IE9yYml0aW5nQm9keSBmcm9tICcuLi9vYmplY3RzL29yYml0aW5nQm9keSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmJpdGluZ0JvZHlCdWlsZGVyIGV4dGVuZHMgQm9keUJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICBzdXBlcihkb2N1bWVudCk7XHJcbiAgICAgICAgdGhpcy5vcmJpdFByZWRpY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGVjY2VudHJpY2l0eTogMCxcclxuICAgICAgICAgICAgc2VtaU1ham9yQXhpczogMCxcclxuICAgICAgICAgICAgbWVhbkFub21hbHk6IDAsXHJcbiAgICAgICAgICAgIHBlcmlvZDogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aXRoT3JiaXRhbFBhcmFtZXRlcnMob3JiaXRhbFBhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLm9yYml0YWxQYXJhbWV0ZXJzID0gb3JiaXRhbFBhcmFtZXRlcnM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPcmJpdGluZ0JvZHkoXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwsIHRoaXMuaW1hZ2UsIHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksIHRoaXMubWFzcywgXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCB0aGlzLnBvc2l0b24sIHRoaXMudmVsb2NpdHksIHRoaXMucm90YXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5LCB0aGlzLnBhcmVudCwgdGhpcy5vcmJpdGFsUGFyYW1ldGVyc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC92ZWN0b3InO1xyXG5pbXBvcnQgQm9keUJ1aWxkZXIgZnJvbSAnLi9ib2R5QnVpbGRlcic7XHJcbmltcG9ydCBTdGFyIGZyb20gJy4uL29iamVjdHMvc3Rhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyQnVpbGRlciBleHRlbmRzIEJvZHlCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RhcihcclxuICAgICAgICAgICAgdGhpcy5sYWJlbCwgdGhpcy5pbWFnZSwgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSwgdGhpcy5tYXNzLCBcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIHRoaXMucG9zaXRvbiwgdGhpcy52ZWxvY2l0eSwgdGhpcy5yb3RhdGlvbixcclxuICAgICAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHksIHRoaXMucGFyZW50LCBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL21hdGgvdmVjdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsIGNhbnZhcywgcGFuZWwsIHJlbmRlcmVyLCBwaHlzaWNzKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnBhbmVsID0gcGFuZWw7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uU3RhckRhdGUgPSB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy5zaW11bGF0aW9uU3RhckRhdGUnKTtcclxuICAgICAgICB0aGlzLnNpbXVsYXRpb25TcGVlZFNlbGVjdG9yID0gdGhpcy5wYW5lbC5xdWVyeVNlbGVjdG9yKCcuc2ltdWxhdGlvblNwZWVkU2VsZWN0b3InKTtcclxuICAgICAgICB0aGlzLnNpbXVsYXRpb25TcGVlZFZhbHVlID0gdGhpcy5wYW5lbC5xdWVyeVNlbGVjdG9yKCcuc2ltdWxhdGlvblNwZWVkVmFsdWUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzID0gcGh5c2ljcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy5pc1JpZ2h0TW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDYWxsYmFja3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uU3BlZWRTZWxlY3Rvci52YWx1ZSA9IDEuMDtcclxuICAgICAgICB0aGlzLnNldFNpbXVsYXRpb25TcGVlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc2V0dXBDYWxsYmFja3MoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZVNjYWxlKGV2ZW50KSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLm1vdXNlRG93bihldmVudCkpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4gdGhpcy5tb3VzZU1vdmUoZXZlbnQpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4gdGhpcy5tb3VzZVVwKGV2ZW50KSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLm1vdXNlT3V0KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnNpbXVsYXRpb25TcGVlZFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy5zZXRTaW11bGF0aW9uU3BlZWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIub25SZXNpemUodGhpcy52aWV3LmlubmVyV2lkdGgsIHRoaXMudmlldy5pbm5lckhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTY2FsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIub25DaGFuZ2VTY2FsZSgtTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSAvIGV2ZW50LmRlbHRhWSwgdGhpcy5sYXN0TW91c2VQb3NpdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURvd24oZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQuYnV0dG9uKSB7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB0aGlzLmlzUmlnaHRNb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBtb3ZlbWVudCA9IG5ldyBWZWN0b3IyRChldmVudC5tb3ZlbWVudFgsIGV2ZW50Lm1vdmVtZW50WSk7XHJcbiAgICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IG5ldyBWZWN0b3IyRChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1JpZ2h0TW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIub25Nb3ZlKG1vdmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5idXR0b24pIHtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHRoaXMuaXNSaWdodE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLmlzUmlnaHRNb3VzZURvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaW11bGF0aW9uU3BlZWQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2ltdWxhdGlvblNwZWVkU2VsZWN0b3JWYWx1ZSA9IHRoaXMuc2ltdWxhdGlvblNwZWVkU2VsZWN0b3IudmFsdWU7XHJcbiAgICAgICAgaWYoc2ltdWxhdGlvblNwZWVkU2VsZWN0b3JWYWx1ZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGguYWJzKHRoaXMuc2ltdWxhdGlvblNwZWVkU2VsZWN0b3IudmFsdWUpIC8gdGhpcy5zaW11bGF0aW9uU3BlZWRTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2ltdWxhdGlvblNwZWVkID0gZGlyZWN0aW9uICogTWF0aC5wb3coMTAsIE1hdGguYWJzKHRoaXMuc2ltdWxhdGlvblNwZWVkU2VsZWN0b3IudmFsdWUgLSAxICogZGlyZWN0aW9uKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5vblNpbXVsYXRpb25TcGVlZENoYW5nZWQoc2ltdWxhdGlvblNwZWVkKTtcclxuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uU3BlZWRWYWx1ZS50ZXh0Q29udGVudCA9IGBDdXJyZW50IHNpbXVsYXRpb24gc3BlZWQ6ICR7ZGlyZWN0aW9uICsgXCIgKiAxMF5cIiArIE1hdGguYWJzKHRoaXMuc2ltdWxhdGlvblNwZWVkU2VsZWN0b3IudmFsdWUgLSAxICogZGlyZWN0aW9uKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzLm9uU2ltdWxhdGlvblNwZWVkQ2hhbmdlZCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uU3BlZWRWYWx1ZS50ZXh0Q29udGVudCA9IGBDdXJyZW50IHNpbXVsYXRpb24gc3BlZWQ6IFBhdXNlZGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGh5c2ljcy50b3RhbEVsYXBzZWRUaW1lICogMTAwMCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvblN0YXJEYXRlLnRleHRDb250ZW50ID0gYEN1cnJlbnQgZGF0ZTogJHtjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX1gO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgRzogNi42NzQwOGUtMTEsXHJcbiAgICBBVTogMTQ5NjAwMDBcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjdG9yLngsIHRoaXMueSArIHZlY3Rvci55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAtIHZlY3Rvci54LCB0aGlzLnkgLSB2ZWN0b3IueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHkoY29uc3RhbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIGNvbnN0YW50LCB0aGlzLnkgKiBjb25zdGFudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2aWRlKGNvbnN0YW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLyBjb25zdGFudCwgdGhpcy55IC8gY29uc3RhbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCwgMikgKyBNYXRoLnBvdyh0aGlzLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUodGltZVN0ZXAsIHRvdGFsRWxhcHNlZFRpbWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblJlbmRlcihjb250ZXh0LCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcHJvcGVydGllcy52aWV3V2lkdGgsIHByb3BlcnRpZXMudmlld0hlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgcHJvcGVydGllcy52aWV3V2lkdGgsIHByb3BlcnRpZXMudmlld0hlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL21hdGgvdmVjdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBpbWFnZSwgaW1hZ2VDYW52YXMsIG1hc3MsIHJhZGl1cywgcG9zaXRpb24sIHZlbG9jaXR5LCByb3RhdGlvbiwgYW5ndWxhclZlbG9jaXR5LCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5pbWFnZUNhbnZhcyA9IGltYWdlQ2FudmFzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDYW52YXNDb250ZXh0ID0gdGhpcy5pbWFnZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLnByZXBhcmVJbWFnZShpbWFnZSk7XHJcbiAgICAgICAgdGhpcy5tYXNzID0gbWFzcztcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSA9IGFuZ3VsYXJWZWxvY2l0eTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbmRlcihjb250ZXh0LCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0JvZHlWaXNpYmxlKHByb3BlcnRpZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW1hZ2UoY29udGV4dCwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQXJjKGNvbnRleHQsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxhYmVsKGNvbnRleHQsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSh0aW1lU3RlcCwgdG90YWxFbGFwc2VkVGltZSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMkQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ICogdGltZVN0ZXAsIHRoaXMucG9zaXRpb24ueSArIHRoaXMudmVsb2NpdHkueSAqIHRpbWVTdGVwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gKHRoaXMucm90YXRpb24gKyB0aGlzLmFuZ3VsYXJWZWxvY2l0eSAqIHRpbWVTdGVwKSAlIDM2MDtcclxuICAgIH1cclxuXHJcbiAgICBpc0JvZHlWaXNpYmxlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBtaW5Cb3VuZHMgPSBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgICBjb25zdCBtYXhCb3VuZHMgPSBuZXcgVmVjdG9yMkQocHJvcGVydGllcy52aWV3V2lkdGgsIHByb3BlcnRpZXMudmlld0hlaWdodCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldEFic29sdXRlUG9zaXRpb24ocHJvcGVydGllcyk7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gdGhpcy5yYWRpdXMgKiBwcm9wZXJ0aWVzLnNjYWxlO1xyXG4gICAgICAgIGlmKHBvc2l0aW9uLnggKyByYWRpdXMgPCBtaW5Cb3VuZHMueCB8fCBwb3NpdGlvbi54IC0gcmFkaXVzID4gbWF4Qm91bmRzLnggfHwgcG9zaXRpb24ueSArIHJhZGl1cyA8IG1pbkJvdW5kcy55IHx8IHBvc2l0aW9uLnkgLSByYWRpdXMgPiBtYXhCb3VuZHMueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVJbWFnZShpbWFnZVNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFic29sdXRlUG9zaXRpb24ocHJvcGVydGllcykge1xyXG4gICAgICAgIGxldCBhYnNvbHV0ZVBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRBYnNvbHV0ZVBvc2l0aW9uID0gdGhpcy5wYXJlbnQuZ2V0QWJzb2x1dGVQb3NpdGlvbihwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgYWJzb2x1dGVQb3NpdGlvbiA9IHBhcmVudEFic29sdXRlUG9zaXRpb24uYWRkKHRoaXMucG9zaXRpb24ubXVsdGlwbHkocHJvcGVydGllcy5zY2FsZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWJzb2x1dGVQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHByb3BlcnRpZXMub2Zmc2V0KS5tdWx0aXBseShwcm9wZXJ0aWVzLnNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQoTWF0aC5mbG9vcihhYnNvbHV0ZVBvc2l0aW9uLngpLCBNYXRoLmZsb29yKGFic29sdXRlUG9zaXRpb24ueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckFyYyhjb250ZXh0LCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgY29uc3QgYWJzb2x1dGVQb3NpdGlvbiA9IHRoaXMuZ2V0QWJzb2x1dGVQb3NpdGlvbihwcm9wZXJ0aWVzKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcGVydGllcy5kZWZhdWx0RmlsbFN0eWxlO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wZXJ0aWVzLmRlZmF1bHRTdHJva2VTdHlsZTtcclxuICAgICAgICBjb250ZXh0LmFyYyhcclxuICAgICAgICAgICAgYWJzb2x1dGVQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBhYnNvbHV0ZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIDUsIDAsIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW1hZ2UoY29udGV4dCwgcHJvcGVydGllcykge1xyXG4gICAgICAgIGNvbnN0IGFic29sdXRlUG9zaXRpb24gPSB0aGlzLmdldEFic29sdXRlUG9zaXRpb24ocHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VDYW52YXNDb250ZXh0LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmltYWdlQ2FudmFzQ29udGV4dC50cmFuc2xhdGUodGhpcy5pbWFnZUNhbnZhcy53aWR0aCAvIDIsIHRoaXMuaW1hZ2VDYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5pbWFnZUNhbnZhc0NvbnRleHQucm90YXRlKHRoaXMucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICB0aGlzLmltYWdlQ2FudmFzQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgTWF0aC5mbG9vcigtdGhpcy5pbWFnZUNhbnZhcy53aWR0aCAvIDIpLCBNYXRoLmZsb29yKC10aGlzLmltYWdlQ2FudmFzLmhlaWdodCAvIDIpKTtcclxuICAgICAgICB0aGlzLmltYWdlQ2FudmFzQ29udGV4dC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlZFJhZGl1cyA9IE1hdGguZmxvb3IodGhpcy5yYWRpdXMgKiBwcm9wZXJ0aWVzLnNjYWxlKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNhbnZhcyxcclxuICAgICAgICAgICAgYWJzb2x1dGVQb3NpdGlvbi54IC0gc2NhbGVkUmFkaXVzLFxyXG4gICAgICAgICAgICBhYnNvbHV0ZVBvc2l0aW9uLnkgLSBzY2FsZWRSYWRpdXMsXHJcbiAgICAgICAgICAgIDIgKiBzY2FsZWRSYWRpdXMsXHJcbiAgICAgICAgICAgIDIgKiBzY2FsZWRSYWRpdXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxhYmVsKGNvbnRleHQsIHByb3BlcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBhYnNvbHV0ZVBvc2l0aW9uID0gdGhpcy5nZXRBYnNvbHV0ZVBvc2l0aW9uKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGV4dFBvaW50T2Zmc2V0ID0gbmV3IFZlY3RvcjJEKDIwLCAtMjUpO1xyXG4gICAgICAgIGNvbnN0IGVuZFRleHRQb2ludE9mZnNldCA9IG5ldyBWZWN0b3IyRCgxMDAsIC0yNSk7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BlcnRpZXMuZGVmYXVsdEZpbGxTdHlsZTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcGVydGllcy5kZWZhdWx0U3Ryb2tlU3R5bGU7XHJcblxyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGFic29sdXRlUG9zaXRpb24ueCwgYWJzb2x1dGVQb3NpdGlvbi55KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhhYnNvbHV0ZVBvc2l0aW9uLnggKyBzdGFydFRleHRQb2ludE9mZnNldC54LCBhYnNvbHV0ZVBvc2l0aW9uLnkgKyBzdGFydFRleHRQb2ludE9mZnNldC55KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhhYnNvbHV0ZVBvc2l0aW9uLnggKyBlbmRUZXh0UG9pbnRPZmZzZXQueCwgYWJzb2x1dGVQb3NpdGlvbi55ICsgZW5kVGV4dFBvaW50T2Zmc2V0LnkpXHJcblxyXG4gICAgICAgIGNvbnRleHQuZm9udCA9IHByb3BlcnRpZXMuZGVmYXVsdEZvbnRTdHlsZTtcclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLCBcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihhYnNvbHV0ZVBvc2l0aW9uLnggKyBzdGFydFRleHRQb2ludE9mZnNldC54ICogMS41KSwgXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoYWJzb2x1dGVQb3NpdGlvbi55ICsgc3RhcnRUZXh0UG9pbnRPZmZzZXQueSAvIDMuMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL21hdGgvdmVjdG9yXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL21hdGgvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmJpdGluZ0JvZHkgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBpbWFnZSwgaW1hZ2VDYW52YXMsIG1hc3MsIHJhZGl1cywgcG9zaXRpb24sIHZlbG9jaXR5LCByb3RhdGlvbiwgYW5ndWxhclZlbG9jaXR5LCBwYXJlbnQsIG9yYml0YWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgc3VwZXIobGFiZWwsIGltYWdlLCBpbWFnZUNhbnZhcywgbWFzcywgcmFkaXVzLCBwb3NpdGlvbiwgdmVsb2NpdHksIHJvdGF0aW9uLCBhbmd1bGFyVmVsb2NpdHksIHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5vcmJpdGFsUGFyYW1ldGVycyA9IG9yYml0YWxQYXJhbWV0ZXJzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub3JiaXRQcmVkaWN0aW9uID0gdGhpcy5jYWxjdWxhdGVPcmJpdFByZWRpY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vcmJpdFByZWRpY3Rpb25bMF07XHJcblxyXG4gICAgICAgIHRoaXMubGFzdE9mZnNldCA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMubGFzdFNjYWxlID0gMC4wO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVuZGVyKGNvbnRleHQsIHByb3BlcnRpZXMpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMgPSB0aGlzLmNhbGN1bGF0ZVZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMocHJvcGVydGllcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJPcmJpdFByZWRpY3Rpb24oY29udGV4dCwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgc3VwZXIub25SZW5kZXIoY29udGV4dCwgcHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUodGltZVN0ZXAsIHRvdGFsRWxhcHNlZFRpbWUpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZVZlY3RvcnMgPSB0aGlzLmdldFN0YXRlVmVjdG9ycyh0b3RhbEVsYXBzZWRUaW1lKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhdGVWZWN0b3JzLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBzdGF0ZVZlY3RvcnMudmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLmFuZ3VsYXJWZWxvY2l0eSAqIHRpbWVTdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMocHJvcGVydGllcykgeyAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1pbkJvdW5kcyA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIGNvbnN0IG1heEJvdW5kcyA9IG5ldyBWZWN0b3IyRChwcm9wZXJ0aWVzLnZpZXdXaWR0aCwgcHJvcGVydGllcy52aWV3SGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBwYXJlbnRBYnNvbHV0ZVBvc2l0aW9uID0gdGhpcy5wYXJlbnQuZ2V0QWJzb2x1dGVQb3NpdGlvbihwcm9wZXJ0aWVzKTtcclxuICAgICAgICBsZXQgZm91bmRGaXJzdE91dE9mQm91bmRzUG9pbnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbGFzdE91dE9mQm91bmRzUG9pbnRJbmRleCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9yYml0UHJlZGljdGlvbi5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcG9pbnQgPSBwb2ludC5tdWx0aXBseShwcm9wZXJ0aWVzLnNjYWxlKS5hZGQocGFyZW50QWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmKHBvaW50LnggPj0gbWluQm91bmRzLnggJiYgcG9pbnQueCA8PSBtYXhCb3VuZHMueCAmJiBwb2ludC55ID49IG1pbkJvdW5kcy55ICYmIHBvaW50LnkgPD0gbWF4Qm91bmRzLnkpIHtcclxuICAgICAgICAgICAgICAgIHZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMucHVzaChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggKyAxID09IHRoaXMub3JiaXRQcmVkaWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsYXN0T3V0T2ZCb3VuZHNQb2ludEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZU9yYml0UHJlZGljdGlvblBvaW50cy5wdXNoKGxhc3RPdXRPZkJvdW5kc1BvaW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm91bmRGaXJzdE91dE9mQm91bmRzUG9pbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhc3RPdXRPZkJvdW5kc1BvaW50SW5kZXggPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIWZvdW5kRmlyc3RPdXRPZkJvdW5kc1BvaW50ICYmIHZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZEZpcnN0T3V0T2ZCb3VuZHNQb2ludCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlT3JiaXRQcmVkaWN0aW9uUG9pbnRzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFzdE91dE9mQm91bmRzUG9pbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVWZWN0b3JzKHRvdGFsRWxhcHNlZFRpbWUpIHtcclxuICAgICAgICBjb25zdCBlID0gdGhpcy5vcmJpdGFsUGFyYW1ldGVycy5lY2NlbnRyaWNpdHk7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMub3JiaXRhbFBhcmFtZXRlcnMuc2VtaU1ham9yQXhpcztcclxuICAgICAgICBjb25zdCBNID0gKHRoaXMub3JiaXRhbFBhcmFtZXRlcnMubWVhbkFub21hbHkgKyBNYXRoLlBJICogMiAqIHRvdGFsRWxhcHNlZFRpbWUgLyB0aGlzLm9yYml0YWxQYXJhbWV0ZXJzLnBlcmlvZCkgJSBNYXRoLlBJICogMjtcclxuXHJcbiAgICAgICAgLy8gRWNjZW50cmljIGFub21hbHlcclxuICAgICAgICBsZXQgRSA9IE07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgRV9uZXh0ID0gRSAtIChFIC0gZSAqIE1hdGguc2luKEUpIC0gTSkgLyAoMS4wIC0gZSAqIE1hdGguY29zKEUpKTtcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gRV9uZXh0IC0gRTtcclxuICAgICAgICAgICAgRSA9IEVfbmV4dDtcclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGVsdGEpIDwgMWUtOCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRydWUgYW5vbWFseVxyXG4gICAgICAgIGNvbnN0IGhhbGZFID0gRSAqIDAuNTtcclxuICAgICAgICBjb25zdCB2ID0gTWF0aC5hdGFuMihNYXRoLnNxcnQoMS4wICsgZSkgKiBNYXRoLnNpbihoYWxmRSksIE1hdGguc3FydCgxLjAgLSBlKSAqIE1hdGguY29zKGhhbGZFKSkgKiAyO1xyXG5cclxuICAgICAgICAvLyBEaXN0YW5jZSB0byBjZW50cmFsIGJvZHlcclxuICAgICAgICBjb25zdCByID0gYSAqICgxLjAgLSBlICogTWF0aC5jb3MoRSkpO1xyXG5cclxuICAgICAgICAvLyBWZWN0b3JzIHJlbGF0aXZlIHRvIG9yYml0YWwgcGxhbmVcclxuICAgICAgICBjb25zdCB0ZXJtID0gTWF0aC5zcXJ0KGEgKiBDb25zdGFudHMuRyAqIHBhcmVudC5tYXNzKSAvIHI7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMkQociAqIE1hdGguY29zKHYpLCAtciAqIE1hdGguc2luKHYpKSxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCh0ZXJtICogLSBNYXRoLnNpbihFKSwgLXRlcm0gKiBNYXRoLnNxcnQoMS4wIC0gZSAqIGUpICogTWF0aC5jb3MoRSkpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVPcmJpdFByZWRpY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vcmJpdFByZWRpY3Rpb24gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0aW1lID0gMC4wOyB0aW1lIDwgdGhpcy5vcmJpdGFsUGFyYW1ldGVycy5wZXJpb2QgLyAyOyB0aW1lICs9IHRoaXMub3JiaXRhbFBhcmFtZXRlcnMucGVyaW9kIC8gKDIgKiAxODAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVZlY3RvcnMgPSB0aGlzLmdldFN0YXRlVmVjdG9ycyh0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5vcmJpdFByZWRpY3Rpb24ucHVzaChzdGF0ZVZlY3RvcnMucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JiaXRQcmVkaWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9yYml0UHJlZGljdGlvbihjb250ZXh0LCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50QWJzb2x1dGVQb3NpdGlvbiA9IHRoaXMucGFyZW50LmdldEFic29sdXRlUG9zaXRpb24ocHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZU9yYml0UHJlZGljdGlvblBvaW50cy5sZW5ndGgpIHsgICAgICBcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BlcnRpZXMuZGVmYXVsdFN0cm9rZVN0eWxlO1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVPcmJpdFByZWRpY3Rpb25Qb2ludHMuZm9yRWFjaCgodmlzaWJsZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VQb2ludCA9IHRoaXMub3JiaXRQcmVkaWN0aW9uW3Zpc2libGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRBYnNvbHV0ZVBvc2l0aW9uLnggKyBzb3VyY2VQb2ludC54ICogcHJvcGVydGllcy5zY2FsZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50QWJzb2x1dGVQb3NpdGlvbi55ICsgc291cmNlUG9pbnQueSAqIHByb3BlcnRpZXMuc2NhbGVcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52aXNpYmxlT3JiaXRQcmVkaWN0aW9uUG9pbnRzLmluY2x1ZGVzKCh2aXNpYmxlSW5kZXggKyAxKSAlIHRoaXMub3JiaXRQcmVkaWN0aW9uLmxlbmd0aCkpIHsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9pbnQgPSB0aGlzLm9yYml0UHJlZGljdGlvblsodmlzaWJsZUluZGV4ICsgMSkgJSB0aGlzLm9yYml0UHJlZGljdGlvbi5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHBhcmVudEFic29sdXRlUG9zaXRpb24ueCArIHRhcmdldFBvaW50LnggKiBwcm9wZXJ0aWVzLnNjYWxlLCBwYXJlbnRBYnNvbHV0ZVBvc2l0aW9uLnkgKyB0YXJnZXRQb2ludC55ICogcHJvcGVydGllcy5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIGV4dGVuZHMgQm9keSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbCwgaW1hZ2UsIGltYWdlQ2FudmFzLCBtYXNzLCByYWRpdXMsIHBvc2l0aW9uLCB2ZWxvY2l0eSwgcm90YXRpb24sIGFuZ3VsYXJWZWxvY2l0eSwgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIobGFiZWwsIGltYWdlLCBpbWFnZUNhbnZhcywgbWFzcywgcmFkaXVzLCBwb3NpdGlvbiwgdmVsb2NpdHksIHJvdGF0aW9uLCBhbmd1bGFyVmVsb2NpdHksIHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW5kZXIoY29udGV4dCwgcHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyLm9uUmVuZGVyKGNvbnRleHQsIHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKHRpbWVTdGVwLCB0b3RhbEVsYXBzZWRUaW1lKSB7XHJcbiAgICAgICAgc3VwZXIub25VcGRhdGUodGltZVN0ZXAsIHRvdGFsRWxhcHNlZFRpbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsRWxhcHNlZFRpbWUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uU3BlZWQgPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRhYmxlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXBkYXRlYWJsZSh1cGRhdGFibGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0YWJsZXMucHVzaCh1cGRhdGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xyXG4gICAgICAgIHRpbWVTdGVwICo9IHRoaXMuc2ltdWxhdGlvblNwZWVkO1xyXG4gICAgICAgIHRoaXMudG90YWxFbGFwc2VkVGltZSArPSAgdGltZVN0ZXA7XHJcbiAgICAgICAgdGhpcy51cGRhdGFibGVzLmZvckVhY2goKHVwZGF0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGFibGUub25VcGRhdGUodGltZVN0ZXAsIHRoaXMudG90YWxFbGFwc2VkVGltZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG5cclxuICAgIG9uU2ltdWxhdGlvblNwZWVkQ2hhbmdlZChzaW11bGF0aW9uU3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNpbXVsYXRpb25TcGVlZCA9IHNpbXVsYXRpb25TcGVlZDtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9tYXRoL3ZlY3RvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RlcCA9IDAuMjtcclxuICAgICAgICB0aGlzLm1pblNjcm9sbCA9IDFlLTEsXHJcbiAgICAgICAgdGhpcy5tYXhTY3JvbGwgPSAxZS0xMDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxZS02O1xyXG4gICAgICAgIHRoaXMubW92ZVN0ZXAgPSAxLjA7XHJcblxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICB0aGlzLmRlZmF1bHRTdHJva2VTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Rm9udFN0eWxlID0gJzE4cHggQ2FsaWJyaSc7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJhYmxlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlbmRlcmFibGUocmVuZGVyYWJsZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyYWJsZXMucHVzaChyZW5kZXJhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgdmlld1dpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRGaWxsU3R5bGU6IHRoaXMuZGVmYXVsdEZpbGxTdHlsZSxcclxuICAgICAgICAgICAgZGVmYXVsdFN0cm9rZVN0eWxlOiB0aGlzLmRlZmF1bHRTdHJva2VTdHlsZSxcclxuICAgICAgICAgICAgZGVmYXVsdEZvbnRTdHlsZTogdGhpcy5kZWZhdWx0Rm9udFN0eWxlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJhYmxlcy5mb3JFYWNoKChyZW5kZXJhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmFibGUub25SZW5kZXIodGhpcy5jb250ZXh0LCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTY2FsZShkaXJlY3Rpb24sIG1vdXNlUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXcgVmVjdG9yMkQobW91c2VQb3NpdGlvbi54IC8gdGhpcy5zY2FsZSAtIHRoaXMub2Zmc2V0LngsIG1vdXNlUG9zaXRpb24ueSAvIHRoaXMuc2NhbGUgLSB0aGlzLm9mZnNldC55KTtcclxuICAgICAgICB0aGlzLnNjYWxlID0gTWF0aC5taW4odGhpcy5taW5TY3JvbGwsIE1hdGgubWF4KHRoaXMubWF4U2Nyb2xsLCB0aGlzLnNjcm9sbFN0ZXAgKiB0aGlzLnNjYWxlICogZGlyZWN0aW9uICsgdGhpcy5zY2FsZSkpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gbmV3IFZlY3RvcjJEKG1vdXNlUG9zaXRpb24ueCAvIHRoaXMuc2NhbGUgLSB0aGlzLm9mZnNldC54LCBtb3VzZVBvc2l0aW9uLnkgLyB0aGlzLnNjYWxlIC0gdGhpcy5vZmZzZXQueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGlzcGxhY2VtZW50ID0gbmV3UG9zaXRpb24uc3VidHJhY3QoY3VycmVudFBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMub2Zmc2V0LmFkZChkaXNwbGFjZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZShvZmZzZXQpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMub2Zmc2V0LmFkZChvZmZzZXQubXVsdGlwbHkodGhpcy5tb3ZlU3RlcCAvIHRoaXMuc2NhbGUpKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhMjg0ZTFjY2E2NTcyYzMyMDZlM2ZlODEzZGQ3NWJhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgwOGQwZDk2NmFhMGM5M2ZlMzJjYjAzMDY3ZDlmMjZiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBkNzY4Zjk2ZWI4OTQ3M2Q3ZDUxY2M4ZjkyMTc1ZmEzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3MjA0ZTU4YTZjYjJkMWJjYmNkNzRjNDhiZjdlMDI0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIyZGUzNjY0NDgzOTRkNDQwYzQyN2NlYmNjYzY2OTRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRiOGE3ZTYxZWU4Nzk1MmRiMjE0MjYzMmRmMzgyNDBiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlNjFiNGI0ODZlOGU2ODRhM2JlZmY3ODUzM2QzMzk1LnBuZ1wiOyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAvYXBwJztcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWwnKTtcclxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoZG9jdW1lbnQsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCBjYW52YXMsIHBhbmVsKTtcclxuICAgIGFwcC5ydW4oKTtcclxufSkoKTtcclxuXHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=