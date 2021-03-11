import React, { useReducer, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, getPosts } from '../../actions/posts';
import './PersonalInfo.css';
import { getUsers } from '../../actions/users';


const PersonalInfo = () => {
	// const [formData, setFormData] = useReducer(formReducer, {
	// 	count: 100,
	// });
	const [formData, setFormData] = useState({ 
		bio: "", 
		major: "", 
		year: "", 
		hobbies: "", 
		catDog: "", 
		nightOrMorning: "", 
		groupSize: "",
	})
	const dispatch = useDispatch(getUsers());

	const [submitting, setSubmitting] = useState(false);
	const [file, setFile] = useState(null);

	const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
	
	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setFormData({
				reset: true
				})
			},3000);
			alert('You have submitted the form.')
	}
	// 	if (currentId) {
    //         dispatch(updatePost(currentId, { ...formData, name: user?.result?.name }));
            
    //     } else {
    //         dispatch(createPost({ ...formData, name: user?.result?.name }));
    //     }
	

		


	
	

	const handleChange = event => {
		const isCheckbox = event.target.type === 'checkbox';
		setFormData({
			name: event.target.name,
				value: isCheckbox ? event.target.checked : event.target.value,
			});
	}

	// get the current user from localStorage so that we can directly change its values
    const user = JSON.parse(localStorage.getItem('profile'));
	if (user?.result?.name) {
		console.log(user?.result?.email);
		console.log(user?.result?.name);
		console.log(user?.result?.hobbies);
		console.log(user?.result?._id);
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
					<p>Cat or Dog?</p>
					<select name="catOrDog" onChange={handleChange} value={formData.year || ''}>
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