import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Error404.scss';
// import Footer from "../../wrapperComponents/footer";

class Error404 extends Component {
    render() {
        let { message, noBackBtn } = this.props;
        return (
            <div className="error-box">
                <div className="error-body text-center">
                    <h1>Oops!</h1>
                    <h3 className="text-uppercase">{message ? message : "Data Not Found !"}</h3>
                    {/* <p className="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p> */}
                    {!noBackBtn &&
                        <button className="btn btn-info btn-rounded waves-effect waves-light m-b-40" onClick={() => {
                            this.props.history.length > 2 ? this.props.history.goBack() : this.props.history.push("/dashboard");
                        }
                        }>
                            Back
                        </button>
                    }
                </div>
                {/* <Footer /> */}
            </div>
        );


    }
}

export default withRouter(Error404);
