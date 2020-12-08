// Location Function ////////////////////////////////////////
// Random Quotes Function ///////////////////////////////////////////////////////
const randQuotes = () => {
	const rand = () => Math.floor(Math.random() * quotes.length);
	$('#quote').text(quotes[rand()]);
	setInterval(() => {
		$('#quote').text(quotes[rand()]);
	}, 10000);
};

// Insert Comma Function /////////////////////////////////////////////////////
const convertStr = str => {
	if (str === 'null') {
		return 'Not Reported';
	} else if (str.length < 4) {
		return str;
	} else {
		strArr = str.split('');
		if (strArr.length > 3 && strArr.length < 7) {
			strArr.splice(-3, 0, ',');
			return strArr.join('');
		} else if (strArr.length > 6 && strArr.length < 10) {
			strArr.splice(-3, 0, ',');
			strArr.splice(-7, 0, ',');
			return strArr.join('');
		}
	}
};

// Data View Template ////////////////////////////////////////////////////////
const viewTemplate = data => {
	// Cases Data
	const totalCase = String(data.positive);
	const newCases = String(data.positiveIncrease);

	$('#total-case, #info-cases').text(convertStr(totalCase));
	$('#info-new-cases').text(convertStr(newCases));

	// Hospitalization Data
	const totalHosp = String(data.hospitalizedCumulative);
	const currHosp = String(data.hospitalizedCurrently);

	$('#info-total-hosp').text(convertStr(totalHosp));
	$('#info-curr-hosp').text(convertStr(currHosp));

	// Outcomes Data
	const totalDeath = String(data.death);
	const newDeaths = String(data.deathIncrease);

	$('#total-death, #info-deaths').text(convertStr(totalDeath));
	$('#info-new-deaths').text(convertStr(newDeaths));
};

// Display Detail /////////////////////////////////////////////////////////////////
