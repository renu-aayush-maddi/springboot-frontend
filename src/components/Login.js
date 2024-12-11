
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         username: '',
//         password: ''
//     });

//     const [errorMessage, setErrorMessage] = useState(''); // State to hold error messages

//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:8080/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials)
//         })
//         .then(response => {
//             if (response.ok) {
//                 alert('Login successful');
//                 setErrorMessage(''); // Clear any previous error message
//             } else {
//                 response.text().then(text => {
//                     setErrorMessage(text); // Set the error message from the backend
//                 });
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             setErrorMessage('An error occurred. Please try again.'); // Set a generic error message
//         });
//     };

//     return (
//         <div className="login-form-container">
//             <h2>Login</h2>
//             {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Conditionally render error message */}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={credentials.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={credentials.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Log In</button>
//             </form>
//             <p>New user? <Link to="/signup">Register</Link></p>
//         </div>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         username: '',
//         password: '',
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false); // State for loading indicator
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsLoading(true); // Start loading

//         fetch('http://localhost:8080/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setIsLoading(false); // Stop loading

//                 if (data.message === 'Login successful') {
//                     setErrorMessage('');
//                     const rolePaths = {
//                         'Cultural Enthusiast': '/dashboard/cultural-enthusiast',
//                         'Content Creator': '/dashboard/content-creator',
//                         'Tour Guide': '/dashboard/tour-guide',
//                         'admin': '/dashboard/admin',
//                     };

//                     navigate(rolePaths[data.role] || '/error'); // Redirect based on role or default to error page
//                 } else {
//                     setErrorMessage(data.message || 'Invalid username or password');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 setIsLoading(false); // Stop loading on error
//                 setErrorMessage('An error occurred. Please try again.');
//             });
//     };

//     return (
//         <div className="login-form-container">
//             <h2>Login</h2>
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={credentials.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={credentials.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Logging in...' : 'Log In'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         username: '',
//         password: '',
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false); // State for loading indicator
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsLoading(true); // Start loading

//         fetch('http://localhost:8080/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setIsLoading(false); // Stop loading

//                 if (data.message === 'Login successful') {
//                     setErrorMessage('');
//                     const rolePaths = {
//                         'Cultural Enthusiast': '/dashboard/cultural-enthusiast',
//                         'Content Creator': '/dashboard/content-creator',
//                         'Tour Guide': '/dashboard/tour-guide',
//                         'Admin': '/dashboard/admin',
//                     };
//                     localStorage.setItem('role', data.role);

//                     navigate(rolePaths[data.role] || '/error'); // Redirect based on role or default to error page
//                     window.location.reload(); // Reload the page after login
//                 } else {
//                     setErrorMessage(data.message || 'Invalid username or password');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 setIsLoading(false); // Stop loading on error
//                 setErrorMessage('An error occurred. Please try again.');
//             });
//     };

//     return (
//         <section className='login-s'>
//             <div className="form-box">
//                 <div className="form-value">
//                     <form onSubmit={handleSubmit}>
//                         <h2>Login</h2>
//                         {errorMessage && <div className="error-message">{errorMessage}</div>}
//                         <div className="inputbox">
//                             <ion-icon name="person-outline"></ion-icon>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={credentials.username}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Username</label>
//                         </div>
//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={credentials.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <label>Password</label>
//                         </div>
//                         <div className="forget">
//                             <label>
//                                 <input type="checkbox" /> Remember me
//                             </label>
//                             <label>
//                                 <a href="#">Forgot password?</a>
//                             </label>
//                         </div>
//                         <button type="submit" disabled={isLoading}>
//                             {isLoading ? 'Logging in...' : 'Log in'}
//                         </button>
//                         <div className="register">
//                             <p>
//                                 Don't have an account? <a href="/signup">Register</a>
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;













import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import './login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [captchaToken, setCaptchaToken] = useState(''); // State for reCAPTCHA token
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleCaptchaChange = (token) => {
        console.log("CAPTCHA Token:", token);
        setCaptchaToken(token);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            setErrorMessage('Please complete the CAPTCHA.');
            return;
        }
        setIsLoading(true);

        // fetch('http://localhost:8080/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ ...credentials, captchaToken }), // Include CAPTCHA token
        // })

        fetch('https://springboot-backend-indian-culture.up.railway.app/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...credentials, captchaToken }),
        })
        
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);

                if (data.message === 'Login successful') {
                    setErrorMessage('');
                    const rolePaths = {
                        'Cultural Enthusiast': '/dashboard/cultural-enthusiast',
                        'Content Creator': '/dashboard/content-creator',
                        'Tour Guide': '/dashboard/tour-guide',
                        'Admin': '/dashboard/admin',
                    };
                    localStorage.setItem('role', data.role);

                    navigate(rolePaths[data.role] || '/error');
                    window.location.reload();
                } else {
                    setErrorMessage(data.message || 'Invalid username or password');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
                setErrorMessage('An error occurred. Please try again.');
            });
    };

    return (
        <section className='login-s'>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="inputbox">
                            <ion-icon name="person-outline"></ion-icon>
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <ReCAPTCHA
                            sitekey="6Lf78JQqAAAAAHt_mLIqSbC4QHZe-DEsm4azjXzK" // Replace with your reCAPTCHA site key
                            onChange={handleCaptchaChange}
                        />

                        
 <div className="forget">
                         <label>
                                 <input type="checkbox" /> Remember me
                             </label>
                             <label>
                                 <a href="#">Forgot password?</a>
                             </label>
                         </div> 
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Log in'}
                        </button>

                        <div className="register">
                            <p>
                                Don't have an account? <a href="/signup">Register</a>
                            </p>
                        </div>

                        
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;












