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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfPage = exports.getPageHeight = exports.getPageWidth = void 0;
var react_1 = __importStar(require("react"));
var react_fast_compare_1 = __importDefault(require("react-fast-compare"));
var react_pdf_1 = require("react-pdf");
var types_1 = require("../types");
var utils_1 = require("../utils");
var coordinates_1 = require("../utils/coordinates");
var AreaSelection_1 = require("./AreaSelection");
var NewAreaSelection_1 = require("./NewAreaSelection");
var PageLoader_1 = require("./PageLoader");
var PdfViewer_1 = require("./PdfViewer");
var TextSelection_1 = require("./TextSelection");
var getPageWidth = function (_a) {
    var orientation = _a.orientation, height = _a.height, width = _a.width;
    return orientation === PdfViewer_1.PDFOrientation.PORTRAIT ? width : height;
};
exports.getPageWidth = getPageWidth;
var getPageHeight = function (_a) {
    var orientation = _a.orientation, height = _a.height, width = _a.width;
    return orientation === PdfViewer_1.PDFOrientation.PORTRAIT ? height : width;
};
exports.getPageHeight = getPageHeight;
var PdfPage = /** @class */ (function (_super) {
    __extends(PdfPage, _super);
    function PdfPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            renderComplete: false,
        };
        _this.inputRef = react_1.createRef();
        _this._mounted = false;
        _this.componentDidMount = function () {
            _this._mounted = true;
        };
        _this.componentWillUnmount = function () {
            _this._mounted = false;
        };
        _this.containerCoords = function (pageX, pageY) {
            if (!_this.inputRef.current)
                return;
            var pageBoundingBox = _this.inputRef.current.getBoundingClientRect();
            var window = utils_1.getWindow(_this.inputRef.current);
            return {
                x: pageX - (pageBoundingBox.left + window.scrollX),
                y: pageY - (pageBoundingBox.top + window.scrollY),
            };
        };
        _this.onAreaSelectStart = function (event) {
            var _a, _b;
            (_b = (_a = _this.props).onAreaSelectionStart) === null || _b === void 0 ? void 0 : _b.call(_a, _this.props.pageNumber);
            var start = _this.containerCoords(event.pageX, event.pageY);
            if (!start)
                return;
            _this.setState({
                areaSelection: { originTarget: event.target, start: start, moved: false, locked: false },
            });
        };
        _this.getAreaSelectionPosition = function (event) {
            var areaSelection = _this.state.areaSelection;
            if (!areaSelection || !areaSelection.originTarget || !areaSelection.start || areaSelection.locked)
                return;
            var end = _this.containerCoords(event.pageX, event.pageY);
            if (!end)
                return;
            var _a = _this.props, pageNumber = _a.pageNumber, pageDimensions = _a.pageDimensions;
            if (!pageDimensions)
                return;
            var pageBoundaries = {
                top: 0,
                left: 0,
                right: exports.getPageWidth(pageDimensions),
                bottom: exports.getPageHeight(pageDimensions),
            };
            var boundingRect = _this.getBoundingRect(areaSelection.start, end, pageBoundaries);
            return coordinates_1.normalizePosition({ boundingRect: boundingRect, rects: [boundingRect], pageNumber: pageNumber }, { height: exports.getPageHeight(pageDimensions), width: exports.getPageWidth(pageDimensions) });
        };
        _this.onAreaSelectChange = function (event) {
            var _a, _b;
            var areaSelection = _this.state.areaSelection;
            var position = _this.getAreaSelectionPosition(event);
            if (!position)
                return;
            _this.setState({ areaSelection: __assign(__assign({}, areaSelection), { moved: true, position: position }) });
            (_b = (_a = _this.props).onAreaSelectionChange) === null || _b === void 0 ? void 0 : _b.call(_a, position.pageNumber);
        };
        _this.onAreaSelectEnd = function (event) {
            var _a;
            var areaSelection = _this.state.areaSelection;
            if (!(areaSelection === null || areaSelection === void 0 ? void 0 : areaSelection.moved))
                return;
            var onAreaSelectionEnd = _this.props.onAreaSelectionEnd;
            var position = _this.getAreaSelectionPosition(event);
            if (!position)
                return;
            // First childNode is the page canvas
            var canvas = (_a = _this.inputRef.current) === null || _a === void 0 ? void 0 : _a.childNodes[0];
            if (!canvas)
                return;
            var image = utils_1.getAreaAsPNG(canvas, position.absolute.boundingRect);
            onAreaSelectionEnd === null || onAreaSelectionEnd === void 0 ? void 0 : onAreaSelectionEnd({ position: position, image: image });
            _this.setState({
                areaSelection: __assign(__assign({}, areaSelection), { position: position, locked: true }),
            });
        };
        _this.onPageLoad = function () {
            var pageNode = _this.inputRef.current;
            if (!pageNode)
                return;
            // Second childNode is the page textLayer div
            var style = pageNode.childNodes[1].style;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        };
        _this.onPageRender = function () {
            if (_this._mounted)
                _this.setState({ renderComplete: true });
        };
        _this.onMouseDown = function (event) {
            var _a, _b;
            if (!((_b = (_a = _this.props).enableAreaSelection) === null || _b === void 0 ? void 0 : _b.call(_a, event)))
                return;
            document.addEventListener("pointermove", _this.onMouseMove);
            document.addEventListener("pointerup", _this.onMouseUp);
            _this.onAreaSelectStart(event);
        };
        _this.onMouseMove = function (event) {
            _this.onAreaSelectChange(event);
        };
        _this.onMouseUp = function (event) {
            document.removeEventListener("pointermove", _this.onMouseMove);
            document.removeEventListener("pointerup", _this.onMouseUp);
            _this.onAreaSelectEnd(event);
        };
        _this.renderSelections = function () {
            var _a = _this.props, pageDimensions = _a.pageDimensions, selections = _a.selections, areaSelectionComponent = _a.areaSelectionComponent, textSelectionComponent = _a.textSelectionComponent;
            var AreaSelectionComponent = areaSelectionComponent !== null && areaSelectionComponent !== void 0 ? areaSelectionComponent : AreaSelection_1.AreaSelection;
            var TextSelectionComponent = textSelectionComponent !== null && textSelectionComponent !== void 0 ? textSelectionComponent : TextSelection_1.TextSelection;
            if (!_this.inputRef || !selections)
                return null;
            var selectionRenders = selections.map(function (selection, i) {
                if (!pageDimensions)
                    return null;
                var position = coordinates_1.getPositionWithCSSProperties(selection.position, { height: exports.getPageHeight(pageDimensions), width: exports.getPageWidth(pageDimensions) });
                var normalizedSelection = __assign(__assign({}, selection), { position: position });
                return types_1.isAreaSelection(normalizedSelection) ? (areaSelectionComponent ? (react_1.default.createElement(react_1.Fragment, { key: i }, areaSelectionComponent({ areaSelection: normalizedSelection }))) : (react_1.default.createElement(AreaSelectionComponent, { key: i, areaSelection: normalizedSelection }))) : textSelectionComponent ? (react_1.default.createElement(react_1.Fragment, { key: i }, textSelectionComponent({ textSelection: normalizedSelection }))) : (react_1.default.createElement(TextSelectionComponent, { key: i, textSelection: normalizedSelection }));
            });
            return react_1.default.createElement(react_1.default.Fragment, null, selectionRenders);
        };
        _this.render = function () {
            var _a = _this.props, areaSelectionActive = _a.areaSelectionActive, pageDimensions = _a.pageDimensions, pageNumber = _a.pageNumber, newAreaSelectionComponent = _a.newAreaSelectionComponent;
            var _b = _this.state, areaSelection = _b.areaSelection, renderComplete = _b.renderComplete;
            var NewAreaSelectionComponent = newAreaSelectionComponent !== null && newAreaSelectionComponent !== void 0 ? newAreaSelectionComponent : NewAreaSelection_1.NewAreaSelection;
            var newAreaSelection = areaSelectionActive && (areaSelection === null || areaSelection === void 0 ? void 0 : areaSelection.position) && (react_1.default.createElement(NewAreaSelectionComponent, { boundingRect: utils_1.getAbsoluteBoundingRectWithCSSProperties(areaSelection.position.absolute.boundingRect) }));
            return (react_1.default.createElement("div", { ref: _this.props.innerRef, className: "pdfViewer__page-container", style: __assign(__assign({ 
                    // @ts-ignore-next-line A bit hacky, but it works to set a custom ::selection color programmatically
                    "--selection-color": _this.props.textSelectionColor }, (pageDimensions ? {
                    width: exports.getPageWidth(pageDimensions) + "px",
                    height: exports.getPageHeight(pageDimensions) + "px",
                } : {})), _this.props.style), onPointerDown: _this.onMouseDown },
                react_1.default.createElement(react_pdf_1.Page, { key: "page_" + pageNumber, pageNumber: pageNumber, width: pageDimensions ? exports.getPageWidth(pageDimensions) : undefined, height: pageDimensions ? exports.getPageHeight(pageDimensions) : undefined, inputRef: _this.inputRef, loading: react_1.default.createElement(PageLoader_1.PageLoader, null), onLoadSuccess: _this.onPageLoad, onRenderSuccess: _this.onPageRender },
                    renderComplete && _this.renderSelections(),
                    newAreaSelection)));
        };
        return _this;
    }
    PdfPage.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !react_fast_compare_1.default(this.props, nextProps) || !react_fast_compare_1.default(this.state, nextState);
    };
    PdfPage.prototype.getBoundingRect = function (start, end, clip) {
        var clipRect = clip !== null && clip !== void 0 ? clip : {
            left: Number.MIN_SAFE_INTEGER,
            top: Number.MIN_SAFE_INTEGER,
            right: Number.MAX_SAFE_INTEGER,
            bottom: Number.MAX_SAFE_INTEGER,
        };
        return {
            left: Math.max(Math.min(end.x, start.x), clipRect.left),
            top: Math.max(Math.min(end.y, start.y), clipRect.top),
            right: Math.min(Math.max(end.x, start.x), clipRect.right),
            bottom: Math.min(Math.max(end.y, start.y), clipRect.bottom),
        };
    };
    return PdfPage;
}(react_1.Component));
exports.PdfPage = PdfPage;
