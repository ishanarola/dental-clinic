import React from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import Loader from '../LoaderSpinner';
export default class DeleteConfirmationAlert extends React.Component {
    render() {
        let { confirmDelete, isLoading } = this.props;
        return (
            <SweetAlert
                show={confirmDelete}
                warning
                showCancel
                closeOnClickOutside={false}
                // btnSize="md"
                // confirmBtnText={isLoading ?
                //     <span className='d-flex align-items-center'>
                //         <Loader
                //             width={25}
                //             height={25}
                //             borderWidth={2}
                //             color='#bbb4b4' />
                //         &nbsp;Yes, delete it!
                //     </span>
                //     :
                //     "Yes, delete it!"
                // }
                // confirmBtnBsStyle="danger"
                // cancelBtnBsStyle="default"
                customButtons={
                    <React.Fragment>
                        <button className="btn btn-default mr-3" onClick={this.props.handleCancel}>Cancel</button>
                        <button className="btn btn-danger" onClick={this.props.handleDelete}
                            disabled={isLoading ? "disabled" : ""}
                        >
                            {isLoading ?
                                <span className='d-flex align-items-center'>
                                    <Loader
                                        width={25}
                                        height={25}
                                        borderWidth={2}
                                        color='#bbb4b4' />
                                    &nbsp;Yes, delete it!
                    </span>
                                :
                                "Yes, delete it!"
                            }
                        </button>
                    </React.Fragment>
                }
                title="Are you sure?"
                onConfirm={() => this.props.handleDelete()}
                onCancel={() => this.props.handleCancel()}
            >
                You will not be able to recover this!
            </SweetAlert>
        )
    }
}