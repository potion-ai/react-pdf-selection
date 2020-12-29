import React from "react";
import { TextSelectionType } from "./PdfViewer";

export const TextSelection = ({ textSelection }: { textSelection: TextSelectionType }) => (
    <div>
        {textSelection.position.rects.map((rect, i) => (
            <div
                key={i}
                style={{
                    ...rect,
                    cursor: "pointer",
                    position: "absolute",
                    background: "rgba(255, 226, 143, 1)",
                    mixBlendMode: "multiply",
                    transition: "background 0.3s",
                }}
            />
        ))}
    </div>
);
