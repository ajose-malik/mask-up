// Random Inspirational Quotes
const quotes = [
	'The secret of change is to focus all of your energy, not on fighting the old, but on building the new — Socrates.',
	'Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together — Kiran Mazumdar-Shaw.',
	'Life doesn’t get easier or more forgiving, we get stronger and more resilient — Steve Maraboli.',
	'No matter how much falls on us, we keep plowing ahead. That’s the only way to keep the roads clear — Greg Kincaid.',
	'In the face of adversity, we have a choice. We can be bitter, or we can be better. Those words are my North Star — Caryn Sullivan.',
	`I've got some bad news and I've got some good news. Nothing lasts forever — Kate McGahan.`,
	'Losing your head in a crisis is a good way to become a crisis — C.J. Redwine.',
	'Hang in there, as better times are ahead — Steven Magee.',
	'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less — Marie Curie.',
	`Often when you think you're at the end of something, you're at the beginning of something else — Fred Rogers.`,
	'What you don’t do determines what you can do — Tim Feriss.',
	'The secret of crisis management is not good vs. bad, it’s preventing the bad from getting worse — Andy Gilman.',
	'Challenge and adversity are meant to help you know who you are. Storms hit your weakness, but unlock your true strength — Roy T. Bennett.',
	'We are, or will be, going through the most radical transformation the world has ever seen; people are justly terrified, excited, depressed, heartbroken and hopeful, all at once — Heather Marsh.',
	'In every crisis, doubt or confusion, take the higher path - the path of compassion, courage, understanding and love — Amit Ray.',
	'Center of your heart is the center of the Universe. Go to that center and radiate positive vibration for the well-being of the humanity — Amit Ray.',
	'These so-called bleak times are necessary to go through in order to get to a much, much better place — David Lynch.',
	'COVID-19, are you going to be naughty or nice to me? — Steven Magee.',
	'A person in public without a mask during a pandemic is a walking septic tank — Abhijit Naskar.',
	'We grieve for our old lives, when we could see friends face to face without worrying one of us might bring death to the other — Nicole Williams.',
	`When we wear a mask you'll be saving a life. That life could be your own, or someone who means a lot to you — Ron Baratono.`,
	`And our hearts cry, "How long? How far? How much more?" — Nicole Williams.`,
	'Without doubt, maintaining a distance from some people is the only way to maintaining your equanimity – and, of course, to avoid catching COVID-19! — AVIS Viswanathan.'
];

// Random Quotes Function //////////////////////////////////////////////////////////////////
const randQuotes = () => {
	const rand = () => Math.floor(Math.random() * quotes.length);
	$('#quote').text(quotes[rand()]);
	setInterval(() => {
		$('#quote').text(quotes[rand()]);
	}, 10000);
};
