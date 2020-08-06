import { h, Component } from 'preact';

export default class Itineraries extends Component {

	state = {
		itinerary: [],
		sortKey: null,
		sortAsc: true
	}

	componentDidMount() {
		this.itinerary();
		console.log
		console.log(this.props.flight)
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
				//console.log(flightNumber)
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

	sortBy(column) {
		console.log('tapped')
		if(this.state.sortKey===column) {
			this.setState({sortAsc: !this.state.sortAsc})
		} else {
			this.setState({sortKey: column})
		}
	}

	render() {
		if(this.state.itinerary.length > 0) {
			return (
				<div>
					<h1>Itineraries</h1>
					<h3>Filters</h3>
					<p>{+this.props.flight >= 0 ? 'Flight:' + this.props.flight : 'None'}</p>
					<table>
						<tr>
							<th onclick={() => this.sortBy("order")}>Order</th>
							<th onclick={() => this.sortBy("flight")}>Flight Number</th>
							<th onclick={() => this.sortBy("departure")}>From</th>
							<th onclick={() => this.sortBy("arrival")}>To</th>
							<th onclick={() => this.sortBy("day")}>Day</th>
						</tr>
						{this.state.itinerary
							.filter(f => {
								if(this.props.flight) return f.flight == this.props.flight;
								return true;
							 })
							.sort((a,b) => {
								if(!this.state.sortKey) return 0;
								var first = a[this.state.sortKey];
								console.log(first)
								var second = b[this.state.sortKey];
								console.log(second)
								const multiplier = this.state.sortAsc ? 1 : -1;
								if(first > second) { console.log(-1); return -1*multiplier;}
								if(first < second) {console.log(1); return 1*multiplier;}
								console.log(0)
								return 0;
							})
							.map((slot) => (
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
