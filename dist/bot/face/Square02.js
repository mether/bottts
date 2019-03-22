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
var FaceColor_1 = require("../color/FaceColor");
var texture_1 = require("../texture");
var Square02 = /** @class */ (function (_super) {
    __extends(Square02, _super);
    function Square02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square02.prototype.render = function () {
        var pieceId = 'Face/Square-02';
        var pathName = pieceId + "-path-1";
        var maskName = pieceId + "-mask-1";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M12,0 L118,0 C124.627417,-1.21743675e-15 130,5.372583 130,12 L130,82 C130,102.98682 112.98682,120 92,120 L38,120 C17.0131795,120 2.57014425e-15,102.98682 0,82 L0,12 C-8.11624501e-16,5.372583 5.372583,1.21743675e-15 12,0 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Shape', fill: '#0076DE', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-2.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '134', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Square02.optionValue = 'Square02';
    return Square02;
}(React.Component));
exports.default = Square02;
