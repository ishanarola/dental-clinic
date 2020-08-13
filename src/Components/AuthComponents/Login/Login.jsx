import React, { Component } from 'react'

export default class Login extends Component {
	render() {
		return (
			<div className="hold-transition login-page">
				<div className="login-box">
					<div className="login-logo">
						<a href="#"><b>NearBy Dentists</b></a>
					</div>
					<div className="card">
						<div className="card-body login-card-body">
							<p className="login-box-msg">Sign in to start your session</p>
			
							<form>
								<div className="input-group mb-3">
									<input type="email" className="form-control" placeholder="Email" />
									<div className="input-group-append">
										<div className="input-group-text">
											<span className="fas fa-envelope"></span>
										</div>
									</div>
								</div>
								<div className="input-group mb-3">
									<input type="password" className="form-control" placeholder="Password" />
									<div className="input-group-append">
										<div className="input-group-text">
											<span className="fas fa-lock"></span>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-4 mx-auto">
										<button type="submit" class="btn btn-primary btn-block">Sign In</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
