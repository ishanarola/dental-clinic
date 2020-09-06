import React, { Component } from 'react'
import { withAuthorization } from '../../Session';
import { withFirebase } from '../../Firebase';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../Constants/routes';
import Patients from '../Patients';
class Content extends Component {
	render() {
		console.log(this.props);
		return (
			//    <div className="container-fluid" id="container-wrapper">
			// 	<div className="d-sm-flex align-items-center justify-content-between mb-4">
			// 		<h1 className="h3 mb-0 text-gray-800">Patients</h1>
			// 		<ol className="breadcrumb">
			// 			<li className="breadcrumb-item"><a href="./">Home</a></li>
			// 			<li className="breadcrumb-item active" aria-current="page">Patients</li>
			// 		</ol>
			// 	</div>
			// 	<div className=" mb-3">
			//     Content
			// 	</div>
			// 	{/*Row*/}
			// 	<div className="row">
			// 		<div className="col-lg-12 text-center">
			// 			<p>Do you like this template ? you can download from <a href="https://github.com/indrijunanda/RuangAdmin" className="btn btn-primary btn-sm" target="_blank"><i className="fab fa-fw fa-github" />&nbsp;GitHub</a></p>
			// 		</div>
			// 	</div>
			// 	</div>
			<Switch>
				<Route path={routes.PATIENTS_LIST} component={Patients} />
			</Switch>
		)
	}
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(Content));
