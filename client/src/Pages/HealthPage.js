import React, { useEffect, useState } from 'react';
import "./HealthPage.css";
import {useNavigate } from 'react-router-dom';
import { createRecord, deleteData, getALLRecord } from '../services/AllApi';


const HealthPage = () => {
  const [task, setTask] = useState({
    date: '',
    heartRate: '',
    bloodPressure: '',
    temp: ''
  });

  const [rec, setRec] = useState([]);
  const navigate = useNavigate();

  var getAllData = async () => {
    try {
      const res = await getALLRecord();
      setRec(res);  
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRecord(task);
      if (response) {
        alert("Task created successfully!");
         getAllData();
        
      }
      setTask({
        date: '',
        heartRate: '',
        bloodPressure: '',
        temp: ''
      });
    } catch (error) {
      console.error("Error creating task:", error);
      
    }
  };
  
  const editData = (id)=>{
    navigate(`/update/${id}`)
  }   
  
      const DeleteData = async(id)=>{
      const res =await deleteData(id)
      if(res){
        setRec((prevRec) => prevRec.filter((item) => item._id !== id));           
    }
    }

    
  useEffect(() => {  
    getAllData();
  }, []);
    

  return (
    <> 
    
    <div className="task-page">
      <div className="task-form-container">
        <h2>Add Record </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bloodPressure">bloodPressure</label>
            <input
              type="text"
              id="bloodPressure"
              name="bloodPressure"
              value={task.bloodPressure}
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
            />
          </div>
          <button type="submit" className="submit-btn">Add Record</button>
        </form>
      </div>

      <div className="task-list-container">
        <h2>My record</h2>
        <ul className="task-list">
          {rec && rec.map((taskItem) =>{ 
            const mduedate = new Date(taskItem.date)
            const formattedDate = `${mduedate.getDate()}-${mduedate.getMonth() + 1}-${mduedate.getFullYear()}`
               return (
            <li key={taskItem._id} className="task-item">
              <h3>Date: {formattedDate}</h3>
              <p>time:{new Date(taskItem.createdAt).toLocaleTimeString()}</p>
              <p>Temp: {taskItem.temp} degree/c </p>
              <p>bloodPressure: {taskItem.bloodPressure} </p>
              <p>heartRate: {taskItem.heartRate} hz/sec</p>
              <button type="submit" className="submit-btn2" onClick={()=>editData(taskItem._id) }>edit</button>
              <button type="submit" className="submit-btn3" onClick={()=>DeleteData(taskItem._id)}>Delete</button>
            </li>
          )})}
        </ul>
      </div>
    </div>
    </>
  );
};

export default HealthPage;
