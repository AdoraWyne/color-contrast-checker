export function getContrastRatio(l1,l2){
    const L_lighter = l1 > l2 ? l1 : l2
    const L_darker = l1 < l2 ? l1 : l2

    return (L_lighter + 0.05) / (L_darker + 0.05)
}