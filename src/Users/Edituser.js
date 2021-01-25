import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
const EditUser = () => {
	const history = useHistory();
	const { id } = useParams();
	const intialValue = {
		name: '',
		userName: '',
		email: '',
		mobile: '',
	};
	const [userValue, setUserValue] = useState(intialValue);
	useEffect(() => {
		loadUserData();
	}, []);
	const changeUserValues = (e) => {
		setUserValue({ ...userValue, [e.target.name]: e.target.value });
	};
	const userDetails = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3000/posts/${id}`, userValue);
		history.push('/');
	};
	const loadUserData = async () => {
		const resultdata = await axios.get(`http://localhost:3000/posts/${id}`);
		setUserValue(resultdata.data);
		console.log(resultdata, '===============resultDatabasedonid=============');
	};
	return (
		<div className="container">
			<h2>Adduser</h2>
			<div className="row">
				<form onSubmit={userDetails} autoComplete="off">
					<div className="form-group">
						<label>Name:</label>
						<input
							type="text"
							placeholder="enter Name"
							value={userValue.name}
							name="name"
							onChange={(e) => changeUserValues(e)}
						/>
					</div>
					<div className="form-group">
						<label>UserName:</label>
						<input
							type="text"
							placeholder="enter UserName"
							value={userValue.userName}
							name="userName"
							onChange={(e) => changeUserValues(e)}
						/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input
							type="text"
							placeholder="enter Email"
							value={userValue.email}
							name="email"
							onChange={(e) => changeUserValues(e)}
						/>
					</div>
					<div className="form-group">
						<label>Mobile:</label>
						<input
							type="text"
							placeholder="enter Mobile"
							value={userValue.mobile}
							name="mobile"
							onChange={(e) => changeUserValues(e)}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-primary">UpdateUser</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default EditUser;
