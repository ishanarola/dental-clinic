import React, { Component } from 'react';
import DateTime from "react-datetime";
import "../../../../node_modules/react-datetime/css/react-datetime.css";

export default class DateTimePicker extends Component {
	render() {
		let { value, placeholder, name, viewMode, dateFormat, inputProps } = this.props;
		return (
			<div>
				<DateTime
					value={value}
					onChange={date => this.props.handleChange(date, name)}
					viewMode={viewMode}
					dateFormat={dateFormat}
					timeFormat={false}
					input={true}
					utc={false}
					renderInput={(props, openCalendar) => {
						return (
							<div className={this.props.disabled ? "with-icon is-disabled" : "with-icon"}>
								<input
									type="text"
									className="form-control"
									name={name}
									placeholder={placeholder}
									{...props}
									readOnly
								/>
								{/* <span
									className={this.props.disabled ? "icon disabled" : "icon"}
								>
									<img
										src={calender}
										alt="calendar"
										onClick={() => {
											!this.props.disabled && openCalendar();
										}}
									/>
								</span> */}
							</div>
						);
					}}
					{...this.props}
				/>
			</div>
		)
	}
}
