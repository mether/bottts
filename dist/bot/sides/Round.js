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
var SidesColor_1 = require("../color/SidesColor");
var Round = /** @class */ (function (_super) {
    __extends(Round, _super);
    function Round() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Round.prototype.render = function () {
        var pieceId = 'Sides/Round';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M152,61 C141.954305,61 132,50.9264069 132,39 C132,26.0735931 141.954305,16 152,16 C162.045695,16 168,26.0735931 168,39 C168,50.9264069 162.045695,61 152,61 Z M28,61 C17.954305,61 12,50.9264069 12,39 C12,26.0735931 17.954305,16 28,16 C38.045695,16 48,26.0735931 48,39 C48,50.9264069 38.045695,61 28,61 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'muffs', fill: '#E1E6E8', xlinkHref: "#" + pathName }),
            React.createElement(SidesColor_1.default, { maskID: maskName },
                React.createElement("rect", { x: '0', y: '0', width: '180', height: '76' })),
            React.createElement("rect", { id: 'Shady-Stuff', fillOpacity: '0.2', fill: '#000000', mask: "url(#" + maskName + ")", x: '20', y: '0', width: '140', height: '76' })));
    };
    Round.optionValue = 'Round';
    return Round;
}(React.Component));
exports.default = Round;
