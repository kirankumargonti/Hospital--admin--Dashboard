(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./buffer/buffer.module": [
		"./src/app/entry-admin/buffer/buffer.module.ts",
		"buffer-buffer-module"
	],
	"./dashboard-admin/dashboard-admin.module": [
		"./src/app/entry-admin/dashboard-admin/dashboard-admin.module.ts",
		"dashboard-admin-dashboard-admin-module"
	],
	"./dashboard-doctor/dashboard-doctor.module": [
		"./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.module.ts",
		"dashboard-doctor-dashboard-doctor-module"
	],
	"./dashboard-patient/dashboard-patient.module": [
		"./src/app/entry-patient/dashboard-patient/dashboard-patient.module.ts",
		"dashboard-patient-dashboard-patient-module"
	],
	"./entry-admin/entry-admin.module": [
		"./src/app/entry-admin/entry-admin.module.ts",
		"entry-admin-entry-admin-module"
	],
	"./entry-doctor/entry-doctor.module": [
		"./src/app/entry-doctor/entry-doctor.module.ts",
		"entry-doctor-entry-doctor-module"
	],
	"./entry-patient/entry-patient.module": [
		"./src/app/entry-patient/entry-patient.module.ts",
		"entry-patient-entry-patient-module"
	],
	"./messages/messages.module": [
		"./src/app/entry-doctor/dashboard-doctor/messages/messages.module.ts",
		"messages-messages-module"
	],
	"./page/page.module": [
		"./src/app/entry-patient/dashboard-patient/page/page.module.ts",
		"page-page-module"
	],
	"./readings/readings.module": [
		"./src/app/entry-doctor/dashboard-doctor/readings/readings.module.ts",
		"readings-readings-module"
	],
	"./remarks/remarks.module": [
		"./src/app/entry-patient/dashboard-patient/remarks/remarks.module.ts",
		"remarks-remarks-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-provider.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-provider.module.ts ***!
  \****************************************/
/*! exports provided: AppProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProviderModule", function() { return AppProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
/* harmony import */ var _common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/core/service/route-guards */ "./src/app/common/core/service/route-guards.ts");
/* harmony import */ var _common_shared_component_startup_startup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/shared/component/startup/startup.component */ "./src/app/common/shared/component/startup/startup.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppProviderModule = /** @class */ (function () {
    function AppProviderModule() {
    }
    AppProviderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"].enablePersistence(),
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]
            ],
            declarations: [
                _common_shared_component_startup_startup_component__WEBPACK_IMPORTED_MODULE_11__["StartupComponent"],
            ],
            providers: [
                _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
                _common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_10__["EntryGuard"],
                _common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_10__["ExitGuard"]
            ]
        })
    ], AppProviderModule);
    return AppProviderModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_shared_component_startup_startup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/shared/component/startup/startup.component */ "./src/app/common/shared/component/startup/startup.component.ts");
