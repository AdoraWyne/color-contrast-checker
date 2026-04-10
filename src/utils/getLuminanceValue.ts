function getNormaliseValue(value: number): number{
    return value/255
}

function getLinearizeValue(value){
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
}

export function getLuminanceValue(rgbValue){
    const values = rgbValue
                    .slice(4, -1)
                    .split(",")
                    .map(Number);

    const [r, g, b] = values;
    return 0.2126 * getLinearizeValue(getNormaliseValue(r)) + 0.7152 * getLinearizeValue(getNormaliseValue(g)) + 0.0722 * getLinearizeValue(getNormaliseValue(b))
}

// 1. get r,g,b value
// 2. normalise(r)
// 3. linearise(normalise(r))
// 4. L = 0.2126 * linearise(normalise(r)) + 0.7152 * linearise(normalise(g)) + 0.0722 * linearise(normalise(b))