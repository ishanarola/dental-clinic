import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Loader from "../LoaderSpinner";
export default class WarningAlert extends React.Component {
  render() {
    let {
      show,
      title,
      children,
      showCancel,
      closeOnClickOutside,
      confirmBtnText,
      isLoader,
      cancelButtonText,
    } = this.props;
    return (
      <SweetAlert
        show={show}
        warning
        showCancel={showCancel}
        closeOnClickOutside={closeOnClickOutside}
        // confirmBtnBsStyle="success"
        title={title ? title : "Success"}
        onConfirm={this.props.onConfirm}
        onCancel={this.props.onCancel}
        customButtons={
          <React.Fragment>
            {showCancel && (
              <button
                className="btn btn-default mr-3"
                onClick={this.props.onCancel}
              >
                {cancelButtonText ? cancelButtonText : "Cancel"}
              </button>
            )}
            <button className="btn btn-success" onClick={this.props.onConfirm} disabled={isLoader ? "disabled" : ""}>
              {isLoader ? (
                <span className="d-flex align-items-center justify-content-center">
                  <Loader
                    width={18}
                    height={18}
                    borderWidth={2}
                    color="#bbb4b4"
                  />
                  &nbsp;{confirmBtnText ? confirmBtnText : "Ok"}
                </span>
              ) : confirmBtnText ? (
                confirmBtnText
              ) : (
                    "Ok"
                  )}
            </button>
          </React.Fragment>
        }
      >
        <h4>{children}</h4>
      </SweetAlert>
    );
  }
}
