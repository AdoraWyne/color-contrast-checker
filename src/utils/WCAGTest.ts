type WCAGResult = {
    NormalAA: "pass" | "fail";
    NormalAAA: "pass" | "fail";
    LargeAA: "pass" | "fail";
    LargeAAA: "pass" | "fail";
  };

export function WCAGTest(contrastRatio: number): WCAGResult{
    return {
        NormalAA  : contrastRatio >= 4.5? "✅ Pass" : "😭 Fail",
        NormalAAA : contrastRatio >= 7? "✅ Pass" : "😭 Fail",
        LargeAA   : contrastRatio >= 3?"✅ Pass" : "😭 Fail",
        LargeAAA  : contrastRatio >= 4.5?"✅ Pass" : "😭 Fail",
    }
}