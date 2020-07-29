// Model
export function calculateRequiredWeights(totalWeight) {
    // Calculate required weights (45, 35, 25, 10, 5, 2.5)
    let fortyFiveWeights = 0;
    let thirtyFiveWeights = 0;
    let twentyFiveWeights = 0;
    let tenWeights = 0;
    let fiveWeights = 0;
    let twoPointFiveWeights = 0;

    // TODO - Take the barbell's weight into account
    totalWeight = totalWeight - 45;

    fortyFiveWeights = Math.floor(totalWeight / (45 * 2));
    totalWeight = totalWeight - (fortyFiveWeights * (45 * 2));

    thirtyFiveWeights = Math.floor(totalWeight / (35 * 2));
    totalWeight = totalWeight - (thirtyFiveWeights * (35 * 2));

    twentyFiveWeights = Math.floor(totalWeight / (25 * 2));
    totalWeight = totalWeight - (twentyFiveWeights * (25 * 2));

    tenWeights = Math.floor(totalWeight / (10 * 2));
    totalWeight = totalWeight - (tenWeights * (10 * 2));

    fiveWeights = Math.floor(totalWeight / (5 * 2));
    totalWeight = totalWeight - (fiveWeights * (5 * 2));

    twoPointFiveWeights = Math.floor(totalWeight / (2.5 * 2));
    totalWeight = totalWeight - (twoPointFiveWeights * (2.5 * 2));

    return {
        fortyFiveWeights: fortyFiveWeights,
        thirtyFiveWeights: thirtyFiveWeights,
        twentyFiveWeights: twentyFiveWeights,
        tenWeights: tenWeights,
        fiveWeights: fiveWeights,
        twoPointFiveWeights: twoPointFiveWeights,
        remainder: totalWeight,
    };
}