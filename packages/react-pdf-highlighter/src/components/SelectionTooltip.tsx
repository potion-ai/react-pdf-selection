import React from "react";
import { SelectionType } from "./PdfViewer";

export const SelectionTooltip = ({ selection }: { selection: SelectionType }) => (
    <div
        className="pdfViewer__highlight-tip"
        style={{
            top: selection.position.pageOffset + selection.position.boundingRect.top - 40,
            position: "absolute",
            zIndex: 99,
            width: "120px",
            left: 0,
            right: 0,
            margin: "auto",
            cursor: "pointer",
            backgroundColor: "#3d464d",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "3px",
        }}
    >
        Add highlight
    </div>
);
