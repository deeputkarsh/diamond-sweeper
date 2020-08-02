/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/diamond-sweeper/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([53,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(45);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, ".styles-container_3xSNk{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:fixed;width:100%;height:100%;top:0;left:0}.styles-message_3cdBs{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:1rem 0;position:absolute;top:0;left:0;width:100%;background-color:#777777;color:#ffffff}.styles-message_3cdBs.styles-ready_2q3Ja{background-color:#2AC13B}.styles-message_3cdBs.styles-playing_2b_gK{background-color:#C1B82A}.styles-message_3cdBs.styles-finished_3X2sX{background-color:#E85858}.styles-gridContainer_1Hkbr{display:grid;grid-template-columns:auto auto auto auto auto auto auto auto;width:85vw;height:85vw;max-width:648px;max-height:648px}.styles-gridItem_3WanR{border:1px solid rgba(0,0,0,0.8)}.styles-cell_-GxSq{background-size:100% 100%;margin:0}.styles-cell_-GxSq.styles-diamond_39Q1V{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.styles-cell_-GxSq.styles-arrow_1m3g_{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.styles-cell_-GxSq.styles-arrow_1m3g_.styles-left_21cri{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.styles-cell_-GxSq.styles-unknown_3pJB1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}\n", ""]);
// Exports
exports.locals = {
	"container": "styles-container_3xSNk",
	"message": "styles-message_3cdBs",
	"ready": "styles-ready_2q3Ja",
	"playing": "styles-playing_2b_gK",
	"finished": "styles-finished_3X2sX",
	"gridContainer": "styles-gridContainer_1Hkbr",
	"gridItem": "styles-gridItem_3WanR",
	"cell": "styles-cell_-GxSq",
	"diamond": "styles-diamond_39Q1V",
	"arrow": "styles-arrow_1m3g_",
	"left": "styles-left_21cri",
	"unknown": "styles-unknown_3pJB1"
};
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABINJREFUeJzt3c+L7WUdwPH3zJ2ri4yoNKykKwaKZHqJaBcWhvQHBBEtIlvUImjVSsKtLaJluREUb2n2wyCqTdGlXyujkKwgCYrsh4JkQZbZbXE63KvOd75evXOe75n7esHDcIYZ+Mzizcw553meKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbbGT0AW+Wq6n3VyepN1SXV09Vj1U+r09W/hk0Hg9xafa/6b3XmgPVU9fnqyjFjwmZdUT3UwVHst56uPjFgXtiY66vfd/5xnLvurvY2PTgctmuqP/fK4livryQSjpBLq190YeIQCUfOHV3YOETCkfHa6u8dTiAiYet9qsOLQyRsvdMdfiAiYSsdq55pM4GIhK1zdZuLQyRsnZNtPhCRsDXe1phARMJWeH3jAhEJW+GPiQQm3dPYQM5UDyQSFurWxgciEhbt540PRCQs1s3NnxwUCRe1Oxsfh0hYrN3q/sbHIRIWa696sPFxiITFEgnMEAnMEAnMEAnMWGIkxw71J4bzJBKYIRKYIRKYIRKYIRKYIRKYIRKYIRKYIRKYIRKYsbRI7k8kLIxIYIZIYIZIYIZIYMbWRfJST2RdXb2zOlG9qtW1MPBy/Kb6R3XZ6EGqD/7/44er5/b7gp0Dvvmy6uPVx6rrL+xcsCgPdEAk+/lQ9ZfG/wq0rE2tl/Sc5Fj1hQUMa1kj1osiOffBTnVvdVtwcbqhemv1jfUnzg3kM63+kTxczG6snq1+WGefpN9UPZzXhaHqP9U7qkfWL9femThgba9VE+1U11W/HjoOLNN1u519swR4vg/sVu8ZPQUs1M071ePVG0dPAgv0h53q39Xx0ZPAAj1j0yEcYLd6cvQQsFBP7Fa/Gj0FLNSju9UPRk8BC3XaG4WwvzPVtbutTnh9Z/AwsDTfqn673qz49upn+aeIUKvdvCerR9cbFP/a6rjhLcNGguW4vXqonr+D90fVNa22vsPF6p7q0+sHL9zi/s3q8updm5wIFuJU9dFWT9CrFwdypvp2q/dG3t0yrmaBTThVfaQX3GwydUjql9UXqyeqq6o3HOpoMNa+cdTB92Kd6y2dvTju1bk4jpdvr9XdB0v562QyDti0veqrjb/eZ73uy1FzFkIcMEEcMEEcMEEcMEEcMGGv+lrjo1ivU4mDhRAHTBAHTBAHTDieOGBf4oAJ4oAJ4oAJ4oAJ4oAJx6uvNz4KcbA4S4vjS4mDhRAHTBAHTBAHTBAHTNhtWYedxMGifK7xUYiDRbql8VGIg0XaqR5pfBjiYJHe3/gwxMFi3Zc4YNKfEgfs6/LGxvHlxMGC3ZA4YNLJxAGTTiQOmHSs+mfigEnfTxww6ZOJAya9pvpb4oBJtycOmHRJ9XDigEknqscTB0y6tvpdryyOuxIHR9jrqgc7/zCeqm4bMC8M8d7qu9VzHRzGk9VnqyvGjHnh7YwegK1yZasjuTdVb64ubfWy8GPVT6ofV88Omw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICj6H/2STRwq3NM6AAAAABJRU5ErkJggg=="

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(13);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
var es = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/redux-promise/lib/index.js
var lib = __webpack_require__(27);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(14);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/redux-actions/es/createActions.js + 8 modules
var createActions = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/redux-actions/es/handleActions.js + 5 modules
var handleActions = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/redux-actions/es/combineActions.js + 1 modules
var combineActions = __webpack_require__(57);

