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
var Bulb01 = /** @class */ (function (_super) {
    __extends(Bulb01, _super);
    function Bulb01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bulb01.prototype.render = function () {
        var pieceId = 'Top/Bulb-01';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M70,36 L79,36 C79.5522847,36 80,36.4477153 80,37 L80,51 C80,51.5522847 79.5522847,52 79,52 L21,52 C20.4477153,52 20,51.5522847 20,51 L20,37 C20,36.4477153 20.4477153,36 21,36 L30,36 L30,33 C30,21.954305 38.954305,13 50,13 C61.045695,13 70,21.954305 70,33 L70,36 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Bulb-Mask', fill: '#59C4FF', xlinkHref: "#" + pathName }),
            React.createElement(TopColor_1.default, { maskID: maskName },
                React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' })),
            React.createElement("path", { d: 'M50,36 C52.209139,36 54,35.0279942 54,31.7142857 C54,28.4005772 52.209139,24 50,24 C47.790861,24 46,28.4005772 46,31.7142857 C46,35.0279942 47.790861,36 50,36 Z', id: 'Light', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")" }),
            React.createElement("rect", { id: 'Highlight', fillOpacity: '0.4', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '20', y: '13', width: '60', height: '23' }),
            React.createElement("path", { d: 'M50,15.5 C54.9315485,15.5 59.3660426,17.6281427 62.4352098,21.0161556 M64.8733745,24.5107242 C65.5630474,25.8293043 66.0825179,27.2509729 66.4026217,28.7465657', id: 'Reflection', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round', mask: "url(#" + maskName + ")" })));
    };
    Bulb01.optionValue = 'Bulb01';
    return Bulb01;
}(React.Component));
exports.default = Bulb01;