/* harmony import */ var _common_shared_component_buffer_buffer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/shared/component/buffer/buffer.component */ "./src/app/common/shared/component/buffer/buffer.component.ts");
/* harmony import */ var _common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/core/service/route-guards */ "./src/app/common/core/service/route-guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _common_shared_component_startup_startup_component__WEBPACK_IMPORTED_MODULE_2__["StartupComponent"], canActivate: [_common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__["ExitGuard"]] },
    { path: 'bf', component: _common_shared_component_buffer_buffer_component__WEBPACK_IMPORTED_MODULE_3__["BufferComponent"], canActivate: [_common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__["ExitGuard"]] },
    { path: 'p', loadChildren: './entry-patient/entry-patient.module#EntryPatientModule', canActivate: [_common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__["EntryGuard"]] },
    { path: 'd', loadChildren: './entry-doctor/entry-doctor.module#EntryDoctorModule', canActivate: [_common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__["EntryGuard"]] },
    { path: 'a', loadChildren: './entry-admin/entry-admin.module#EntryAdminModule', canActivate: [_common_core_service_route_guards__WEBPACK_IMPORTED_MODULE_4__["EntryGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-provider.module */ "./src/app/app-provider.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_shared_component_login_main_dialog_login_main_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/shared/component/login-main-dialog/login-main-dialog.component */ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.ts");
/* harmony import */ var _common_shared_component_login_patient_dialog_login_patient_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/shared/component/login-patient-dialog/login-patient-dialog.component */ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.ts");
/* harmony import */ var _common_shared_component_login_doctor_dialog_login_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/shared/component/login-doctor-dialog/login-doctor-dialog.component */ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.ts");
/* harmony import */ var _common_shared_component_login_admin_dialog_login_admin_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/shared/component/login-admin-dialog/login-admin-dialog.component */ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.ts");
/* harmony import */ var _common_shared_component_buffer_buffer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/shared/component/buffer/buffer.component */ "./src/app/common/shared/component/buffer/buffer.component.ts");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = /** @class */ (function () {
    function AppModule(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.authService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (user) { return user !== null; })).subscribe(function (state) {
            state ? 0 : _this.router.navigate(['/']);
        });
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_provider_module__WEBPACK_IMPORTED_MODULE_2__["AppProviderModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_shared_component_login_main_dialog_login_main_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LoginMainDialogComponent"],
                _common_shared_component_login_patient_dialog_login_patient_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoginPatientDialogComponent"],
                _common_shared_component_login_doctor_dialog_login_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDoctorDialogComponent"],
                _common_shared_component_login_admin_dialog_login_admin_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LoginAdminDialogComponent"],
                _common_shared_component_buffer_buffer_component__WEBPACK_IMPORTED_MODULE_9__["BufferComponent"]
            ],
            entryComponents: [
                _common_shared_component_login_main_dialog_login_main_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LoginMainDialogComponent"],
                _common_shared_component_login_patient_dialog_login_patient_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoginPatientDialogComponent"],
                _common_shared_component_login_doctor_dialog_login_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDoctorDialogComponent"],
                _common_shared_component_login_admin_dialog_login_admin_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LoginAdminDialogComponent"]
            ],
            providers: [
                _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/core/service/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/core/service/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(fire) {
        this.fire = fire;
        fire.authState.subscribe(function (state) {
            // console.clear();
            // tslint:disable-next-line:no-unused-expression
            state !== null ? console.log(state) : 0;
        });
        this.state = fire.authState;
    }
    AuthService.prototype.createUserWithEmailAndPassword = function (email, password) {
        return this.fire.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.getCurrentUid = function () {
        return this.fire.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user !== null) {
                return user.uid;
            }
        }));
    };
    AuthService.prototype.signIn = function (email, password) {
        return this.fire.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signOut = function () {
        return this.fire.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/core/service/database.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/core/service/database.service.ts ***!
  \*********************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _jengjeng_firebase_pushid_convert_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jengjeng/firebase-pushid-convert-timestamp */ "./node_modules/@jengjeng/firebase-pushid-convert-timestamp/index.js");
/* harmony import */ var _jengjeng_firebase_pushid_convert_timestamp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jengjeng_firebase_pushid_convert_timestamp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatabaseService = /** @class */ (function () {
    function DatabaseService(db) {
        this.db = db;
        this.listRef = db.list('data-readings');
    }
    DatabaseService.prototype.createObject = function (path, object) {
        this.db.list(path).push(object);
    };
    DatabaseService.prototype.goOnline = function () {
        return this.db.database.goOnline();
    };
    DatabaseService.prototype.goOffline = function () {
        return this.db.database.goOffline();
    };
    DatabaseService.prototype.getPatientReadings = function (patientNo) {
        return this.listRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            var readings = values.map(function (value) {
                var object = {};
                var data = value.payload.toJSON();
                var reading = data.toString().split(' ');
                reading.map(function (val) {
                    object[val.split('/')[0]] = val.split('/')[1];
                });
                return __assign({ id: value.key }, object);
            })
                .filter(function (e) { return e.patientNo === patientNo; })
                .map(function (e) {
                var tsl = _jengjeng_firebase_pushid_convert_timestamp__WEBPACK_IMPORTED_MODULE_3__(e.id);
                var unix = tsl.timestamp.toString().split('').splice(0, 10).join('');
                // e.timestamm = new Date(unix*1000);
                e.timestamm = moment__WEBPACK_IMPORTED_MODULE_4__["unix"](unix).fromNow();
                return e;
            });
            return lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](readings, [function (message) { return message.timestamp; }]).reverse();
        }));
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/common/core/service/firestore.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/core/service/firestore.service.ts ***!
  \**********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database.service */ "./src/app/common/core/service/database.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';




