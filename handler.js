/////////////////////////////////////////////////////////////////////////////
// Event Handlers //////////////////////////////////////////////////////////

// Request United States
$('#us-total').click(() => {
	const url = 'us/current';
	checkLocal(url);
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
	const url = `states/${randState}/current`;
	checkLocal(url, place);
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
