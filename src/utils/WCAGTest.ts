type WCAGRowResult = {
  level: string;
  minContrast: number;
  passes: boolean;
};

export function WCAGTest(contrastRatio: number): WCAGRowResult[] {
  return [
    {
      level: "AA for normal text",
      minContrast: 4.5,
      passes: contrastRatio >= 4.5,
    },
    {
      level: "AAA for normal text",
      minContrast: 7,
      passes: contrastRatio >= 7,
    },
    { level: "AA for large text", minContrast: 3, passes: contrastRatio >= 3 },
    {
      level: "AAA for large text",
      minContrast: 4.5,
      passes: contrastRatio >= 4.5,
    },
  ];
}
