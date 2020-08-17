import React, { useState } from 'react';
import { withFirebase } from '../../../Firebase';
import { TextInput, Button } from '../../reusables';
const Login = (props) => {
	let [state, setState] = useState({
		email: "",
		password: "",
		formErrors: {
			email: false,
			password: false
		},
		isLoading: false
	})
	const handleChange = (value, name, valid) => {
		setState({
			...state, [name]: value,
			formErrors: {
				...state.formErrors, [name]: valid
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let { email, password } = state;
		props.firebase.doSignInWithEmailAndPassword(email, password).then(async (authUser) => {
			console.log(authUser.user.uid);
			let user = await props.firebase.auth.currentUser;
			let authentication_Token = await user.getIdToken();
			console.log(authentication_Token);
		})
			.catch((err) => {
				console.error(err);
			})
	}

	let disabled =
		!state.isLoading &&
			state.email !== "" &&
			state.password !== "" &&
			!state.formErrors.email &&
			!state.formErrors.password
			? ""
			: "disabled";

	return (
		<div className="hold-transition login-page">
			<div className="login-box">
				<div className="login-logo">
					<span><b>NearBy Dentists</b></span>
				</div>
				<div className="card">
					<div className="card-body login-card-body">
						<p className="login-box-msg">Sign in to start your session</p>
						<form>
							<TextInput
								type="email"
								name="email"
								placeholder="Email"
								validate={true}
								onChange={handleChange}
							>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-envelope"></span>
									</div>
								</div>
							</TextInput>
							<TextInput
								type="password"
								name="password"
								placeholder="Password"
								validate={true}
								onChange={handleChange}
							>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
							</TextInput>
							<div className="row">
								<div className="col-4 mx-auto">
									<Button
										type="submit"
										className="btn btn-primary btn-block"
										text="Sign In"
										disabled={disabled}
										onClick={handleSubmit}
									/>

								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withFirebase(Login);
// export default Login;