// CONCATENATED MODULE: ./src/constants.js
var GRID_SIZE = 8;
var APP_STATUS = {
  READY: 'Ready',
  PLAYING: 'Playing',
  GAME_OVER: 'Game Over'
};
var GAME_STATUS_CLASS = {
  Ready: 'ready',
  Playing: 'playing',
  'Game Over': 'finished'
};
var CELL_STATUS = {
  CLOSED: 'closed',
  OPEN: 'open'
};
// CONCATENATED MODULE: ./src/helpers/state_helper.js

var state_helper_getStartApp = function getStartApp(row, col) {
  var retData = [];

  for (var i = 0; i < row; i++) {
    retData[i] = [];
    var diamondAt = Math.floor(Math.random() * 8);

    for (var j = 0; j < col; j++) {
      retData[i][j] = {
        status: CELL_STATUS.CLOSED,
        diamond: diamondAt === j
      };
    }
  }

  return retData;
};
var state_helper_getNewStatus = function getNewStatus(cellData) {
  var diamondsRemaining = cellData.reduce(function (curr, next) {
    return curr + next.filter(function (item) {
      return item.diamond && item.status === CELL_STATUS.CLOSED;
    }).length;
  }, 0);
  var openedCell = cellData.reduce(function (curr, next) {
    return curr + next.filter(function (item) {
      return item.status === CELL_STATUS.OPEN;
    }).length;
  }, 0);
  return {
    status: diamondsRemaining > 0 ? APP_STATUS.PLAYING : APP_STATUS.GAME_OVER,
    score: GRID_SIZE * GRID_SIZE - openedCell
  };
};
var getHint = function getHint(cellData, row, col) {
  var clicked = cellData[row][col];
  if (clicked.diamond) return {
    row: -1,
    col: -1,
    direction: ''
  };
  var returnObj = {
    row: row,
    col: col,
    direction: 'right'
  };
  var rowDiamondIndex = cellData[row].findIndex(function (item) {
    return item.diamond;
  });
  if (rowDiamondIndex < col) returnObj.direction = 'left';
  return returnObj;
};
// CONCATENATED MODULE: ./src/helpers/index.js

// CONCATENATED MODULE: ./src/redux/app_actions.js




var defaultState = {
  cellData: state_helper_getStartApp(GRID_SIZE, GRID_SIZE),
  status: APP_STATUS.READY,
  hint: {
    row: -1,
    col: -1,
    direction: ''
  },
  score: GRID_SIZE * GRID_SIZE
};

var _createActions = Object(createActions["a" /* default */])({
  ON_CELL_CLICK: function ON_CELL_CLICK(row, col) {
    return {
      row: row,
      col: col
    };
  }
}, {
  prefix: 'APP'
}),
    app_actions_onCellClick = _createActions.onCellClick;

