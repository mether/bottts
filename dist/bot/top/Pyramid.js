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
var Pyramid = /** @class */ (function (_super) {
    __extends(Pyramid, _super);
    function Pyramid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pyramid.prototype.render = function () {
        var pieceId = 'Top/Pyramid';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("polygon", { id: pathName, points: '50 8 82 52 18 52' })),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Triangle', fill: '#E1E6E8', xlinkHref: "#" + pathName }),
            React.createElement(TopColor_1.default, { maskID: maskName },
                React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' })),
            React.createElement("rect", { id: 'Highlight', fillOpacity: '0.8', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '50', y: '4', width: '30', height: '48' })));
    };
    Pyramid.optionValue = 'Pyramid';
    return Pyramid;
}(React.Component));
exports.default = Pyramid;
