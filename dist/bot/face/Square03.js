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
var Square03 = /** @class */ (function (_super) {
    __extends(Square03, _super);
    function Square03() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square03.prototype.render = function () {
        var pieceId = 'Face/Square-03';
        var pathName = pieceId + "-path-1";
        var maskName = pieceId + "-mask-1";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M18,-2.7000624e-13 L112,-2.91322522e-13 C121.941125,-2.93148677e-13 130,8.0588745 130,18 L130,45.1482908 C130,49.6830734 129.22888,54.1848394 127.719613,58.4610955 L110.238555,107.990762 C107.698575,115.187372 100.896418,120 93.2647285,120 L36.7352715,120 C29.1035817,120 22.3014253,115.187372 19.7614455,107.990762 L2.28038666,58.4610955 C0.771119772,54.1848394 1.50531546e-15,49.6830734 -7.10542736e-15,45.1482908 L-9.9475983e-14,18 C-1.18352406e-13,8.0588745 8.0588745,-2.86048235e-13 18,-3.05533376e-13 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Shape', fill: '#0076DE', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-2.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '134', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Square03.optionValue = 'Square03';
    return Square03;
}(React.Component));
exports.default = Square03;
