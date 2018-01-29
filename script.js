// Length Conversion

// Convert meters to other units

function convertMetersTo(value, units_to) {
	switch (units_to) {
		case "ft":
			return value * 3.2808;
		case "in":
			return value * 39.370;
		case "cm":
			return value * 100;
		case "mm":
			return value * 1000;
		case "mi":
			return value * 0.000621371;
	}
}

// Convert feet to other units

function convertFeetTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.3048;
		case "in":
			return value * 12;
		case "mi":
			return value * 0.000189394;
		case "cm":
			return value * 30.48;
		case "mm":
			return value * 304.8;
	}
}

// Convert inches to other units

function convertInchesTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.0254;
		case "ft":
			return value * 0.08333;
		case "mi":
			return value / (12 * 5280);
		case "cm":
			return value * 2.54;
		case "mm":
			return value * 25.4;
	}
}

// Convert centimeters to other units

function convertCentimetersTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.01;
		case "ft":
			return value * 0.032808;
		case "mi":
			return value * 0.032808 / 5280;
		case "in":
			return value * 0.3937;
		case "mm":
			return value * 10;
	}
}

// Convert millimeters to other units

function convertMillimetersTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 0.001;
		case "ft":
			return value * 0.0032808;
		case "mi":
			return value * 0.0032808 / 5280;
		case "in":
			return value * 0.03937;
		case "cm":
			return value * 0.1;
	}
}

// Convert miles to other units

function convertMilesTo(value, units_to) {
	switch (units_to) {
		case "m":
			return value * 1609.34;
		case "ft":
			return value * 5280;
		case "mm":
			return value * 1609.34 * 1000;
		case "in":
			return value * 63360;
		case "cm":
			return value * 1609.34 * 100;
	}
}

// Convert length 

function convertLength(value, units_from, units_to) {
	switch (units_from) {
		case units_from:
			return value;
		case "m":
			return convertMetersTo(value, units_to);
		case "ft":
			return convertFeetTo(value, units_to);
		case "in":
			return convertInchesTo(value, units_to);
		case "mm":
			return convertMillimetersTo(value, units_to);
		case "cm":
			return convertCentimetersTo(value, units_to);
	}
}

// Volume Conversion

// Convert m3 to other units

function convertCubicMetersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 35.3147;
		case "gal":
			return value * 264.172;
		case "L":
			return value * 1000;
		case "mL":
			return value * 1000000;
	}
}

// Convert ft3 to other units

function convertCubicFeetTo(value, units_to) {
	switch (units_to) {
		case "gal":
			return value * 7.48052;
		case "m3":
			return value * 0.0283168;
		case "L":
			return value * 28.3168;
		case "mL":
			return value * 28316.8;
	}
}

// Convert gal to other units

function convertGallonsTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.133681;
		case "m3":
			return value * 0.00378541;
		case "L":
			return value * 3.78541;
		case "mL":
			return value * 3785.41;
	}
}

// Convert L to other units

function convertLitersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.0353147;
		case "m3":
			return value * 0.001;
		case "gal":
			return value * 0.264172;
		case "mL":
			return value * 1000;
	}
}

// Convert mL to other units

function convertMillilitersTo(value, units_to) {
	switch (units_to) {
		case "ft3":
			return value * 0.0000353147;
		case "m3":
			return value * 0.000001;
		case "gal":
			return value * 0.000264172;
		case "L":
			return value * 0.001;
	}
}

// Convert Volume

function convertVolume(value, units_from, units_to) {
	switch (units_from) {
		case units_from:
			return value;
		case "ft3":
			return convertCubicFeetTo(value, units_to);
		case "m3":
			return convertCubicMetersTo(value, units_to);
		case "gal":
			return convertGallonsTo(value, units_to);
		case "L":
			return convertLitersTo(value, units_to);
		case "mL":
			return convertMillilitersTo(value, units_to);
	}
}

// Flow Conversion

