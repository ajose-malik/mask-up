///////////////////////////////////////////////////////////////////////////////
// Data Request Function ////////////////////////////////////////////

const request = (location, place) => {
	$.ajax({
		url: `https://api.covidtracking.com/v1/${location}.json`
	}).then(
		data => {
			const usData = data[0];
			const stateData = data;
			if (location === 'us/current') {
				// Cases Data
				const totalCase = String(usData.positive);
				const newCases = String(usData.positiveIncrease);

				$('#total-case, #info-cases').text(convertStr(totalCase));
				$('#info-new-cases').text(convertStr(newCases));

				// Hospitalization Data
				const totalHosp = String(usData.hospitalizedCumulative);
				const currHosp = String(usData.hospitalizedCurrently);
				// const totalICU = String(usData.inIcuCumulative);
				// const currICU = String(usData.inIcuCurrently);

				$('#info-total-hosp').text(convertStr(totalHosp));
				$('#info-curr-hosp').text(convertStr(currHosp));
				// $('#info-total-icu').text(convertStr(totalICU));
				// $('#info-curr-icu').text(convertStr(currICU));

				// Outcomes Data
				const totalDeath = String(usData.death);
				const newDeaths = String(usData.deathIncrease);

				$('#total-death, #info-deaths').text(convertStr(totalDeath));
				$('#info-new-deaths').text(convertStr(newDeaths));

				// Title
				$('#place').text('United States');
			} else {
				// const totalCase = String(data.positive);
				// const totalDeath = String(data.death);
				// $('#total-case').append(convertStr(totalCase));
				// $('#total-death').append(convertStr(totalDeath));
				$('#place').text(place);
				console.log(stateData);
			}
		},
		() => {
			console.log('DISASTER');
		}
	);
};

/////////////////////////////////////////////////////////////////////////////
// Event Handlers //////////////////////////////////////////////////////////

// Request United States
$('#us-total').click(() => {
	request('us/current');
});

// Request State
$('#state-select').change(function () {
	const stateAbbr = $(this).val().toLowerCase();
	const state = `states/${stateAbbr}/current`;
	const place = $(this).find('option:selected').text();
	request(state, place);
	setTimeout(() => {
		$(this).val('');
	}, 1000);
});

// Request Random
$('#random').click(() => {
	const rand = Math.floor(Math.random() * 55 + 1);
	const randState = $('#state-select').children().eq(rand).val().toLowerCase();
	const place = $('#state-select').children().eq(rand).text();
	const state = `states/${randState}/current`;
	request(state, place);
});

// Toggle Intro Slide
$('h1').click(() => {
	$('#mask-up p, #license-icon, #enter').toggle();
});

// Toggle Interface Slide
$('#enter').click(() => {
	$('#mask-up').hide();
	$('#interface').show();
});

// Back to Intro Slide
$('h4').click(() => {
	$('#interface').hide();
	$('#mask-up').show();
	$('#intro, #mask-up p, #license-icon, #enter').hide();
});

////////////////////////////////////////////////////////////////////////////////
// Initialization //////////////////////////////////////////////////////////////

// Random Quotes
// randQuotes();

// Default Request
request('us/current');
