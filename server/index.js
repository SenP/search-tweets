const app = require('express')();
var twitterClient = require('./twitterClient');

// fetches top 15 tweets matching the search text
const fetchTweets = ({ key }) => {
	return twitterClient
		.get('search/tweets', { q: key })
		.then(newtweets => getTweetsInfo(newtweets))
		.catch(error => error);
};

// filter required fields from each tweet
const getTweetsInfo = rawTweets => {
	return rawTweets.statuses.map(tweet => ({
		id: tweet.id_str,
		text: tweet.text,
		user_handle: tweet.user.screen_name,
		user_name: tweet.user.name,
		user_desc: tweet.user.description,
		user_image_url: tweet.user.profile_image_url_https,
		retweet_count: tweet.retweet_count,
		created_at: tweet.created_at
	}));
};

// routes
app.get('/api/tweets/:key', (req, res) => {
	fetchTweets(req.params)
		.then(tweets => res.send(tweets))
		.catch(error => res.send(error));
});

app.use((req, res) => {
	// catch all route
	res.send([]);
});

app.listen(4000, () => console.log('Server started at port: 4000 ...'));
