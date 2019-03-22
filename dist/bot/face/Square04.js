"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FaceColor_1 = require("../color/FaceColor");
var texture_1 = require("../texture");
var Square04 = /** @class */ (function (_super) {
    __extends(Square04, _super);
    function Square04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square04.prototype.render = function () {
        var pieceId = 'Face/Square-04';
        var pathName = pieceId + "-path-1";
        var maskName = pieceId + "-mask-1";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M0,102 L0,68.8517092 C8.61074282e-15,64.3169266 0.771119772,59.8151606 2.28038666,55.5389045 L19.7614455,12.0092379 C22.3014253,4.81262825 29.1035817,1.42108547e-14 36.7352715,1.42108547e-14 L93.2647285,0 C100.896418,0 107.698575,4.81262825 110.238555,12.0092379 L127.719613,55.5389045 C129.22888,59.8151606 130,64.3169266 130,68.8517092 L130,102 C130,111.941125 121.941125,120 112,120 L18,120 C8.0588745,120 -1.8876423e-14,111.941125 0,102 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Shape', fill: '#0076DE', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-2.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '134', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Square04.optionValue = 'Square04';
    return Square04;
}(React.Component));
exports.default = Square04;
