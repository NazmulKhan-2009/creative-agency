import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faCartArrowDown, faLuggageCart, faCommentDots, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
      
        <div className="sidebar  col-md-2 col-sm-10 py-5 px-5" style={{ height: "90vh" }}>
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="" width="150" height="47"/>
            </Link>
            
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/order" className="text-dark font-weight-bold text-decoration-none">
                        <FontAwesomeIcon className="icon" icon={faCartArrowDown} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-dark font-weight-bold text-decoration-none">
                        <FontAwesomeIcon className="icon" icon={faLuggageCart} /> <span>Service List</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/review" className="text-dark font-weight-bold text-decoration-none">
                            <FontAwesomeIcon className="icon" icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-dark font-weight-bold text-decoration-none">
                            <FontAwesomeIcon className="icon" icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/makeAdmin" className="text-dark font-weight-bold text-decoration-none" >
                            <FontAwesomeIcon className="icon" icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    
                </div>
            </ul>
            </div>
            
        
    );
};

export default Sidebar;