import React from 'react';
import { Panel, Media, Glyphicon } from 'react-bootstrap';

const Tweet = ({ tweet }) => {
	const elapsedMins = Math.round((Date.now() - new Date(tweet.created_at).getTime()) / (1000 * 60));
	return (
		<Media>
			<Media.Left align="top">
				<img width={64} height={64} src={tweet.user_image_url} alt="User Pic" />
			</Media.Left>
			<Media.Body>
				<Panel>
					<Media.Heading>
						<span className="user_handle">{tweet.user_handle} </span>
						<span className="user_name2"> {tweet.user_name} </span>
					</Media.Heading>
					<div>{tweet.text}</div>
					<div className="tweet-footer">
						<span className="retweet-count">{tweet.retweet_count} retweets </span>
						<span className="time-elapsed"> {elapsedMins} minutes ago</span>;
						<span className="reply">
							<Glyphicon glyph="share-alt" /> Reply
						</span>
						<span className="retweet">
							<Glyphicon glyph="retweet" /> Retweet
						</span>
						<span className="favorite">
							<Glyphicon glyph="star-empty" /> Favorite
						</span>
					</div>
				</Panel>
			</Media.Body>
		</Media>
	);
};

export default Tweet;
