import React from 'react';
import "./dashboard.css";

const CulturalEnthusiastDashboard = () => {
    return (
        <div className="dashboard enthusiast-dashboard">
            <h1>Cultural Enthusiast Dashboard</h1>
            <div>
                <h2>Upcoming Cultural Events</h2>
                <ul>
                    <li>Diwali Celebration - October 28th</li>
                    <li>Rajasthan Folk Music Night - November 5th</li>
                    <li>Classical Dance Workshop - November 15th</li>
                </ul>
            </div>
            <div>
                <h2>Featured Heritage Sites</h2>
                <ul>
                    <li>Taj Mahal</li>
                    <li>Qutub Minar</li>
                    <li>Hampi Monuments</li>
                </ul>
            </div>
        </div>
    );
};

export default CulturalEnthusiastDashboard;
