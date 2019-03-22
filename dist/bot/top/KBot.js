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
var KBot = /** @class */ (function (_super) {
    __extends(KBot, _super);
    function KBot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KBot.prototype.render = function () {
        var pieceId = 'Top/K-Bot';
        var pathName1 = pieceId + "-path-1";
        var pathName2 = pieceId + "-path-2";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M4,18 C7.32929829,28.5297416 11.995965,34.1964083 18,35', id: pathName1 }),
                React.createElement("path", { d: 'M41,25 C44.3292983,31.1939656 48.995965,34.527299 55,35', id: pathName2 })),
            React.createElement("g", { id: 'Group', transform: 'translate(11.000000, 0.000000)' },
                React.createElement("path", { d: 'M3,51 L75,51 L75,22 C75,10.3599657 67.4713319,1 58.3043478,1 L19.6956522,1 C10.5286681,1 3,10.3599657 3,22 L3,51 Z', id: 'Case', strokeOpacity: '0.32', stroke: '#000000', strokeWidth: '2', fillOpacity: '0.5', fill: '#FFFFFF' }),
                React.createElement("g", { id: 'Plankton', transform: 'translate(9.000000, 10.000000)' },
                    React.createElement("g", { id: 'Arm', strokeWidth: '3.2' },
                        React.createElement("use", { stroke: '#F79420', xlinkHref: "#" + pathName1 }),
                        React.createElement("use", { strokeOpacity: '0.12', stroke: '#000000', xlinkHref: "#" + pathName1 })),
                    React.createElement("g", { id: 'Arm', transform: 'translate(48.000000, 30.000000) scale(-1, 1) translate(-48.000000, -30.000000) ', strokeWidth: '3.2' },
                        React.createElement("use", { stroke: '#F79420', xlinkHref: "#" + pathName2 }),
                        React.createElement("use", { strokeOpacity: '0.12', stroke: '#000000', xlinkHref: "#" + pathName2 })),
                    React.createElement("path", { d: 'M30,0 L30,0 C37.1797017,-1.31888981e-15 43,5.82029825 43,13 L43,42 L17,42 L17,13 C17,5.82029825 22.8202983,1.31888981e-15 30,0 Z', id: 'Body', fill: '#F79420' }),
                    React.createElement("rect", { id: 'Controller-Stick', fill: '#2E3539', x: '4', y: '5', width: '2', height: '37' }),
                    React.createElement("rect", { id: 'Controller-Stick', fill: '#2E3539', x: '55', y: '11', width: '2', height: '31' }),
                    React.createElement("circle", { id: 'Controller-Knob', fill: '#2E3539', cx: '5', cy: '6', r: '5' }),
                    React.createElement("circle", { id: 'Controller-Knob', fill: '#2E3539', cx: '56', cy: '15', r: '5' }),
                    React.createElement("circle", { id: 'hand', fill: '#F79420', cx: '4', cy: '16', r: '4' }),
                    React.createElement("circle", { id: 'hand', fill: '#F79420', cx: '56', cy: '24', r: '4' }),
                    React.createElement("path", { d: 'M27.303,8.851 L27.303,20.122 L27.901,20.122 C28.0743342,20.122 28.2173328,20.0981669 28.33,20.0505 C28.4426672,20.0028331 28.5683326,19.9053341 28.707,19.758 L32.867,15.299 C32.9970007,15.1603326 33.1269994,15.0476671 33.257,14.961 C33.3870007,14.8743329 33.5603323,14.831 33.777,14.831 L35.883,14.831 L31.034,19.992 C30.9126661,20.1393341 30.7935006,20.2693328 30.6765,20.382 C30.5594994,20.4946672 30.4273341,20.5943329 30.28,20.681 C30.4360008,20.7850005 30.5768327,20.904166 30.7025,21.0385 C30.8281673,21.172834 30.9473328,21.3266658 31.06,21.5 L36.208,28 L34.128,28 C33.9373324,28 33.774834,27.963167 33.6405,27.8895 C33.506166,27.815833 33.3783339,27.7010008 33.257,27.545 L28.928,22.15 C28.7979993,21.9679991 28.6680006,21.8488336 28.538,21.7925 C28.4079993,21.7361664 28.2130013,21.708 27.953,21.708 L27.303,21.708 L27.303,28 L24.976,28 L24.976,8.851 L27.303,8.851 Z', id: 'k', fill: '#FFFFFF' })),
                React.createElement("rect", { id: 'Bottom', fill: '#2E3539', x: '0', y: '46', width: '78', height: '6' }))));
    };
    KBot.optionValue = 'KBot';
    return KBot;
}(React.Component));
exports.default = KBot;
