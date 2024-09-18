import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HealthPage from './Pages/HealthPage'
import HealthDetails from './Pages/healthDetails'
import PrivateRoute from './PrivateRoute'
import PageNotFound from './PagenotFound'

const App = () => {
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Navbar/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path ="/register" element={<Register/>}/> 
       <Route path='/record' element={<PrivateRoute><HealthPage/></PrivateRoute> }/>
       <Route path="update/:id" element={<PrivateRoute><HealthDetails/></PrivateRoute>}/>
       <Route path="*" element={<PageNotFound/>}/> 
      </Routes>

    </>
  )
}

export default App
