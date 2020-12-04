// Random Inspirational Quotes
const quotes = [
	'The secret of change is to focus all of your energy, not on fighting the old, but on building the new — Socrates.',
	'Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together — Kiran Mazumdar-Shaw.',
	'Life doesn’t get easier or more forgiving, we get stronger and more resilient — Steve Maraboli.',
	'No matter how much falls on us, we keep plowing ahead. That’s the only way to keep the roads clear — Greg Kincaid.',
	'Women are working more, men are understanding their value as caregivers, women are primary breadwinners—I mean, we could go on and on and on. Things are different. So we can’t keep operating like everything is the same, and that’s what many of us have done. And I think it’s up to us to change the conversation — Michelle Obama.',
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
	`We have a chance to do something extraordinary. As we head out of this pandemic we can change the world. Create a world of love. A world where we are kind to each other. A world were we are kind no matter what class, race, sexual orientation, what religion or lack of or what job we have. A world we don't judge those at the food bank because that may be us if things were just slightly different. Let love and kindness be our roadmap — Johnny Corn.`,
	'These so-called bleak times are necessary to go through in order to get to a much, much better place — David Lynch.',
	'COVID-19, are you going to be naughty or nice to me? — Steven Magee.',
	'A person in public without a mask during a pandemic is a walking septic tank — Abhijit Naskar.',
	'We grieve for our old lives, when we could see friends face to face without worrying one of us might bring death to the other — Nicole Williams.',
	`When we wear a mask you'll be saving a life. That life could be your own, or someone who means a lot to you — Ron Baratono.`,
	`And our hearts cry, "How long? How far? How much more?" — Nicole Williams.`,
	'Without doubt, maintaining a distance from some people is the only way to maintaining your equanimity – and, of course, to avoid catching COVID-19! — AVIS Viswanathan.'
];

const randQuotes = () => {
	const rand = Math.floor(Math.random() * quotes.length);
	console.log(quotes[rand]);
};
