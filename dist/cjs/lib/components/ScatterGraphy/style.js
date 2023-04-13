"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = exports.Wrapper = void 0;
var react_1 = require("@emotion/react");
var styled_1 = require("@emotion/styled");
exports.Wrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  width: 100%;\n"], ["\n  position: relative;\n  display: block;\n  width: 100%;\n"])));
exports.Dot = styled_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n\n  ", "\n\n  display: inline-block;\n  background-color: ", ";\n  transition: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  position: absolute;\n\n  ", "\n\n  display: inline-block;\n  background-color: ", ";\n  transition: ", ";\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var randomCoord = _a.randomCoord;
    return randomCoord && (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      top: ", "px;\n      left: ", "px;\n    "], ["\n      top: ", "px;\n      left: ", "px;\n    "])), randomCoord[1], randomCoord[0]);
}, function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var duration = _a.duration;
    return "ease ".concat(duration, "ms ").concat(duration, "ms");
}, function (_a) {
    var size = _a.size;
    return size && (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      width: ", "px;\n      height: ", "px;\n    "], ["\n      width: ", "px;\n      height: ", "px;\n    "])), size, size);
}, function (_a) {
    var isHovered = _a.isHovered, coord = _a.coord;
    return isHovered && (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      top: ", "px;\n      left: ", "px;\n    "], ["\n      top: ", "px;\n      left: ", "px;\n    "])), coord[1], coord[0]);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
