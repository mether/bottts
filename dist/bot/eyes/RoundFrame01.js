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
var RoundFrame01 = /** @class */ (function (_super) {
    __extends(RoundFrame01, _super);
    function RoundFrame01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundFrame01.prototype.render = function () {
        var pieceId = 'Eyes/Round-Frame-01';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Container', fillOpacity: '0.8', fill: '#000000', x: '0', y: '12', width: '104', height: '32', rx: '16' }),
            React.createElement("rect", { id: 'Eye', fill: '#F4F4F4', x: '24', y: '22', width: '10', height: '12', rx: '2' }),
            React.createElement("rect", { id: 'Eye', fill: '#F4F4F4', x: '70', y: '22', width: '10', height: '12', rx: '2' })));
    };
    RoundFrame01.optionValue = 'RoundFrame01';
    return RoundFrame01;
}(React.Component));
exports.default = RoundFrame01;
