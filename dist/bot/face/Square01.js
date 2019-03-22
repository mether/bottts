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
var Square01 = /** @class */ (function (_super) {
    __extends(Square01, _super);
    function Square01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square01.prototype.render = function () {
        var pieceId = 'Face/Square-01';
        var pathName = pieceId + "-path-1";
        var maskName = pieceId + "-mask-1";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: pathName, x: '0', y: '0', width: '130', height: '120', rx: '18' }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Shape', fill: '#0076DE', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-2.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '134', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Square01.optionValue = 'Square01';
    return Square01;
}(React.Component));
exports.default = Square01;
