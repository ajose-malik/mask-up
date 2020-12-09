/////////////////////////////////////////////////////////////////////////////
// Event Handlers //////////////////////////////////////////////////////////

// Request United States
$('#us-total').click(() => {
	// if (dataBox.length > 1) {
	// 	navToggle2('right');
	// }

	$('#left-fake').show();
	$('#left i').css('display', 'none');
	checkLocal('us/current', 'United States');
});

// Request State
$('#state-select').change(function () {
	navToggle();
	const stateAbbr = $(this).val().toLowerCase();
	const url = `states/${stateAbbr}/current`;
	const place = $(this).find('option:selected').text();
	checkLocal(url, place);
	setTimeout(() => {
		$(this).val('');
	}, 1000);
});

// Request Random
$('#random').click(() => {
	navToggle();
	const rand = Math.floor(Math.random() * 55 + 1);
	const randState = $('#state-select').children().eq(rand).val().toLowerCase();
	const place = $('#state-select').children().eq(rand).text();
	const url = `states/${randState}/current`;
	checkLocal(url, place);
});

// Toggle Intro
$('h1').click(() => {
	$('#mask-up p, #license-icon, #enter, h1, h2').toggle();
});

// Enter Interface
$('#enter').click(() => {
	$('#mask-up').hide();
	$('#interface').css('display', 'flex');
});

// Back to Intro Slide
$('h3').click(() => {
	checkLocal('us/current', 'United States');
	$('#intro, #mask-up p, #license-icon, #enter, h2, #interface').hide();
	$('#mask-up, h1').toggle();
});

// Navigation Left Arrows
$('#left').click(() => {
	const place = () => {
		return $('#place').text();
	};
	navToggle2('right');
	navLeft(place());
});

// Navigation Right Arrows
$('#right').click(() => {
	const place = () => {
		return $('#place').text();
	};
	navToggle2('left');
	navRight(place());
});
