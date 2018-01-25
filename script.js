// Length Conversion

// Convert meters to other units

function convertMetersTo(value, units_to) {
	switch (units_to) {
		case "ft":
			return value * 3.2808;
			break;
		case "in":
			return value * 39.370;
			break;
		case "cm":
			return value * 100;
			break;
		case "mm":
			return value * 1000;
			break;
		case "mi":
			return value * 0.000621371;
			break;
	}
}

// Convert feet to other units

function convertFeetTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.3048;
			break;
		case "in":
			return value * 12;
			break;
		case "mi":
			return value * 0.000189394;
			break;
		case "cm":
			return value * 30.48;
			break;
		case "mm":
			return value * 304.8;
			break;
	}
}

// Convert inches to other units

function convertInchesTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.0254;
			break;
		case "ft":
			return value * 0.08333;
			break;
		case "mi":
			return value / (12 * 5280);
			break;
		case "cm":
			return value * 2.54;
			break;
		case "mm":
			return value * 25.4;
			break;
	}
}

// Convert centimeters to other units

function convertCentimetersTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.01;
			break;
		case "ft":
			return value * 0.032808;
			break;
		case "mi":
			return value * 0.032808 / 5280;
			break;
		case "in":
			return value * 0.3937;
			break;
		case "mm":
			return value * 10;
			break;
	}
}

// Convert millimeters to other units

function convertMillimetersTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.001;
			break;
		case "ft":
			return value * 0.0032808;
			break;
		case "mi":
			return value * 0.0032808 / 5280;
			break;
		case "in":
			return value * 0.03937;
			break;
		case "cm":
			return value * 0.1;
			break;
	}
}

// Convert miles to other units

function convertMilesTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 1609.34;
			break;
		case "ft":
			return value * 5280;
			break;
		case "mm":
			return value * 1609.34 * 1000;
			break;
		case "in":
			return value * 63360;
			break;
		case "cm":
			return value * 1609.34 * 100;
			break;
	}
}

// Convert length 

function convertLength(value, units_from, units_to) {
	if (units_from === units_to) {
		return value;
	}

	switch (units_from) {
		case "m":
			return convertMetersTo(value, units_to);
			break; 
		case "ft":
			return convertFeetTo(value, units_to);
			break;
		case "in":
			return convertInchesTo(value, units_to);
			break;
		case "mm":
			return convertMillimetersTo(value, units_to);
			break;
		case "cm":
			return convertCentimetersTo(value, units_to);
			break;
	}
}

// Volume Conversion

// Convert m3 to other units

function convertCubicMetersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 35.3147;
			break;
		case "gal":
			return value * 264.172;
			break;
		case "L":
			return value * 1000;
			break;
		case "mL":
			return value * 1000000;
			break;
	}
}

// Convert ft3 to other units

function convertCubicFeetTo(value, units_to) {
	switch (units_to) {
		case "gal":
			return value * 7.48052;
			break;
		case "m3":
			return value * 0.0283168;
			break;
		case "L":
			return value * 28.3168;
			break;
		case "mL":
			return value * 28316.8;
			break;
	}
}

// Convert gal to other units

function convertGallonsTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.133681;
			break;
		case "m3":
			return value * 0.00378541;
			break;
		case "L":
			return value * 3.78541;
			break;
		case "mL":
			return value * 3785.41;
			break;
	}
}

// Convert L to other units

function convertLitersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.0353147;
			break;
		case "m3":
			return value * 0.001;
			break;
		case "gal":
			return value * 0.264172;
			break;
		case "mL":
			return value * 1000;
			break;
	}
}

// Convert mL to other units

function convertMillilitersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.0000353147;
			break;
		case "m3":
			return value * 0.000001;
			break;
		case "gal":
			return value * 0.000264172;
			break;
		case "L":
			return value * 0.001;
			break;
	}
}

// Convert Volume

function convertVolume(value, units_from, units_to) {
	if (units_from === units_to) {
		return value;
	}

	switch (units_from) {
		case "ft3":
			return convertCubicFeetTo(value, units_to);
			break; 
		case "m3":
			return convertCubicMetersTo(value, units_to);
			break;
		case "gal":
			return convertGallonsTo(value, units_to);
			break;
		case "L":
			return convertLitersTo(value, units_to);
			break;
		case "mL":
			return convertMillilitersTo(value, units_to);
			break;
	}
}


