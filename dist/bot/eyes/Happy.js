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
var Happy = /** @class */ (function (_super) {
    __extends(Happy, _super);
    function Happy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Happy.prototype.render = function () {
        var pieceId = 'Eyes/Happy-😊';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M18,19 L30,17', id: 'happy', stroke: '#000000', strokeWidth: '4' }),
            React.createElement("path", { d: 'M20,31 C20,27.686 22.9098333,25 27,25 C30.0901667,25 33,27.686 33,31', id: 'happy', stroke: '#000000', strokeWidth: '4' }),
            React.createElement("path", { d: 'M86,20 L74,17', id: 'happy', stroke: '#000000', strokeWidth: '4' }),
            React.createElement("path", { d: 'M84,31 C84,27.686 81.0901667,25 78,25 C73.9098333,25 71,27.686 71,31', id: 'happy', stroke: '#000000', strokeWidth: '4' })));
    };
    Happy.optionValue = 'Happy';
    return Happy;
}(React.Component));
exports.default = Happy;
