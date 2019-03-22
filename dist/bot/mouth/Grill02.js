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
var Grill02 = /** @class */ (function (_super) {
    __extends(Grill02, _super);
    function Grill02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grill02.prototype.render = function () {
        var pieceId = 'Mouth/Grill02';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("g", { id: 'Grill', transform: 'translate(14.000000, 10.000000)', fill: '#000000' },
                React.createElement("rect", { id: 'Grill-Grin', x: '14', y: '0', width: '6', height: '14', rx: '2' }),
                React.createElement("rect", { id: 'Grill-Grin', x: '0', y: '0', width: '6', height: '14', rx: '2' }),
                React.createElement("rect", { id: 'Grill-Grin', x: '28', y: '0', width: '6', height: '14', rx: '2' }),
                React.createElement("rect", { id: 'Grill-Grin', x: '42', y: '0', width: '6', height: '14', rx: '2' }))));
    };
    Grill02.optionValue = 'Grill02';
    return Grill02;
}(React.Component));
exports.default = Grill02;
