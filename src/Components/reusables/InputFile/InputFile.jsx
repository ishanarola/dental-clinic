import React, { Component } from 'react'
import Modal from "../../Reusable/Modal";
import global from "../../../global";
import ReactTooltip from "react-tooltip";
// import noImage from "../../../assets/noimage.png";

export default class InputFile extends Component {
	state = {
		link: "",
		fileName: "",
		showModal: false
	}
	toggleModal = () => {
		this.setState({
			showModal: !this.state.showModal
		});
	};
	removeFile = (e) => {
		e.preventDefault();
		this.setState({
			fileName: "",
			link: ""
		}, () => {
			this.props.inputFileRemove(this.props.id)
		})
	}
	addFile = (e) => {

		let file = e.target.files[0];
		if (file.size < global.acceptFileSize) {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			let that = this;
			reader.addEventListener(
				"load",
				function () {
					that.setState({
						link: reader.result,
					});
				},
				false
			);
			this.setState({
				fileName: file.name
			}, () => {
				this.props.fileHandleChange(file, this.props.id)
			})
		} else {
			this.setState({
				fileName: ""
			}, () => {
				this.props.fileHandleChange(file, this.props.id)
			})
		}


	}
	viewImage = (link) => {
		this.setState({ showModal: true })

	}
	componentDidMount() {
		if (this.props.imageUrl !== "") {

			this.setState({
				link: this.props.imageUrl,
				fileName: this.props.imageUrl.split("/").pop()
			})
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.imageUrl === "null") {
			this.setState({
				link: "",
				fileName: ""
			})
		}
		else if (nextProps.imageUrl !== "") {
			this.setState({
				link: nextProps.imageUrl,
				fileName: nextProps.imageUrl.split("/").pop()
			})
		} else {

		}

	}

	render() {
		let { link, showModal, fileName } = this.state;
		let { hideImageViewOption } = this.props;
		let isImage = true;
		let img = fileName.split("/").pop();
		let checkifpdf = img.search(".pdf");
		if (checkifpdf > 0) {
			isImage = false;
		}
		var showFile = true;
		var result = global.doesFileExist(link);
		if (result) {
			showFile = true;

		} else {
			showFile = false;
		}
		return (
			<>
				<div>
					<label className="col-sm-12">{this.props.label}</label>
					<div className="col-sm-12">
						<div className="fileinput fileinput-new input-group" data-provides="fileinput">
							<div className="form-control" data-trigger="fileinput">
								<i className="glyphicon glyphicon-file fileinput-exists" />
								<span className="fileinput-filename">{fileName}</span>
							</div>

							{!fileName &&
								<div className="input-group-addon btn btn-default btn-file">
									<span className="fileinput-new"><i className="fa fa-upload"></i></span>
									<input type="file" name={this.props.id} value="" onChange={(e) => { this.addFile(e) }} accept={this.props.accept} />
								</div>}

							{fileName &&
								<div className="input-group-addon btn" onClick={this.removeFile}>
									<span className="fileinput-new"><i className="fa fa-close"></i></span>
								</div>}

							{fileName && !hideImageViewOption && (
								showFile ?
									<div className="input-group-addon btn m-r-30" onClick={(e) => { this.viewImage(link) }}>
										<span className="fileinput-new" ><i className="fa fa-eye"></i></span>
									</div> : <><div className="input-group-addon btn m-r-30"
									>
										<span className="fileinput-new" data-tip="File not found !" data-for='10'><i className="fa fa-eye-slash"></i><ReactTooltip
											className="react-popover"
											id="10"
											place="top"
											type="error"
										/></span>
									</div></>)}


						</div>
					</div>
				</div>
				{showModal && (
					<Modal
						toggleModal={this.toggleModal}
						modalfrom="priviewDocument"
						className="modal-lg"
					>
						<div className="maindiv">
							<div className={isImage ? "imageDiv" : ""}>
								{isImage ? (
									<img
										src={link}
										className="img"
										// width="100%"
										alt="blank"
									// onError={e => {
									//     e.target.onerror = null;
									//     e.target.src = noImage;
									// }}
									/>
								) : (
										<iframe
											id="iframe-id"
											title={this.props.label}
											src={link}
											type="application/pdf"
											width="100%"
											height="500px"

										/>

									)}
							</div>
						</div>

					</Modal>)}</>
		)
	}
}
