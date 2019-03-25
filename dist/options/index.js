"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("./Option");
var Option_2 = require("./Option");
exports.Option = Option_2.default;
var OptionContext_1 = require("./OptionContext");
exports.OptionContext = OptionContext_1.default;
var Selector_1 = require("./Selector");
exports.Selector = Selector_1.default;
exports.CircleColorOption = new Option_1.default({
    key: 'circleColor',
    label: '🎨 Circle Color',
});
exports.FaceOption = new Option_1.default({
    key: 'faceType',
    label: '🤖 Face',
});
exports.FaceColorOption = new Option_1.default({
    key: 'faceColor',
    label: '↳ 🎨 Color',
});
exports.TextureOption = new Option_1.default({
    key: 'textureType',
    label: '↳ 🤚 Texture',
});
exports.EyesOption = new Option_1.default({
    key: 'eyeType',
    label: '👁 Eyes',
});
exports.MouthOption = new Option_1.default({
    key: 'mouthType',
    label: '👄 Mouth',
});
exports.TopOption = new Option_1.default({
    key: 'topType',
    label: '🎩 Top',
});
exports.TopColorOption = new Option_1.default({
    key: 'topColor',
    label: '↳ 🎨 Top',
});
exports.SidesOption = new Option_1.default({
    key: 'sideType',
    label: '👂 Sides',
});
exports.SidesColorOption = new Option_1.default({
    key: 'sidesColor',
    label: '↳ 🎨 Sides',
});
exports.allOptions = [
    exports.CircleColorOption,
    exports.TopOption,
    exports.TopColorOption,
    exports.FaceOption,
    exports.FaceColorOption,
    exports.TextureOption,
    exports.EyesOption,
    exports.MouthOption,
    exports.SidesOption,
    exports.SidesColorOption,
];
