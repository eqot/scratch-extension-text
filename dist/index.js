(/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/blockIcon.png":
/*!*************************************!*\
  !*** ./assets/images/blockIcon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./assets/images/blockIcon.png?");

/***/ }),

/***/ "./assets/images/menuIcon.png":
/*!************************************!*\
  !*** ./assets/images/menuIcon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./assets/images/menuIcon.png?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/engine/stage-layering.js":
/*!**************************************************************!*\
  !*** ./node_modules/scratch-vm/src/engine/stage-layering.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class StageLayering {\n    static get BACKGROUND_LAYER () {\n        return 'background';\n    }\n\n    static get VIDEO_LAYER () {\n        return 'video';\n    }\n\n    static get PEN_LAYER () {\n        return 'pen';\n    }\n\n    static get SPRITE_LAYER () {\n        return 'sprite';\n    }\n\n    // Order of layer groups relative to each other,\n    static get LAYER_GROUPS () {\n        return [\n            StageLayering.BACKGROUND_LAYER,\n            StageLayering.VIDEO_LAYER,\n            StageLayering.PEN_LAYER,\n            StageLayering.SPRITE_LAYER\n        ];\n    }\n}\n\nmodule.exports = StageLayering;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/engine/stage-layering.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Block argument types\n * @enum {string}\n */\nconst ArgumentType = {\n    /**\n     * Numeric value with angle picker\n     */\n    ANGLE: 'angle',\n\n    /**\n     * Boolean value with hexagonal placeholder\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * Numeric value with color picker\n     */\n    COLOR: 'color',\n\n    /**\n     * Numeric value with text field\n     */\n    NUMBER: 'number',\n\n    /**\n     * String value with text field\n     */\n    STRING: 'string',\n\n    /**\n     * String value with matrix field\n     */\n    MATRIX: 'matrix',\n\n    /**\n     * MIDI note number with note picker (piano) field\n     */\n    NOTE: 'note',\n\n    /**\n     * Inline image on block (as part of the label)\n     */\n    IMAGE: 'image'\n};\n\nmodule.exports = ArgumentType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/argument-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Types of block\n * @enum {string}\n */\nconst BlockType = {\n    /**\n     * Boolean reporter with hexagonal shape\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * A button (not an actual block) for some special action, like making a variable\n     */\n    BUTTON: 'button',\n\n    /**\n     * Command block\n     */\n    COMMAND: 'command',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * The thread continues with the next block whether or not a child branch ran.\n     */\n    CONDITIONAL: 'conditional',\n\n    /**\n     * Specialized hat block with no implementation function\n     * This stack only runs if the corresponding event is emitted by other code.\n     */\n    EVENT: 'event',\n\n    /**\n     * Hat block which conditionally starts a block stack\n     */\n    HAT: 'hat',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * If a child branch runs, the thread evaluates the loop block again.\n     */\n    LOOP: 'loop',\n\n    /**\n     * General reporter with numeric or string value\n     */\n    REPORTER: 'reporter'\n};\n\nmodule.exports = BlockType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/block-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/cast.js":
