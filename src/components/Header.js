import React from 'react';

function Header() {
  return (
    <div className="container pt-5">
      <div className="row">
	      <div className="col">
	      	<img className="img-fluid img-thumbnail" src="dummy_logo.jpg" alt="Dummy website logo" style={{width: 50+'px'}} height='50px' />
	      	<span className="pl-2">Logo</span>
	      </div>
	      <div className="col">
	      	User Name
	      </div>
      </div>
    </div>

  );
}

export default Header;
