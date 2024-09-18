import React, { useEffect, useState } from 'react';
import "./HealthPage.css";
import {useNavigate, useParams } from 'react-router-dom';
import { getSingleRecord, updateData } from '../services/AllApi';


const HealthDetails = () => {
  const [task, setTask] = useState({
    date: '',
    temp: '',
    bloodPressure: '',
    heartRate: ''
  });

  const navigate = useNavigate();
  const {id} = useParams();
  console.log("parmas id",id)
  
  const handleChange = (e) => {
    const { name, value} = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await updateData(id,task);
       if (response) {
        console.log(response)
        navigate("/record")
      }
     
    } catch (error) {
      console.error("Error creating task:", error);  
    }
  };
  
  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await getSingleRecord(id);
         setTask(res.data.singleData[0])
        console.log(res)  
        
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    getAllData();
  }, []);
  return (
    <> 
    
    <div className="task-page">
      <div className="task-form-container">
        <h2>Update Record </h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="bloodPressure">bloodPressure</label>
            <input
              type="text"
              id="bloodPressure"
              name="bloodPressure"
              value={task.bloodPressure}
              onChange={handleChange}          
            />
          </div>
          <div className="form-group">
            <label htmlFor="temperature">temperature</label>
            <input
              type="text"
              id="temp"
              name="temp"
              value={task.temp}
              onChange={handleChange}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="heartRate">heartRate</label>
            <input
               type='text'
              id="heartRate"
              name="heartRate"
              value={task.heartRate}
              onChange={handleChange}
            
            ></input>
          </div>

        
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={task.date}
              onChange={handleChange}      
            />
          </div>
          <button type="submit" className="submit-btn">update Record</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default HealthDetails;