// Flow Conversion

// Convert GPM to other units

function convertGPMTo(value, units_to) {
	switch (units_to) {
		case "cfs":
			return value * 0.002228;
			break;
		case "cms":
			return value * 0.000063;
			break;
		case "gpd":
			return value * 1440;
			break;
		case "mgd":
			return value * (60 * 24) / 1000000;
			break;
	}
}

// Convert CFS to other units

function convertCFSTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 448.83;
			break;
		case "cms":
			return value * 0.0283168;
			break;
		case "gpd":
			return value * 646190.439;
			break;
		case "mgd":
			return value * 0.6463168;
			break;
	}
}

// Convert CMS to other units

function convertCMSTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 15850.32;
			break;
		case "cfs":
			return value * 35.3147;
			break;
		case "gpd":
			return value * 22820000;
			break;
		case "mgd":
			return value * 22.82;
			break;
	}
}

// Convert GPD to other units

function convertGPDTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value / 1440;
			break;
		case "cfs":
			return value * 0.00000154723;
			break;
		case "cms":
			return value * 0.000063 / 1440;
			break;
		case "mgd":
			return value * 0.000001;
			break;
	}
}

// Convert MGD to other units

function convertMGDTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 1440 / 1000000;
			break;
		case "cfs":
			return value * 1.5472;
			break;
		case "cms":
			return value * 0.04381175;
			break;
		case "gpd":
			return value * 1000000;
			break;
	}
}

// Convert Flow

function convertFlow(value, units_from, units_to) {
	if (units_from === units_to) {
		return value;
	}
	switch (units_from) {
		case "gpm":
			return convertGPMTo(value, units_to);
			break; 
		case "mgd":
			return convertMGDTo(value, units_to);
			break;
		case "gpd":
			return convertGPDTo(value, units_to);
			break;
		case "cms":
			return convertCMSTo(value, units_to);
			break;
		case "cfs":
			return convertCFSTo(value, units_to);
			break;
	}
}


// Density Conversion

function convertDensity(value, units_from, units_to) {
	if (units_from === units_to) {
		return value;
	}
	switch (units_from) {
		case "metric":
			return ;
			break;
		case "imperial":
			return ;
			break;
	}
}

// Velocity Conversion

// Convert fps to other units

function convertFPSTo(value, units_to) {
	switch (units_to) {
		case "mps":
			return value * 0.3048;
			break;
	}
}

// Convert mps to other units

function convertMPSTo(value, units_to) {
	switch (units_to) {
		case "fps":
			return value * 3.2808; 
			break;
	}
}

// Convert Velocity

function convertVelocity(value, units_to, units_from) {
	if (units_from === units_to) {
		return value;
	}
	switch (units_from) {
		case "fps":
			return convertFPSTo(value, units_to);
			break;
		case "mps":
			return convertMPSTo(value, units_to);
			break;
	}
}




// Change 'Calculate' button color when form values have changed

function buttonRecalculate() {
	var button = document.getElementById('calc-button');
	button.setAttribute("style", "color: red;"); 
}

function buttonCalculated() {
	var button = document.getElementById('calc-button');
	button.setAttribute("style", "background-color: white;"); 
}


// VELOCITY CALCULATOR //

function calculateVelocity() {
	var diameter = document.velocity.diameter.value;
	var diameterUnits = document.velocity.diameterUnits.value;
	
	var pipeFlowrate = document.velocity.flowrate.value;
	var pipeFlowUnits = document.velocity.flowUnits.value;

	var pipeVelocityUnits = document.velocity.velocityUnits.value;

	diameter = convertLength(diameter, diameterUnits, "in");
	pipeFlowrate = convertFlow(pipeFlowrate, pipeFlowUnits, "cfs");

	var pipeVelocity = ((4 * pipeFlowrate) / (Math.PI * Math.pow((diameter / 12), 2)));

	pipeVelocity = convertVelocity(pipeVelocity, "fps", pipeVelocityUnits);

	pipeVelocity = pipeVelocity.toFixed(2).toString();

	if (isNaN(pipeVelocity)) {
		document.velocity.calculatedVelocity.value = "Invalid Data";
	} else {
		document.velocity.calculatedVelocity.value = pipeVelocity;
	}

	buttonCalculated();

}

