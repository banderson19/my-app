webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --primary: #fff;\n  --secondary: #F3A847;\n  --tertiary: #B12704;\n  --light: #fafafa;\n  --dark: #000000;\n  --darker: #111111;\n  --error: rgb(228, 46, 1);\n  --spacing-one: calc(1rem * 0.5);\n  --spacing-two: calc(1rem);\n  --spacing-five: calc(2.5rem);\n\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  line-height: 1.5;\n  font-size: 18px;\n  letter-spacing: .1em;\n  \n  /* font-family: 'Serif bold Italic', cursive; */\n}\n\n\n.gradient_bg  {\n    /* ff 3.6+ */ \n\n    /* safari 5.1+,chrome 10+ */\n\n    /* opera 11.10+ */\n    background:-o-linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n\n    /* ie 6-9 */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ED6868', endColorstr='#006E09', GradientType=1 );\n\n    /* ie 10+ */\n\n    /* global 94%+ browsers support */\n    background:linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n}\n/* -------- NavBar -------- */\nli {\n    list-style: none;\n  }\n  \n  nav a:hover {\n    text-decoration: none;\n  }\n  \n  nav  li {\n    cursor: pointer;\n  }\n\n\n/* -------- ABOUT PAGE -------- */\n.aboutContainer {\n    display: flex;\n    flex-wrap: wrap;\n    height:  400px;\n}\n\n.aboutPhoto {\n    border-radius: 50%;\n    height: 250px;\n}\n\n\n\na {\n  color: var(--tertiary);\n  text-decoration: none;\n  font-weight: bold;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nheader {\n  background: var(--dark);\n}\n\nheader a {\n  color: var(--light);\n}\n\nbutton {\n  font-size: 1rem;\n  text-decoration: none;\n  padding: 0.25rem 1rem;\n  border-radius: .5rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin: 0 1px;\n  background-color: var(--secondary);\n}\n\nbutton:hover {\n  opacity: .8;\n}\n\nbutton[disabled] {\n  cursor: default;\n  opacity: .8;\n}\n\nimg {\n  max-width: 100%;\n}\n\nspan[role=\"img\"] {\n  cursor: default;\n}\n\nform {\n  width: 40%;\n}\n\ninput {\n  font-size: 1rem;\n  padding: 0.25rem;\n  border: 1px solid var(--dark);\n  outline: none;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n}\n\ninput:focus {\n  border: 1px solid var(--secondary);\n  box-shadow: 0 0 .25rem rgba(0, 0, 0, .5);\n}\n\n\n\ntextarea {\n\twidth: 600px;\n\theight: 120px;\n\tborder: 3px solid #cccccc;\n\tpadding: 5px;\n}\n\n.container {\n  width: 85%;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  width: 25%;\n  text-align: center;\n}\n\n.img-thumbnail {\n  width: auto;\n  height: 300px;\n  margin-bottom: 50px;\n  cursor: pointer;\n}\n\n.modalBackdrop {\n\tbackground: rgba(0, 0, 0, .65);\n\tbottom: 0;\n\tleft: 0;\n\toverflow: auto;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: 1;\n}\n\n.modalContainer {\n\tbackground: var(--darker);\n\tborder-radius: 5px;\n\tmax-width: 100%;\n\tmargin: 50px auto;\n\tpadding: 15px;\n\twidth: 960px;\n}\n\n.modalTitle {\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tmargin-bottom: 25px;\n}\n\nbutton {\n\tbackground: var(--primary);\n\tborder: 0;\n\tborder-radius: 5px;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tmargin-bottom: 30px;\n\tpadding: 10px 15px;\t\n}\n\na {\n\tborder-radius: 5px;\n\tcolor: var(--primary);\n\tfont-weight: 600;\n\tpadding: 2px 4px;\n\tmargin-left: -2px;\n\tmargin-right: -2px;\n\t\n}\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;EACxB,+BAA+B;EAC/B,yBAAyB;EACzB,4BAA4B;;AAE9B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;;EAEpB,+CAA+C;AACjD;;;AAGA;IACI,YAAY;;IAGZ,2BAA2B;;IAG3B,iBAAiB;IACjB,yFAAyF;;IAEzF,WAAW;IACX,oHAAoH;;IAEpH,WAAW;;IAGX,iCAAiC;IACjC,sFAAsF;AAC1F;AACA,6BAA6B;AAC7B;IACI,gBAAgB;EAClB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,eAAe;EACjB;;;AAGF,iCAAiC;AACjC;IACI,aAAa;IACb,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;;;AAIA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,wCAAwC;AAC1C;;;;AAIA;CACC,YAAY;CACZ,aAAa;CACb,yBAAyB;CACzB,YAAY;AACb;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;CACC,8BAA8B;CAC9B,SAAS;CACT,OAAO;CACP,cAAc;CACd,eAAe;CACf,QAAQ;CACR,MAAM;CACN,UAAU;AACX;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;CAC1B,SAAS;CACT,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,qBAAqB;CACrB,gBAAgB;CAChB,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;;AAEnB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --primary: #fff;\n  --secondary: #F3A847;\n  --tertiary: #B12704;\n  --light: #fafafa;\n  --dark: #000000;\n  --darker: #111111;\n  --error: rgb(228, 46, 1);\n  --spacing-one: calc(1rem * 0.5);\n  --spacing-two: calc(1rem);\n  --spacing-five: calc(2.5rem);\n\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  line-height: 1.5;\n  font-size: 18px;\n  letter-spacing: .1em;\n  \n  /* font-family: 'Serif bold Italic', cursive; */\n}\n\n\n.gradient_bg  {\n    /* ff 3.6+ */\n    background:-moz-linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%); \n\n    /* safari 5.1+,chrome 10+ */\n    background:-webkit-linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n\n    /* opera 11.10+ */\n    background:-o-linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n\n    /* ie 6-9 */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ED6868', endColorstr='#006E09', GradientType=1 );\n\n    /* ie 10+ */\n    background:-ms-linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n\n    /* global 94%+ browsers support */\n    background:linear-gradient(328deg, rgba(237, 104, 104, 1) 0%, rgba(0, 110, 9, 1) 100%);\n}\n/* -------- NavBar -------- */\nli {\n    list-style: none;\n  }\n  \n  nav a:hover {\n    text-decoration: none;\n  }\n  \n  nav  li {\n    cursor: pointer;\n  }\n\n\n/* -------- ABOUT PAGE -------- */\n.aboutContainer {\n    display: flex;\n    flex-wrap: wrap;\n    height:  400px;\n}\n\n.aboutPhoto {\n    border-radius: 50%;\n    height: 250px;\n}\n\n\n\na {\n  color: var(--tertiary);\n  text-decoration: none;\n  font-weight: bold;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nheader {\n  background: var(--dark);\n}\n\nheader a {\n  color: var(--light);\n}\n\nbutton {\n  font-size: 1rem;\n  text-decoration: none;\n  padding: 0.25rem 1rem;\n  border-radius: .5rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin: 0 1px;\n  background-color: var(--secondary);\n}\n\nbutton:hover {\n  opacity: .8;\n}\n\nbutton[disabled] {\n  cursor: default;\n  opacity: .8;\n}\n\nimg {\n  max-width: 100%;\n}\n\nspan[role=\"img\"] {\n  cursor: default;\n}\n\nform {\n  width: 40%;\n}\n\ninput {\n  font-size: 1rem;\n  padding: 0.25rem;\n  border: 1px solid var(--dark);\n  outline: none;\n  border-radius: 3px;\n  transition: box-shadow 0.2s;\n}\n\ninput:focus {\n  border: 1px solid var(--secondary);\n  box-shadow: 0 0 .25rem rgba(0, 0, 0, .5);\n}\n\n\n\ntextarea {\n\twidth: 600px;\n\theight: 120px;\n\tborder: 3px solid #cccccc;\n\tpadding: 5px;\n}\n\n.container {\n  width: 85%;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  width: 25%;\n  text-align: center;\n}\n\n.img-thumbnail {\n  width: auto;\n  height: 300px;\n  margin-bottom: 50px;\n  cursor: pointer;\n}\n\n.modalBackdrop {\n\tbackground: rgba(0, 0, 0, .65);\n\tbottom: 0;\n\tleft: 0;\n\toverflow: auto;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: 1;\n}\n\n.modalContainer {\n\tbackground: var(--darker);\n\tborder-radius: 5px;\n\tmax-width: 100%;\n\tmargin: 50px auto;\n\tpadding: 15px;\n\twidth: 960px;\n}\n\n.modalTitle {\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tmargin-bottom: 25px;\n}\n\nbutton {\n\tbackground: var(--primary);\n\tborder: 0;\n\tborder-radius: 5px;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tmargin-bottom: 30px;\n\tpadding: 10px 15px;\t\n}\n\na {\n\tborder-radius: 5px;\n\tcolor: var(--primary);\n\tfont-weight: 600;\n\tpadding: 2px 4px;\n\tmargin-left: -2px;\n\tmargin-right: -2px;\n\t\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.2c0e0e1da42b57646bcf.hot-update.js.map