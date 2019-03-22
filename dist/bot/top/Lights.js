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
var TopColor_1 = require("../color/TopColor");
var Lights = /** @class */ (function (_super) {
    __extends(Lights, _super);
    function Lights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lights.prototype.render = function () {
        var pieceId = 'Top/Lights';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M56,18 L56,5 C56,2.23857625 58.2385763,5.07265313e-16 61,0 L67,0 C69.7614237,-5.07265313e-16 72,2.23857625 72,5 L72,18 L78,18 C79.1045695,18 80,18.8954305 80,20 L80,30 L0,30 L0,20 C-1.3527075e-16,18.8954305 0.8954305,18 2,18 L8,18 L8,5 C8,2.23857625 10.2385763,5.07265313e-16 13,0 L19,0 C21.7614237,-5.07265313e-16 24,2.23857625 24,5 L24,18 L32,18 L32,5 C32,2.23857625 34.2385763,5.07265313e-16 37,0 L43,0 C45.7614237,-5.07265313e-16 48,2.23857625 48,5 L48,18 L56,18 Z', id: pathName })),
            React.createElement("g", { id: 'Bulbs', transform: 'translate(10.000000, 22.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#E1E6E8', xlinkHref: "#" + pathName }),
                React.createElement(TopColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-10.000000, -22.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' }))),
                React.createElement("rect", { id: 'Highlite', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '-10', y: '-22', width: '100', height: '40' }),
                React.createElement("rect", { id: 'Light', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '14', y: '6', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { id: 'Light', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '38', y: '6', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { id: 'Light', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '62', y: '6', width: '4', height: '8', rx: '2' }))));
    };
    Lights.optionValue = 'Lights';
    return Lights;
}(React.Component));
exports.default = Lights;
