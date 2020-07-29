import * as PlateCalcModel from "../PlateCalcModel.js";

test('plate calculation works', () => {
    var calculation = PlateCalcModel.calculateRequiredWeights(135);

    expect(calculation.fortyFiveWeights).toBe(1);
    expect(calculation.thirtyFiveWeights).toBe(0);
    expect(calculation.twentyFiveWeights).toBe(0);
    expect(calculation.tenWeights).toBe(0);
    expect(calculation.fiveWeights).toBe(0);
    expect(calculation.twoPointFiveWeights).toBe(0);
    expect(calculation.remainder).toBe(0);
});