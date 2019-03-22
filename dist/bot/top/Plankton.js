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
var Plankton = /** @class */ (function (_super) {
    __extends(Plankton, _super);
    function Plankton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plankton.prototype.render = function () {
        var pieceId = 'Top/Plankton';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M0,0 C0,6.418278 1.28514913,11 6.5,11 C11.7148509,11 13,6.418278 13,0', id: pathName })),
            React.createElement("path", { d: 'M13.5,51.5 L86.5,51.5 L86.5,22 C86.5,10.1048506 78.7743593,0.5 69.3043478,0.5 L30.6956522,0.5 C21.2256407,0.5 13.5,10.1048506 13.5,22 L13.5,51.5 Z', id: 'Case', stroke: '#ECECEC', fillOpacity: '0.5', fill: '#FFFFFF' }),
            React.createElement("g", { id: 'Plankton', transform: 'translate(20.000000, 1.000000)' },
                React.createElement("path", { d: 'M4,27 C7.32929829,37.5297416 11.995965,43.1964083 18,44', id: 'Arm', stroke: '#6C9D91', strokeWidth: '3.2' }),
                React.createElement("path", { d: 'M41,34 C44.3292983,40.1939656 48.995965,43.527299 55,44', id: 'Arm', stroke: '#6C9D91', strokeWidth: '3.2', transform: 'translate(48.000000, 39.000000) scale(-1, 1) translate(-48.000000, -39.000000) ' }),
                React.createElement("path", { d: 'M16,0 C17.8048884,3.09304639 19.8048884,8.68897612 22,17.0526316 L19.75,18 C18.105591,9.73615925 16.8743332,3.73615925 16,0 Z', id: 'Antenna', fill: '#08754F' }),
                React.createElement("path", { d: 'M38,0 C39.8048884,3.09304639 41.8048884,8.68897612 44,17.0526316 L41.75,18 C40.105591,9.73615925 38.8743332,3.73615925 38,0 Z', id: 'Antenna', fill: '#08754F', transform: 'translate(41.000000, 9.000000) scale(-1, 1) translate(-41.000000, -9.000000) ' }),
                React.createElement("path", { d: 'M30,9 L30,9 C37.1797017,9 43,14.8202983 43,22 L43,51 L17,51 L17,22 C17,14.8202983 22.8202983,9 30,9 Z', id: 'Body', fill: '#78ADA0' }),
                React.createElement("circle", { id: 'Eye', fill: '#F7EDA2', cx: '30', cy: '21', r: '6' }),
                React.createElement("rect", { id: 'Controller-Stick', fill: '#2E3539', x: '4', y: '14', width: '2', height: '37' }),
                React.createElement("rect", { id: 'Controller-Stick', fill: '#2E3539', x: '55', y: '20', width: '2', height: '31' }),
                React.createElement("circle", { id: 'Controller-Knob', fill: '#2E3539', cx: '5', cy: '15', r: '5' }),
                React.createElement("circle", { id: 'Controller-Knob', fill: '#2E3539', cx: '56', cy: '24', r: '5' }),
                React.createElement("ellipse", { id: 'Pupil', fill: '#EF3838', cx: '30', cy: '21', rx: '2', ry: '3' }),
                React.createElement("path", { d: 'M22,13.734623 L24.8490403,12 C26.6825156,15.3656655 33.3174844,15.3656655 35.1509597,12 L38,13.734623 C34.9018654,19.4217923 25.0981346,19.4217923 22,13.734623 Z', id: 'Eyebrow', fill: '#232827', fillRule: 'nonzero' }),
                React.createElement("g", { id: 'Smile', transform: 'translate(24.000000, 29.000000)' },
                    React.createElement("mask", { id: maskName, fill: 'white' },
                        React.createElement("use", { xlinkHref: "#" + pathName })),
                    React.createElement("use", { id: 'Mouth', fill: '#94231A', xlinkHref: "#" + pathName }),
                    React.createElement("ellipse", { id: 'tongue', fill: '#EC7651', mask: "url(#" + maskName + ")", cx: '4.0625', cy: '12', rx: '4.0625', ry: '4' }),
                    React.createElement("ellipse", { id: 'tongue', fill: '#EC7651', mask: "url(#" + maskName + ")", cx: '8.9375', cy: '12', rx: '4.0625', ry: '4' }),
                    React.createElement("rect", { id: 'Teeth', fill: '#ECFAF7', mask: "url(#" + maskName + ")", x: '0', y: '0', width: '13', height: '3.2' })),
                React.createElement("circle", { id: 'hand', fill: '#78ADA0', cx: '4', cy: '25', r: '4' }),
                React.createElement("circle", { id: 'hand', fill: '#78ADA0', cx: '56', cy: '33', r: '4' })),
            React.createElement("rect", { id: 'Bottom', fill: '#2E3539', x: '11', y: '46', width: '78', height: '6' })));
    };
    Plankton.optionValue = 'Plankton';
    return Plankton;
}(React.Component));
exports.default = Plankton;
