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
var Round01 = /** @class */ (function (_super) {
    __extends(Round01, _super);
    function Round01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Round01.prototype.render = function () {
        var pieceId = 'Face/Round-01';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M66,0 C124.351567,0 130.000727,40.6854074 130,78 C129.999351,111.314593 104.534073,120 66,120 C28.5386545,120 2.20992466e-15,111.314593 0,78 C0,40.6854074 7.64843282,6.59631323e-15 66,0 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Path-2', fillOpacity: '0.8', fill: '#000000', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-4.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '138', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Round01.optionValue = 'Round01';
    return Round01;
}(React.Component));
exports.default = Round01;
