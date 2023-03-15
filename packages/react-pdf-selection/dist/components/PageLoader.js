"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLoader = void 0;
var react_1 = __importDefault(require("react"));
require("../style/spinner.css");
var PageLoader = function () { return (react_1.default.createElement("div", { style: { height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" } },
    react_1.default.createElement("div", { className: "lds-spinner" },
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null)))); };
exports.PageLoader = PageLoader;
