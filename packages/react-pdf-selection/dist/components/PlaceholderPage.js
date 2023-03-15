"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderPage = void 0;
var react_1 = __importStar(require("react"));
var PageLoader_1 = require("./PageLoader");
require("../style/spinner.css");
var PdfPage_1 = require("./PdfPage");
var PlaceholderPage = /** @class */ (function (_super) {
    __extends(PlaceholderPage, _super);
    function PlaceholderPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return (react_1.default.createElement("div", { className: "pdfViewer__page-container", style: __assign({}, (_this.props.pageDimensions ? {
                    width: PdfPage_1.getPageWidth(_this.props.pageDimensions) + "px",
                    height: PdfPage_1.getPageHeight(_this.props.pageDimensions) + "px",
                } : {})) },
                react_1.default.createElement(PageLoader_1.PageLoader, null)));
        };
        return _this;
    }
    return PlaceholderPage;
}(react_1.Component));
exports.PlaceholderPage = PlaceholderPage;
