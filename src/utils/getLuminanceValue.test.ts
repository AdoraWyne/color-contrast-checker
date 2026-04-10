import {getLuminanceValue} from "./getLuminanceValue"

describe("getLuminanceValue", () => {
    it("happy path", () => {
        const input = "rgb(255,128,0)"
        const output = 0.36700000000000004
        expect(getLuminanceValue(input)).toBeCloseTo(output, 3)
    })

    it("edge case", () => {
        const input = "rgb(255"
        expect(getLuminanceValue(input)).toBeNaN()
    })
})