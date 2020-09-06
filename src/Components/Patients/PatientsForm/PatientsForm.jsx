import React, { Component } from 'react';
import TextInput from '../../reusables/TextInput';

export default class PatientsForm extends Component {
    state = {
        isEdit: false
    }

    componentDidMount = () => {
        this.setState({
            isEdit: this.props.match.params.id ? true : false
        })
    }

    render() {
        let { isEdit } = this.state;
        return (
            <div>
                <h4>{isEdit ? "Edit Patient" : "Add Patient"}</h4>
                <form>
                    <div className="form-group">
                        <TextInput
                            type="text"
                            name="name"
                            placeholder="Enter patient's name"
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
