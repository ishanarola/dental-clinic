import React, { Component } from "react";
import "./Loader.scss";
// import LoaderSpinner from '../LoaderSpinner';
class Loader extends Component {

  render() {
    return (
      // <span className="loader">
      //   <LoaderSpinner {...this.props} />
      // </span>


      <div className="loaderWrapper" >
        <div className="cssload-speeding-wheel loader"></div>
      </div>
    );
  }
}
export default Loader;
