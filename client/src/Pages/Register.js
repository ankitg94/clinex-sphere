import React, { useState } from 'react';
import "./Form.css"
import Navbar from '../component/Navbar';
import { register } from '../services/AllApi';
import { useNavigate } from 'react-router-dom';

const Register= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
const navigate =useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const registerdata =await register(formData)
    if(registerdata){
       navigate("/login")
    }
    else{
        alert("you are already register please login")
    }
    
  };

  return (
    <> 
    <Navbar/>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="responsive-form">
        <h2>Register</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

export default Register;
