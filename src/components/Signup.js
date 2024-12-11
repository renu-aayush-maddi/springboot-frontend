// // import React, { useState } from 'react';
// // import './login-signup.css';

// // const Signup = () => {
// //     const [formData, setFormData] = useState({
// //         username: '',
// //         email: '',
// //         phoneNumber: '',
// //         password: '',
// //         confirmPassword: ''
// //     });

// //     const handleChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         // Validate password and confirm password
// //         if (formData.password !== formData.confirmPassword) {
// //             alert("Passwords do not match");
// //             return;
// //         }

// //         // Send data to the backend
// //         fetch('http://localhost:8080/auth/signup', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify({
// //                 username: formData.username,
// //                 email: formData.email,
// //                 phoneNumber: formData.phoneNumber,
// //                 password: formData.password
// //             })
// //         })
// //         .then(response => response.text())
// //         .then(data => {
// //             alert(data);
// //         })
// //         .catch(error => {
// //             console.error('Error:', error);
// //         });
// //     };

// //     return (
// //         <div className="form-container">
// //             <h2>Signup</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Username:</label>
// //                     <input
// //                         type="text"
// //                         name="username"
// //                         value={formData.username}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Email:</label>
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Phone Number:</label>
// //                     <input
// //                         type="text"
// //                         name="phoneNumber"
// //                         value={formData.phoneNumber}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password:</label>
// //                     <input
// //                         type="password"
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Retype Password:</label>
// //                     <input
// //                         type="password"
// //                         name="confirmPassword"
// //                         value={formData.confirmPassword}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit">Sign Up</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Signup;



















// import React, { useState } from 'react';
// import './signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate password and confirm password
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         // Send data to the backend
//         fetch('http://localhost:8080/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 username: formData.username,
//                 email: formData.email,
//                 phoneNumber: formData.phoneNumber,
//                 password: formData.password
//             })
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <div className="signup-form-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Phone Number:</label>
//                     <input
//                         type="text"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Retype Password:</label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;














// import React, { useState } from 'react';
// import './signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//         role: '' // New field for role
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         fetch('http://localhost:8080/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <div className="signup-form-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Phone Number:</label>
//                     <input
//                         type="text"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Retype Password:</label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Role:</label>
//                     <select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select a role</option>
//                         <option value="Cultural Enthusiast">Cultural Enthusiast</option>
//                         <option value="Content Creator">Content Creator</option>
//                         <option value="Tour Guide">Tour Guide</option>
//                         <option value="admin">admin</option>
//                     </select>
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//         role: '' // New field for role
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
//         if (formData.password.length < 6) {
//             alert ("Password must be at least 6 characters long");
//             return;
//         }

//         if (formData.phoneNumber.length !== 10 || isNaN(formData.phoneNumber)) {
//             alert ("Phone number must be exactly 10 digits");
//             return;
//         }


//         fetch('http://localhost:8080/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <section className='abc'>
//             <div className="form-box1">
//                 <div className="form-value">
//                     <form onSubmit={handleSubmit}>
//                         <h2>Signup</h2>
//                         <div className="inputbox">
//                             <ion-icon name="person-outline"></ion-icon>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Username</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="mail-outline"></ion-icon>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Email</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="call-outline"></ion-icon>
//                             <input
//                                 type="text"
//                                 name="phoneNumber"
//                                 value={formData.phoneNumber}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Phone Number</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Password</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Retype Password</label>
//                         </div>
//                         <div className="inputbox">
                            
//                             <select
//                                 name="role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select a role</option>
//                                 <option value="Cultural Enthusiast">Cultural Enthusiast</option>
//                                 <option value="Content Creator">Content Creator</option>
//                                 <option value="Tour Guide">Tour Guide</option>
//                                 <option value="Admin">Admin</option>
//                             </select>
//                         </div>
//                         <button type="submit">Sign Up</button>
//                     </form>
//                     <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Signup;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './signup.css';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//         role: '' // New field for role
//     });

//     const [error, setError] = useState(''); // To handle error messages
//     const navigate = useNavigate(); // Hook to navigate to another page

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const validateForm = () => {
//         if (formData.password.length < 6) {
//             return "Password must be at least 6 characters long";
//         }

//         if (formData.phoneNumber.length !== 10 || isNaN(formData.phoneNumber)) {
//             return "Phone number must be exactly 10 digits";
//         }

//         if (formData.password !== formData.confirmPassword) {
//             return "Passwords do not match";
//         }

//         return ""; // No errors
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Validate form fields
//         const validationError = validateForm();
//         if (validationError) {
//             setError(validationError);
//             return;
//         }

//         // If no validation errors, reset error message and proceed with the signup
//         setError('');

//         fetch('http://localhost:8080/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(data);  // Optionally display a success message
//             // After successful signup, redirect to the login page
//             navigate('/login');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             setError('An error occurred. Please try again later.');
//         });
//     };

//     return (
//         <section className='abc'>
//             <div className="form-box1">
//                 <div className="form-value">
//                     <form onSubmit={handleSubmit}>
//                         <h2>Signup</h2>
//                         {error && <p className="error-message">{error}</p>}
//                         <div className="inputbox">
//                             <ion-icon name="person-outline"></ion-icon>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Username</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="mail-outline"></ion-icon>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Email</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="call-outline"></ion-icon>
//                             <input
//                                 type="text"
//                                 name="phoneNumber"
//                                 value={formData.phoneNumber}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Phone Number</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Password</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Retype Password</label>
//                         </div>
//                         <div className="inputbox">
//                             <select
//                                 name="role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select a role</option>
//                                 <option value="Cultural Enthusiast">Cultural Enthusiast</option>
//                                 <option value="Content Creator">Content Creator</option>
//                                 <option value="Tour Guide">Tour Guide</option>
//                                 <option value="Admin">Admin</option>
//                             </select>
//                         </div>
//                         <button type="submit">Sign Up</button>
//                     </form>
//                     <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Signup;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        role: '' // New field for role
    });

    const [error, setError] = useState(''); // To handle error messages
    const navigate = useNavigate(); // Hook to navigate to another page

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            return "Password must be at least 6 characters long";
        }

        if (formData.phoneNumber.length !== 10 || isNaN(formData.phoneNumber)) {
            return "Phone number must be exactly 10 digits";
        }

        if (formData.password !== formData.confirmPassword) {
            return "Passwords do not match";
        }

        return ""; // No errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form fields
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        // If no validation errors, reset error message and proceed with the signup
        setError('');

        fetch('https://springboot-backend-indian-culture.up.railway.app/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);  // Optionally display a success message
            // After successful signup, redirect to the login page
            navigate('/login');
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        });
    };

    return (
        <section className='abc'>
            <div className="form-box1">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Signup</h2>
                        {error && <p className="error-message">{error}</p>}
                        <div className="inputbox">
                            <ion-icon name="person-outline"></ion-icon>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="call-outline"></ion-icon>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            <label>Phone Number</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <label>Retype Password</label>
                        </div>
                        <div className="inputbox">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a role</option>
                                <option value="Cultural Enthusiast">Cultural Enthusiast</option>
                                <option value="Content Creator">Content Creator</option>
                                <option value="Tour Guide">Tour Guide</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Signup;
