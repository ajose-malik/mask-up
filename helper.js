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
	strArr = str.split('');
	if (strArr.length > 3 && strArr.length < 7) {
		strArr.splice(-3, 0, ',');
		return strArr.join('');
	} else if (strArr.length > 6 && strArr.length < 10) {
		strArr.splice(-3, 0, ',');
		strArr.splice(-7, 0, ',');
		return strArr.join('');
	}
};

// Display Detail /////////////////////////////////////////////////////////////////
const showDetail = () => {
	$(
		'#options, #options-left, #options-right, #state-select, #us-total, #random'
	).hide();
	$('#details-left, #details-right').css('color', '#af2d2d');
	$('#search, #details-left, #details-right').show().css('display', 'inline');
	$('#details').css('display', 'flex');
};
