import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import UserList from './UserList'
import UserProfile from './UserProfile'

function Body() {

    const [userListShown, setUserListShown] = useState(true);
    const [userProfileShown, setUserProfileShown] = useState(false);
    const [userProfileID, setUserProfileID] = useState();


	function handleClick(param, userID){
		if(param == "user_list"){
			setUserListShown(true);
			setUserProfileShown(false);
		}
		else if(param == "user_profile"){
			setUserListShown(false);
			setUserProfileShown(true);
			setUserProfileID(userID);
		}
	};

  return (
    <div className="container bg-light">
      Page Title
      <div>
      	<nav className="nav nav-pills nav-fill text-capitalize text-bold">
			<button className="nav-item nav-link" onClick={(e) => {handleClick("user_list", 0)}}>Users List</button>
		    <button className="nav-item nav-link" onClick={(e) => {handleClick("user_profile", 1)}}>User Profile</button>
		</nav>				
      </div>
      {userListShown ? <UserList clickHandler={handleClick} /> : null}
      {userProfileShown ? <UserProfile user_id={userProfileID} /> : null}
    </div>

  );
}

export default Body;
