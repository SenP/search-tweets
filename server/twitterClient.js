const Twitter = require('twitter');
const apiAuthURL = 'https://api.twitter.com/oauth2/token';
const contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
const apiSearchURL = 'https://api.twitter.com/1.1/search/tweets.json';
const consumer_key = 'oH0Ol7jCdqIW4woWWKEVs557H';
const consumer_secret = 'b3jGiQfiLNeF5Lk8bv979vIBj2gKHvSvjwLobLuxWBMwgEQQri';
const bearer_token =
	'AAAAAAAAAAAAAAAAAAAAAFsK2gAAAAAAknDAsE8NzgRecMMb7ohp3O8Bris%3Da9c1ja7suShqEqdELoOrUntvHVVcYMZa3EdbfDmtI4PhqWZSfx';

module.exports = new Twitter({ consumer_key, consumer_secret, bearer_token });
