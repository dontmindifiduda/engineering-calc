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