var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore, authService, database) {
        this.firestore = firestore;
        this.authService = authService;
        this.database = database;
        this.userPatients = firestore.collection('user-patients');
        this.userDoctors = firestore.collection('user-doctors');
        this.userAdmins = firestore.collection('user-admins');
        this.dataReadings = firestore.collection('data-readings');
        this.dataPatients = firestore.collection('data-patients');
        this.dataDoctors = firestore.collection('data-doctors');
        this.dataTimings = firestore.collection('data-timings');
    }
    FirestoreService.prototype.pushToReadings = function (reading) {
        var _this = this;
        this.dataReadings.add({ reading: reading })
            .then(function () {
            _this.database.createObject('data-readings', reading);
        });
    };
    FirestoreService.prototype.enableNetwork = function () {
        return this.firestore.firestore.enableNetwork();
    };
    FirestoreService.prototype.disableNetwork = function () {
        return this.firestore.firestore.disableNetwork();
    };
    FirestoreService.prototype.createUser = function (user, option) {
        var _this = this;
        return this.authService.createUserWithEmailAndPassword(user.email, user.password)
            .then(function (state) {
            _this.enableNetwork();
            switch (option) {
                case 'patient':
                    _this.createPatient(state.user.uid, user);
                    break;
                case 'doctor':
                    _this.createDoctor(state.user.uid, user);
                    break;
                case 'admin':
                    _this.createAdmin(user);
                    break;
                default: break;
            }
            return user.fullname;
        });
    };
    FirestoreService.prototype.getPatientDetails = function (isList) {
        if (isList === void 0) { isList = false; }
        return this.readCollection(this.userPatients, isList);
    };
    FirestoreService.prototype.getDoctorDetails = function (isList) {
        if (isList === void 0) { isList = false; }
        return this.readCollection(this.userDoctors, isList);
    };
    FirestoreService.prototype.getOnlinePatient = function () {
        var patients = this.userPatients.valueChanges();
        return this.authService.getCurrentUid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (uid) {
            return patients.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
                return values.filter(function (e) { return e.uid === uid; })[0];
            }));
        }));
    };
    FirestoreService.prototype.getOnlineDoctor = function () {
        var patients = this.userDoctors.valueChanges();
        return this.authService.getCurrentUid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (uid) {
            return patients.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
                return values.filter(function (e) { return e.uid === uid; })[0];
            }));
        }));
    };
    FirestoreService.prototype.getPatientDoctors = function (fullname) {
        return this.userPatients.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            var doc = [];
            values.map(function (value) {
                value.payload.doc.ref.collection('doctors').onSnapshot(function (data) {
                    fullname === value.payload.doc.data().fullname
                        ? data.docChanges().forEach(function (data) {
                            var _data = data.doc.data();
                            doc.filter(function (v) {
                                return v.fullname === _data.fullname;
                            }).length === 0 ? doc.push(_data) : 0;
                        }) : 0;
                });
            });
            return doc;
        }));
    };
    FirestoreService.prototype.getDoctorPatients = function (fullname) {
        return this.userDoctors.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            var doc = [];
            values.map(function (value) {
                value.payload.doc.ref.collection('patients').onSnapshot(function (data) {
                    fullname === value.payload.doc.data().fullname
                        ? data.docChanges().forEach(function (data) {
                            var _data = data.doc.data();
                            doc.filter(function (v) {
                                return v.fullname === _data.fullname;
                            }).length === 0 ? doc.push(_data) : 0;
                        }) : 0;
                });
            });
            return doc;
        }));
    };
    FirestoreService.prototype.addPatientToDoctor = function (form) {
        var doctor = form.doctor;
        var patient = form.patient;
        this.userDoctors.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            return values.map(function (value) {
                var data = value.payload.doc.data();
                data.doctorNo === doctor.doctorNo
                    ? value.payload.doc.ref.collection('patients').add(__assign({}, patient)) : 0;
                return data;
            });
        })).subscribe(function (response) { });
    };
    FirestoreService.prototype.addDoctorToPatient = function (form) {
        var doctor = form.doctor;
        var patient = form.patient;
        this.userPatients.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            return values.map(function (value) {
                var data = value.payload.doc.data();
                data.patientNo === patient.patientNo
                    ? value.payload.doc.ref.collection('doctors').add(__assign({}, doctor)) : 0;
                return data;
            });
        })).subscribe(function (response) { });
    };
    FirestoreService.prototype.sendMessageToDoctor = function (to, from, message) {
        var _this = this;
        var _message = { to: to, from: from, message: message };
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_3__().format('X');
        this.dataPatients.add(__assign({}, _message, { timestamp: timestamp }))
            .then(function () {
            _this.database.createObject('data-patients', __assign({}, _message, { timestamp: timestamp }));
        });
    };
    FirestoreService.prototype.sendRemarkToPatient = function (to, from, message) {
        var _this = this;
        var _message = { to: to, from: from, message: message };
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_3__().format('X');
        this.dataDoctors.add(__assign({}, _message, { timestamp: timestamp }))
            .then(function () {
            _this.database.createObject('data-doctor', __assign({}, _message, { timestamp: timestamp }));
        });
    };
    FirestoreService.prototype.getDoctorsRemarks = function (fullname) {
        return this.dataDoctors.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            return values.filter(function (e) { return e.to === fullname; });
        }));
    };
    FirestoreService.prototype.getPatientMessages = function (fullname) {
        return this.dataPatients.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            return values.filter(function (e) { return e.to === fullname; });
        }));
    };
    FirestoreService.prototype.getPatientReadings = function (patientNo) {
        return this.dataReadings.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            var readings = values.map(function (value) {
                var index = value.payload.newIndex;
                var data = value.payload.doc.data();
                return __assign({ index: index }, data);
            }).map(function (response) {
                var object = {};
                var index = response.index;
                var reading = response.reading.split(' ');
                reading.map(function (val) {
                    object[val.split('/')[0]] = val.split('/')[1];
                });
                return __assign({ index: index }, object);
            }).filter(function (e) { return e.patientNo === patientNo; });
            return lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](readings, [function (message) { return message.timestamp; }]).reverse();
        }));
    };
    FirestoreService.prototype.setTime = function (setTime) {
        var _this = this;
        setTime['current'] = 0;
        setTime['timing'] = false;
        setTime['timestamp'] = moment__WEBPACK_IMPORTED_MODULE_3__().format('X');
        ;
        this.dataTimings.add(__assign({}, setTime))
            .then(function () {
            _this.database.createObject('data-timings', __assign({}, setTime));
        });
    };
    // helper functions
    FirestoreService.prototype.createPatient = function (uid, user) {
        var _this = this;
        var userDetails = __assign({}, user, { uid: uid });
        this.userPatients.add(userDetails)
            .then(function () { return (_this.database.createObject('user-patients', userDetails)); });
    };
    FirestoreService.prototype.createDoctor = function (uid, user) {
        var _this = this;
        var userDetails = __assign({}, user, { uid: uid });
        this.userDoctors.add(userDetails)
            .then(function () { return (_this.database.createObject('user-doctors', userDetails)); });
    };
    FirestoreService.prototype.createAdmin = function (user) {
        var _this = this;
        this.userAdmins.add(user)
            .then(function () { return (_this.database.createObject('user-admins', user)); });
    };
    FirestoreService.prototype.readCollection = function (collection, isList) {
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            var isFalse = values.map(function (value) {
                var data = value.payload.doc.data();
                delete data['email'];
                delete data['password'];
                return __assign({}, data);
            });
            var isTrue = values.map(function (value) {
                var data = value.payload.doc.data();
                var pushId = value.payload.doc.id;
                ;
                return __assign({}, data, { pushId: pushId });
            });
            return isList ? isTrue : isFalse;
        }));
    };
    FirestoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/common/core/service/route-guards.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/core/service/route-guards.ts ***!
  \*****************************************************/
