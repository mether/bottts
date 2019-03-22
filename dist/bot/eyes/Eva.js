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
var Eva = /** @class */ (function (_super) {
    __extends(Eva, _super);
    function Eva() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eva.prototype.render = function () {
        var pieceId = 'Eyes/Eva';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M53,0 C87.746885,0 102.000559,17.474163 102,31 C101.999441,44.525837 82.4108252,48 53,48 C23.9528111,48 2,44.525837 2,31 C2,17.474163 17.1141791,3.17100737e-15 53,0 Z', id: 'Path-2', fillOpacity: '0.8', fill: '#000000' }),
            React.createElement("g", { id: 'EeeeVaaaa', transform: 'translate(18.000000, 16.000000)', fill: '#25A6F5' },
                React.createElement("path", { d: 'M10.817693,18.6539934 C4.29096139,17.3000653 -0.41691297,12.312077 0.302361333,7.51300959 C1.02163564,2.7139422 6.89568406,-0.0788950027 13.4224157,1.2750331 C19.9491473,2.6289612 24.6570217,7.61694957 23.9377474,12.416017 C23.2184731,17.2150843 17.3444247,20.0079215 10.817693,18.6539934 Z', id: 'vaaaa' }),
                React.createElement("path", { d: 'M57.4224157,18.6539934 C50.8956841,20.0079215 45.0216356,17.2150843 44.3023613,12.416017 C43.583087,7.61694957 48.2909614,2.6289612 54.817693,1.2750331 C61.3444247,-0.0788950027 67.2184731,2.7139422 67.9377474,7.51300959 C68.6570217,12.312077 63.9491473,17.3000653 57.4224157,18.6539934 Z', id: 'eeee' }))));
    };
    Eva.optionValue = 'Eva';
    return Eva;
}(React.Component));
exports.default = Eva;
