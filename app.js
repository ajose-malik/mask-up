const dataBox = [];

// Carousel //////////////////////////////////////////////////////////////////////////
const carousel = index => {
	// Cases Data
	$('#total-case, #info-cases').text(dataBox[index].totalCases);
	$('#info-new-cases').text(dataBox[index].newCases);

	// Hospitalization Data
	$('#info-total-hosp').text(dataBox[index].totalHosp);
	$('#info-curr-hosp').text(dataBox[index].currHosp);

	// Outcomes Data
	$('#total-death, #info-deaths').text(dataBox[index].totalDeaths);
	$('#info-new-deaths').text(dataBox[index].newDeaths);

	// Title
	$('#place').text(dataBox[index].place);
};

// Data Box Navigation ///////////////////////////////////////////////////////////////////////////
const navLeft = location => {
	const idxPlace = dataBox.findIndex(idx => idx.place === location);

	if (idxPlace === 1) {
		$('#left-fake').show();
		$('#left i').css('display', 'none');
		carousel(idxPlace - 1);
	} else {
		$('#right-fake').hide();
		$('#right i').css('display', 'inline');
		carousel(idxPlace - 1);
	}
};

const navRight = location => {
	const idxPlace = dataBox.findIndex(idx => idx.place === location);

	if (idxPlace === dataBox.length - 2) {
		$('#right-fake').show();
		$('#right i').css('display', 'none');
		carousel(idxPlace + 1);
	} else {
		carousel(idxPlace + 1);
	}
};

const navToggle = location => {
	if (location !== 'United States') {
		$('#left-fake').hide();
		$('#left i').css('display', 'inline');
	}

	const idxPlace = dataBox.findIndex(idx => idx.place === location);

	if (idxPlace === dataBox.length - 1) {
		$('#right-fake').show();
		$('#right i').hide();
	} else {
		$('#right-fake').hide();
		$('#right i').show();
	}
};

const navToggle2 = side => {
	$(`#${side}-fake`).hide();
	$(`#${side} i`).css('display', 'inline');
};

// Save to Local Storage ///////////////////////////////////////////////////////////////
const saveData = (place, { ...search }) => {
	const localData = {
		...search
	};
	localStorage.setItem(place, JSON.stringify(localData));

	dataBox.push({ place, ...search });
	if (dataBox.length > 1) {
		navToggle(place);
	}
};

// Insert Comma Function ///////////////////////////////////////////////////////////////
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
	saveData(place, { ...search });
};

// Data Request Function /////////////////////////////////////////////////////////////////
const request = (url, place) => {
	$.ajax({
		url: `https://api.covidtracking.com/v1/${url}.json`
	}).then(
		data => {
			const usData = data[0];
			const stateData = data;
			if (url === 'us/current') {
				// Call View Template
				viewTemplate(usData, place);

				// Title
				$('#place').text(place);
			} else {
				// Call View Template
				viewTemplate(stateData, place);

				// Title
				$('#place').text(place);
			}
		},
		() => {
			console.log('BOOHOO!');
		}
	);
};

// Check Local Storage ////////////////////////////////////////////////////////////////////
const checkLocal = (url, place) => {
	if (place in localStorage) {
		const location = JSON.parse(localStorage.getItem(place));

		// Cases Data
		$('#total-case, #info-cases').text(location.totalCases);
		$('#info-new-cases').text(location.newCases);

		// Hospitalization Data
		$('#info-total-hosp').text(location.totalHosp);
		$('#info-curr-hosp').text(location.currHosp);

		// Outcomes Data
		$('#total-death, #info-deaths').text(location.totalDeaths);
		$('#info-new-deaths').text(location.newDeaths);

		$('#place').text(place);
		navToggle(place);
	} else {
		request(url, place);
	}
};

// Initialization
const init = () => {
	localStorage.clear();
	request('us/current', 'United States');
};

////////////////////////////////////////////////////////////////////////////////
// Initiate Project //////////////////////////////////////////////////////////////

randQuotes();

init();