/*! exports provided: EntryGuard, ExitGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryGuard", function() { return EntryGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitGuard", function() { return ExitGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryGuard = /** @class */ (function () {
    function EntryGuard(router, fire) {
        this.router = router;
        this.fire = fire;
    }
    EntryGuard.prototype.canActivate = function (route, state) {
        return this.fire.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user !== null; }));
    };
    EntryGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    EntryGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], EntryGuard);
    return EntryGuard;
}());

var ExitGuard = /** @class */ (function () {
    function ExitGuard(router, fire) {
        this.router = router;
        this.fire = fire;
    }
    ExitGuard.prototype.canActivate = function (route, state) {
        return this.fire.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user === null; }));
    };
    ExitGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    ExitGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ExitGuard);
    return ExitGuard;
}());



/***/ }),

/***/ "./src/app/common/core/service/shared.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/core/service/shared.service.ts ***!
  \*******************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chance */ "./node_modules/chance/chance.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SharedService = /** @class */ (function () {
    function SharedService(router, snack, firestoreService, databaseService) {
        this.router = router;
        this.snack = snack;
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
        this.vertical = 'bottom';
        this.horizontal = 'center';
        this.panelChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SharedService.prototype.reInitMainDialog = function () {
        this.router.navigate(['/', 'bf']);
    };
    SharedService.prototype.snackbar = function (message, duration) {
        if (duration === void 0) { duration = 3500; }
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"];
        config.duration = duration;
        config.horizontalPosition = this.horizontal;
        config.verticalPosition = this.vertical;
        return this.snack.open(message, '', config);
    };
    SharedService.prototype.closeAllSnackBar = function () {
        this.snack.dismiss();
    };
    Object.defineProperty(SharedService.prototype, "setPanel", {
        set: function (state) {
            this.panelChanged.next(state);
        },
        enumerable: true,
        configurable: true
    });
    SharedService.prototype.formError = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.duration = 2500;
        config.horizontalPosition = this.horizontal;
        config.verticalPosition = this.vertical;
        this.snack.open('Form error. Please try again.', '', config);
    };
    SharedService.prototype.signInSuccess = function () {
        var _this = this;
        var message = 'Successfully signed in';
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.duration = 3500;
        config.horizontalPosition = this.horizontal;
        config.verticalPosition = this.vertical;
        this.snack.open(message, '', config)
            .afterDismissed().subscribe(function () {
            var message = 'Welcome to Hyperdetect';
            _this.snack.open(message, '', config);
        });
    };
    SharedService.prototype.signOutSuccess = function () {
        var message = 'Successfully signed out';
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.duration = 3500;
        config.horizontalPosition = this.horizontal;
        config.verticalPosition = this.vertical;
        this.snack.open(message, '', config);
    };
    SharedService.prototype.signInError = function (error) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.duration = 7000;
        config.horizontalPosition = this.horizontal;
        config.verticalPosition = this.vertical;
        this.snack.open(error.message, '', config);
    };
    SharedService.prototype.delay = function (amount) {
        return new Promise(function (resolve) {
            setTimeout(resolve, amount);
        });
    };
    ;
    SharedService.prototype.loop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p1, p2, p3, p4, p5, p6, i, a;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p1 = 'PX-963309195986';
                        p2 = 'PX-743002104549';
                        p3 = 'PX-318419614038';
                        p4 = 'PX-685932403453';
                        p5 = 'PX-925742140063';
                        p6 = 'PX-978055815189';
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 4];
                        a = function () {
                            var chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            var timestamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('X');
                            var randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            var randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            var randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            var data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p1;
                            _this.firestoreService.pushToReadings(data);
                            chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p2;
                            _this.firestoreService.pushToReadings(data);
                            chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p3;
                            _this.firestoreService.pushToReadings(data);
                            chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p4;
                            _this.firestoreService.pushToReadings(data);
                            chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p5;
                            _this.firestoreService.pushToReadings(data);
                            chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
                            randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
                            data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + p6;
                            _this.firestoreService.pushToReadings(data);
                        };
                        a();
                        return [4 /*yield*/, this.delay(1000)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SharedService.prototype.onPush = function (patientNo) {
        var chance = new chance__WEBPACK_IMPORTED_MODULE_4__["Chance"]();
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('X');
        var randomFloat1 = chance.floating({ min: -30, max: 30, fixed: 2 });
        var randomFloat2 = chance.floating({ min: -30, max: 30, fixed: 2 });
        var randomFloat3 = chance.floating({ min: -30, max: 30, fixed: 2 });
        var data = "sbpVal/" + randomFloat1 + " dbpVal/" + randomFloat2 + " hrVal/" + randomFloat3 + " timestamp/" + timestamp + " patientNo/" + patientNo;
        this.firestoreService.pushToReadings(data);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"],
            _database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/common/shared/component/buffer/buffer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common/shared/component/buffer/buffer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/shared/component/buffer/buffer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/common/shared/component/buffer/buffer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L2J1ZmZlci9idWZmZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/buffer/buffer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/shared/component/buffer/buffer.component.ts ***!
  \********************************************************************/
/*! exports provided: BufferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferComponent", function() { return BufferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BufferComponent = /** @class */ (function () {
    function BufferComponent(router) {
        this.router = router;
    }
    BufferComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    BufferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buffer',
            template: __webpack_require__(/*! ./buffer.component.html */ "./src/app/common/shared/component/buffer/buffer.component.html"),
            styles: [__webpack_require__(/*! ./buffer.component.scss */ "./src/app/common/shared/component/buffer/buffer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BufferComponent);
    return BufferComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <h1>Sign in</h1>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Email address</mat-label>\r\n      <input matInput type=\"email\" formControlName=\"email\">\r\n      <mat-error *ngIf=\"emailError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"emailError?.email\">Invalid email.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput type=\"password\" formControlName=\"password\">\r\n      <mat-error *ngIf=\"passwordError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"passwordError?.minlength\">Password is too short.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"!isProgressing\">LOGIN</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 350px; }\n  #wrapper h1 {\n    margin-bottom: 20px; }\n  #wrapper .mat-form-field {\n    width: 100%; }\n  #wrapper .mat-raised-button {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbG9naW4tYWRtaW4tZGlhbG9nL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcbG9naW4tYWRtaW4tZGlhbG9nXFxsb2dpbi1hZG1pbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLG1CQUFtQixFQUFBO0VBSnZCO0lBUUksV0FBVyxFQUFBO0VBUmY7SUFZSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2hhcmVkL2NvbXBvbmVudC9sb2dpbi1hZG1pbi1kaWFsb2cvbG9naW4tYWRtaW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoginAdminDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminDialogComponent", function() { return LoginAdminDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LoginAdminDialogComponent = /** @class */ (function () {
    function LoginAdminDialogComponent(fb, router, dialog, authService, firestoreService, sharedService) {
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.isProgressing = false;
        this.form = fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
        });
    }
    Object.defineProperty(LoginAdminDialogComponent.prototype, "emailError", {
        get: function () { return this.form.get('email').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginAdminDialogComponent.prototype, "passwordError", {
        get: function () { return this.form.get('password').errors; },
        enumerable: true,
        configurable: true
    });
    LoginAdminDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            _this.isProgressing = _this.form.valid;
        });
    };
    LoginAdminDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 100000000);
        this.isProgressing = false;
        if (this.form.invalid) {
            this.isProgressing = true;
            this.sharedService.formError();
            return;
        }
        this.authService.signIn(form.email, form.password)
            .then(function () {
            _this.isProgressing = true;
            _this.sharedService.signInSuccess();
            _this.firestoreService.enableNetwork();
            _this.router.navigate(['/', 'a']);
            _this.dialog.closeAll();
        }).catch(function (state) {
            _this.isProgressing = true;
            _this.sharedService.signInError(state);
        });
    };
    LoginAdminDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-admin-dialog',
            template: __webpack_require__(/*! ./login-admin-dialog.component.html */ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-admin-dialog.component.scss */ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            _core_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], LoginAdminDialogComponent);
    return LoginAdminDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <h1>Sign in</h1>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Email address</mat-label>\r\n      <input matInput type=\"email\" formControlName=\"email\">\r\n      <mat-error *ngIf=\"emailError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"emailError?.email\">Invalid email.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput type=\"password\" formControlName=\"password\">\r\n      <mat-error *ngIf=\"passwordError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"passwordError?.minlength\">Password is too short.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"!isProgressing\">LOGIN</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 350px; }\n  #wrapper h1 {\n    margin-bottom: 20px; }\n  #wrapper .mat-form-field {\n    width: 100%; }\n  #wrapper .mat-raised-button {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbG9naW4tZG9jdG9yLWRpYWxvZy9DOlxcVXNlcnNcXEtpcmFua3VtYXIgR29udGlcXERlc2t0b3BcXFByb2dyYW1taW5nLi5Xb3JsZFxcTWFqb3JQcm9qZWN0XFxIb3NwaXRhbC1EYXNoYm9hcmRcXEhvc3BpdGFsLURhc2hib2FyZC1BcHAvc3JjXFxhcHBcXGNvbW1vblxcc2hhcmVkXFxjb21wb25lbnRcXGxvZ2luLWRvY3Rvci1kaWFsb2dcXGxvZ2luLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLG1CQUFtQixFQUFBO0VBSnZCO0lBUUksV0FBVyxFQUFBO0VBUmY7SUFZSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2hhcmVkL2NvbXBvbmVudC9sb2dpbi1kb2N0b3ItZGlhbG9nL2xvZ2luLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoginDoctorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDoctorDialogComponent", function() { return LoginDoctorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LoginDoctorDialogComponent = /** @class */ (function () {
    function LoginDoctorDialogComponent(fb, router, dialog, authService, firestoreService, sharedService) {
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.isProgressing = false;
        this.form = fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
        });
    }
    Object.defineProperty(LoginDoctorDialogComponent.prototype, "emailError", {
        get: function () { return this.form.get('email').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginDoctorDialogComponent.prototype, "passwordError", {
        get: function () { return this.form.get('password').errors; },
        enumerable: true,
        configurable: true
    });
    LoginDoctorDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            _this.isProgressing = _this.form.valid;
        });
    };
    LoginDoctorDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 100000000);
        this.isProgressing = false;
        if (this.form.invalid) {
            this.isProgressing = true;
            this.sharedService.formError();
            return;
        }
        this.authService.signIn(form.email, form.password)
            .then(function () {
            _this.isProgressing = true;
            _this.sharedService.signInSuccess();
            _this.firestoreService.enableNetwork();
            _this.router.navigate(['/', 'd']);
            _this.dialog.closeAll();
        }).catch(function (state) {
            _this.isProgressing = true;
            _this.sharedService.signInError(state);
        });
    };
    LoginDoctorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-doctor-dialog',
            template: __webpack_require__(/*! ./login-doctor-dialog.component.html */ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-doctor-dialog.component.scss */ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            _core_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], LoginDoctorDialogComponent);
    return LoginDoctorDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"wrapper\">\r\n  <h2 class=\"text-center\">Hyperdetect</h2>\r\n  <mat-form-field color=\"accent\">\r\n    <mat-label>Log in as</mat-label>\r\n    <mat-select [(ngModel)]=\"option\" required=\"false\" #optionControl=\"ngModel\">\r\n      <mat-option>None</mat-option>\r\n      <mat-option value=\"patient\">Patient</mat-option>\r\n      <mat-option value=\"doctor\">Doctor</mat-option>\r\n      <mat-option value=\"admin\">Admin</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <button mat-raised-button (click)=\"onProceed()\">PROCEED</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Great+Vibes\");\nh2 {\n  font-family: 'Great Vibes',\r cursive;\n  font-size: 2rem;\n  letter-spacing: 6px; }\n#wrapper {\n  max-width: 300px; }\n#wrapper .mat-form-field {\n    width: 100%; }\n#wrapper .mat-raised-button {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbG9naW4tbWFpbi1kaWFsb2cvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxjb21tb25cXHNoYXJlZFxcY29tcG9uZW50XFxsb2dpbi1tYWluLWRpYWxvZ1xcbG9naW4tbWFpbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L2xvZ2luLW1haW4tZGlhbG9nL2xvZ2luLW1haW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFZO0FBRVo7RUFDRyxvQ0FFQTtFQUNBLGVBQWM7RUNEZixtQkFBbUIsRUFBRTtBQUV2QjtFRENBLGdCQUdFLEVBQUE7QUNGQTtJRERGLFdBT0UsRUFBQTtBQ0pBO0lBQ0UsV0FBVyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbG9naW4tbWFpbi1kaWFsb2cvbG9naW4tbWFpbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdyZWF0K1ZpYmVzJyk7XHJcblxyXG5oMntcclxuICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsXHJcbiAgIGN1cnNpdmU7XHJcbiAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxufVxyXG4jd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HcmVhdCtWaWJlc1wiKTtcbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsXHIgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogNnB4OyB9XG5cbiN3cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzMDBweDsgfVxuICAjd3JhcHBlciAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICN3cmFwcGVyIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LoginMainDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMainDialogComponent", function() { return LoginMainDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_patient_dialog_login_patient_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-patient-dialog/login-patient-dialog.component */ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.ts");
/* harmony import */ var _login_doctor_dialog_login_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-doctor-dialog/login-doctor-dialog.component */ "./src/app/common/shared/component/login-doctor-dialog/login-doctor-dialog.component.ts");
/* harmony import */ var _login_admin_dialog_login_admin_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-admin-dialog/login-admin-dialog.component */ "./src/app/common/shared/component/login-admin-dialog/login-admin-dialog.component.ts");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginMainDialogComponent = /** @class */ (function () {
    function LoginMainDialogComponent(dialog, sharedService) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.option = '';
    }
    LoginMainDialogComponent.prototype.ngOnInit = function () {
    };
    LoginMainDialogComponent.prototype.openPatient = function () {
        var _this = this;
        this.dialogRef_PA = this.dialog.open(_login_patient_dialog_login_patient_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginPatientDialogComponent"], { data: '' });
        this.dialogRef_PA.backdropClick().subscribe(function () {
            _this.sharedService.reInitMainDialog();
        });
    };
    LoginMainDialogComponent.prototype.openDoctor = function () {
        var _this = this;
        this.dialogRef_DO = this.dialog.open(_login_doctor_dialog_login_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDoctorDialogComponent"], { data: '' });
        this.dialogRef_DO.backdropClick().subscribe(function () {
            _this.sharedService.reInitMainDialog();
        });
    };
    LoginMainDialogComponent.prototype.openAdmin = function () {
        var _this = this;
        this.dialogRef_AD = this.dialog.open(_login_admin_dialog_login_admin_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginAdminDialogComponent"], { data: '' });
        this.dialogRef_AD.backdropClick().subscribe(function () {
            _this.sharedService.reInitMainDialog();
        });
    };
    LoginMainDialogComponent.prototype.onProceed = function () {
        this.dialog.closeAll();
        switch (this.option) {
            case 'patient': {
                this.openPatient();
                break;
            }
            case 'doctor': {
                this.openDoctor();
                break;
            }
            case 'admin': {
                this.openAdmin();
                break;
            }
            default: {
                this.sharedService.reInitMainDialog();
            }
        }
    };
    LoginMainDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-main-dialog',
            template: __webpack_require__(/*! ./login-main-dialog.component.html */ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-main-dialog.component.scss */ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginMainDialogComponent);
    return LoginMainDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <h1>Sign in</h1>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Email address</mat-label>\r\n      <input matInput type=\"email\" formControlName=\"email\">\r\n      <mat-error *ngIf=\"emailError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"emailError?.email\">Invalid email.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput type=\"password\" formControlName=\"password\">\r\n      <mat-error *ngIf=\"passwordError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"passwordError?.minlength\">Password is too short.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"!isProgressing\">LOGIN</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 350px; }\n  #wrapper h1 {\n    margin-bottom: 20px; }\n  #wrapper .mat-form-field {\n    width: 100%; }\n  #wrapper .mat-raised-button {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbG9naW4tcGF0aWVudC1kaWFsb2cvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxjb21tb25cXHNoYXJlZFxcY29tcG9uZW50XFxsb2dpbi1wYXRpZW50LWRpYWxvZ1xcbG9naW4tcGF0aWVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLG1CQUFtQixFQUFBO0VBSnZCO0lBUUksV0FBVyxFQUFBO0VBUmY7SUFZSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2hhcmVkL2NvbXBvbmVudC9sb2dpbi1wYXRpZW50LWRpYWxvZy9sb2dpbi1wYXRpZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LoginPatientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPatientDialogComponent", function() { return LoginPatientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/service/database.service */ "./src/app/common/core/service/database.service.ts");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LoginPatientDialogComponent = /** @class */ (function () {
    function LoginPatientDialogComponent(fb, router, dialog, authService, firestoreService, databaseService, sharedService) {
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
        this.isProgressing = false;
        this.form = fb.group({
            // 'email': [ '', [ Validators.required, Validators.email ] ],
            // 'password': [ '', [ Validators.required, Validators.minLength(2) ] ]
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
        });
    }
    Object.defineProperty(LoginPatientDialogComponent.prototype, "emailError", {
        get: function () { return this.form.get('email').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPatientDialogComponent.prototype, "passwordError", {
        get: function () { return this.form.get('password').errors; },
        enumerable: true,
        configurable: true
    });
    LoginPatientDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            _this.isProgressing = _this.form.valid;
        });
    };
    LoginPatientDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 100000000);
        this.isProgressing = false;
        if (this.form.invalid) {
            this.isProgressing = true;
            this.sharedService.formError();
            return;
        }
        this.authService.signIn(form.email, form.password)
            .then(function () {
            _this.isProgressing = true;
            _this.sharedService.signInSuccess();
            _this.firestoreService.enableNetwork();
            _this.databaseService.goOnline();
            _this.router.navigate(['/', 'p']);
            _this.dialog.closeAll();
        }).catch(function (state) {
            _this.isProgressing = true;
            _this.sharedService.signInError(state);
        });
    };
    LoginPatientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-patient-dialog',
            template: __webpack_require__(/*! ./login-patient-dialog.component.html */ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-patient-dialog.component.scss */ "./src/app/common/shared/component/login-patient-dialog/login-patient-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            _core_service_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _core_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], LoginPatientDialogComponent);
    return LoginPatientDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/startup/startup.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common/shared/component/startup/startup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/shared/component/startup/startup.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/common/shared/component/startup/startup.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L3N0YXJ0dXAvc3RhcnR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common/shared/component/startup/startup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/shared/component/startup/startup.component.ts ***!
  \**********************************************************************/
/*! exports provided: StartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupComponent", function() { return StartupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
/* harmony import */ var _login_main_dialog_login_main_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-main-dialog/login-main-dialog.component */ "./src/app/common/shared/component/login-main-dialog/login-main-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartupComponent = /** @class */ (function () {
    function StartupComponent(dialog, authService, sharedService) {
        this.dialog = dialog;
        this.authService = authService;
        this.sharedService = sharedService;
    }
    StartupComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dialogRef = _this.dialog.open(_login_main_dialog_login_main_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginMainDialogComponent"], {});
            _this.dialogRef.backdropClick().subscribe(function () {
                _this.sharedService.reInitMainDialog();
                _this.sharedService.snackbar('Select one to comtinue.');
            });
        });
        this.authService.signOut();
    };
    StartupComponent.prototype.onKeyup = function (e) {
        if (e.which == 27) {
            this.sharedService.reInitMainDialog();
            this.sharedService.snackbar('Select one to comtinue.');
        }
    };
    StartupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-startup',
            template: __webpack_require__(/*! ./startup.component.html */ "./src/app/common/shared/component/startup/startup.component.html"),
            host: {
                '(document:keyup)': 'onKeyup($event)'
            },
            styles: [__webpack_require__(/*! ./startup.component.scss */ "./src/app/common/shared/component/startup/startup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], StartupComponent);
    return StartupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// tslint:disable-next-line:no-unused-expression
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDEWeh7VyXuNMR_9HFvEtjxGaA2jiIEAeE',
        authDomain: 'hospital-admin-panel.firebaseapp.com',
        databaseURL: 'https://hospital-admin-panel.firebaseio.com',
        projectId: 'hospital-admin-panel',
        storageBucket: 'hospital-admin-panel.appspot.com',
        messagingSenderId: '644408104958'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kirankumar Gonti\Desktop\Programming..World\MajorProject\Hospital-Dashboard\Hospital-Dashboard-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map