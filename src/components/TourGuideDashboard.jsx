import React from 'react';

const TourGuideDashboard = () => {
    return (
        <div className="dashboard guide-dashboard">
            <h1>Tour Guide Dashboard</h1>
            <div>
                <h2>Scheduled Tours</h2>
                <ul>
                    <li>Old Delhi Heritage Walk - December 2nd</li>
                    <li>Kerala Backwaters Tour - December 10th</li>
                    <li>Golden Triangle Tour - December 18th</li>
                </ul>
            </div>
            <div>
                <h2>Visitor Feedback</h2>
                <p>"Amazing experience! The guide was very knowledgeable."</p>
                <p>"Loved the way the history of Jaipur was explained."</p>
            </div>
        </div>
    );
};

export default TourGuideDashboard;
