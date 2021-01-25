import { useState, useEffect } from 'react';

const UserForm = (Validation) => {
	const intialUserValue = {
		name: '',
		email: '',
		mobile: '',
		password: '',
		confirmPassword: '',
	};
	const [values, setValues] = useState(intialUserValue);
	const [error, setError] = useState({});

	const handleChangeValue = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const handelSubmit = (e) => {
		e.preventDefault();

		setError(Validation(values));
		console.log(values);
	};
	return { handleChangeValue, values, handelSubmit, error };
};

export default UserForm;
