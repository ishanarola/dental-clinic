import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
export default class SuccessAlert extends React.Component {
  render() {
    let {
      show,
      title,
      children,
      showCancel,
      closeOnClickOutside,
      confirmBtnText
    } = this.props;
    return (
      <SweetAlert
        show={show}
        success
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
                Cancel
              </button>
            )}
            <button className="btn btn-success" onClick={this.props.onConfirm}>
              {confirmBtnText ? confirmBtnText : "Ok"}
            </button>
          </React.Fragment>
        }
      >
        <h4>{children}</h4>
      </SweetAlert>
    );
  }
}
