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
var PropTypes = require("prop-types");
var React = require("react");
var bot_1 = require("./bot");
var piece_1 = require("./bot/piece");
var options_1 = require("./options");
var bot_2 = require("./bot");
exports.Bot = bot_2.Bot;
exports.BotStyle = bot_2.BotStyle;
var options_2 = require("./options");
exports.Option = options_2.Option;
exports.OptionContext = options_2.OptionContext;
exports.allOptions = options_2.allOptions;
var Bottt = /** @class */ (function (_super) {
    __extends(Bottt, _super);
    function Bottt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    Bottt.prototype.getChildContext = function () {
        return { optionContext: this.optionContext };
    };
    Bottt.prototype.componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    Bottt.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    Bottt.prototype.render = function () {
        var _a = this.props, botStyle = _a.botStyle, style = _a.style;
        return React.createElement(bot_1.Bot, { botStyle: botStyle, style: style });
    };
    Bottt.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_1 = options_1.allOptions; _i < allOptions_1.length; _i++) {
            var option = allOptions_1[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    Bottt.childContextTypes = {
        optionContext: PropTypes.instanceOf(options_1.OptionContext),
    };
    return Bottt;
}(React.Component));
exports.default = Bottt;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    Piece.prototype.getChildContext = function () {
        return { optionContext: this.optionContext };
    };
    Piece.prototype.componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    Piece.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    Piece.prototype.render = function () {
        var _a = this.props, botStyle = _a.botStyle, style = _a.style, pieceType = _a.pieceType, pieceSize = _a.pieceSize;
        return (React.createElement(piece_1.PieceComponent, { botStyle: botStyle, style: style, pieceType: pieceType, pieceSize: pieceSize }));
    };
    Piece.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_2 = options_1.allOptions; _i < allOptions_2.length; _i++) {
            var option = allOptions_2[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    Piece.childContextTypes = {
        optionContext: PropTypes.instanceOf(options_1.OptionContext),
    };
    return Piece;
}(React.Component));
exports.Piece = Piece;
