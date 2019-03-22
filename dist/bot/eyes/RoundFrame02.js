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
var RoundFrame02 = /** @class */ (function (_super) {
    __extends(RoundFrame02, _super);
    function RoundFrame02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundFrame02.prototype.render = function () {
        var pieceId = 'Eyes/Round-Frame-02';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Container', fillOpacity: '0.8', fill: '#000000', x: '0', y: '11', width: '104', height: '34', rx: '17' }),
            React.createElement("circle", { id: 'Cornea', fill: '#F1EEDA', cx: '29', cy: '28', r: '13' }),
            React.createElement("circle", { id: 'Cornea', fill: '#F1EEDA', cx: '75', cy: '28', r: '13' }),
            React.createElement("rect", { id: 'Iris', fillOpacity: '0.8', fill: '#000000', x: '24', y: '23', width: '10', height: '10', rx: '2' }),
            React.createElement("rect", { id: 'Iris', fillOpacity: '0.8', fill: '#000000', x: '70', y: '23', width: '10', height: '10', rx: '2' })));
    };
    RoundFrame02.optionValue = 'RoundFrame02';
    return RoundFrame02;
}(React.Component));
exports.default = RoundFrame02;
