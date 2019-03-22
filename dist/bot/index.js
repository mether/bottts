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
var bottt_1 = require("./bottt");
var Color_1 = require("./color/Color");
var BotStyle;
(function (BotStyle) {
    BotStyle["Circle"] = "Circle";
    BotStyle["Transparent"] = "Transparent";
})(BotStyle = exports.BotStyle || (exports.BotStyle = {}));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.render = function () {
        var mainID = 'Circle';
        var path1 = mainID + "-path-1";
        var path2 = mainID + "-path-2";
        var path3 = mainID + "-path-3";
        var mask1 = mainID + "-main-1";
        var mask2 = mainID + "-main-2";
        return (React.createElement("g", { id: mainID },
            React.createElement("defs", null,
                React.createElement("circle", { id: path1, cx: '120', cy: '120', r: '120' }),
                React.createElement("path", { d: 'M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z', id: path2 }),
                React.createElement("path", { d: 'M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z', id: path3 })),
            React.createElement("g", null,
                this.props.circle ? (React.createElement("g", { id: 'Circle', strokeWidth: '1', fillRule: 'evenodd' },
                    React.createElement("mask", { id: mask1, fill: 'white' },
                        React.createElement("use", { xlinkHref: "#" + path1 })),
                    React.createElement("use", { id: 'Circle-Background', fill: '#E6E6E6', xlinkHref: "#" + path1 }),
                    React.createElement(Color_1.default, { maskID: mask1 },
                        React.createElement("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '240', height: '240' })))) : null,
                this.props.circle ? (React.createElement("mask", { id: mask2, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + path1 }))) : null,
                React.createElement("g", { id: 'Bottt', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#" + mask2 + ")" }, this.props.children))));
    };
    return Circle;
}(React.Component));
var Bot = /** @class */ (function (_super) {
    __extends(Bot, _super);
    function Bot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bot.prototype.render = function () {
        var _a = this.props, botStyle = _a.botStyle, style = _a.style, size = _a.size;
        var circle = botStyle === BotStyle.Circle;
        var mainID = 'Bottt';
        return (React.createElement("svg", { style: style, width: size + "px", height: size + "px", viewBox: "0 0 240 240", version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' },
            React.createElement("title", null, "Bottt"),
            React.createElement("desc", null, "Created with botttsgenerator.com"),
            React.createElement("g", { id: mainID, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                React.createElement(Circle, { circle: circle },
                    React.createElement(bottt_1.default, null)))));
    };
    return Bot;
}(React.Component));
exports.default = Bot;
