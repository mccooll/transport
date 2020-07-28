import { h, Component } from 'preact';

export default class Itineraries extends Component {

	state = {
		itinerary: []
	}

	componentDidMount() {
		this.itinerary();
	}

	itinerary() {
		if(this.props.state.flights.length < 1 || this.props.state.orders.length < 1) {
			return [];
		}
		const flights = [...this.props.state.flights];
		const maxCapacity = 20;
		flights.forEach(flight => flight.capacity = maxCapacity);
		const orders = [...this.props.state.orders];
		let itinerary = []
		orders.forEach((order) => {
			let slotted = false;
			let flightNumber = 0;
			do {
				console.log(flightNumber)
				let flight = flights[flightNumber];
				
				//check for departure && arrival
				if(flight.arrival !== order.destination) continue;
				//check for capacity
				if(flight.capacity < 1) continue;
				
				let slot = {...flight};
				slot.order = order.number;
				slot.flight = flightNumber;
				itinerary.push(slot);
				flight.capacity--;
				slotted = true;
			} while(!slotted && flights.length > ++flightNumber)
			if(!slotted) {
				let slot = {};
				slot.order = order.number;
				slot.flight = "not scheduled";
				itinerary.push(slot);
			}
		})
		this.setState({itinerary: itinerary});
	}

	render() {
		if(this.state.itinerary.length > 0) {
			return (
				<div>
					<h1>Itineraries</h1>
					<table>
						<tr>
							<th>Order</th>
							<th>Flight Number</th>
							<th>From</th>
							<th>To</th>
							<th>Day</th>
						</tr>
						{this.state.itinerary.map((slot) => (
							<tr>
								<td>{slot.order}</td>
								<td>{slot.flight}</td>
								<td>{slot.departure}</td>
								<td>{slot.arrival}</td>
								<td>{slot.day}</td>
							</tr>
						))}
					</table>
				</div>
			);
		} else {
			return(
				<p>
					You need to upload orders.
				</p>
			);
		}
	}
}
