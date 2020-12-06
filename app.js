///////////////////////////////////////////////////////////////////////////////
// Data Request Function ////////////////////////////////////////////

const request = (location, place) => {
	$.ajax({
		url: `https://api.covidtracking.com/v1/${location}.json`
	}).then(
		data => {
			data = data[0];
			if (location === '/us/current') {
				const totalCase = String(data.positive);
				const totalDeath = String(data.death);

				$('#total-case').append(convertStr(totalCase));
				$('#total-death').append(convertStr(totalDeath));
				$('#place').append('US Total');
			} else {
				// const totalCase = String(data.positive);
				// const totalDeath = String(data.death);
				// $('#total-case').append(convertStr(totalCase));
				// $('#total-death').append(convertStr(totalDeath));
				$('#place').text(place);
			}
		},
		() => {
			console.log('DISASTER');
		}
	);
};

////////////////////////////////////////////////////////////////////////////////
// Function Calls //////////////////////////////////////////////////////////////

// Random Quotes
// randQuotes();

// Default Request
request('/us/current');

/////////////////////////////////////////////////////////////////////////////
// Event Handlers //////////////////////////////////////////////////////////

// Request for United States
$('#us-total').click(function () {
	$('#place').empty();
	request('/us/current');
});

// Request by State
$('#state-select').change(function () {
	const stateAbbr = $(this).val().toLowerCase();
	const state = `/states/${stateAbbr}/current`;
	const place = $(this).find('option:selected').text();
	console.log(place);
	console.log(state);
	request(state, place);
	setTimeout(() => {
		$(this).val('');
	}, 1000);
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
});
