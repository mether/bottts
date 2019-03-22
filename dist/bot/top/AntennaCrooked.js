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
var AntennaCrooked = /** @class */ (function (_super) {
    __extends(AntennaCrooked, _super);
    function AntennaCrooked() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntennaCrooked.prototype.render = function () {
        var pieceId = 'Top/AntennaCrooked';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M15.5683097,27 L24,27 L24,40 L7.10542736e-15,40 L7.10542736e-15,27 L12.0880581,27 L14.1789906,22.5630665 L8.12882501,12.1305168 L11.3538641,0.294936464 L14.2483322,1.08364073 L11.352836,11.7098307 L17.5437409,22.3850631 L15.5683097,27 Z', id: pathName }),
            React.createElement("g", { id: 'Antenna', transform: 'translate(38.000000, 12.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#E6E6E6', fillRule: 'nonzero', xlinkHref: "#" + pathName }),
                React.createElement(TopColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-38.000000, -12.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' }))),
                React.createElement("rect", { id: 'Lite', fillOpacity: '0.2', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '0', y: '27', width: '24', height: '13' })),
            React.createElement("circle", { id: 'Beep-Boop', fill: '#FFE65C', cx: '50', cy: '8', r: '8' }),
            React.createElement("circle", { id: 'Beep-Boop', fill: '#FFFFFF', cx: '53', cy: '5', r: '3' })));
    };
    AntennaCrooked.optionValue = 'AntennaCrooked';
    return AntennaCrooked;
}(React.Component));
exports.default = AntennaCrooked;
