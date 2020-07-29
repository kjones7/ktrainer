//import _ from 'lodash';
//
//function component() {
//    const element = document.createElement('div');
//
//    // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack??'], ' ');
//
//    return element;
//}
//
//document.body.appendChild(component());
//

import $ from 'jquery';
import * as PlateCalcModel from "./PlateCalcModel.js";
import * as PlateCalcView from "./PlateCalcView.js";





// Controller
$(PlateCalcView.weightInputSelector).on('change', function (e) {
    // View
    let inputWeight = PlateCalcView.getInputWeight();

    // Controller validates data from view

    // Validate/normalize input
    if (!(inputWeight >= 0)) {
        // Treat invalid values as 0
        inputWeight = 0;
    }

    // Model
    let calculatedWeights = PlateCalcModel.calculateRequiredWeights(inputWeight);

    // View
    PlateCalcView.setCalculatedWeights(calculatedWeights);
});