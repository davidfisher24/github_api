webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Navigation.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_preferences__ = __webpack_require__("./resources/assets/js/lib/preferences.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isExpanded: false,
            isRegistry: false
        };
    },

    computed: {
        user: function user() {
            return this.$store.getters.user;
        },
        logged: function logged() {
            return this.$store.getters.logged;
        }
    },
    methods: {
        doLogout: function doLogout() {
            this.$store.commit('logout');
            __WEBPACK_IMPORTED_MODULE_0__lib_preferences__["a" /* default */].token = null;
            this.$router.push('/');
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/SystemMessages.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_bus__ = __webpack_require__("./resources/assets/js/lib/bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0__lib_bus__["a" /* default */].$on('server-error', this.onServerError);
        __WEBPACK_IMPORTED_MODULE_0__lib_bus__["a" /* default */].$on('notify', this.onNotify);
    },
    data: function data() {
        return {
            messages: [],
            tk: null
        };
    },

    methods: {
        onNotify: function onNotify(error) {
            this.messages.push({
                key: Math.floor(100000 * Math.random()),
                theme: error.theme,
                message: error.text
            });
            this.startTicking();
        },
        onServerError: function onServerError(err) {
            var notification = {
                key: Math.floor(100000 * Math.random()),
                theme: 'is-danger',
                message: this.$t('server_error')
            };

            if (err.response && err.response.data && err.response.data.message) {
                notification.message = err.response.data.message;
            } else if (err.response && err.response.statusText) {
                notification.message = err.response.statusText;
            }

            this.messages.push(notification);
            this.startTicking();
        },
        startTicking: function startTicking() {
            var _this = this;

            clearTimeout(this.tk);
            this.tk = setTimeout(function () {
                if (_this.messages.length > 0) {
                    _this.messages.splice(0, 1);
                }

                if (_this.messages.length > 0) {
                    _this.startTicking();
                }
            }, 3000);
        },
        removeNotification: function removeNotification(notification) {
            clearTimeout(this.tk);
            var idx = this.messages.indexOf(notification);
            if (idx >= 0) {
                this.messages.splice(idx, 1);
                this.startTicking();
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Dashboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        user: function user() {
            return this.$store.getters.user;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_form__ = __webpack_require__("./resources/assets/js/lib/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_preferences__ = __webpack_require__("./resources/assets/js/lib/preferences.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: new __WEBPACK_IMPORTED_MODULE_0__lib_form__["a" /* default */]({ email: '', password: '' })
        };
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = null;
        this.$store.commit('logout');
    },

    methods: {
        doLogin: function doLogin() {
            var _this = this;

            var data = this.form.data;
            this.$http.post('/api/login', data).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = response.data.token;
                setTimeout(function () {
                    // we will reboot Vue with the new token and everything.
                    _this.$destroy();
                    var href = window.location.href;
                    // Need to change this if the router if not using hash method
                    href = href.replace(window.location.hash, '');
                    window.location.replace(href);
                }, 10);
            }).catch(function (err) {
                if (!_this.form.parse(err)) {
                    _this.bus.$emit('server-error', err);
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var tabs = [{ path: '/profile', label: 'account' }, { path: '/profile/security', label: 'security' }];
        return {
            tabs: tabs
        };
    },

    computed: {
        user: function user() {
            return this.$store.getters.user;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/ProfileAccount.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_form__ = __webpack_require__("./resources/assets/js/lib/form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        var _this = this;

        this.isLoading = true;
        this.$http.get('/profile').then(function (response) {
            _this.isLoading = false;
            _this.form.email = response.data.user.email;
            _this.form.name = response.data.user.name;
        }).catch(function (err) {
            _this.bus.$emit('srv-err', err);
        });
    },
    data: function data() {
        return {
            isLoading: false,
            isSaving: false,
            form: new __WEBPACK_IMPORTED_MODULE_0__lib_form__["a" /* default */]({
                email: '',
                name: ''
            })
        };
    },

    methods: {
        save: function save() {
            var _this2 = this;

            this.isSaving = true;
            this.$http.put('/profile', this.form.data).then(function (response) {
                _this2.isSaving = false;
                _this2.$store.commit('user', response.data.user);
                _this2.bus.$emit('notify', { theme: 'is-success', text: _this2.$t('update_success') });
            }).catch(function (err) {
                _this2.isSaving = false;
                if (!_this2.form.parse(err)) {
                    _this2.bus.$emit('srv-err', err);
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/ProfileSecurity.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_form__ = __webpack_require__("./resources/assets/js/lib/form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isSaving: false,
            form: new __WEBPACK_IMPORTED_MODULE_0__lib_form__["a" /* default */]({
                password_old: '',
                password: ''
            }),
            password_confirm: ''
        };
    },

    computed: {
        canSave: function canSave() {
            return this.form.password_old.length >= 0 && this.form.password.length > 0 && this.password_confirm === this.form.password;
        }
    },
    methods: {
        save: function save() {
            var _this = this;

            this.isSaving = true;
            this.$http.put('/profile', this.form.data).then(function () {
                _this.isSaving = false;
                _this.bus.$emit('notify', { theme: 'is-success', text: _this.$t('password_changed') });
                _this.form.password_old = '';
                _this.form.password = '';
                _this.password_confirm = '';
            }).catch(function (err) {
                _this.isSaving = false;
                if (!_this.form.parse(err)) {
                    _this.bus.$emit('srv-err', err);
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Register.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_form__ = __webpack_require__("./resources/assets/js/lib/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_preferences__ = __webpack_require__("./resources/assets/js/lib/preferences.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: new __WEBPACK_IMPORTED_MODULE_0__lib_form__["a" /* default */]({
                email: '',
                password: '',
                name: ''
            }),
            password_confirm: ''
        };
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = null;
        this.$store.commit('logout');
    },

    computed: {
        canRegister: function canRegister() {
            return this.form.name.length > 0 && this.form.email.length > 0 && this.form.password.length > 0 && this.form.password === this.password_confirm;
        }
    },
    methods: {
        doRegister: function doRegister() {
            var _this = this;

            var data = this.form.data;
            this.$http.post('/register', data).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = response.data.token;
                setTimeout(function () {
                    // we will reboot Vue with the new token and everything.
                    _this.$destroy();
                    var href = window.location.href;
                    // Need to change this if the router iw not using hash method
                    href = href.replace(window.location.hash, '');
                    window.location.replace(href);
                }, 10);
            }).catch(function (err) {
                if (!_this.form.parse(err)) {
                    _this.bus.$emit('server-error', err);
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SystemMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#system-messages {\n    position: fixed;\n    left: 50%;\n    top: 1rem;\n    width: 280px;\n    margin-left: -140px;\n    z-index: 999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
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

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-049f0327\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hero is-fullheight" }, [
    _c(
      "div",
      { staticClass: "hero-head" },
      [_c("navigation", { staticClass: "is-transparent has-shadow" })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "hero-body" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "columns is-centered" }, [
          _c("div", { staticClass: "column is-4" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("p", [_vm._v("Welcome " + _vm._s(_vm.user.name))])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "card-header-title" }, [
        _vm._v(
          "\n                                You are logged in!\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-049f0327", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f409c60\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "hero is-fullheight is-info",
      attrs: { id: "page-register" }
    },
    [
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.doRegister($event)
                },
                keydown: function($event) {
                  return _vm.form.clear($event.target.id)
                }
              }
            },
            [
              _c("div", { staticClass: "columns is-centered" }, [
                _c(
                  "div",
                  {
                    staticClass: "column is-6-tablet is-6-desktop is-4-fullhd"
                  },
                  [
                    _c("div", { staticClass: "box is-radiusless" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "name",
                              expression: "'name'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "name" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "text", id: "name" },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.has("name")
                          ? _c("div", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(_vm.form.error("name"))
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "email",
                              expression: "'email'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "email" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "email", id: "email" },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.has("email")
                          ? _c("div", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(_vm.form.error("email"))
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "password",
                              expression: "'password'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "password" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "password", id: "password" },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.has("password")
                          ? _c("div", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(_vm.form.error("password"))
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "password_confirm",
                              expression: "'password_confirm'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "password_confirm" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password_confirm,
                                expression: "password_confirm"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "password", id: "password_confirm" },
                            domProps: { value: _vm.password_confirm },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password_confirm = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("button", {
                        directives: [
                          {
                            name: "t",
                            rawName: "v-t",
                            value: "register",
                            expression: "'register'"
                          }
                        ],
                        staticClass: "button is-primary is-large is-fullwidth",
                        attrs: { type: "submit", disabled: !_vm.canRegister }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "p",
                        { staticClass: "has-text-centered" },
                        [
                          _c("router-link", { attrs: { to: "/login" } }, [
                            _vm._v(_vm._s(_vm.$t("login")))
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f409c60", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-353fa4ea\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Navigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "navbar",
      attrs: {
        role: "navigation",
        "aria-label": "main navigation",
        id: "main-navigation"
      }
    },
    [
      _c(
        "div",
        { staticClass: "navbar-brand" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-item", attrs: { to: "/" } },
            [_vm._v("\n            LVAB\n        ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "navbar-burger",
              class: { "is-active": _vm.isExpanded },
              attrs: {
                role: "button",
                "aria-label": "menu",
                "aria-expanded": _vm.isExpanded
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.isExpanded = !_vm.isExpanded
                }
              }
            },
            [
              _c("span", { attrs: { "aria-hidden": "true" } }),
              _vm._v(" "),
              _c("span", { attrs: { "aria-hidden": "true" } }),
              _vm._v(" "),
              _c("span", { attrs: { "aria-hidden": "true" } })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-menu", class: { "is-active": _vm.isExpanded } },
        [
          _c(
            "div",
            { staticClass: "navbar-start" },
            [
              _vm.logged
                ? _c(
                    "router-link",
                    { staticClass: "navbar-item", attrs: { to: "/dashboard" } },
                    [_vm._v(_vm._s(_vm.$t("dashboard")))]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "navbar-end" }, [
            _vm.logged
              ? _c(
                  "div",
                  { staticClass: "navbar-item has-dropdown is-hoverable" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "navbar-link is-parent-active",
                        attrs: { to: "/profile" }
                      },
                      [_vm._v(_vm._s(_vm.user.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "navbar-dropdown is-right is-radiusless" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: "/profile" }
                          },
                          [_vm._v(_vm._s(_vm.$t("profile")))]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "dropdown-divider" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "navbar-item",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.doLogout($event)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("logout")))]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _c("div", { staticClass: "navbar-item" }, [
                  _c("div", { staticClass: "field is-grouped" }, [
                    _c(
                      "div",
                      { staticClass: "control" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "button is-info is-outlined",
                            attrs: { to: "/login" }
                          },
                          [_vm._v(_vm._s(_vm.$t("login")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "control" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "button is-success is-outlined",
                            attrs: { to: "/register" }
                          },
                          [_vm._v(_vm._s(_vm.$t("register")))]
                        )
                      ],
                      1
                    )
                  ])
                ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-353fa4ea", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-531e4c48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/ProfileSecurity.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-half" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            },
            keydown: function($event) {
              return _vm.form.clear($event.target.id)
            }
          }
        },
        [
          _c("div", { staticClass: "field" }, [
            _c("label", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "password_old",
                  expression: "'password_old'"
                }
              ],
              staticClass: "label",
              attrs: { for: "password_old" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password_old,
                    expression: "form.password_old"
                  }
                ],
                staticClass: "input is-large",
                attrs: { type: "password", id: "password_old" },
                domProps: { value: _vm.form.password_old },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password_old", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "password_new",
                  expression: "'password_new'"
                }
              ],
              staticClass: "label",
              attrs: { for: "password" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password"
                  }
                ],
                staticClass: "input is-large",
                attrs: { type: "password", id: "password" },
                domProps: { value: _vm.form.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.form.has("password")
              ? _c("div", { staticClass: "help is-danger" }, [
                  _vm._v(_vm._s(_vm.form.error("password")))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "password_confirm",
                  expression: "'password_confirm'"
                }
              ],
              staticClass: "label",
              attrs: { for: "password_confirm" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password_confirm,
                    expression: "password_confirm"
                  }
                ],
                staticClass: "input is-large",
                attrs: { type: "password", id: "password_confirm" },
                domProps: { value: _vm.password_confirm },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password_confirm = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("button", {
            directives: [
              { name: "t", rawName: "v-t", value: "save", expression: "'save'" }
            ],
            staticClass: "button is-primary is-large is-fullwidth",
            class: { "is-loading": _vm.isSaving },
            attrs: { type: "submit", disabled: !_vm.canSave }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-531e4c48", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b96cafc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "hero is-fullheight is-info", attrs: { id: "page-login" } },
    [
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.doLogin($event)
                },
                keydown: function($event) {
                  return _vm.form.clear($event.target.id)
                }
              }
            },
            [
              _c("div", { staticClass: "columns is-centered" }, [
                _c(
                  "div",
                  {
                    staticClass: "column is-6-tablet is-6-desktop is-4-fullhd"
                  },
                  [
                    _c("div", { staticClass: "box is-radiusless" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "email",
                              expression: "'email'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "email" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "email", id: "email" },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.has("email")
                          ? _c("div", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(_vm.form.error("email"))
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "field" }, [
                        _c("label", {
                          directives: [
                            {
                              name: "t",
                              rawName: "v-t",
                              value: "password",
                              expression: "'password'"
                            }
                          ],
                          staticClass: "label",
                          attrs: { for: "password" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass: "input is-large",
                            attrs: { type: "password", id: "password" },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.has("password")
                          ? _c("div", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(_vm.form.error("password"))
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("button", {
                        directives: [
                          {
                            name: "t",
                            rawName: "v-t",
                            value: "login",
                            expression: "'login'"
                          }
                        ],
                        staticClass: "button is-primary is-large is-fullwidth",
                        attrs: { type: "submit" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "p",
                        { staticClass: "has-text-centered" },
                        [
                          _c("router-link", { attrs: { to: "/register" } }, [
                            _vm._v(_vm._s(_vm.$t("register")))
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b96cafc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67865b08\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page" },
    [
      _c("navigation", { staticClass: "has-shadow" }),
      _vm._v(" "),
      _c("div", { staticClass: "section" }, [
        _c(
          "div",
          { staticClass: "container is-fluid" },
          [
            _c("h1", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "profile",
                  expression: "'profile'"
                }
              ],
              staticClass: "title is-1 has-text-weight-light"
            }),
            _vm._v(" "),
            _c("h4", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "profile_subtitle",
                  expression: "'profile_subtitle'"
                }
              ],
              staticClass: "subtitle is-4"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "tabs" }, [
              _c(
                "ul",
                _vm._l(_vm.tabs, function(item) {
                  return _c(
                    "router-link",
                    { key: item.path, attrs: { tag: "li", to: item.path } },
                    [
                      _c("a", {
                        directives: [
                          {
                            name: "t",
                            rawName: "v-t",
                            value: item.label,
                            expression: "item.label"
                          }
                        ]
                      })
                    ]
                  )
                }),
                1
              )
            ]),
            _vm._v(" "),
            _c("router-view")
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67865b08", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74d53912\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/SystemMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "system-messages" } },
    _vm._l(_vm.messages, function(notification) {
      return _c(
        "div",
        { staticClass: "notification", class: notification.theme },
        [
          _c("button", {
            staticClass: "delete",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.removeNotification(notification)
              }
            }
          }),
          _vm._v(" "),
          _c("span", { domProps: { innerHTML: _vm._s(notification.message) } })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74d53912", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d274096\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hero is-fullheight" }, [
    _c(
      "div",
      { staticClass: "hero-head" },
      [_c("navigation", { staticClass: "has-shadow" })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "hero-body" }, [
      _c("div", { staticClass: "container has-text-centered" }, [
        _c("h1", { staticClass: "title is-1 has-text-weight-light" }, [
          _vm._v(_vm._s(_vm.$t("welcome")))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d274096", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-85e4047e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/ProfileAccount.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-half" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            },
            keydown: function($event) {
              return _vm.form.clear($event.target.id)
            }
          }
        },
        [
          _c("div", { staticClass: "field" }, [
            _c("label", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "name",
                  expression: "'name'"
                }
              ],
              staticClass: "label",
              attrs: { for: "name" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                staticClass: "input is-large",
                attrs: { type: "text", id: "name" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.form.has("name")
              ? _c("div", { staticClass: "help is-danger" }, [
                  _vm._v(_vm._s(_vm.form.error("name")))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", {
              directives: [
                {
                  name: "t",
                  rawName: "v-t",
                  value: "email",
                  expression: "'email'"
                }
              ],
              staticClass: "label",
              attrs: { for: "email" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "input is-large",
                attrs: { type: "email", id: "email" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("button", {
            directives: [
              { name: "t", rawName: "v-t", value: "save", expression: "'save'" }
            ],
            staticClass: "button is-primary is-large is-fullwidth",
            class: { "is-loading": _vm.isSaving },
            attrs: { type: "submit" }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-85e4047e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SystemMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SystemMessages.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1a337d78", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SystemMessages.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SystemMessages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_preferences__ = __webpack_require__("./resources/assets/js/lib/preferences.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_store__ = __webpack_require__("./resources/assets/js/lib/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_http__ = __webpack_require__("./resources/assets/js/lib/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_router__ = __webpack_require__("./resources/assets/js/lib/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_bus__ = __webpack_require__("./resources/assets/js/lib/bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_i18n__ = __webpack_require__("./resources/assets/js/lib/i18n.js");










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('navigation', __webpack_require__("./resources/assets/js/components/Navigation.vue"));

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_3__lib_http__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.bus = __WEBPACK_IMPORTED_MODULE_5__lib_bus__["a" /* default */];

var init = function init() {
    return setTimeout(function () {
        new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
            el: '#app',
            store: __WEBPACK_IMPORTED_MODULE_2__lib_store__["a" /* default */],
            router: __WEBPACK_IMPORTED_MODULE_4__lib_router__["a" /* default */],
            i18n: __WEBPACK_IMPORTED_MODULE_6__lib_i18n__["a" /* default */],
            mounted: function mounted() {
                var _this = this;

                this.bus.$on('server-auth', function (err) {
                    _this.bus.$emit('notify', { theme: 'is-danger', text: _this.$t('login_expired') });
                    __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = null;
                    _this.$store.commit('logout');
                    if (_this.$route.meta.public !== true) {
                        _this.$nextTick(function () {
                            _this.$router.replace('/');
                        });
                    }
                });
            },

            computed: {
                logged: function logged() {
                    return this.$store.getters.logged;
                }
            },
            components: {
                'system-messages': __webpack_require__("./resources/assets/js/components/SystemMessages.vue")
            }
        });
    }, 5);
};

if (__WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token) {
    __WEBPACK_IMPORTED_MODULE_2__lib_store__["a" /* default */].commit('token', __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token);
    __WEBPACK_IMPORTED_MODULE_3__lib_http__["a" /* default */].get('/profile').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2__lib_store__["a" /* default */].commit('user', response.data.user);
        init();
    }).catch(function () {
        __WEBPACK_IMPORTED_MODULE_1__lib_preferences__["a" /* default */].token = null;
        __WEBPACK_IMPORTED_MODULE_2__lib_store__["a" /* default */].commit('logout');
        init();
    });
} else {
    init();
}

/***/ }),

/***/ "./resources/assets/js/components/Navigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Navigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-353fa4ea\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Navigation.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Navigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-353fa4ea", Component.options)
  } else {
    hotAPI.reload("data-v-353fa4ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/SystemMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d53912\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SystemMessages.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/SystemMessages.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74d53912\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/SystemMessages.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/SystemMessages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74d53912", Component.options)
  } else {
    hotAPI.reload("data-v-74d53912", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/lib/bus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({}));

/***/ }),

/***/ "./resources/assets/js/lib/form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__("./resources/assets/js/lib/i18n.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file has been written (read almost copied)
 * from the greatest learning resource for quality
 * code for Laravel, Lumen and Vue (and many other).
 *
 * If you still do not know what's all about, it's
 * Laracasts (https://laracasts.com)
 */



var Form = function () {
    function Form(obj) {
        var _this = this;

        _classCallCheck(this, Form);

        Object.keys(obj).forEach(function (item) {
            _this[item] = obj[item];
        });
        this._errors = {};
    }

    // Easily get the data from the form, without worrying about
    // other members


    _createClass(Form, [{
        key: 'has',


        // Returns true if there is an error associated with the field name
        value: function has(field) {
            return this._errors[field] !== undefined;
        }

        // Gets the error text

    }, {
        key: 'error',
        value: function error(field) {
            if (!this._errors[field]) {
                return null;
            }

            var components = this._errors[field].split('|');
            if (components.length < 2) {
                return this._errors[field];
            }

            var rule = components[0];
            var fieldName = components[1];
            var params = [fieldName];
            for (var i = 2; i < components.length; i++) {
                params.push(components[i]);
            }

            return __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* default */].t('validation.' + rule, params);
        }
    }, {
        key: 'push',
        value: function push(field, errorMessage) {
            this._errors[field] = errorMessage;
            // trigger the Vue watcher
            this._errors = Object.assign({}, this._errors);
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field === undefined) {
                this._errors = {};
            } else {
                delete this._errors[field];
            }
        }
    }, {
        key: 'parse',
        value: function parse(err) {
            var _this2 = this;

            if (err && err.response && err.response.data && err.response.status === 422 && err.response.data.details) {
                this._errors = {};
                Object.keys(err.response.data.details).forEach(function (item) {
                    _this2._errors[item] = err.response.data.details[item][0];
                });
                return true;
            }

            return false;
        }
    }, {
        key: 'data',
        get: function get() {
            var data = Object.assign({}, this);
            delete data._errors;
            return data;
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./resources/assets/js/lib/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("./resources/assets/js/lib/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus__ = __webpack_require__("./resources/assets/js/lib/bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup__ = __webpack_require__("./resources/assets/js/lib/setup.js");





var http = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: __WEBPACK_IMPORTED_MODULE_3__setup__["a" /* default */].api.url,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

http.interceptors.request.use(function (config) {
    var tok = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters.token;
    if (tok !== null) {
        config.headers['Authorization'] = 'Bearer ' + tok;
    }
    config.headers['X-Api-Token'] = __WEBPACK_IMPORTED_MODULE_3__setup__["a" /* default */].api.token;

    return config;
});

http.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('server-auth', error);
    }
    return Promise.reject(error);
});

/* harmony default export */ __webpack_exports__["a"] = (http);

/***/ }),

/***/ "./resources/assets/js/lib/i18n.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__("./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preferences__ = __webpack_require__("./resources/assets/js/lib/preferences.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locale_en__ = __webpack_require__("./resources/assets/js/locale/en.js");




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["default"]);


__WEBPACK_IMPORTED_MODULE_4__locale_en__["a" /* default */].locale = __WEBPACK_IMPORTED_MODULE_3__preferences__["a" /* default */].lang;
__WEBPACK_IMPORTED_MODULE_2_moment___default.a.locale(__WEBPACK_IMPORTED_MODULE_3__preferences__["a" /* default */].lang);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["default"](__WEBPACK_IMPORTED_MODULE_4__locale_en__["a" /* default */]));

/***/ }),

/***/ "./resources/assets/js/lib/preferences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file stores the preferences in the local/session storage,
 * so at page (force) refresh there is no logout.
 *
 */

// a private collection
var storage = {
    lang: '_rgl',
    token: '_rgk',
    load: function load(key, val, session) {
        var stored = session ? window.sessionStorage.getItem(key) : window.localStorage.getItem(key);
        if (stored === null || stored === undefined) {
            return val;
        }

        return stored;
    },
    save: function save(key, val, session) {
        var s = session ? window.sessionStorage : window.localStorage;
        if (val === null) {
            s.removeItem(key);
        } else {
            s.setItem(key, val);
        }
    }
};

var Preferences = function () {
    function Preferences() {
        _classCallCheck(this, Preferences);

        this._lang = storage.load(storage.lang, 'en', false);
        this._token = storage.load(storage.token, null, true);
    }

    _createClass(Preferences, [{
        key: 'lang',
        get: function get() {
            return this._lang;
        },
        set: function set(value) {
            storage.save(storage.lang, value, false);
            this._lang = value;
        }
    }, {
        key: 'token',
        get: function get() {
            return this._token;
        },
        set: function set(value) {
            storage.save(storage.token, value, true);
            this._token = value;
        }
    }]);

    return Preferences;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Preferences());

/***/ }),

/***/ "./resources/assets/js/lib/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./resources/assets/js/lib/store.js");


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);



var routes = [{
    path: '/',
    exact: true,
    component: __webpack_require__("./resources/assets/js/pages/Welcome.vue"),
    meta: { login: false }
}, {
    path: '/login',
    exact: true,
    component: __webpack_require__("./resources/assets/js/pages/Login.vue"),
    meta: { login: false }
}, {
    path: '/register',
    exact: true,
    component: __webpack_require__("./resources/assets/js/pages/Register.vue"),
    meta: { login: false }
}, {
    path: '/dashboard',
    exact: true,
    component: __webpack_require__("./resources/assets/js/pages/Dashboard.vue"),
    meta: { login: true }
}, {
    path: '/profile', exact: true, component: __webpack_require__("./resources/assets/js/pages/Profile.vue"),
    meta: { login: true },
    children: [{
        path: '',
        exact: true,
        component: __webpack_require__("./resources/assets/js/pages/ProfileAccount.vue"),
        meta: { login: true }
    }, {
        path: 'security',
        exact: true,
        component: __webpack_require__("./resources/assets/js/pages/ProfileSecurity.vue"),
        meta: { login: true }
    }]
}];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    routes: routes,
    linkExactActiveClass: 'is-active'
});

router.beforeEach(function (to, from, next) {
    if (to.meta.login && !__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.logged) {
        next({ path: '/', replace: true });
        return;
    }
    next();
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./resources/assets/js/lib/setup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Just to encapsulate all the environment variables.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    api: {
        url: Object({"NODE_ENV":"development"}).MIX_API_URL,
        token: Object({"NODE_ENV":"development"}).MIX_API_TOKEN
    }
});

/***/ }),

/***/ "./resources/assets/js/lib/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var state = {
    user: null,
    token: null
};

var mutations = {
    user: function user(state, payload) {
        state.user = payload;
    },
    token: function token(state, payload) {
        state.token = payload;
    },
    logout: function logout(state) {
        state.user = null;
        state.token = null;
    }
};

var getters = {
    user: function user(state) {
        return state.user;
    },
    token: function token(state) {
        return state.token;
    },
    logged: function logged(state) {
        return state.user !== null && state.token !== null;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    state: state,
    mutations: mutations,
    getters: getters
}));

/***/ }),

/***/ "./resources/assets/js/locale/en.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var dateTimeFormats = {
    en: {
        short: { year: 'numeric', month: 'short', day: 'numeric' },
        long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
        tshort: { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' },
        tlong: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric' }
    }
};

var messages = {
    en: {
        account: 'Account',
        dashboard: 'Dashboard',
        email: 'Email address',
        login: 'Login',
        login_expired: 'Your login has expired. Please refresh your session by logging in.',
        logout: 'Logout',
        name: 'Name',
        password: 'Password',
        password_changed: 'Your password has been changed.',
        password_confirm: 'Confirm password',
        password_new: 'New password',
        password_old: 'Old password',
        profile: 'Profile',
        profile_subtitle: 'This is your profile.',
        register: 'Register',
        save: 'Save',
        security: 'Security',
        server_error: 'A server error has occurred.',
        update_success: 'The information was successfully updated.',
        welcome: 'Welcome',
        validation: {
            'accepted': 'The {0} must be accepted.',
            'active_url': 'The {0} is not a valid URL.',
            'after': 'The {0} must be a date after {1}.',
            'after_or_equal': 'The {0} must be a date after or equal to {1}.',
            'alpha': 'The {0} may only contain letters.',
            'alpha_dash': 'The {0} may only contain letters, numbers, dashes and underscores.',
            'alpha_num': 'The {0} may only contain letters and numbers.',
            'array': 'The {0} must be an array.',
            'before': 'The {0} must be a date before {1}.',
            'before_or_equal': 'The {0} must be a date before or equal to {1}.',
            'between': {
                'numeric': 'The {0} must be between {1} and {2}.',
                'file': 'The {0} must be between {1} and {2} kilobytes.',
                'string': 'The {0} must be between {1} and {2} characters.',
                'array': 'The {0} must have between {1} and {2} items.'
            },
            'boolean': 'The {0} field must be true or false.',
            'confirmed': 'The {0} confirmation does not match.',
            'date': 'The {0} is not a valid date.',
            'date_format': 'The {0} does not match the format {1}.',
            'different': 'The {0} and {1} must be different.',
            'digits': 'The {0} must be {1} digits.',
            'digits_between': 'The {0} must be between {1} and {2} digits.',
            'dimensions': 'The {0} has invalid image dimensions.',
            'distinct': 'The {0} field has a duplicate value.',
            'email': 'The {0} must be a valid email address.',
            'exists': 'The selected {0} is invalid.',
            'file': 'The {0} must be a file.',
            'filled': 'The {0} field must have a value.',
            'gt': {
                'numeric': 'The {0} must be greater than {1}.',
                'file': 'The {0} must be greater than {1} kilobytes.',
                'string': 'The {0} must be greater than {1} characters.',
                'array': 'The {0} must have more than {1} items.'
            },
            'gte': {
                'numeric': 'The {0} must be greater than or equal {1}.',
                'file': 'The {0} must be greater than or equal {1} kilobytes.',
                'string': 'The {0} must be greater than or equal {1} characters.',
                'array': 'The {0} must have {1} items or more.'
            },
            'image': 'The {0} must be an image.',
            'in': 'The selected {0} is invalid.',
            'in_array': 'The {0} field does not exist in {1}.',
            'integer': 'The {0} must be an integer.',
            'ip': 'The {0} must be a valid IP address.',
            'ipv4': 'The {0} must be a valid IPv4 address.',
            'ipv6': 'The {0} must be a valid IPv6 address.',
            'json': 'The {0} must be a valid JSON string.',
            'lt': {
                'numeric': 'The {0} must be less than {1}.',
                'file': 'The {0} must be less than {1} kilobytes.',
                'string': 'The {0} must be less than {1} characters.',
                'array': 'The {0} must have less than {1} items.'
            },
            'lte': {
                'numeric': 'The {0} must be less than or equal {1}.',
                'file': 'The {0} must be less than or equal {1} kilobytes.',
                'string': 'The {0} must be less than or equal {1} characters.',
                'array': 'The {0} must not have more than {1} items.'
            },
            'max': {
                'numeric': 'The {0} may not be greater than {1}.',
                'file': 'The {0} may not be greater than {1} kilobytes.',
                'string': 'The {0} may not be greater than {1} characters.',
                'array': 'The {0} may not have more than {1} items.'
            },
            'mimes': 'The {0} must be a file of type: {1}.',
            'mimetypes': 'The {0} must be a file of type: {1}.',
            'min': {
                'numeric': 'The {0} must be at least {1}.',
                'file': 'The {0} must be at least {1} kilobytes.',
                'string': 'The {0} must be at least {1} characters.',
                'array': 'The {0} must have at least {1} items.'
            },
            'not_in': 'The selected {0} is invalid.',
            'not_regex': 'The {0} format is invalid.',
            'numeric': 'The {0} must be a number.',
            'present': 'The {0} field must be present.',
            'regex': 'The {0} format is invalid.',
            'required': 'The {0} field is required.',
            'required_if': 'The {0} field is required when {1} is {2}.',
            'required_unless': 'The {0} field is required unless {1} is in {2}.',
            'required_with': 'The {0} field is required when {1} is present.',
            'required_with_all': 'The {0} field is required when {1} is present.',
            'required_without': 'The {0} field is required when {1} is not present.',
            'required_without_all': 'The {0} field is required when none of {1} are present.',
            'same': 'The {0} and {1} must match.',
            'size': {
                'numeric': 'The {0} must be {1}.',
                'file': 'The {0} must be {1} kilobytes.',
                'string': 'The {0} must be {1} characters.',
                'array': 'The {0} must contain {1} items.'
            },
            'string': 'The {0} must be a string.',
            'timezone': 'The {0} must be a valid zone.',
            'unique': 'The {0} has already been taken.',
            'uploaded': 'The {0} failed to upload.',
            'url': 'The {0} format is invalid.'
        }
    }

};

/* harmony default export */ __webpack_exports__["a"] = ({
    messages: messages,
    dateTimeFormats: dateTimeFormats
});

/***/ }),

/***/ "./resources/assets/js/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-049f0327\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Dashboard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-049f0327", Component.options)
  } else {
    hotAPI.reload("data-v-049f0327", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b96cafc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b96cafc", Component.options)
  } else {
    hotAPI.reload("data-v-5b96cafc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Profile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67865b08\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Profile.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67865b08", Component.options)
  } else {
    hotAPI.reload("data-v-67865b08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/ProfileAccount.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/ProfileAccount.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-85e4047e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/ProfileAccount.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ProfileAccount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85e4047e", Component.options)
  } else {
    hotAPI.reload("data-v-85e4047e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/ProfileSecurity.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/ProfileSecurity.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-531e4c48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/ProfileSecurity.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ProfileSecurity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-531e4c48", Component.options)
  } else {
    hotAPI.reload("data-v-531e4c48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Register.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f409c60\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Register.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f409c60", Component.options)
  } else {
    hotAPI.reload("data-v-0f409c60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d274096\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Welcome.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d274096", Component.options)
  } else {
    hotAPI.reload("data-v-7d274096", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);