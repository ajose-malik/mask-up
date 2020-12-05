/////////////////////////////////////////////////////////////////////////
// Random Quotes ///////////////////////////////////////////////////////
const randQuotes = () => {
	const rand = () => Math.floor(Math.random() * quotes.length);
	$('#quote').append(quotes[rand()]);
	setInterval(() => {
		$('#quote').empty();
		$('#quote').append(quotes[rand()]);
	}, 10000);
};
// randQuotes();

///////////////////////////////////////////////////////////////////////////////
// Data Request for United States ////////////////////////////////////////////
$.ajax({
	url: 'https://api.covidtracking.com/v1/us/current.json'
}).then(
	data => {
		data = data[0];
		const totalCase = String(data.positive);
		const totalDeath = String(data.death);

		// Insert Comma Function
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

		$('#total-case').append(convertStr(totalCase));
		$('#total-death').append(convertStr(totalDeath));

		// Data Request for Each State ///////////////////
		// $.ajax({
		// 	url: 'https://api.covidtracking.com/v1/us/current.json'
		// }).then(
		// 	data => {
		// 		console.log(data);
		// 	},
		// 	() => {
		// 		console.log('Error Each States');
		// 	}
		// );
	},
	() => {
		console.log('Error United States');
	}
);

/////////////////////////////////////////////////////////////////////////////
// DOM Functions //////////////////////////////////////////////////////////

// Toggle Intro Slide
$('#mask-up h1 #title').click(() => {
	$(
		'#mask-up #quote, #mask-up p, #mask-up #license-icon, #mask-up h1 #enter'
	).toggle();
});
