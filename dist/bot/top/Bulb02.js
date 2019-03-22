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
var Bulb02 = /** @class */ (function (_super) {
    __extends(Bulb02, _super);
    function Bulb02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bulb02.prototype.render = function () {
        var pieceId = 'Top/Bulb-02';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M60,40 L77,40 C77.5522847,40 78,40.4477153 78,41 L78,51 C78,51.5522847 77.5522847,52 77,52 L23,52 C22.4477153,52 22,51.5522847 22,51 L22,41 C22,40.4477153 22.4477153,40 23,40 L40,40 C35.581722,40 32,36.418278 32,32 L32,16 C32,7.163444 39.163444,1.623249e-15 48,0 L52,0 C60.836556,-1.623249e-15 68,7.163444 68,16 L68,32 C68,36.418278 64.418278,40 60,40 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Bulb-Mask', fill: '#59C4FF', xlinkHref: "#" + pathName }),
            React.createElement(TopColor_1.default, { maskID: maskName },
                React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' })),
            React.createElement("rect", { id: 'Highlight', fillOpacity: '0.4', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '20', y: '-3', width: '60', height: '43' }),
            React.createElement("path", { d: 'M49,3.5 C53.9315485,3.5 58.3660426,5.62814271 61.4352098,9.01615555', id: 'Reflection', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round', mask: "url(#" + maskName + ")" }),
            React.createElement("path", { d: 'M49.8284271,26 L50.3137085,26 L59.3137085,17 L62.1421356,19.8284271 L52,29.9705627 L52,40 L48,40 L48,29.8284271 L38,19.8284271 L40.8284271,17 L49.8284271,26 Z', id: 'Why', fillOpacity: '0.8', fill: '#FFFFFF', mask: "url(#" + maskName + ")" })));
    };
    Bulb02.optionValue = 'Bulb02';
    return Bulb02;
}(React.Component));
exports.default = Bulb02;
