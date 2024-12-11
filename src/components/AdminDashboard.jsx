// import React from 'react';
// import "./dashboard.css";

// const AdminDashboard = () => {
//     return (
//         <div className="dashboard admin-dashboard">
//             <h1>Admin Dashboard</h1>
//             <ul>
//                 <li><button>Manage Users</button></li>
//                 <li><button>View Reports</button></li>
//                 <li><button>Update Events</button></li>
//                 <li><button>Moderate Content</button></li>
//             </ul>
//             <div className="analytics-section">
//                 <h2>Analytics Overview</h2>
//                 <p>Total Users: 1200</p>
//                 <p>Active Events: 15</p>
//                 <p>Pending Approvals: 8</p>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;











// import React, { useEffect, useState } from 'react';
// import './dashboard.css';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [newUser, setNewUser] = useState({ name: '', email: '' });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     // Fetch users from the database
//     useEffect(() => {
//         setLoading(true);
//         fetch('http://localhost:8080/api/users')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch users');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setUsers(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setError('Failed to load users');
//                 setLoading(false);
//             });
//     }, []);

//     // Add a new user
//     const handleAddUser = () => {
//         fetch('http://localhost:8080/api/users', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newUser),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to add user');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setUsers([...users, data]);
//                 setNewUser({ name: '', email: '' });
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setError('Failed to add user');
//             });
//     };

//     // Update a user
//     const handleUpdateUser = (id, updatedInfo) => {
//         fetch(`http://localhost:8080/api/users/${id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(updatedInfo),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to update user');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setUsers(users.map((user) => (user.id === id ? data : user)));
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setError('Failed to update user');
//             });
//     };

//     // Delete a user
//     const handleDeleteUser = (id) => {
//         fetch(`http://localhost:8080/api/users/${id}`, {
//             method: 'DELETE',
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to delete user');
//                 }
//                 setUsers(users.filter((user) => user.id !== id));
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setError('Failed to delete user');
//             });
//     };

//     return (
//         <div className="dashboard admin-dashboard">
//             <h1>Admin Dashboard</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p className="error">{error}</p>
//             ) : (
//                 <>
//                     <div className="user-management">
//                         <h2>Manage Users</h2>
//                         <ul>
//                             {users.map((user) => (
//                                 <li key={user.id}>
//                                     {user.name} ({user.email})
//                                     <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                     <button
//                                         onClick={() =>
//                                             handleUpdateUser(user.id, {
//                                                 name: 'Updated Name',
//                                                 email: 'updated@example.com',
//                                             })
//                                         }
//                                     >
//                                         Update
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h3>Add New User</h3>
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             value={newUser.name}
//                             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             value={newUser.email}
//                             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//                         />
//                         <button onClick={handleAddUser}>Add User</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;












import React, { useEffect, useState } from 'react';
import './dashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);
    const [editingUser, setEditingUser] = useState({});

    const apiBaseUrl = 'https://springboot-backend-indian-culture.up.railway.app/auth/users';


    // Fetch users from the database
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setLoading(true);
        fetch(apiBaseUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
                setError('');
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to load users');
                setLoading(false);
            });
    };

    // Add a new user
   const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.role) {
        alert("Username, email, and role are required");
        return;
    }

    fetch('https://springboot-backend-indian-culture.up.railway.app/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((data) => {
                    throw new Error(data.message || 'Failed to add user');
                });
            }
            return response.json();
        })
        .then(() => {
            alert('User added successfully!');
            fetchUsers(); // Refresh user list
            setNewUser({ username: '', email: '', role: '', phoneNumber: '', password: '' });
        })
        .catch((error) => alert(error.message));
};

    
    
    // Update a user
    const handleUpdateUser = () => {
        if (!editingUser.name || !editingUser.email) {
            setError('Name and email are required');
            return;
        }
        setLoading(true);
        fetch(`${apiBaseUrl}/${editingUserId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingUser),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(users.map((user) => (user.id === editingUserId ? data : user)));
                setEditingUserId(null);
                setEditingUser({});
                setLoading(false);
                setError('');
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to update user');
                setLoading(false);
            });
    };

    // Delete a user
    const handleDeleteUser = (id) => {
        setLoading(true);
        fetch(`${apiBaseUrl}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                setUsers(users.filter((user) => user.id !== id));
                setLoading(false);
                setError('');
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to delete user');
                setLoading(false);
            });
    };

    const handleEditUser = (user) => {
        setEditingUserId(user.id);
        setEditingUser(user);
    };

    return (
        <div className="dashboard admin-dashboard">
            <h1>Admin Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {error && <p className="error">{error}</p>}

                    <div className="user-management">
                        <h2>Manage Users</h2>
                        <ul>
                            {users.map((user) => (
                                <li key={user.id}>
{editingUserId === user.id ? (
    <>
        <input
            type="text"
            value={editingUser.username}
            onChange={(e) =>
                setEditingUser({ ...editingUser, username: e.target.value })
            }
        />
        <input
            type="text"
            value={editingUser.phoneNumber}
            onChange={(e) =>
                setEditingUser({ ...editingUser, phoneNumber: e.target.value })
            }
        />
        <input
            type="password"
            value={editingUser.password}
            onChange={(e) =>
                setEditingUser({ ...editingUser, password: e.target.value })
            }
        />
        <select
            value={editingUser.role}
            onChange={(e) =>
                setEditingUser({ ...editingUser, role: e.target.value })
            }
        >
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        <input
            type="email"
            value={editingUser.email}
            onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
            }
        />
        <button onClick={handleUpdateUser}>Save</button>
        <button onClick={() => setEditingUserId(null)}>Cancel</button>
    </>
) : (
    <>
        {user.username} ({user.email})
        <button onClick={() => handleEditUser(user)}>Edit</button>
        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
    </>
)}

                                </li>
                            ))}
                        </ul>
                        <h3>Add New User</h3>
<input
    type="text"
    placeholder="Username"
    value={newUser.username}
    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
/>
<input
    type="text"
    placeholder="Phone Number"
    value={newUser.phoneNumber}
    onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
/>
<input
    type="password"
    placeholder="Password"
    value={newUser.password}
    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
/>
<select
    value={newUser.role}
    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
>
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
</select>
<input
    type="email"
    placeholder="Email"
    value={newUser.email}
    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
/>
<button onClick={handleAddUser}>Add User</button>

                    </div>
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
