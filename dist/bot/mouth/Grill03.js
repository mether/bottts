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
var Grill03 = /** @class */ (function (_super) {
    __extends(Grill03, _super);
    function Grill03() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grill03.prototype.render = function () {
        var pieceId = 'Mouth/Grill-03';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fillOpacity: '0.2', fill: '#000000', x: '4', y: '5', width: '68', height: '22', rx: '5' }),
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fill: '#FFFFFF', x: '8', y: '9', width: '60', height: '14', rx: '2' }),
            React.createElement("rect", { id: 'Bender-Teeth', fillOpacity: '0.1', fill: '#000000', x: '18', y: '9', width: '4', height: '14' }),
            React.createElement("rect", { id: 'Bender-Teeth', fillOpacity: '0.1', fill: '#000000', x: '42', y: '9', width: '4', height: '14' }),
            React.createElement("rect", { id: 'Bender-Teeth', fillOpacity: '0.1', fill: '#000000', x: '30', y: '9', width: '4', height: '14' }),
            React.createElement("rect", { id: 'Bender-Teeth', fillOpacity: '0.1', fill: '#000000', x: '54', y: '9', width: '4', height: '14' })));
    };
    Grill03.optionValue = 'Grill03';
    return Grill03;
}(React.Component));
exports.default = Grill03;