function clearVelocity() {
	document.velocity.diameter.value = "";
	document.velocity.flowrate.value = "";
	document.velocity.calculatedVelocity.value = "";
}

// HEAD LOSS CALCULATOR - HAZEN WILLIAMS //

function calculateHazen() {
	var diameter = document.hazen.diameter.value;
	var diameterUnits = document.hazen.diameterUnits.value;
	
	var pipeFlowrate = document.hazen.flowrate.value;
	var pipeFlowUnits = document.hazen.flowUnits.value;

	var pipeLength = document.hazen.pipeLength.value;
	var pipeLengthUnits = document.hazen.pipeLengthUnits.value;

	var coefficient = document.hazen.coefficient.value;

	var headlossUnits = document.hazen.headlossUnits.value;

	diameter = convertLength(diameter, diameterUnits, "in");
	pipeFlowrate = convertFlow(pipeFlowrate, pipeFlowUnits, "gpm");
	pipeLength = convertLength(pipeLength, pipeLengthUnits, "ft");

	var headloss = 10.67 * pipeLength * Math.pow(pipeFlowrate, 1.852) / (Math.pow(coefficient, 1.852) * Math.pow(diameter, 4.8704));

	headloss = convertLength(headloss, "ft", headlossUnits);

	document.hazen.calculatedHeadloss.value = headloss.toFixed(2).toString();

	buttonCalculated();
}

function clearHazen() {
	document.hazen.diameter.value = 0;
	document.hazen.flowrate.value = 0;
	document.hazen.pipeLength.value = 0;
	document.hazen.coefficient.value = 0;
	document.hazen.calculatedHeadloss.value = 0;
}

// HEAD LOSS CALCULATOR - DARCY //

function calculateDarcy() {
	var diameter = document.darcy.diameter.value;
	var diameterUnits = document.darcy.diameterUnits.value;
	
	var pipeVelocity = document.darcy.velocity.value;
	var pipeVelocityUnits = document.darcy.velocityUnits.value;

	var pipeLength = document.darcy.pipeLength.value;
	var pipeLengthUnits = document.darcy.pipeLengthUnits.value;

	var factor = document.darcy.factor.value;

	var headlossUnits = document.darcy.headlossUnits.value;

	diameter = convertLength(diameter, diameterUnits, "ft");
	pipeVelocity = convertVelocity(pipeVelocity, pipeVelocityUnits, "fps");
	pipeLength = convertLength(pipeLength, pipeLengthUnits, "ft");

	var headloss = factor * pipeLength * Math.pow(pipeVelocity, 2) / (2 * diameter * 32.2);

	headloss = convertLength(headloss, "ft", headlossUnits);

	document.darcy.calculatedHeadloss.value = headloss.toFixed(2).toString();

	buttonCalculated();
}

function clearDarcy() {
	document.darcy.diameter.value = 0;
	document.darcy.velocity.value = 0;
	document.darcy.pipeLength.value = 0;
	document.darcy.factor.value = 0;
	document.darcy.calculatedHeadloss.value = 0;
}

// REYNOLDS NUMBER CALCULATOR //

function calculateReynolds() {
	var diameter = document.reynolds.diameter.value;
	var diameterUnits = document.reynolds.diameterUnits.value;
	
	var velocity = document.reynolds.velocity.value;
	var velocityUnits = document.reynolds.velocityUnits.value;

	var viscosity = document.reynolds.viscosity.value;

	var density = document.reynolds.density.value;

	diameter = convertLength(diameter, diameterUnits, "ft");
	velocity = convertVelocity(velocity, velocityUnits, "fps");

	var reynolds = diameter * velocity * density / viscosity;

	document.reynolds.calculatedReynolds.value = reynolds.toFixed(2).toString();

	buttonCalculated();
}

function clearReynolds() {
	document.reynolds.diameter.value = 0;
	document.reynolds.velocity.value = 0;
	document.reynolds.viscosity.value = 0;
	document.reynolds.density.value = 0;
	document.reynolds.calculatedReynolds.value = 0;
}

