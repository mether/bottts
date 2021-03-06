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
var Square02 = /** @class */ (function (_super) {
    __extends(Square02, _super);
    function Square02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square02.prototype.render = function () {
        var pieceId = 'Mouth/Square-02';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: '\uD83D\uDE10', fill: '#000000', x: '16', y: '8', width: '44', height: '4', rx: '2' })));
    };
    Square02.optionValue = 'Square02';
    return Square02;
}(React.Component));
exports.default = Square02;
