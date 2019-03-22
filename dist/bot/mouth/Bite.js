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
var Bite = /** @class */ (function (_super) {
    __extends(Bite, _super);
    function Bite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bite.prototype.render = function () {
        var pieceId = 'Mouth/Bite';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fillOpacity: '0.2', fill: '#000000', x: '4', y: '5', width: '68', height: '22', rx: '5' }),
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fillOpacity: '0.6', fill: '#000000', x: '8', y: '9', width: '60', height: '14', rx: '2' }),
            React.createElement("polygon", { id: 'Triangle-2', fill: '#E1E6E8', transform: 'translate(20.000000, 13.000000) scale(1, -1) translate(-20.000000, -13.000000) ', points: '20 9 26 17 14 17' }),
            React.createElement("polygon", { id: 'Triangle-2', fill: '#E1E6E8', transform: 'translate(32.000000, 13.000000) scale(1, -1) translate(-32.000000, -13.000000) ', points: '32 9 38 17 26 17' }),
            React.createElement("polygon", { id: 'Triangle-2', fill: '#E1E6E8', transform: 'translate(44.000000, 13.000000) scale(1, -1) translate(-44.000000, -13.000000) ', points: '44 9 50 17 38 17' }),
            React.createElement("polygon", { id: 'Triangle-2', fill: '#E1E6E8', transform: 'translate(56.000000, 13.000000) scale(1, -1) translate(-56.000000, -13.000000) ', points: '56 9 62 17 50 17' })));
    };
    Bite.optionValue = 'Bite';
    return Bite;
}(React.Component));
exports.default = Bite;
