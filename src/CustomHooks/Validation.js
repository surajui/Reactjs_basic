const Validation = (inputValidated) => {
	let errors = {};
	///useName
	if (!inputValidated.name) {
		errors.name = 'UserName is required';
	}
	// Emial
	if (!inputValidated.email) {
		errors.email = "Please enter Email'Id";
	} else if (
		!/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/i.test(inputValidated.email)
	) {
		errors.email = 'Please enter valid Id';
	}
	// Mobile
	if (!inputValidated.mobile) {
		errors.mobile = 'Please enter Mobilenumber';
	} else if (!/^[7-9][0-9]{9}$/.test(inputValidated.mobile)) {
		errors.mobile = 'Please enter valid number';
	}
	//Password
	if (!inputValidated.password) {
		errors.password = 'Please enter Password';
	} else if (inputValidated.password.length < 6) {
		errors.password = 'Password must be 6 char';
	}
	//confirm Password
	if (!inputValidated.confirmPassword) {
		errors.confirmPassword = 'Please enter confirm password';
	} else if (inputValidated.confirmPassword != inputValidated.password) {
		errors.confirmPassword = 'Password is not match';
	}
	return errors;
};
export default Validation;
