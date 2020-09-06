import React, { Component } from "react";
import "./Modal.scss";
class Modal extends Component {
  componentDidMount() {
    // if (!this.props.modalfrom) {
    document.body.style.overflowY = 'hidden';
    document.addEventListener("mousedown", this.handlePopupClick, false);
    // }
  }
  componentWillUnmount() {
    document.body.style.overflowY = 'unset';
    // if (!this.props.modalfrom) {
    document.removeEventListener("mousedown", this.handlePopupClick, false);
    // }
  }
  handlePopupClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    !this.props.preventToggleOnClickOutsideModal && this.props.toggleModal();
  };
  render() {
		let { children, id, title, className,footer } = this.props;
    return (
      <div
        id={id}
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
				aria-labelledby="myModalLabel"
				area-modal="true"
				style={{paddingRight: "17px", display: "block"}}
      >
        <div className={"modal-dialog modal-dialog-centered " + className}>
          <div ref={node => (this.node = node)} className="modal-content">
            {title && (
              <div className="modal-header">
                <h4 className="modal-title d-inline" id="myModalLabel">
                  {title}
                </h4>
                <button
                  type="button"
                  className="close"
                  onClick={this.props.toggleModal}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            )}
            {children && <div className="modal-body">{children}</div>}
						{footer && <div className="modal-footer">{footer()}</div>}
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
