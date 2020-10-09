// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*::before, *::after {\n    box-sizing: border-box;\n}\n\n.doraemon {\n    position: relative;\n    min-height: 50vh;\n    width: 100%;\n    background: rgb(0, 160, 232);\n}\n\n.doraemon .bighead {\n    width: 420px;\n    height: 400px;\n    position: absolute;\n    background-color: rgb(0, 160, 232);\n    left: 50%;\n    top: 10px;\n    margin-left: -210px;\n    border-radius: 50% 50% 45% 45%;\n}\n\n.doraemon .face1 {\n    border: 3px solid #000;\n    width: 360px;\n    height: 300px;\n    position: absolute;\n    left: 50%;\n    top: 110px;\n    margin-left: -180px;\n    background-color: #FFF;\n    border-radius: 50% 50% 45% 45%;\n}\n\n.doraemon .nose1 {\n    border: 3px solid black;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #FF0000;\n    top: 160px;\n    left: 50%;\n    position: relative;\n    margin-left: -25px;\n    z-index: 3\n}\n\n.doraemon .nose1.shadow {\n    border: none;\n    position: absolute;\n    left: 48px;\n    width: 15px;\n    height: 15px;\n    background-color: #FFF;\n    border-radius: 50%;\n}\n\n.doraemon .nosedown {\n    height: 130px;\n    width: 3px;\n    position: absolute;\n    top: 210px;\n    left: 50%;\n    border-left: 3px solid #000;\n    z-index: 3\n}\n\n.doraemon .eye1 {\n    border: 3px solid black;\n    width: 90px;\n    height: 110px;\n    border-radius: 45% 45% 45% 45%;\n    background-color: #FFF;\n    position: absolute;\n    top: 60px;\n    left: 50%;\n    z-index: 3;\n}\n\n.doraemon .eye1.left {\n    transform: translateX(-90px);\n}\n\n.doraemon .eyeball {\n    position: absolute;\n    top: 60px;\n    width: 20px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 50%;\n    margin-left: 10px;\n    -webkit-animation: cate1 2s infinite linear;\n}\n\n@-webkit-keyframes cate1 {\n    0% {\n        margin-left: 10px;\n        top: 60px;\n    }\n    25% {\n        margin-left: 18px;\n        top: 64px;\n    }\n    50% {\n        margin-left: 10px;\n        top: 68px;\n    }\n    75% {\n        margin-left: 2px;\n        top: 64px;\n    }\n    100% {\n        margin-left: 10px;\n        top: 60px;\n    }\n}\n\n.doraemon .eyeball.left {\n    transform: translateX(45px);\n}\n\n.doraemon .mouth1 {\n    position: relative;\n    height: 180px;\n    width: 240px;\n    top: 110px;\n    left: 50%;\n    margin-left: -120px;\n    background: #fff;\n    border-bottom: 3px solid #000;\n    border-radius: 0 0 40% 40%;\n    z-index: 2;\n\n}\n\n.doraemon .tougue1 {\n    position: absolute;\n    height: 96px;\n    width: 80px;\n    top: 270px;\n    left: 50%;\n    margin-left: 20px;\n    border: 2px solid #000;\n    border-radius: 0 0 40% 40%;\n    transform: rotate(-20deg);\n    background: #ff485f;\n    z-index: 1;\n    -webkit-animation: cate2 3s infinite linear;\n}\n\n@-webkit-keyframes cate2 {\n    0% {\n        margin-left: 20px;\n        transform: rotate(-20deg);\n    }\n    25% {\n        margin-left: -40px;\n        transform: rotate(0deg);\n    }\n    50% {\n        margin-left: -100px;\n        transform: rotate(20deg);\n    }\n    75% {\n        margin-left: -40px;\n        transform: rotate(0deg);\n    }\n    100% {\n        margin-left: 20px;\n        transform: rotate(-20deg);\n    }\n}\n\n.doraemon .tougueline {\n    position: absolute;\n    height: 48px;\n    width: 1px;\n    top: 30px;\n    left: 10px;\n    border: 1px solid #000;\n    margin-left: 30px;\n    z-index: 3;\n}\n\n.doraemon .whiskers {\n    border-top: 3px solid #000;\n    position: absolute;\n    height: 60px;\n    width: 100px;\n    left: 50%;\n    z-index: 3;\n}\n\n.doraemon .wl1 {\n    top: 210px;\n    margin-left: -150px;\n    transform: rotate(20deg);\n}\n\n.doraemon .wl2 {\n    top: 240px;\n    margin-left: -150px;\n}\n\n.doraemon .wl3 {\n    top: 270px;\n    margin-left: -130px;\n    transform: rotate(-20deg);\n}\n\n.doraemon .wr1 {\n    top: 210px;\n    margin-left: 50px;\n    transform: rotate(-20deg);\n}\n\n.doraemon .wr2 {\n    top: 240px;\n    margin-left: 50px;\n}\n\n.doraemon .wr3 {\n    top: 270px;\n    margin-left: 30px;\n    transform: rotate(20deg);\n}\n\n.doraemon .necklace {\n    position: absolute;\n    width: 320px;\n    height: 40px;\n    top: 370px;\n    left: 50%;\n    margin-left: -160px;\n    background-color: #FF0000;\n    border: 3px solid #000;\n    border-radius: 30px 30px 30px 30px;\n    z-index: 3;\n}\n\n.doraemon .smallbell {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    top: 380px;\n    left: 50%;\n    margin-left: -30px;\n    background-color: #ffe600;\n    border: 3px solid #000;\n    border-radius: 50%;\n    z-index: 3;\n}\n\n.doraemon .bell1 {\n    position: absolute;\n    width: 60px;\n    height: 6px;\n    top: 10px;\n    left: 50%;\n    margin-left: -30px;\n    background-color: #ffe600;\n    border: 2px solid #000;\n    border-radius: 16px;\n}\n\n.doraemon .bell2 {\n    position: absolute;\n    top: 30px;\n    left: 50%;\n    width: 20px;\n    height: 10px;\n    margin-left: -10px;\n    background-color: #000;\n    border-radius: 50%;\n}\n\n.doraemon .bell3 {\n    position: absolute;\n    width: 30px;\n    height: 20px;\n    top: 37px;\n    left: 50%;\n    margin-left: -3px;\n    border-left: 6px solid #000;\n}\n\n\n.pikachu {\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n\n}\n\n.pikachu .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n\n.pikachu .eye::before {\n    content: '';\n    display: block;\n    border: 3px solid black;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 4px;\n    top: 0;\n}\n\n.pikachu .eye.left {\n    transform: translateX(-100px);\n}\n\n.pikachu .eye.right {\n    transform: translateX(100px);\n}\n\n.pikachu .nose {\n    border-bottom: none;\n    width: 0;\n    height: 0;\n    position: relative;\n    left: 50%;\n    top: 140px;\n    margin-left: -8px;\n    z-index: 3;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(8deg);\n    }\n    66% {\n        transform: rotate(-8deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.pikachu .nose {\n    transform-origin: center bottom;\n    animation: wave 500ms infinite linear;\n}\n\n.pikachu .noseTop {\n    position: absolute;\n    width: 16px;\n    height: 6px;\n    top: -14px;\n    left: -8px;\n    border-radius: 10px 10px 0 0;\n    background: #2e2e2e;\n}\n\n.pikachu .mouth {\n    width: 140px;\n    height: 140px;\n    position: absolute;\n    left: 50%;\n    top: 180px;\n    margin-left: -70px;\n}\n\n.pikachu .mouth .top {\n    position: relative;\n    top: -36px;\n    z-index: 2;\n\n}\n\n.pikachu .mouth .top .lip {\n    border: 3px solid black;\n    height: 20px;\n    width: 70px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -35px;\n    background: #ffe600;\n    z-index: 2;\n}\n\n.pikachu .mouth .top .lip.left {\n    border-radius: 0 0 0 20px;\n    transform: rotate(-20deg) translateX(-35px);\n}\n\n.pikachu .mouth .top .lip.right {\n    border-radius: 0 0 20px 0;\n    transform: rotate(20deg) translateX(35px);;\n}\n\n.pikachu .mouth .top .lip::before {\n    border: 12px solid #ffe600;\n    content: '';\n    display: block;\n    width: 90px;\n    height: 30px;\n    position: absolute;\n    border-bottom-color: transparent;\n    bottom: -3px;\n    background: transparent;\n}\n\n.pikachu .mouth .top .lip.left::before {\n    border-left-color: transparent;\n    right: -4px;\n}\n\n.pikachu .mouth .top .lip.right::before {\n    border-right-color: transparent;\n    left: -4px;\n}\n\n.pikachu .mouth .bottom {\n    height: 140px;\n    width: 100%;\n    position: absolute;\n    top: -20px;\n    overflow: hidden;\n}\n\n.pikachu .mouth .bottom .tongue1 {\n    border: 3px solid black;\n    width: 120px;\n    height: 600px;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -60px;\n    border-radius: 60px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n.pikachu .mouth .bottom .tongue1 .tongue2 {\n    width: 120px;\n    height: 140px;\n    position: absolute;\n    bottom: -30px;\n    left: 50%;\n    margin-left: -60px;\n    border-radius: 50%;\n    background: #ff485f;\n    overflow: hidden;\n    z-index: 0;\n}\n\n.pikachu .face {\n    border: 3px solid black;\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    left: 50%;\n    border-radius: 50%;\n    background: red;\n    margin-left: -40px;\n    top: 200px;\n}\n\n.pikachu .face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.pikachu .face.left {\n    transform: translateX(-150px);\n}\n\n.pikachu .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n.pikachu .face.right {\n    transform: translateX(150px);\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 0,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnImmediate': 'immediate'
  },
  init: function init() {
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //方法值pause、play、slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 30;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 15;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  immediate: function immediate() {
    player.pause();
    player.ui.demo1.innerText = _css.default;
    player.ui.demo2.innerHTML = _css.default;
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.17e0a741.js.map