// Convert GPM to other units

function convertGPMTo(value, units_to) {
	switch (units_to) {
		case "cfs":
			return value * 0.002228;
		case "cms":
			return value * 0.000063;
		case "gpd":
			return value * 1440;
		case "mgd":
			return value * (60 * 24) / 1000000;
	}
}

// Convert CFS to other units

function convertCFSTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 448.83;
		case "cms":
			return value * 0.0283168;
		case "gpd":
			return value * 646190.439;
		case "mgd":
			return value * 0.6463168;
	}
}

// Convert CMS to other units

function convertCMSTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 15850.32;
		case "cfs":
			return value * 35.3147;
		case "gpd":
			return value * 22820000;
		case "mgd":
			return value * 22.82;
	}
}

// Convert GPD to other units

function convertGPDTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value / 1440;
		case "cfs":
			return value * 0.00000154723;
		case "cms":
			return value * 0.000063 / 1440;
		case "mgd":
			return value * 0.000001;
	}
}

// Convert MGD to other units

function convertMGDTo(value, units_to) {
	switch (units_to) {
		case "gpm":
			return value * 1440 / 1000000;
		case "cfs":
			return value * 1.5472;
		case "cms":
			return value * 0.04381175;
		case "gpd":
			return value * 1000000;
	}
}

// Convert Flow

function convertFlow(value, units_from, units_to) {
	switch (units_from) {
		case units_from:
			return value;
		case "gpm":
			return convertGPMTo(value, units_to);
		case "mgd":
			return convertMGDTo(value, units_to);
		case "gpd":
			return convertGPDTo(value, units_to);
		case "cms":
			return convertCMSTo(value, units_to);
		case "cfs":
			return convertCFSTo(value, units_to);
	}
}


// Density Conversion

function convertDensity(value, units_from, units_to) {
	switch (units_from) {
		case units_from:
			return value;
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
	}
}

// Convert mps to other units

function convertMPSTo(value, units_to) {
	switch (units_to) {
		case "fps":
			return value * 3.2808; 
	}
}

// Convert Velocity

function convertVelocity(value, units_from, units_to) {
	switch (units_from) {
		case units_to:
			return value;
		case "fps":
			return convertFPSTo(value, units_to);
		case "mps":
			return convertMPSTo(value, units_to);
	}
}


// Change 'Calculate' button color when form values have changed

function buttonRecalculate(btn) {
	var button = document.getElementById(btn);
	button.setAttribute("style", "color: red;"); 
}

function buttonCalculated(btn) {
	var button = document.getElementById(btn);
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

	if (Number.isNaN(pipeVelocity)) {
		document.velocity.calculatedVelocity.value = "Invalid Data";
	} else {
		document.velocity.calculatedVelocity.value = pipeVelocity.toFixed(2).toString();
	}

	buttonCalculated("velocity-button");

}

function clearVelocity() {
	document.velocity.diameter.value = "";
	document.velocity.flowrate.value = "";
	document.velocity.calculatedVelocity.value = "";
	buttonCalculated("velocity-button");
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

	if (Number.isNaN(headloss)) {
		document.hazen.calculatedHeadloss.value = "Invalid Data";
	} else {
		document.hazen.calculatedHeadloss.value = headloss.toFixed(2).toString();
	}

	buttonCalculated("hazen-button");
}

function clearHazen() {
	document.hazen.diameter.value = "";
	document.hazen.flowrate.value = "";
	document.hazen.pipeLength.value = "";
	document.hazen.coefficient.value = "";
	document.hazen.calculatedHeadloss.value = "";
	buttonCalculated("hazen-button")
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

	if (Number.isNaN(headloss)) {
		document.darcy.calculatedHeadloss.value = "Invalid Data";
	} else {
		document.darcy.calculatedHeadloss.value = headloss.toFixed(2).toString();
	}

	buttonCalculated("darcy-button");
}

