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
/******/ 	deferredModules.push([46,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"styles-container_3xSNk","message":"styles-message_3cdBs","ready":"styles-ready_2q3Ja","playing":"styles-playing_2b_gK","finished":"styles-finished_3X2sX","gridContainer":"styles-gridContainer_1Hkbr","gridItem":"styles-gridItem_3WanR","cell":"styles-cell_-GxSq","diamond":"styles-diamond_39Q1V","arrow":"styles-arrow_1m3g_","left":"styles-left_21cri","unknown":"styles-unknown_3pJB1"};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
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
var createActions = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/redux-actions/es/handleActions.js + 5 modules
var handleActions = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/redux-actions/es/combineActions.js + 1 modules
var combineActions = __webpack_require__(50);

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
// EXTERNAL MODULE: ./src/common.scss
var common = __webpack_require__(45);

// CONCATENATED MODULE: ./src/index.js






var renderDom = /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: store
}, /*#__PURE__*/react_default.a.createElement(components, null));
react_dom_default.a.render(renderDom, document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=main.145da058.js.map