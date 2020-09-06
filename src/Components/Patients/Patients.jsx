import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import * as routes from '../Constants/routes';
import PatientsList from './PatientsList';
import PatientForm from './PatientsForm';
import PatientsForm from './PatientsForm';
class Patients extends Component {
    render() {
        return (

            <div className="container-fluid" id="container-wrapper">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Patients</h1>
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="./">Home</a></li>
						<li className="breadcrumb-item active" aria-current="page">Patients</li>
					</ol>
				</div>
				<div className=" mb-3">
                <Switch>
					 <Route exact path={routes.PATIENTS_LIST} component={PatientsList}/>
            <Route exact path={routes.ADD_PATIENT} component={PatientsForm}/>
</Switch>
				</div>
								</div>
          
        )
    }
}
export default Patients;