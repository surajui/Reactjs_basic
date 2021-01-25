import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Viewuser = () => {
	const { id } = useParams();
	const intialViewData = {
		name: '',
		userName: '',
		email: '',
		mobile: '',
	};
	const [viewUser, setviewUser] = useState(intialViewData);

	const viewUserInformation = async () => {
		const viewdata = await axios.get(`http://localhost:3000/posts/${id}`);
		const resultView = viewdata.data;
		setviewUser(resultView);
	};
	useEffect(() => {
		viewUserInformation();
	}, []);
	return (
		<div>
			<h4>Userdetails Info</h4>
			{
				<ul>
					<li>Name:{viewUser.name}</li>
					<li>userName:{viewUser.userName}</li>
					<li>Name:{viewUser.name}</li>
					<li>email:{viewUser.email}</li>
					<li>email:{viewUser.mobile}</li>
				</ul>
			}
		</div>
	);
};
export default Viewuser;