function clearDarcy() {
	document.darcy.diameter.value = "";
	document.darcy.velocity.value = "";
	document.darcy.pipeLength.value = "";
	document.darcy.factor.value = "";
	document.darcy.calculatedHeadloss.value = "";
	buttonCalculated("darcy-button");
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

	if (Number.isNaN(reynolds)) {
		document.reynolds.calculatedReynolds.value = "Invalid Data";
	} else {
		document.reynolds.calculatedReynolds.value = reynolds.toFixed(2).toString();
	}

	buttonCalculated("reynolds-button");
}

function clearReynolds() {
	document.reynolds.diameter.value = "";
	document.reynolds.velocity.value = "";
	document.reynolds.viscosity.value = "";
	document.reynolds.density.value = "";
	document.reynolds.calculatedReynolds.value = "";
	buttonCalculated("reynolds-button");
}

// DARCY FRICTION FACTOR CALCULATOR - TURBULENT //

function calculateFactorTurbulent() {
	var diameter = document.factorturbulent.diameter.value;
	var diameterUnits = document.factorturbulent.diameterUnits.value;

	var roughness = document.factorturbulent.roughness.value;
	var roughnessUnits = document.factorturbulent.roughnessUnits.value;
	
	var velocity = document.factorturbulent.velocity.value;
	var velocityUnits = document.factorturbulent.velocityUnits.value;

	var viscosity = document.factorturbulent.viscosity.value;

	var density = document.factorturbulent.density.value;

	diameter = convertLength(diameter, diameterUnits, "ft");
	velocity = convertVelocity(velocity, velocityUnits, "fps");
	roughness = convertLength(roughness, roughnessUnits, "ft");

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

	if (Number.isNaN(lowGuess)) {
		document.factorturbulent.calculatedFactor.value = "Invalid Data";
	} else {
		document.factorturbulent.calculatedFactor.value = lowGuess.toFixed(4).toString();
	}

	buttonCalculated("factor-turbulent-button");
}

function evaluateFactorEquation(roughness, diameter, reynolds, factor) {
	return (-2 * Math.log10((roughness / (3.7 * diameter)) + 2.51 / (reynolds * Math.sqrt(factor))) - 1 / Math.sqrt(factor));  
}

function clearFactorTurbulent() {
	document.factorturbulent.diameter.value = "";
	document.factorturbulent.roughness.value = "";
	document.factorturbulent.velocity.value = "";
	document.factorturbulent.density.value = "";
	document.factorturbulent.viscosity.value = "";
	document.factorturbulent.calculatedFactor.value = "";
	buttonCalculated("factor-turbulent-button");
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

	if (isNaN(reynolds)) {
		document.factorlaminar.calculatedFactor.value = "Invalid Data";
	} else {
		document.factorlaminar.calculatedFactor.value = (64 / reynolds).toFixed(2).toString();
	}

	buttonCalculated("factor-laminar-button");
}

function clearFactorLaminar() {
	document.factorlaminar.diameter.value = "";	
	document.factorlaminar.velocity.value = "";
	document.factorlaminar.density.value = "";
	document.factorlaminar.viscosity.value = "";
	document.factorlaminar.calculatedFactor.value = "";
	buttonCalculated("factor-laminar-button");
}

// MODAL EQUATIONS //

function modalActivate(mod) {
	var modal = document.getElementById(mod);
	modal.style.display = "block";
}

function closeModal(mod) {
	var modal = document.getElementById(mod);
	modal.style.display = "none";
}

// INSERT FACTORS // 

function insertFactor() {
	modal.style.display = "none";
	document.darcy.factor.value = document.factorlaminar.calculatedFactor.value;
}

function insertFactorLaminar() {
	document.darcy.factor.value = document.factorturbulent.calculatedFactor.value;
	modal.style.display = "none";
}

function insertFactorTurbulent() {
	document.darcy.factor.value = document.factorturbulent.calculatedFactor.value;
	modal.style.display = "none";
}