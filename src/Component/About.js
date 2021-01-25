import React from 'react';
import UserForm from '../CustomHooks/useForm';
import Validation from '../CustomHooks/Validation';
const About = () => {
	const { handleChangeValue, values, handelSubmit, error } = UserForm(
		Validation,
	);
	return (
		<div className="container">
			<div className="py-4">
				<h2>About Component and SignUp form</h2>
				<form autoComplete="off" onSubmit={handelSubmit}>
					<div className="form-group">
						<label>Name:</label>
						<input
							type="text"
							name="name"
							value={values.name}
							placeholder="enterName"
							className="form-control"
							onChange={handleChangeValue}
						/>
						{error.name && <p className="text-danger">{error.name}</p>}
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input
							type="text"
							name="email"
							value={values.email}
							placeholder="Enter Email"
							className="form-control"
							onChange={handleChangeValue}
						/>
						{error.email && <p className="text-danger">{error.email}</p>}
					</div>
					<div className="form-group">
						<label>Mobile:</label>
						<input
							type="text"
							name="mobile"
							value={values.mobile}
							placeholder="Enter mobileNumber"
							className="form-control"
							onChange={handleChangeValue}
						/>
						{error.mobile && <p className="text-danger">{error.mobile}</p>}
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input
							type="text"
							name="password"
							value={values.password}
							placeholder="Enter Password"
							className="form-control"
							onChange={handleChangeValue}
						/>
						{error.password && <p className="text-danger">{error.password}</p>}
					</div>
					<div className="form-group">
						<label>ConfirmPassword:</label>
						<input
							type="text"
							name="confirmPassword"
							value={values.confirmPassword}
							placeholder="Enter ConfirmPassword"
							className="form-control"
							onChange={handleChangeValue}
						/>
						{error.confirmPassword && (
							<p className="text-danger">{error.confirmPassword}</p>
						)}
					</div>
					<div>
						<button className="btn btn-success">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default About;