/*!**************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/cast.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Color = __webpack_require__(/*! ../util/color */ \"./node_modules/scratch-vm/src/util/color.js\");\n\n/**\n * @fileoverview\n * Utilities for casting and comparing Scratch data-types.\n * Scratch behaves slightly differently from JavaScript in many respects,\n * and these differences should be encapsulated below.\n * For example, in Scratch, add(1, join(\"hello\", world\")) -> 1.\n * This is because \"hello world\" is cast to 0.\n * In JavaScript, 1 + Number(\"hello\" + \"world\") would give you NaN.\n * Use when coercing a value before computation.\n */\n\nclass Cast {\n    /**\n     * Scratch cast to number.\n     * Treats NaN as 0.\n     * In Scratch 2.0, this is captured by `interp.numArg.`\n     * @param {*} value Value to cast to number.\n     * @return {number} The Scratch-casted number value.\n     */\n    static toNumber (value) {\n        // If value is already a number we don't need to coerce it with\n        // Number().\n        if (typeof value === 'number') {\n            // Scratch treats NaN as 0, when needed as a number.\n            // E.g., 0 + NaN -> 0.\n            if (Number.isNaN(value)) {\n                return 0;\n            }\n            return value;\n        }\n        const n = Number(value);\n        if (Number.isNaN(n)) {\n            // Scratch treats NaN as 0, when needed as a number.\n            // E.g., 0 + NaN -> 0.\n            return 0;\n        }\n        return n;\n    }\n\n    /**\n     * Scratch cast to boolean.\n     * In Scratch 2.0, this is captured by `interp.boolArg.`\n     * Treats some string values differently from JavaScript.\n     * @param {*} value Value to cast to boolean.\n     * @return {boolean} The Scratch-casted boolean value.\n     */\n    static toBoolean (value) {\n        // Already a boolean?\n        if (typeof value === 'boolean') {\n            return value;\n        }\n        if (typeof value === 'string') {\n            // These specific strings are treated as false in Scratch.\n            if ((value === '') ||\n                (value === '0') ||\n                (value.toLowerCase() === 'false')) {\n                return false;\n            }\n            // All other strings treated as true.\n            return true;\n        }\n        // Coerce other values and numbers.\n        return Boolean(value);\n    }\n\n    /**\n     * Scratch cast to string.\n     * @param {*} value Value to cast to string.\n     * @return {string} The Scratch-casted string value.\n     */\n    static toString (value) {\n        return String(value);\n    }\n\n    /**\n     * Cast any Scratch argument to an RGB color array to be used for the renderer.\n     * @param {*} value Value to convert to RGB color array.\n     * @return {Array.<number>} [r,g,b], values between 0-255.\n     */\n    static toRgbColorList (value) {\n        const color = Cast.toRgbColorObject(value);\n        return [color.r, color.g, color.b];\n    }\n\n    /**\n     * Cast any Scratch argument to an RGB color object to be used for the renderer.\n     * @param {*} value Value to convert to RGB color object.\n     * @return {RGBOject} [r,g,b], values between 0-255.\n     */\n    static toRgbColorObject (value) {\n        let color;\n        if (typeof value === 'string' && value.substring(0, 1) === '#') {\n            color = Color.hexToRgb(value);\n        } else {\n            color = Color.decimalToRgb(Cast.toNumber(value));\n        }\n        return color;\n    }\n\n    /**\n     * Determine if a Scratch argument is a white space string (or null / empty).\n     * @param {*} val value to check.\n     * @return {boolean} True if the argument is all white spaces or null / empty.\n     */\n    static isWhiteSpace (val) {\n        return val === null || (typeof val === 'string' && val.trim().length === 0);\n    }\n\n    /**\n     * Compare two values, using Scratch cast, case-insensitive string compare, etc.\n     * In Scratch 2.0, this is captured by `interp.compare.`\n     * @param {*} v1 First value to compare.\n     * @param {*} v2 Second value to compare.\n     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.\n     */\n    static compare (v1, v2) {\n        let n1 = Number(v1);\n        let n2 = Number(v2);\n        if (n1 === 0 && Cast.isWhiteSpace(v1)) {\n            n1 = NaN;\n        } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {\n            n2 = NaN;\n        }\n        if (isNaN(n1) || isNaN(n2)) {\n            // At least one argument can't be converted to a number.\n            // Scratch compares strings as case insensitive.\n            const s1 = String(v1).toLowerCase();\n            const s2 = String(v2).toLowerCase();\n            if (s1 < s2) {\n                return -1;\n            } else if (s1 > s2) {\n                return 1;\n            }\n            return 0;\n        }\n        // Handle the special case of Infinity\n        if (\n            (n1 === Infinity && n2 === Infinity) ||\n            (n1 === -Infinity && n2 === -Infinity)\n        ) {\n            return 0;\n        }\n        // Compare as numbers.\n        return n1 - n2;\n    }\n\n    /**\n     * Determine if a Scratch argument number represents a round integer.\n     * @param {*} val Value to check.\n     * @return {boolean} True if number looks like an integer.\n     */\n    static isInt (val) {\n        // Values that are already numbers.\n        if (typeof val === 'number') {\n            if (isNaN(val)) { // NaN is considered an integer.\n                return true;\n            }\n            // True if it's \"round\" (e.g., 2.0 and 2).\n            return val === parseInt(val, 10);\n        } else if (typeof val === 'boolean') {\n            // `True` and `false` always represent integer after Scratch cast.\n            return true;\n        } else if (typeof val === 'string') {\n            // If it contains a decimal point, don't consider it an int.\n            return val.indexOf('.') < 0;\n        }\n        return false;\n    }\n\n    static get LIST_INVALID () {\n        return 'INVALID';\n    }\n\n    static get LIST_ALL () {\n        return 'ALL';\n    }\n\n    /**\n     * Compute a 1-based index into a list, based on a Scratch argument.\n     * Two special cases may be returned:\n     * LIST_ALL: if the block is referring to all of the items in the list.\n     * LIST_INVALID: if the index was invalid in any way.\n     * @param {*} index Scratch arg, including 1-based numbers or special cases.\n     * @param {number} length Length of the list.\n     * @param {boolean} acceptAll Whether it should accept \"all\" or not.\n     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.\n     */\n    static toListIndex (index, length, acceptAll) {\n        if (typeof index !== 'number') {\n            if (index === 'all') {\n                return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;\n            }\n            if (index === 'last') {\n                if (length > 0) {\n                    return length;\n                }\n                return Cast.LIST_INVALID;\n            } else if (index === 'random' || index === 'any') {\n                if (length > 0) {\n                    return 1 + Math.floor(Math.random() * length);\n                }\n                return Cast.LIST_INVALID;\n            }\n        }\n        index = Math.floor(Cast.toNumber(index));\n        if (index < 1 || index > length) {\n            return Cast.LIST_INVALID;\n        }\n        return index;\n    }\n}\n\nmodule.exports = Cast;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/util/cast.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/color.js":
/*!***************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/color.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Color {\n    /**\n     * @typedef {object} RGBObject - An object representing a color in RGB format.\n     * @property {number} r - the red component, in the range [0, 255].\n     * @property {number} g - the green component, in the range [0, 255].\n     * @property {number} b - the blue component, in the range [0, 255].\n     */\n\n    /**\n     * @typedef {object} HSVObject - An object representing a color in HSV format.\n     * @property {number} h - hue, in the range [0-359).\n     * @property {number} s - saturation, in the range [0,1].\n     * @property {number} v - value, in the range [0,1].\n     */\n\n    /** @type {RGBObject} */\n    static get RGB_BLACK () {\n        return {r: 0, g: 0, b: 0};\n    }\n\n    /** @type {RGBObject} */\n    static get RGB_WHITE () {\n        return {r: 255, g: 255, b: 255};\n    }\n\n    /**\n     * Convert a Scratch decimal color to a hex string, #RRGGBB.\n     * @param {number} decimal RGB color as a decimal.\n     * @return {string} RGB color as #RRGGBB hex string.\n     */\n    static decimalToHex (decimal) {\n        if (decimal < 0) {\n            decimal += 0xFFFFFF + 1;\n        }\n        let hex = Number(decimal).toString(16);\n        hex = `#${'000000'.substr(0, 6 - hex.length)}${hex}`;\n        return hex;\n    }\n\n    /**\n     * Convert a Scratch decimal color to an RGB color object.\n     * @param {number} decimal RGB color as decimal.\n     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static decimalToRgb (decimal) {\n        const a = (decimal >> 24) & 0xFF;\n        const r = (decimal >> 16) & 0xFF;\n        const g = (decimal >> 8) & 0xFF;\n        const b = decimal & 0xFF;\n        return {r: r, g: g, b: b, a: a > 0 ? a : 255};\n    }\n\n    /**\n     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.\n     * CC-BY-SA Tim Down:\n     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb\n     * @param {!string} hex Hex representation of the color.\n     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static hexToRgb (hex) {\n        const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);\n        const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n        return result ? {\n            r: parseInt(result[1], 16),\n            g: parseInt(result[2], 16),\n            b: parseInt(result[3], 16)\n        } : null;\n    }\n\n    /**\n     * Convert an RGB color object to a hex color.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {!string} Hex representation of the color.\n     */\n    static rgbToHex (rgb) {\n        return Color.decimalToHex(Color.rgbToDecimal(rgb));\n    }\n\n    /**\n     * Convert an RGB color object to a Scratch decimal color.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {!number} Number representing the color.\n     */\n    static rgbToDecimal (rgb) {\n        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;\n    }\n\n    /**\n    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.\n    * @param {!string} hex Hex representation of the color.\n    * @return {!number} Number representing the color.\n    */\n    static hexToDecimal (hex) {\n        return Color.rgbToDecimal(Color.hexToRgb(hex));\n    }\n\n    /**\n     * Convert an HSV color to RGB format.\n     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}\n     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static hsvToRgb (hsv) {\n        let h = hsv.h % 360;\n        if (h < 0) h += 360;\n        const s = Math.max(0, Math.min(hsv.s, 1));\n        const v = Math.max(0, Math.min(hsv.v, 1));\n\n        const i = Math.floor(h / 60);\n        const f = (h / 60) - i;\n        const p = v * (1 - s);\n        const q = v * (1 - (s * f));\n        const t = v * (1 - (s * (1 - f)));\n\n        let r;\n        let g;\n        let b;\n\n        switch (i) {\n        default:\n        case 0:\n            r = v;\n            g = t;\n            b = p;\n            break;\n        case 1:\n            r = q;\n            g = v;\n            b = p;\n            break;\n        case 2:\n            r = p;\n            g = v;\n            b = t;\n            break;\n        case 3:\n            r = p;\n            g = q;\n            b = v;\n            break;\n        case 4:\n            r = t;\n            g = p;\n            b = v;\n            break;\n        case 5:\n            r = v;\n            g = p;\n            b = q;\n            break;\n        }\n\n        return {\n            r: Math.floor(r * 255),\n            g: Math.floor(g * 255),\n            b: Math.floor(b * 255)\n        };\n    }\n\n    /**\n     * Convert an RGB color to HSV format.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}\n     */\n    static rgbToHsv (rgb) {\n        const r = rgb.r / 255;\n        const g = rgb.g / 255;\n        const b = rgb.b / 255;\n        const x = Math.min(Math.min(r, g), b);\n        const v = Math.max(Math.max(r, g), b);\n\n        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate\n        let h = 0;\n        let s = 0;\n        if (x !== v) {\n            const f = (r === x) ? g - b : ((g === x) ? b - r : r - g);\n            const i = (r === x) ? 3 : ((g === x) ? 5 : 1);\n            h = ((i - (f / (v - x))) * 60) % 360;\n            s = (v - x) / v;\n        }\n\n        return {h: h, s: s, v: v};\n    }\n\n    /**\n     * Linear interpolation between rgb0 and rgb1.\n     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.\n     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.\n     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.\n     * @return {RGBObject} the interpolated color.\n     */\n    static mixRgb (rgb0, rgb1, fraction1) {\n        if (fraction1 <= 0) return rgb0;\n        if (fraction1 >= 1) return rgb1;\n        const fraction0 = 1 - fraction1;\n        return {\n            r: (fraction0 * rgb0.r) + (fraction1 * rgb1.r),\n            g: (fraction0 * rgb0.g) + (fraction1 * rgb1.g),\n            b: (fraction0 * rgb0.b) + (fraction1 * rgb1.b)\n        };\n    }\n}\n\nmodule.exports = Color;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/util/color.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scratch-vm/src/extension-support/argument-type */ \"./node_modules/scratch-vm/src/extension-support/argument-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scratch-vm/src/extension-support/block-type */ \"./node_modules/scratch-vm/src/extension-support/block-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var scratch_vm_src_engine_stage_layering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scratch-vm/src/engine/stage-layering */ \"./node_modules/scratch-vm/src/engine/stage-layering.js\");\n/* harmony import */ var scratch_vm_src_engine_stage_layering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_engine_stage_layering__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scratch-vm/src/util/cast */ \"./node_modules/scratch-vm/src/util/cast.js\");\n/* harmony import */ var scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar TextExtension = /*#__PURE__*/function () {\n  function TextExtension(runtime) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TextExtension);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"runtime\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"penSkinId\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"penDrawableId\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"skin\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"width\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"height\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"centerX\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"centerY\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"context\", void 0);\n\n    this.runtime = runtime;\n\n    if (this.runtime.renderer) {\n      this.createLayer();\n    }\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TextExtension, [{\n    key: \"createLayer\",\n    value: function createLayer() {\n      if (!this.runtime.renderer) {\n        return;\n      }\n\n      if (!this.penSkinId) {\n        this.penSkinId = this.runtime.renderer.createPenSkin();\n        this.penDrawableId = this.runtime.renderer.createDrawable(scratch_vm_src_engine_stage_layering__WEBPACK_IMPORTED_MODULE_6___default.a.PEN_LAYER);\n        this.runtime.renderer.updateDrawableProperties(this.penDrawableId, {\n          skinId: this.penSkinId\n        });\n      }\n\n      if (!this.skin) {\n        this.skin = this.runtime.renderer._allSkins[this.penSkinId];\n        this.width = this.skin.size[0];\n        this.height = this.skin.size[1];\n        this.centerX = this.width / 2;\n        this.centerY = this.height / 2;\n      }\n\n      if (!this.context) {\n        this.context = this.skin._canvas.getContext('2d');\n        this.context.font = '24px serif';\n        this.context.fillStyle = 'rgb(0, 0, 0)';\n      }\n    }\n  }, {\n    key: \"getInfo\",\n    value: function getInfo() {\n      return {\n        id: 'text',\n        name: 'Text',\n        menuIconURI: __webpack_require__(/*! ../assets/images/menuIcon.png */ \"./assets/images/menuIcon.png\"),\n        blockIconURI: __webpack_require__(/*! ../assets/images/blockIcon.png */ \"./assets/images/blockIcon.png\"),\n        color1: '#a0a0a0',\n        color2: '#808080',\n        color3: '#606060',\n        blocks: [{\n          opcode: 'drawText',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5___default.a.COMMAND,\n          text: 'draw [MESSAGE] at x: [X] y: [Y]',\n          arguments: {\n            MESSAGE: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.STRING,\n              defaultValue: 'Hello, World!'\n            },\n            X: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: -10\n            },\n            Y: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: 0\n            }\n          }\n        }, {\n          opcode: 'clear',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5___default.a.COMMAND,\n          text: 'clear'\n        }, {\n          opcode: 'clearRegion',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_5___default.a.COMMAND,\n          text: 'clear from x: [X1] y: [Y1] to x: [X2] y: [Y2]',\n          arguments: {\n            X1: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: -240\n            },\n            Y1: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: -160\n            },\n            X2: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: 240\n            },\n            Y2: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_4___default.a.NUMBER,\n              defaultValue: 160\n            }\n          }\n        }]\n      };\n    }\n  }, {\n    key: \"drawText\",\n    value: function drawText(args) {\n      var message = scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7___default.a.toString(args.MESSAGE);\n\n      var _this$convertToCanvas = this.convertToCanvasCoordinate(args.X, args.Y),\n          _this$convertToCanvas2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$convertToCanvas, 2),\n          x = _this$convertToCanvas2[0],\n          y = _this$convertToCanvas2[1];\n\n      this.context.fillStyle = 'rgb(0, 0, 0)';\n      this.context.fillText(message, x, y);\n      this.redraw();\n    }\n  }, {\n    key: \"clear\",\n    value: function clear(args) {\n      this.context.fillStyle = 'rgb(255, 255, 255)';\n      this.context.fillRect(0, 0, this.width, this.height);\n      this.redraw();\n    }\n  }, {\n    key: \"clearRegion\",\n    value: function clearRegion(args) {\n      var _this$convertToCanvas3 = this.convertToCanvasCoordinate(args.X1, args.Y1),\n          _this$convertToCanvas4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$convertToCanvas3, 2),\n          x1 = _this$convertToCanvas4[0],\n          y1 = _this$convertToCanvas4[1];\n\n      var _this$convertToCanvas5 = this.convertToCanvasCoordinate(args.X2, args.Y2),\n          _this$convertToCanvas6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$convertToCanvas5, 2),\n          x2 = _this$convertToCanvas6[0],\n          y2 = _this$convertToCanvas6[1];\n\n      var _ref = x1 <= x2 ? [x1, x2 - x1] : [x2, x1 - x2],\n          _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n          x = _ref2[0],\n          width = _ref2[1];\n\n      var _ref3 = y1 <= y2 ? [y1, y2 - y1] : [y2, y1 - y2],\n          _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),\n          y = _ref4[0],\n          height = _ref4[1];\n\n      this.context.fillStyle = 'rgb(255, 255, 255)';\n      this.context.fillRect(x, y, width, height);\n      this.redraw();\n    }\n  }, {\n    key: \"convertToCanvasCoordinate\",\n    value: function convertToCanvasCoordinate(x, y) {\n      return [this.centerX + scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7___default.a.toNumber(x), this.centerY - scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_7___default.a.toNumber(y)];\n    }\n  }, {\n    key: \"redraw\",\n    value: function redraw() {\n      this.skin._canvasDirty = true;\n      this.runtime.requestRedraw();\n    }\n  }]);\n\n  return TextExtension;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextExtension);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ }));;