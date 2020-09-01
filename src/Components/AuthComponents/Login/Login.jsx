import React, { useState, useContext, useEffect } from 'react';
import { withFirebase } from '../../../Firebase';
import { TextInput, Button } from '../../reusables';
import { login } from '../../../actions';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { AuthUserContext } from '../../../Session';
const Login = (props) => {
	const context = useContext(AuthUserContext);

	let [state, setState] = useState({
		email: "",
		password: "",
		formErrors: {
			email: false,
			password: false
		},
		isLoading: false
	})

	useEffect(() => {
		console.log(context);
		if (context !== null) {
			props.history.push("/");
		}
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
			let user = await props.firebase.auth.currentUser;
			let authentication_token = await user.getIdToken();
			props.login({
				uid: authUser.user.uid,
				token: authentication_token
			}).then((res) => {
				let user = {
					...res.data,
					token: authentication_token
				}
				if (res.status === 200) {
					props.cookies.set('user', user, { path: '/' });
					props.history.push("/")
				}
			})
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
		<div className="bg-gradient-login">
			<div className="container-login">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-12 col-md-9">
						<div className="card shadow-sm my-5">
							<div className="card-body p-0">
								<div className="row">
									<div className="col-lg-12">
										<div className="login-form">
											<div className="text-center">
												<h1 className="h4 text-gray-900 mb-4">Login</h1>
											</div>
											<form className="user">
												<div className="form-group">
													<TextInput
														type="email"
														name="email"
														placeholder="Enter Email Address"
														validate={true}
														onChange={handleChange}
													/>
												</div>
												<div className="form-group">
													<TextInput
														type="password"
														name="password"
														placeholder="Enter Password"
														validate={true}
														onChange={handleChange}
													/>
												</div>
												{/* <div className="form-group">
													<div className="custom-control custom-checkbox small" style={{lineHeight: "1.5 rem"}}>
														<input type="checkbox" className="custom-control-input" id="customCheck" />
														<label className="custom-control-label" for="customCheck">Remember
								Me</label>
													</div>
												</div> */}
												<div className="form-group">
												<Button
										type="submit"
										className="btn btn-primary btn-block"
										text="Sign In"
										disabled={disabled}
										onClick={handleSubmit}
									/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(null, { login })(withFirebase(withCookies(Login)));
// export default Login;

{/* // <div className="hold-transition login-page">
	// 		<div className="login-box">
	// 			<div className="login-logo">
	// 				<span><b>NearBy Dentists</b></span>
	// 			</div>
	// 			<div className="card">
	// 				<div className="card-body login-card-body">
	// 					<p className="login-box-msg">Sign in to start your session</p>
	// 					<form>
	// 						<TextInput
	// 							type="email"
	// 							name="email"
	// 							placeholder="Email"
	// 							validate={true}
	// 							onChange={handleChange}
	// 						>
	// 							<div className="input-group-append">
	// 								<div className="input-group-text">
	// 									<span className="fas fa-envelope"></span>
	// 								</div>
	// 							</div>
	// 						</TextInput>
	// 						<TextInput
	// 							type="password"
	// 							name="password"
	// 							placeholder="Password"
	// 							validate={true}
	// 							onChange={handleChange}
	// 						>
	// 							<div className="input-group-append">
	// 								<div className="input-group-text">
	// 									<span className="fas fa-lock"></span>
	// 								</div>
	// 							</div>
	// 						</TextInput>
	// 						<div className="row">
	// 							<div className="col-4 mx-auto">
	// 								<Button
	// 									type="submit"
	// 									className="btn btn-primary btn-block"
	// 									text="Sign In"
	// 									disabled={disabled}
	// 									onClick={handleSubmit}
	// 								/>

	// 							</div>
	// 						</div>
	// 					</form>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div> */}