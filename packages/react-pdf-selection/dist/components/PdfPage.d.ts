import React, { Component, CSSProperties, RefObject } from "react";
import { BoundingRect, Coords, NormalizedAreaSelection, NormalizedPosition, SelectionType } from "../types";
import { AreaSelectionProps } from "./AreaSelection";
import { NewAreaSelectionProps } from "./NewAreaSelection";
import { PageDimension } from "./PdfViewer";
import { TextSelectionProps } from "./TextSelection";
export interface PdfPageProps<D extends object> {
    pageNumber: number;
    style: CSSProperties;
    innerRef: RefObject<HTMLDivElement>;
    areaSelectionActive: boolean;
    enableAreaSelection?: (event: React.MouseEvent) => boolean;
    pageDimensions?: PageDimension;
    selections?: SelectionType<D>[];
    onAreaSelectionStart?: (pageNumber: number) => void;
    onAreaSelectionChange?: (pageNumber: number) => void;
    onAreaSelectionEnd?: (selection: NormalizedAreaSelection) => void;
    textSelectionColor: string;
    textSelectionComponent?: (props: TextSelectionProps<D>) => JSX.Element;
    areaSelectionComponent?: (props: AreaSelectionProps<D>) => JSX.Element;
    newAreaSelectionComponent?: (props: NewAreaSelectionProps) => JSX.Element;
}
interface PdfPageState {
    renderComplete: boolean;
    areaSelection?: {
        originTarget?: HTMLElement;
        start?: Coords;
        position?: NormalizedPosition;
        moved?: boolean;
        locked?: boolean;
    };
}
export declare const getPageWidth: ({ orientation, height, width }: PageDimension) => number;
export declare const getPageHeight: ({ orientation, height, width }: PageDimension) => number;
export declare class PdfPage<D extends object> extends Component<PdfPageProps<D>, PdfPageState> {
    state: PdfPageState;
    inputRef: React.RefObject<HTMLDivElement>;
    _mounted: boolean;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    shouldComponentUpdate(nextProps: Readonly<PdfPageProps<D>>, nextState: Readonly<PdfPageState>): boolean;
    containerCoords: (pageX: number, pageY: number) => {
        x: number;
        y: number;
    } | undefined;
    getBoundingRect(start: Coords, end: Coords, clip?: BoundingRect): BoundingRect;
    onAreaSelectStart: (event: React.MouseEvent) => void;
    getAreaSelectionPosition: (event: MouseEvent) => NormalizedPosition | undefined;
    onAreaSelectChange: (event: MouseEvent) => void;
    onAreaSelectEnd: (event: MouseEvent) => void;
    onPageLoad: () => void;
    onPageRender: () => void;
    onMouseDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    renderSelections: () => JSX.Element | null;
    render: () => JSX.Element;
}
export {};
