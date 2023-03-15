import React, { Component, CSSProperties, ReactElement, RefObject } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../style/react_pdf_viewer.css";
import { NormalizedAreaSelection, NormalizedTextSelection, SelectionType } from "../types";
import { AreaSelectionProps } from "./AreaSelection";
import { NewAreaSelectionProps } from "./NewAreaSelection";
import { TextSelectionProps } from "./TextSelection";
export declare enum SelectionMode {
    AREA = 0,
    TEXT = 1
}
export declare enum PDFOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
export declare type PageDimension = {
    width: number;
    height: number;
    orientation: PDFOrientation;
};
export declare type PageDimensions = Map<number, PageDimension>;
interface PdfViewerProps<D extends object> {
    children?: (props: {
        document: ReactElement;
    }) => ReactElement;
    loading?: string | ReactElement | (() => ReactElement);
    url: string;
    selections?: Array<SelectionType<D>>;
    scale: number;
    overscanCount: number;
    enableAreaSelection?: (event: React.MouseEvent) => boolean;
    onLoad?: (originalPageDimensions: PageDimensions) => void;
    onPageDimensions?: ({ pageDimensions, pageYOffsets, }: {
        pageDimensions: PageDimensions;
        pageYOffsets: number[];
    }) => void;
    onTextSelection?: (highlightTip?: NormalizedTextSelection) => void;
    onAreaSelection?: (highlightTip?: NormalizedAreaSelection) => void;
    textSelectionColor?: CSSProperties["color"];
    textSelectionComponent?: (props: TextSelectionProps<D>) => JSX.Element;
    areaSelectionComponent?: (props: AreaSelectionProps<D>) => JSX.Element;
    newAreaSelectionComponent?: (props: NewAreaSelectionProps) => JSX.Element;
}
interface PdfViewerState<D extends object> {
    documentUuid?: string;
    activeSelectionMode: SelectionMode;
    textSelectionActive: boolean;
    areaSelectionActivePage?: number;
    selectionMap?: Map<number, SelectionType<D>[]>;
    numPages: number;
    originalPageDimensions?: PageDimensions;
    pageDimensions?: PageDimensions;
    pageYOffsets?: number[];
    visiblePages?: number[];
}
export declare class PdfViewer<D extends object> extends Component<PdfViewerProps<D>, PdfViewerState<D>> {
    static defaultProps: {
        overscanCount: number;
        scale: number;
    };
    state: PdfViewerState<D>;
    /** Total left and right border width, needed as offset to avoid PageCanvas rendering past right page border. */
    BORDER_WIDTH_OFFSET: number;
    TOP_WIDTH_OFFSET: number;
    containerDiv: HTMLElement | null;
    scrollingElement: HTMLElement | null;
    pageRefs: Map<number, RefObject<HTMLDivElement>>;
    _mounted: boolean;
    /**
     * Lifecycle function
     */
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: PdfViewerProps<D>) => void;
    componentWillUnmount: () => void;
    shouldComponentUpdate: (nextProps: Readonly<PdfViewerProps<D>>, nextState: Readonly<PdfViewerState<D>>) => boolean;
    /**
     * Helpers
     */
    resetSelections: () => void;
    computeSelectionMap: () => void;
    computePageDimensions: (pdf: pdfjs.PDFDocumentProxy) => Promise<PageDimensions | undefined>;
    computeScaledPageDimensions: (originalPageDimensions: PageDimensions) => void;
    getVisiblePages: (scrollElement: HTMLElement, pageYOffsets?: number[] | undefined) => number[];
    getItemKey: (index: number) => string;
    getPageRef: (pageNumber: number) => React.RefObject<HTMLDivElement>;
    /**
     * Text selection handlers
     */
    clearTextSelection: () => void;
    onTextSelectionStart: () => void;
    onTextSelectionChange: () => void;
    /**
     * Area selection handlers
     */
    clearAreaSelection: () => void;
    onAreaSelectionChange: (pageNumber: number) => void;
    onAreaSelectionEnd: (selection: NormalizedAreaSelection) => void;
    /**
     * Event handlers
     */
    getScrollParent: (node: HTMLElement) => HTMLElement;
    onKeyDown: (event: KeyboardEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onScroll: () => void;
    onDocumentLoad: (pdf: pdfjs.PDFDocumentProxy) => Promise<void>;
    renderPages: () => JSX.Element[];
    render: () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export {};
