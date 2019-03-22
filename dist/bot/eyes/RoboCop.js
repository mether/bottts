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
var RoboCop = /** @class */ (function (_super) {
    __extends(RoboCop, _super);
    function RoboCop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoboCop.prototype.render = function () {
        var pieceId = 'Eyes/RoboCop';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: pathName, x: '7', y: '16', width: '91', height: '16', rx: '4' }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Container', fillOpacity: '0.8', fill: '#000000', xlinkHref: "#" + pathName }),
            React.createElement("polygon", { id: 'Reflection', fillOpacity: '0.8', fill: '#FFFFFF', mask: "url(#" + maskName + ")", points: '76 7 94 7 82 37 64 37' }),
            React.createElement("polygon", { id: 'Reflection', fillOpacity: '0.8', fill: '#FFFFFF', mask: "url(#" + maskName + ")", points: '52 7 61 7 49 37 40 37' })));
    };
    RoboCop.optionValue = 'RoboCop';
    return RoboCop;
}(React.Component));
exports.default = RoboCop;
