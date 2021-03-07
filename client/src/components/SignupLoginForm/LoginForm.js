import React, { Component } from 'react';
import './Form.css';
// import axios from 'axios';





class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: "",
			userEmail: "",
			message: "",
		}
	};
	
	formValues(item, type) {
		let itemValue = item.target.value;
		switch (type) {
			case "userName":
				this.setState({ userName: itemValue })
				console.log("setting username to", itemValue)
				break;
			case "userEmail":
				this.setState({ userEmail: itemValue})
		}
	};

	handleSubmit(e) {
		e.preventDefault();
		console.log("hahah");
		let obj = {}
		obj.userName = this.state.userName;
		obj.userEmail = this.state.userEmail;
		console.log(obj)
		console.log("submitting", obj);
	}

	render() {
		return (
		<div className="container">
			<h1 className="title">Registered User</h1>

			<form >
			<label>Name:</label>
				<input required type="text" id="userName" onChange={(item) => this.formValues(item, "userName")}/>
				<br />
				<label>Email:</label>
				<input required type="email" id="userEmail" onChange={(item) => this.formValues(item, "userEmail")}/>
				<br />
				<button type="submit" onSubmit={ () => this.handleSubmit }>Log on</button>
			</form>
		</div>
	)}
}

export default Form

