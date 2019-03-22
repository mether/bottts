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
var Frame01 = /** @class */ (function (_super) {
    __extends(Frame01, _super);
    function Frame01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frame01.prototype.render = function () {
        var pieceId = 'Eyes/Frame-1';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Container', fillOpacity: '0.8', fill: '#000000', x: '0', y: '4', width: '104', height: '42', rx: '4' }),
            React.createElement("rect", { id: 'Eye', fill: '#8BDDFF', x: '28', y: '25', width: '10', height: '11', rx: '2' }),
            React.createElement("rect", { id: 'Eye', fill: '#8BDDFF', x: '66', y: '25', width: '10', height: '11', rx: '2' }),
            React.createElement("polygon", { id: 'Reflection', fillOpacity: '0.4', fill: '#FFFFFF', points: '21 4 29 4 12 46 4 46' })));
    };
    Frame01.optionValue = 'Frame01';
    return Frame01;
}(React.Component));
exports.default = Frame01;
