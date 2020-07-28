import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

import style from './style';

// Code-splitting is automated for routes
import Flights from '../routes/flights';
import Itineraries from '../routes/itineraries';
import Orders from '../routes/orders';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	state = {
		orders: [],
		flights: [
			{"departure":"YUL", "arrival": "YYZ", "day": 1},
			{"departure":"YUL", "arrival": "YYC", "day": 1},
			{"departure":"YUL", "arrival": "YVR", "day": 1},
			{"departure":"YUL", "arrival": "YYZ", "day": 2},
			{"departure":"YUL", "arrival": "YYC", "day": 2},
			{"departure":"YUL", "arrival": "YVR", "day": 2}
		]
	}

	render() {
		return (
			<div id="app">
				<Header />
				<div id="content">
					<Router onChange={this.handleRoute}>
						<Itineraries path="/" state={this.state} />
						<Flights path="/flights" flights={this.state.flights} />
						<Orders path="/orders" orders={this.state.orders} saver={(orders) => this.setState({orders: orders})} />
					</Router>
				</div>
			</div>
		);
	}
}
