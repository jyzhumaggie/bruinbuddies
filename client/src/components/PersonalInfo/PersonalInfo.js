import React, {  useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './PersonalInfo.css';
import { getUsers, updateUser } from '../../actions/users';
import FileBase from 'react-file-base64';


const PersonalInfo = () => {

	const [formData, setFormData] = useState({ 
		bio: "", 
		major: "", 
		year: "", 
		hobbies: "", 
		catDog: "", 
		nightOrMorning: "", 
		groupSize: "",
		selectedFile: "",
	})

	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));
	if (user?.result?.name) {
		console.log(user?.result?.email);
		console.log(user?.result?.name);
		console.log(user?.result?.hobbies);
		console.log(user?.result?._id);
		console.log(user?.result);

	} 
	console.log(formData.result);
	const currentId = user?.result?._id;
	
	useEffect(() => {
		if (user) setFormData(user);
	}, []);



	const handleSubmit =  (event) => {
		event.preventDefault();
		console.log(formData);
		dispatch(updateUser(currentId, { ...formData }));
		
		// setSubmitting(true);
		setTimeout(() => {
			// setSubmitting(false);
			// setFormData({
			// 	reset: true
			// 	})
			},3000);
			alert('You have submitted the form.')
	}



	const handleChange = (e) => {
		const isCheckbox = e.target.type === 'checkbox';
		setFormData({
				...formData,
				[e.target.name]: isCheckbox ? e.target.checked : e.target.value,
			});
	}

	// get the current user from localStorage so that we can directly change its values
 
	return (
		<div className="wrapper">
			{/* <h1>Your Profile</h1> */}
			{/* {submitting &&
				<div>
					You are submitting the following:
					<ul>
						{Object.entries(formData).map(([name, value]) => (
							<li key={name}><strong>{name}</strong>:{value.toString()}</li>				       ))}
					</ul>
				</div>
			} */}
			<form onSubmit={handleSubmit}>
				<fieldset>
					<p>Upload a display picture</p>
					<FileBase
                            type="file"
                            required
                            multiple={false}
                            onDone={({base64}) => setFormData({ ...formData, selectedFile: base64 })}
                            />					
				<label>
					<p>Name</p>
					<input name="name" required label="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
				</label>
				<label>
					<p>Year</p>
					<select 
						name="year"  
						value={formData.year} 
						onChange={ (e) => setFormData({ ...formData, year: e.target.value }) }
					>
					<option value="">--Please choose an option--</option>
					<option value="freshman">Freshman</option>
					<option value="sophomore">Sophomore</option>
					<option value="junior">Junior</option>
					<option value="senior">Senior</option>
					</select>
				</label>
				<label>
					<p>Cat or Dog?</p>
					<select name="catDog" required onChange={(e) => setFormData({ ...formData, catDog: e.target.value }) } value={formData.catDog}>
					<option value="">--Please choose an option--</option>
					<option value="cat">Cat</option>
					<option value="dog">Dog</option>
					</select>
				</label>
				<label>
					<p>Major</p>
					<input name="major" onChange={handleChange} value={formData.major} />
				</label>
				<label>
					<p>Classes</p>
					<input name="classes" onChange={(e) => setFormData({ ...formData, classes: e.target.value })} value={formData.classes }/>
				</label>
				</fieldset>
			<fieldset >
				<h2>Tell us something about yourself</h2>
				<label>
				<p>Bio</p>
				<input name="bio" onChange={(e) => setFormData({ ...formData, bio: e.target.value })} value={formData.bio}/>
				</label>
				<label>
				<p>Hobbies</p>
				<input name="hobbies" onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })} step="1" value={formData.hobbies }/>
				</label>
				<label>
				<p>Do you like to study during the night?</p>
				<input 
					checked={formData['night-study']}
					name="night-study"
					onChange={(e) => setFormData({ ...formData, nightOrMorning: e.target.value })}
					type="checkbox"
				/>
				</label>
				</fieldset>
			{/* <button type="submit" disabled={submitting}>Submit</button> */}
			<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default PersonalInfo;