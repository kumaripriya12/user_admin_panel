import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function UserProfile(props) { 

	const [userData, setUserData] = useState([]);

	const { handleSubmit, register, errors } = useForm();
  	const onSubmit = values => console.log(values);

	useEffect(() => {
		let userId = props.user_id;
		try {
	      axios.get('https://reqres.in/api/users/'+userId)
		  .then((response) => {
		  	setUserData(response.data.data);
		  });
        } catch(e) {
            console.log(e);
        }
	}, [])

  return (
    <div className="container pt-5">

    <form onSubmit={handleSubmit(onSubmit)}>
		<div className="form-group">
			<label for="id">Email address</label>
			<input className="form-control" id="userID" value={userData.id} readonly></input>
		</div>

		<div className="form-group">
			<label for="first_name">First Name</label>
			<input className="form-control" name="first_name" id="first_name" defaultValue={userData.first_name} ref={register({ required: true })}></input>
        	{errors.firstname && <span>Invalid first name</span>}
		</div>

		<div className="form-group">
			<label for="last_name">Last Name</label>
			<input className="form-control" name="last_name" id="last_name" defaultValue={userData.last_name} ref={register({ required: true })}></input>
			{errors.lastname && <span>Invalid last name</span>}
		</div>

		<div className="form-group">
			<label for="email">Email</label>
			<input className="form-control" name="email" id="email" defaultValue={userData.email}
			ref={register({
          	required: "Required",
          	pattern: {
            	value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            	message: "invalid email address"
          	}
        	})}>
        	</input>
        	{errors.email && <span>Invalid Email</span>}
		</div>

		<button type="submit" className="btn btn-primary">Submit</button>
	</form>

   
    </div>

  );
}

export default UserProfile;
