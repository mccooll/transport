import { h, Component } from 'preact';

export default class Itineraries extends Component {

	render() {
		return (
			<div>
				<h1>Orders</h1>
				<table>
					<tr>
						<th>Order</th>
						<th>From</th>
						<th>To</th>
					</tr>
					<tr>
						<td>001</td>
						<td>YUL</td>
						<td>YYZ</td>
					</tr>
					<tr>
						<td>001</td>
						<td>YUL</td>
						<td>YYZ</td>
					</tr>
				</table>
				<p>
					<label>Upload orders: </label>
					<input type="file" accept="application/json" />
				</p>
			</div>
		);
	}
}
