import $ from 'jquery';

// View
export var weightInputSelector = '#weight-calc-input';

export function getInputWeight() {
    return $(weightInputSelector).val();
}

export function setCalculatedWeights(calculatedWeights) {
    $('.45-weights').text(calculatedWeights.fortyFiveWeights);
    $('.35-weights').text(calculatedWeights.thirtyFiveWeights);
    $('.25-weights').text(calculatedWeights.twentyFiveWeights);
    $('.10-weights').text(calculatedWeights.tenWeights);
    $('.5-weights').text(calculatedWeights.fiveWeights);
    $('.2_5-weights').text(calculatedWeights.twoPointFiveWeights);
}