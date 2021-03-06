import React, { useReducer, useState, useRef } from 'react';
import './PersonalInfo.css';

const formReducer = (state, event) => {
	if(event.reset){
	return{
		hobbies: '',
		name: '',
		year: '',
		major: '',
		classes: '',
		bio: '',
		'night-study': false,
	}
	}
	return{
	...state,
	[event.name]: event.value
	}
}

function PersonalInfo() {
	const [formData, setFormData] = useReducer(formReducer, {
		count: 100,
	});
	const [submitting, setSubmitting] = useState(false);
	const [file, setFile] = useState(null);
	const handleSubmit = event => {
	event.preventDefault();
	//alert('You have submitted the form.')
	setSubmitting(true);
	
	setTimeout(() => {
		setSubmitting(false);
		setFormData({
			reset: true
			})
		},3000);
	}

	const handleChange = event => {
	const isCheckbox = event.target.type === 'checkbox';
	setFormData({
		name: event.target.name,
			value: isCheckbox ? event.target.checked : event.target.value,
		});
	}


	return (
		<div className="wrapper">
			{/* <h1>Your Profile</h1> */}
			{submitting &&
				<div>
					You are submitting the following:
					<ul>
						{Object.entries(formData).map(([name,value]) => (
							<li key={name}><strong>{name}</strong>:{value.toString()}</li>				       ))}
					</ul>
				</div>
			}
			<form onSubmit={handleSubmit}>
			<fieldset disabled={submitting}>
			<p>Upload a display picture</p>
			<input type = "file" value={file} onChange={(e) => setFile(e.target.files[0])}/>
				<label>
					<p>Name</p>
					<input name="name" onChange={handleChange} value={formData.name || ''}/>
				</label>
				<label>
					<p>Year</p>
					<select name="year" onChange={handleChange} value={formData.year || ''}>
					<option value="">--Please choose an option--</option>
					<option value="freshman">Freshman</option>
					<option value="sophomore">Sophomore</option>
					<option value="junior">Junior</option>
					<option value="senior">Senior</option>
					</select>
				</label>
				<label>
					<p>Major</p>
					<input name="major" onChange={handleChange} value={formData.major || ''}/>
				</label>
				<label>
					<p>Classes</p>
					<input name="classes" onChange={handleChange} value={formData.classes || ''}/>
				</label>
				</fieldset>
			<fieldset disabled={submitting}>
				<h2>Tell us something about yourself</h2>
				<label>
				<p>Bio</p>
				<input name="bio" onChange={handleChange} value={formData.bio || ''}/>
				</label>
				<label>
				<p>Hobbies</p>
				<input name="hobbies" onChange={handleChange} step="1" value={formData.hobbies || ''}/>
				</label>
				<label>
				<p>Do you like to study during the night?</p>
				<input 
					checked={formData['night-study'] || false}
			//disabled={formData.apple !== 'fuji'}
					name="night-study"
					onChange={handleChange}
					type="checkbox"
				/>
				</label>
				</fieldset>
			<button type="submit" disabled={submitting}>Submit</button>
			</form>
		</div>
	)
}

export default PersonalInfo;