var AppAction = {
  onCellClick: app_actions_onCellClick
};
/* harmony default export */ var app_actions = (Object(handleActions["a" /* default */])(defineProperty_default()({}, Object(combineActions["a" /* default */])(app_actions_onCellClick), function (state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  if (type === 'APP/ON_CELL_CLICK') {
    var row = payload.row,
        col = payload.col;
    var cellData = state.cellData;
    var newData = JSON.parse(JSON.stringify(cellData));
    newData[row][col].status = CELL_STATUS.OPEN;

    var _getNewStatus = state_helper_getNewStatus(newData),
        status = _getNewStatus.status,
        score = _getNewStatus.score;

    var hint = getHint(newData, row, col);
    return {
      cellData: newData,
      status: status,
      score: score,
      hint: hint
    };
  }

  return state;
}), defaultState));
// CONCATENATED MODULE: ./src/redux/configure_store.js





var rootReducer = Object(redux["c" /* combineReducers */])({
  appState: app_actions
});
var middleware = '';

if (true) {
  middleware = Object(redux["a" /* applyMiddleware */])(lib_default.a, redux_thunk_es["a" /* default */]);
} else {}

var store = Object(redux["d" /* createStore */])(rootReducer, {}, middleware);
// CONCATENATED MODULE: ./src/redux/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/components/styles.scss
var styles = __webpack_require__(4);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./src/components/Cell.js






function Cell(_ref) {
  var status = _ref.status,
      diamond = _ref.diamond,
      hint = _ref.hint,
      row = _ref.row,
      col = _ref.col,
      isClickable = _ref.isClickable,
      onCellClick = _ref.onCellClick;
  var isClosed = status === CELL_STATUS.CLOSED;
  var statusClass = isClosed ? styles_default.a.unknown : '';
  var diamondClass = diamond ? styles_default.a.diamond : '';
  var hintClass = hint.row === row && hint.col === col ? "".concat(styles_default.a.arrow, " ").concat(styles_default.a[hint.direction]) : '';

  var handleCellClick = function handleCellClick(row, col) {
    return isClickable && isClosed && onCellClick(row, col);
  };

  return /*#__PURE__*/react_default.a.createElement("figure", {
    onClick: function onClick(_) {
      return handleCellClick(row, col);
    },
    className: "".concat(styles_default.a.gridItem, " ").concat(styles_default.a.cell, " ").concat(statusClass, " ").concat(diamondClass, " ").concat(hintClass)
  });
}

var mapDispatchToProps = {
  onCellClick: AppAction.onCellClick
};
/* harmony default export */ var components_Cell = (Object(es["b" /* connect */])(null, mapDispatchToProps)(Cell));
// CONCATENATED MODULE: ./src/components/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function App(_ref) {
  var cellData = _ref.cellData,
      score = _ref.score,
      hint = _ref.hint,
      status = _ref.status;
  var isGameOver = status === APP_STATUS.GAME_OVER;
  var gameStatusClass = styles_default.a[GAME_STATUS_CLASS[status]];
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: styles_default.a.container
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(styles_default.a.message, " ").concat(gameStatusClass)
  }, isGameOver ? 'Final' : 'Your', " Score: ", score), /*#__PURE__*/react_default.a.createElement("main", {
    className: styles_default.a.gridContainer
  }, cellData.map(function (row, ri) {
    return row.map(function (cell, ci) {
      return /*#__PURE__*/react_default.a.createElement(components_Cell, extends_default()({
        key: "cell_".concat(ri, "_").concat(ci)
      }, cell, {
        hint: hint,
        col: ci,
        row: ri,
        isClickable: !isGameOver
      }));
    });
  })));
}

var mapStateToProps = function mapStateToProps(_ref2) {
  var appState = _ref2.appState;
  return _objectSpread({}, appState);
};

/* harmony default export */ var components = (Object(es["b" /* connect */])(mapStateToProps)(App));
// CONCATENATED MODULE: ./src/index.js





var renderDom = /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: store
}, /*#__PURE__*/react_default.a.createElement(components, null));
react_dom_default.a.render(renderDom, document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=main.fa046d4b.js.map