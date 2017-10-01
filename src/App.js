import React, { Component } from 'react';
import { Grid, Row, Col, Well, Panel, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
	state = {
		searchKey: 'trending',
		tweets: [],
		fetching: false,
		error: null
	};

	componentDidMount() {
		this.searchTweets();
		this.startTimer();
	}

	componentWillUnmount() {
		this.stopTimer();
	}

	startTimer = () => (this.timer = setInterval(this.searchTweets, 10000));

	stopTimer = () => clearInterval(this.timer);

	setSearchKey = evt => {
		evt.preventDefault();
		this.setState(
			() => ({
				searchKey: this.searchInput.value,
				tweets: []
			}),
			this.searchTweets
		);
	};

	searchTweets = () => {
		this.setState(
			() => ({
				fetching: true,
				error: null
			}),
			() => {
				const searchURL = `/api/tweets/${encodeURIComponent(this.state.searchKey)}`;
				axios.get(searchURL).then(response => {
					if (response.status === 200) {
						this.setState(() => ({
							tweets: response.data,
							fetching: false,
							error: null
						}));
					} else {
						this.setState(() => ({
							fetching: false,
							error: 'Error occurred while fetching tweets.'
						}));
					}
				});
			}
		);
	};

	render() {
		const { searchKey, tweets, fetching, error } = this.state;
		return (
			<Grid>
				<div>
					<h2 className="text-center"> Twitter Search </h2>
				</div>
				<Well>
					<Row className="center-block">
						<form onSubmit={this.setSearchKey}>
							<Col md={8}>
								<FormControl
									type="text"
									placeholder="Search..."
									defaultValue={searchKey}
									maxLength="50"
									inputRef={ref => (this.searchInput = ref)}
								/>
							</Col>
							<Col md={3}>
								<Button bsStyle="primary" onClick={this.setSearchKey} disabled={fetching}>
									Search
								</Button>
							</Col>
						</form>
					</Row>
				</Well>
				{fetching && (
					<Panel>
						<h3>
							Loading tweets for: <strong><em> {searchKey}</em></strong>. Please wait...
						</h3>
					</Panel>
				)}
				{!fetching && (
					<Panel>
						<h3>
							Showing tweets matching: <strong><em> {searchKey} </em></strong>
						</h3>
					</Panel>
				)}
				{!fetching &&
				error && (
					<Panel>
						<h3>{error}</h3>
					</Panel>
				)}
				{tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
			</Grid>
		);
	}
}

export default App;
