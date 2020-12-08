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

// Local Storage //////////////////////////////////////////////////////////////////

// Check Local Storage //////////

// const checkLocal = place => {
// 	const check = JSON.parse(localStorage.getItem(place));
// 	console.log(check.favFood);
// };

// checkLocal('user');

// Fetch from Local Storage ////////
// const fetchLocal = () => {};

// Save to Local Storage ///////////
const saveLocal = (
	place,
	totalCases,
	newCases,
	totalHosp,
	currHosp,
	totalDeaths,
	newDeaths
) => {
	const localData = {
		totalCases: totalCases,
		newCases: newCases,
		totalHosp: totalHosp,
		currHosp: currHosp,
		totalDeaths: totalDeaths,
		newDeaths: newDeaths
	};
	localStorage.setItem(place, JSON.stringify(localData));
};

// Data View Template ////////////////////////////////////////////////////////
const viewTemplate = (data, place = 'United States') => {
	// Cases Data
	const totalCases = convertStr(String(data.positive));
	const newCases = convertStr(String(data.positiveIncrease));

	$('#total-case, #info-cases').text(totalCases);
	$('#info-new-cases').text(newCases);

	// Hospitalization Data
	const totalHosp = convertStr(String(data.hospitalizedCumulative));
	const currHosp = convertStr(String(data.hospitalizedCurrently));

	$('#info-total-hosp').text(totalHosp);
	$('#info-curr-hosp').text(currHosp);

	// Outcomes Data
	const totalDeaths = convertStr(String(data.death));
	const newDeaths = convertStr(String(data.deathIncrease));

	$('#total-death, #info-deaths').text(totalDeaths);
	$('#info-new-deaths').text(newDeaths);

	saveLocal(
		place,
		totalCases,
		newCases,
		totalHosp,
		currHosp,
		totalDeaths,
		newDeaths
	);
};
