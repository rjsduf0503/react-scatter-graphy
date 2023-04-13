"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var coordinate_1 = require("../../utils/coordinate");
var imageProcessing_1 = require("../../utils/imageProcessing");
var style_1 = require("./style");
function ScatterGraphy(_a) {
    var src = _a.src, _b = _a.duration, duration = _b === void 0 ? 500 : _b, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.color, color = _d === void 0 ? 'black' : _d;
    var ref = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isHovered = _e[0], setIsHovered = _e[1];
    var _f = (0, react_1.useState)([]), coords = _f[0], setCoords = _f[1];
    var _g = (0, react_1.useState)(0), width = _g[0], setWidth = _g[1];
    var _h = (0, react_1.useState)(0), height = _h[0], setHeight = _h[1];
    (0, react_1.useLayoutEffect)(function () {
        if (!ref.current || !ref.current.parentElement)
            return;
        var maxWidth = ref.current.parentElement.clientWidth;
        setWidth(maxWidth);
        (0, imageProcessing_1.imageProcessing)({
            maxWidth: maxWidth,
            size: size,
            src: src,
            callback: function (_a) {
                var error = _a.error, coords = _a.coords, height = _a.height;
                if (error || !coords || !height) {
                    console.error(error);
                    return;
                }
                setCoords(coords);
                setHeight(height);
            },
        });
    }, [size]);
    return ((0, jsx_runtime_1.jsx)(style_1.Wrapper, __assign({ onMouseOver: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, style: {
            height: "".concat(height, "px"),
        }, ref: ref }, { children: coords.map(function (coord, i) { return ((0, jsx_runtime_1.jsx)(style_1.Dot, { isHovered: isHovered, size: size, duration: duration, color: color, coord: coord, randomCoord: (0, coordinate_1.getRandomCoordinate)({ maxWidth: width, maxHeight: height }) }, i)); }) })));
}
exports.default = ScatterGraphy;
