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
					<tr>
						<td>1</td>
						<td>YUL</td>
						<td>YYZ</td>
						<td>1</td>
					</tr>
					<tr>
						<td>1</td>
						<td>YUL</td>
						<td>YYZ</td>
						<td>1</td>
					</tr>
				</table>
				<p>
					<label>Upload flights: </label>
					<input type="file" accept="application/json" />
				</p>
			</div>
		);
	}
}
