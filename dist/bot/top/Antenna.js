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
var Antenna = /** @class */ (function (_super) {
    __extends(Antenna, _super);
    function Antenna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Antenna.prototype.render = function () {
        var pieceId = 'Top/Antenna';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M10,31 L10,0 L14,0 L14,31 L22,31 C23.1045695,31 24,31.8954305 24,33 L24,47 L0,47 L0,33 C-1.3527075e-16,31.8954305 0.8954305,31 2,31 L10,31 Z', id: pathName }),
            React.createElement("g", { id: 'Antenna', transform: 'translate(38.000000, 5.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#E1E6E8', xlinkHref: '#path-1' }),
                React.createElement(TopColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-38.000000, -5.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' }))),
                React.createElement("rect", { id: 'Lite', fillOpacity: '0.2', fill: '#FFFFFF', mask: 'url(#mask-2)', x: '0', y: '31', width: '24', height: '16' })),
            React.createElement("circle", { id: 'Beep-Boop', fill: '#FFE65C', cx: '50', cy: '8', r: '8' }),
            React.createElement("circle", { id: 'Beep-Boop', fill: '#FFFFFF', cx: '53', cy: '5', r: '3' })));
    };
    Antenna.optionValue = 'Antenna';
    return Antenna;
}(React.Component));
exports.default = Antenna;
