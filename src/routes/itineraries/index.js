import { h, Component } from 'preact';

export default class Itineraries extends Component {

	render() {
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
					<tr>
						<td>001</td>
						<td>1</td>
						<td>YUL</td>
						<td>YYZ</td>
						<td>1</td>
					</tr>
					<tr>
						<td>001</td>
						<td>1</td>
						<td>YUL</td>
						<td>YYZ</td>
						<td>1</td>
					</tr>
				</table>
				<p>
					You need to upload flights and orders.
				</p>
			</div>
		);
	}
}
