import React from 'react';
import "./dashboard.css";

const ContentCreatorDashboard = () => {
    return (
        <div className="dashboard creator-dashboard">
            <h1>Content Creator Dashboard</h1>
            <div>
                <h2>Create New Content</h2>
                <button>Upload Photos</button>
                <button>Write Articles</button>
                <button>Submit Videos</button>
            </div>
            <div>
                <h2>My Contributions</h2>
                <ul>
                    <li>Article: The Art of Rangoli - Approved</li>
                    <li>Photo: Holi Celebrations - Pending</li>
                    <li>Video: Indian Cuisine Explained - Approved</li>
                </ul>
            </div>
        </div>
    );
};

export default ContentCreatorDashboard;
