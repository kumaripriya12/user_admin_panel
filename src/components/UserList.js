import React, { useState, useEffect, withState } from 'react';
import axios from 'axios';

import UserProfile from './UserProfile'

function UserList(props) { 

	const [page, setPage] = useState(1);
	const [userList, setUserList] = useState([]);
	const [userProfile, setUserProfile] = useState(false);
	const [userProfileID, setUserProfileID] = useState(false);

	const loadMore = () => {
		setPage(page+1);
	}

	function handleRowClick(e, id){
		e.preventDefault();
		props.clickHandler("user_profile", id);
		setUserProfile(true);
		setUserProfileID(id);
		setUserList([]);	
		
	}

	useEffect(() => {
		try {
	      axios.get('https://reqres.in/api/users?page='+page)
		  .then((response) => {
		  	setUserList(response.data.data);
		  });
        } catch(e) {
            console.log(e);
        }
	}, [page]);
		
	return (
		<div>
			<div className="container">
			{
				userList && userList.length > 0 ? 
				<div>
					<div className="row border bg-secondary" key="99">
						<div className="col border-right">ID</div>
						<div className="col border-right">First Name</div>
						<div className="col border-right">Last Name</div>
						<div className="col">Email</div>
					</div>
					{
						
						userList.map((item, index) => 
							<div className="row border" key={index} onClick={(e) => {handleRowClick(e, item.id)}}>
								<div className="col border-right">{item.id}</div>
								<div className="col border-right">{item.first_name}</div>
								<div className="col border-right">{item.last_name}</div>
								<div className="col">{item.email}</div>
							</div>
						)
					}
				<button className="mt-3" onClick={loadMore}>Load More..</button>		
				</div>
				: null
			}
			
			</div>		
			{userProfile ? <UserProfile user_id={userProfileID} /> : null}
		</div>
	);
}

export default UserList;
