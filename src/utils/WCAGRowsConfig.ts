import type { CSSProperties } from "react";

type WCAGPresentation = {
  previewText: string;
  previewStyle: CSSProperties;
};

export const WCAG_ROWS_PRESENTATION: Record<string, WCAGPresentation> = {
  "AA for normal text": {
    previewText: "14pt text bold weight",
    previewStyle: { fontSize: "14pt", fontWeight: "bold" },
  },
  "AAA for normal text": {
    previewText: "12pt text bold weight",
    previewStyle: { fontSize: "12pt", fontWeight: "bold" },
  },
  "AA for large text": {
    previewText: "18pt text normal weight",
    previewStyle: { fontSize: "18pt", fontWeight: "normal" },
  },
  "AAA for large text": {
    previewText: "14pt text normal weight",
    previewStyle: { fontSize: "14pt", fontWeight: "normal" },
  },
};
