import React from 'react'
export default class MessageAlert extends React.Component {
    componentDidMount = () => {
        !this.props.modalAlert && this.alert.scrollIntoView();
        this.props.handleAlertClose && setTimeout(() => {
            this.props.handleAlertClose();
        }, 3000);
    }
    render() {
        let { alertType, message, modalAlert } = this.props;
        let classes = modalAlert ?
            "alert alert-dismissable alert-" + alertType
            :
            "d-block myadmin-alert myadmin-alert-icon myadmin-alert-click myadmin-alert-top alerttop alert-" + alertType
        return (
            <div className={classes} ref={ref => this.alert = ref}>
                <p className="close m-b-0" onClick={() => this.props.handleAlertClose()}>×</p>
                <b>
                    {message}
                </b>
            </div>
        )
    }
}