const Twitter = require('twitter');
const apiAuthURL = 'https://api.twitter.com/oauth2/token';
const contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
const apiSearchURL = 'https://api.twitter.com/1.1/search/tweets.json';
const consumer_key = '';
const consumer_secret = '';
const bearer_token ='';

module.exports = new Twitter({ consumer_key, consumer_secret, bearer_token });
