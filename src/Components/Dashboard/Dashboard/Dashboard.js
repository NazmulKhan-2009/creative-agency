import React from 'react';
import { useParams } from 'react-router-dom';
import Order from '../Order/Order';
// import React, { useContext, useEffect, useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

// import { UserContext } from '../../../App';



const Dashboard = () => {
  const {serviceKey}=useParams()
  console.log(serviceKey);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [appointments, setAppointments] = useState([]);

    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <section>
        
            <div  className="row">
                <div className="col-md-2 col-sm-4 side-style">
                    <Sidebar className="side-style" />
                </div>
                <div className="col-md-6 mx-auto col-sm-5 list-style">
                    <Order className="list-style"/>
                </div>
                
            </div>
            
        </section>
    );
};

export default Dashboard;