import { Component } from "react";
import "../style/spinner.css";
import { PageDimension } from "./PdfViewer";
interface PlaceHolderPageProps {
    pageDimensions?: PageDimension;
}
export declare class PlaceholderPage extends Component<PlaceHolderPageProps> {
    render: () => JSX.Element;
}
export {};
