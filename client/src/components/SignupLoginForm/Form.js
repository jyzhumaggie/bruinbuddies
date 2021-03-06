import React, { Component } from 'react';
import './Form.css';
// import axios from 'axios';
import TextLink from '../TextLink'


class Form extends Component {
	// const [userDetails, setUserDetails] = useState({
	// 	userName: '',
	// 	userEmail: '',
	// 	message: ''
	// });

	constructor(props) {
		super(props)
		this.state = {
			userName: "",
			userEmail: "",
			message: "",
		}
	};

	// const register = async (event) => {
	// 	event.preventDefault();	//this will take us to a new webpage by default
	// 	console.log("hahaha")
	// 	const body = JSON.stringify({
	// 		userName: userDetails.userName,
	// 		userEmail: userDetails.userEmail,
	// 	});
		// async
		// const res = await axios.post("/api/register", body, {
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });
		// console.log("Me");
	
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
			<h1 className="title">User Register</h1>
			<form >
			<label>Name:</label>
				<input required type="text" id="userName" onChange={(item) => this.formValues(item, "userName")}/>
				<br />
				<label>Email:</label>
				<input required type="email" id="userEmail" onChange={(item) => this.formValues(item, "userEmail")}/>
				<br />
				<button type="submit" onSubmit={ () => this.handleSubmit }>Register</button>
				<br />
				<TextLink to='/login' text="Already a user? Login!">  </TextLink>
			</form>
		</div>
	)}
}

export default Form