// DARCY FRICTION FACTOR CALCULATOR - TURBULENT //

function calculateFactorTurbulent() {
	var diameter = document.factorturbulent.diameter.value;
	var diameterUnits = document.factorturbulent.diameterUnits.value;

	var roughness = document.factorturbulent.roughness.value;
	
	var velocity = document.factorturbulent.velocity.value;
	var velocityUnits = document.factorturbulent.velocityUnits.value;

	var viscosity = document.factorturbulent.viscosity.value;

	var density = document.factorturbulent.density.value;

	diameter = convertLength(diameter, diameterUnits, "ft");
	velocity = convertVelocity(velocity, velocityUnits, "fps");

	var reynolds = diameter * velocity * density / viscosity;

	var highGuess = 1;
	var lowGuess = 0.0001;

	var functionLowGuess, functionHighGuess, midpoint, functionMidpoint;
	
	while ((highGuess - lowGuess) > 0.00005) {
		functionLowGuess = evaluateFactorEquation(roughness, diameter, reynolds, lowGuess);
		functionHighGuess = evaluateFactorEquation(roughness, diameter, reynolds, highGuess);

		midpoint = (lowGuess + highGuess) / 2;

		functionMidpoint = evaluateFactorEquation(roughness, diameter, reynolds, midpoint);

		if (functionMidpoint < 0) {
			lowGuess = midpoint;
		} else {
			highGuess = midpoint;
		}
	}
	
	document.factorturbulent.calculatedFactor.value = lowGuess.toFixed(4).toString();

	buttonCalculated();
}

function evaluateFactorEquation(roughness, diameter, reynolds, factor) {
	return (-2 * Math.log10((roughness / (3.7 * diameter)) + 2.51 / (reynolds * Math.sqrt(factor))) - 1 / Math.sqrt(factor));  
}

function clearFactorTurbulent() {
	document.factorturbulent.diameter.value = 0;
	document.factorturbulent.roughness.value = 0;
	document.factorturbulent.reynolds.value = 0;
	document.factorturbulent.calculatedFactor.value = 0;
}

// DARCY FRICTION FACTOR CALCULATOR - LAMINAR //

function calculateFactorLaminar() {
	var diameter = document.factorlaminar.diameter.value;
	var diameterUnits = document.factorlaminar.diameterUnits.value;
	
	var velocity = document.factorlaminar.velocity.value;
	var velocityUnits = document.factorlaminar.velocityUnits.value;

	var viscosity = document.factorlaminar.viscosity.value;
	var viscosityUnits = document.factorlaminar.viscosityUnits.value;

	var density = document.factorlaminar.density.value;
	var densityUnits = document.factorlaminar.densityUnits.value;

	diameter = convertLength(diameter, diameterUnits, "ft");
	velocity = convertVelocity(velocity, velocityUnits, "fps");

	var reynolds = diameter * velocity * density / viscosity;

	document.factorlaminar.calculatedFactor.value = (64 / reynolds).toFixed(2).toString();

	buttonCalculated();
}

function clearFactorLaminar() {
	document.factorlaminar.diameter.value = 0;	
	document.factorlaminar.velocity.value = 0;
	document.factorlaminar.density.value = 0;
	document.factorlaminar.viscosity.value = 0;
	document.factorlaminar.calculatedFactor.value = 0;
}

// MODAL EQUATIONS //

var modal = document.getElementById("calc-modal");

var modalButton = document.getElementById("modalButton");

var closingIcon = document.getElementsByClassName("close")[0];

function modalActivate() {
	modal.style.display = "block";
}

closingIcon.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
}



function insertFactor() {
	modal.style.display = "none";
	
	console.log(document.factorlaminar.calculatedFactor.value);
	
	document.darcy.factor.value = document.factorlaminar.calculatedFactor.value;

	console.log(document.darcy.factor.value);
}



function insertFactorLaminar() {
	console.log(document.darcy.factor.value);
	console.log(document.factorlaminar.calculatedFactor.value);

	document.darcy.factor.value = document.factorturbulent.calculatedFactor.value;
	modal.style.display = "none";
}

function insertFactorTurbulent() {
	document.darcy.factor.value = document.factorturbulent.calculatedFactor.value;
	modal.style.display = "none";
}