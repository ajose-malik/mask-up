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

const checkLocal = (place = 'United States') => {
	if (place in localStorage) {
		// Cases Data
		$('#total-case, #info-cases').text(JSON.parse(localStorage.getItem(place)));
		$('#info-new-cases').text(place.newCases);
		console.log(JSON.parse(localStorage.getItem(place).key(0)));
		// Hospitalization Data

		$('#info-total-hosp').text(place.totalHosp);
		$('#info-curr-hosp').text(place.currHosp);

		// Outcomes Data

		$('#total-death, #info-deaths').text(place.totalDeaths);
		$('#info-new-deaths').text(place.newDeaths);
	} else {
		console.log('boohoo!');
	}
	// const check = JSON.parse(localStorage.getItem(place));
};

// checkLocal();

// Save to Local Storage ///////////
const saveLocal = (place, { ...search }) => {
	const localData = {
		...search
	};
	localStorage.setItem(place, JSON.stringify(localData));
};

// Populate Data & Save to Local ////////////////////////////////////////////////////////
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

	const search = {
		totalCases,
		newCases,
		totalHosp,
		currHosp,
		totalDeaths,
		newDeaths
	};
	saveLocal(place, { ...search });
};
