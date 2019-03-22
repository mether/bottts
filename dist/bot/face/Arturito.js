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
var Arturito = /** @class */ (function (_super) {
    __extends(Arturito, _super);
    function Arturito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arturito.prototype.render = function () {
        var pieceId = 'Face/Arturito-🌌';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M60,0 L70,0 C103.137085,-6.08718376e-15 130,26.862915 130,60 L130,116 C130,118.209139 128.209139,120 126,120 L4,120 C1.790861,120 2.705415e-16,118.209139 0,116 L0,60 C-4.05812251e-15,26.862915 26.862915,6.08718376e-15 60,0 Z', id: pathName })),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'R2', fill: '#E1E6E8', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-1.000000, -1.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '132', height: '122' }))),
            React.createElement("polygon", { id: 'Color-Bar', fillOpacity: '0.8', fill: '#0040AE', mask: "url(#" + maskName + ")", points: '0 80 10 80 10 107 0 107' }),
            React.createElement("polygon", { id: 'Color-Bar', fillOpacity: '0.8', fill: '#0040AE', mask: "url(#" + maskName + ")", points: '0 111 130 111 130 116 0 116' }),
            React.createElement("rect", { id: 'Color-Bar', fillOpacity: '0.8', fill: '#0040AE', mask: "url(#" + maskName + ")", x: '121', y: '80', width: '9', height: '27' }),
            React.createElement("rect", { id: 'Color-Bar', fillOpacity: '0.8', fill: '#0040AE', mask: "url(#" + maskName + ")", x: '7.3', y: '8', width: '54.9', height: '16.1834862' }),
            React.createElement("rect", { id: 'Color-Bar', fillOpacity: '0.8', fill: '#0040AE', mask: "url(#" + maskName + ")", x: '65.8', y: '8', width: '54.9', height: '16.1834862' }),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Arturito.optionValue = 'Arturito';
    return Arturito;
}(React.Component));
exports.default = Arturito;
