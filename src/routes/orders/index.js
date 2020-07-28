import { h, Component } from 'preact';

export default class Itineraries extends Component {

	parse = async e => {
		try {
			let text = await e.target.files[0].text();
			let data = JSON.parse(text);
			data = Object.keys(data).map((key) => {
				let obj = {};
				obj.number = key;
				obj.destination = data[key].destination;
				return obj;
			})
			this.props.saver(data);
		} catch(err) {
			console.log(err)
			alert("Bad format!")
		}
	}

	render() {
		if(this.props.orders.length > 0) {
			return (
				<div>
					<h1>Orders</h1>
					<table>
						<tr>
							<th>Order</th>
							<th>From</th>
							<th>To</th>
						</tr>
						{this.props.orders.map(order => (
							<tr>
								<td>{order.number}</td>
								<td>YUL</td>
								<td>{order.destination}</td>
							</tr>
						))}
					</table>
				</div>
			);
		} else {
			return (
				<p>
					<label>Upload orders: </label>
					<input type="file" accept="application/json" onInput={this.parse} />
				</p>
			);
		}
	}
}
