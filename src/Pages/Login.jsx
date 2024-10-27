import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!formData.username || !formData.password) {
        alert("Please fill in both username and password.");
        return;
    }

    const loginData = {
        username: formData.username,
        password: formData.password,
    };

    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();
        if (response.ok) {
            // Handle successful login
            if (data.role === 'admin') {
                console.log("Admin logged in successfully.");
                navigate('/home'); 
            } else if (data.role === 'cadet') {
                console.log("Cadet logged in successfully.");
                navigate('/profile'); // Redirect to student dashboard
            }
            // Clear form fields
            setFormData({ username: '', password: '' });
        } else {
            // Display error message in a user-friendly way
            alert(data.error || "Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("There was an error during login. Please try again.");
    }
};


  return (
    <div>
      <div className='login-main' id="cover">
        <div className='log-cta'>
          <img className="header-logo" src="rotc.png" alt="rotc"/>
          <div>
            <h1 id='cta-type2'>UALC-ROTC Management System</h1>
            <h1 id='cta-type1'>Your country needs you. <br /> Step up to the challenge!</h1>
          </div>
          
        </div>
        <div className='log-fill'>
          <div className='log-fil'>
            <form className='frm-org-log' onSubmit={handleSubmit}>
              <div className='inpt'>
                <h3>USERNAME</h3>
                <input 
                  id="log-inpt" 
                  type="text" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <br />

              <div className='inpt'>
                <h3>PASSWORD</h3>
                <input 
                  id="log-inpt" 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <br />

              {/* Removed Link wrapping the submit button */}
              <div className='log-btn-cont'>
                <button className='log-btn' type="submit"><h3>LOG IN</h3></button>
              </div>
            </form>
          </div>

          <div className='reg-btn-cont'>
            <h4>Not yet a member?</h4>
            <Link to="/register">
              <button className='reg-btn'><h3>REGISTER NOW!</h3></button>
            </Link>
          </div>
          <Link to="/home">
            <div>
              <h4>Admin Login</h4>
              <p>Attach QR Here</p>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
