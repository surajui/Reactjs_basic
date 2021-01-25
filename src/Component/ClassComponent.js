import React, { Component } from 'react';
import axios from 'axios';
class Hello extends Component {
	constructor() {
		super();
		this.state = {
			searchName: '',
			response: [],
		};
	}
	componentDidMount() {
		axios.get('http://localhost:3000/posts').then((resp) => {
			this.setState({
				response: resp.data,
			});
		});
	}
	changeMessage = (e) => {
		const searchDatavalue = [];
		const datavalue = this.state.response;
		this.setState({
			searchName: e.target.value.toLowerCase(),
		});
		if (this.state.searchName.length > 0) {
			datavalue.filter((e) => {
				if (e.name.toLowerCase().includes(this.state.searchName)) {
					searchDatavalue.push(e);
				}
			});
			console.log(searchDatavalue, 'searchDatavalue');
			this.setState({
				response: searchDatavalue,
			});
		}
		console.log(this.state.searchName);
	};
	render() {
		console.log(this.state.response, 'suraj');
		return (
			<div>
				<input
					type="text"
					value={this.state.searchName}
					onChange={this.changeMessage}
				/>
				<table className="table border shadow">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Emial</th>
							<th scope="col">Mobile</th>
						</tr>
					</thead>
					<tbody>
						{this.state.response.map((user, i) => (
							<tr key={i}>
								<td>{i + 1}</td>
								<td>{user.name}</td>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>{user.mobile}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Hello;
