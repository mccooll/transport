import { h, Component } from 'preact';

export default class Flights extends Component {

	render() {
		return (
			<div>
				<h1>Flights</h1>
				<table>
					<tr>
						<th>Flight</th>
						<th>From</th>
						<th>To</th>
						<th>Day</th>
					</tr>
					{this.props.flights.map((flight, i) => (
						<tr>
							<td>{i}</td>
							<td>{flight.departure}</td>
							<td>{flight.arrival}</td>
							<td>{flight.day}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}
}
