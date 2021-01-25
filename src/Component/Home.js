import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const intailSearch = {
		name: '',
	};
	const [users, setUsers] = useState([]);
	const [searchUser, newSearchUser] = useState(intailSearch);
	const [message, setMessage] = useState('');
	useEffect(() => {
		console.log('this is homepage');
		loadUser();
	}, []);
	const loadUser = async () => {
		const result = await axios.get('http://localhost:3000/posts');
		setUsers(result.data.reverse());
	};
	const deleteUser = async (id) => {
		console.log(id);
		await axios.delete(`http://localhost:3000/posts/${id}`);
		loadUser();
	};
	const searchNewUsers = (e) => {
		const searchResp = e.target.value.toLowerCase();
		let resultData = [];

		if (searchResp.length > 0) {
			users.filter((e) => {
				if (e.name.toLowerCase().includes(searchResp)) {
					resultData.push(e);
				}
				if (!searchResp) {
					message = 'No data is found';
					// setMessage(errorMessage);
				}
			});
		} else {
			loadUser();
		}

		newSearchUser({ ...searchUser, [e.target.name]: e.target.value });
		setUsers(resultData);
	};
	return (
		<div className="container">
			<div className="py-4">
				<h2>Home Component</h2>
				<input
					type="text"
					placeholder="please search"
					name="name"
					value={searchUser.name}
					onChange={searchNewUsers}
				/>
				<table className="table border shadow">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Emial</th>
							<th scope="col">Mobile</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, i) => (
							<tr key={i}>
								<td>{i + 1}</td>
								<td>{user.name}</td>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>{user.mobile}</td>
								<td>
									<Link className="btn btn-primary m-2" to={`/view/${user.id}`}>
										View
									</Link>
									<Link
										className="btn btn-success m-2"
										to={`/adduser/${user.id}`}
									>
										Edit
									</Link>
									<Link
										className="btn btn-danger"
										to=""
										onClick={() => deleteUser(user.id)}
									>
										Delete
									</Link>
								</td>
							</tr>
						))}
					</tbody>
					<h3>{message}</h3>
				</table>
			</div>
		</div>
	);
};
export default Home;
