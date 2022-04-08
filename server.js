const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});

app.get('/api/quotes/random', (req, res, next) => {
	let quoteRandom = getRandomElement(quotes);
	res.send({
		quote: quoteRandom,
	});
});

app.get('/api/quotes', (req, res, next) => {
	res.send({ quotes: quotes });
});


// filter by person - can't seem to access the query
app.get('/api/quotes', (req, res, next) => {
	let author = req.query.person;
	if (author) {
		let authorQuotes = person.filter((p) => quote.person === author);
		res.send(authorQuotes);
	} else {
		res.send({ quotes: quotes });
	}
});

app.post('/api/quotes', (req, res, next) => {
	const newQuote = { quote: req.query.quote, person: req.query.person };
	if (newQuote.quote && newQuote.person) {
		quotes.push(newQuote);
		res.status(201).send({ quote: newQuote });
	} else {
		res.status(400).send();
	}
});
