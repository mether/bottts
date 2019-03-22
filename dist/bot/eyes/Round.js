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
var Round = /** @class */ (function (_super) {
    __extends(Round, _super);
    function Round() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Round.prototype.render = function () {
        var pieceId = 'Eyes/Round';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("g", { id: 'Eye', transform: 'translate(18.000000, 24.000000)', fill: '#FFFFFF' },
                React.createElement("circle", { cx: '6', cy: '6', r: '6' }),
                React.createElement("circle", { cx: '62', cy: '6', r: '6' }))));
    };
    Round.optionValue = 'Round';
    return Round;
}(React.Component));
exports.default = Round;
