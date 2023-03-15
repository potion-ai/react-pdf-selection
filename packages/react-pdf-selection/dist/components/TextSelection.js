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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSelection = void 0;
var react_1 = __importDefault(require("react"));
var TextSelection = function (_a) {
    var textSelection = _a.textSelection;
    return (react_1.default.createElement("div", null, textSelection.position.rects.map(function (rect, i) { return (react_1.default.createElement("div", { key: i, style: __assign(__assign({}, rect), { cursor: "pointer", position: "absolute", background: "rgba(255, 226, 143, 1)", mixBlendMode: "multiply", transition: "background 0.3s" }) })); })));
};
exports.TextSelection = TextSelection;
