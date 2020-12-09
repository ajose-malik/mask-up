/////////////////////////////////////////////////////////////////////////////
// Event Handlers //////////////////////////////////////////////////////////

// Request United States
$('#us-total').click(() => {
	$('#left-fake').show();
	$('#left i').css('display', 'none');
	if (dataBox.length > 1) {
		$('#right-fake').hide();
		$('#right i').css('display', 'inline');
	}
	checkLocal('us/current', 'United States');
});

// Request State
$('#state-select').change(function () {
	$('#left-fake').hide();
	$('#left i').css('display', 'inline');
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
	$('#left-fake').hide();
	$('#left i').css('display', 'inline');
	const rand = Math.floor(Math.random() * 55 + 1);
	const randState = $('#state-select').children().eq(rand).val().toLowerCase();
	const place = $('#state-select').children().eq(rand).text();
	const url = `states/${randState}/current`;
	checkLocal(url, place);
});

// Toggle Intro
$('h1').click(() => {
	$('#mask-up p, #license-icon, #enter').toggle();
});

// Enter Interface
$('#enter').click(() => {
	$('#mask-up').hide();
	$('#interface').show();
});

// Back to Intro Slide
$('h2').click(() => {
	checkLocal('us/current', 'United States');
	$('#interface').hide();
	$('#mask-up').show();
	$('#intro, #mask-up p, #license-icon, #enter').hide();
});

// Navigation Left Arrows
$('#left').click(() => {
	const place = () => {
		return $('#place').text();
	};
	$('#right-fake').hide();
	$('#right i').css('display', 'inline');
	navLeft(place());
});

// Navigation Right Arrows
$('#right').click(() => {
	const place = () => {
		return $('#place').text();
	};
	$('#left-fake').hide();
	$('#left i').css('display', 'inline');
	navRight(place());
});
