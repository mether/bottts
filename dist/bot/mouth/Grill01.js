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
var Grill01 = /** @class */ (function (_super) {
    __extends(Grill01, _super);
    function Grill01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grill01.prototype.render = function () {
        var pieceId = 'Mouth/Grill01';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("g", { id: 'Grill', transform: 'translate(12.000000, 12.000000)', fill: '#000000' },
                React.createElement("rect", { x: '0', y: '0', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { x: '24', y: '0', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { x: '12', y: '0', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { x: '36', y: '0', width: '4', height: '8', rx: '2' }),
                React.createElement("rect", { x: '48', y: '0', width: '4', height: '8', rx: '2' }))));
    };
    Grill01.optionValue = 'Grill01';
    return Grill01;
}(React.Component));
exports.default = Grill01;
