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
				// Call View Template
				viewTemplate(usData, place);

				// Title
				$('#place').text('United States');
			} else {
				// Call View Template
				viewTemplate(stateData, place);

				// Title
				$('#place').text(place);
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
$('h2').click(() => {
	request('us/current');
	$('#interface').hide();
	$('#mask-up').show();
	$('#intro, #mask-up p, #license-icon, #enter').hide();
});

////////////////////////////////////////////////////////////////////////////////
// Initialization //////////////////////////////////////////////////////////////

// Random Quotes
// randQuotes();

// Default Request
// request('us/current');
