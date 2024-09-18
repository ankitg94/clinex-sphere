import React, { useState } from 'react';
import "./Form.css"
import Navbar from '../component/Navbar';
import { login } from '../services/AllApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate =useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    const loginData =await login(formData)
    if(loginData){
    navigate("/record")
    }
    else{
    alert("please check your email or passowrd")
    }
    
  };

  return (
    <> 
    <Navbar/>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="responsive-form">
        <h2>Login</h2>

        

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;
