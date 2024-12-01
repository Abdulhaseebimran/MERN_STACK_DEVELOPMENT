import {useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

function App() {
  const [users, setUsers] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUsers(userData.role);
      setLoggedInUserData(userData.data);
    }

  }, []);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser"); 
  //     if (loggedInUser) {
  //       setUsers(loggedInUser.role);
  //     }   
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "Admin@admin.com" && password == "123") {
      setUsers('Admin');
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'Admin'}));
    }else if(userData){
      const employee = userData.find((e)=> email == e.email && password == e.password);
      if (employee) {
        setUsers('employees');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employees', data:employee}));
      }
    }
    else{
      alert('Invalid email or password');
    }
  }

  useEffect(() => {
    // handleLogin('Admin@admin.com', '123');
  });
  
  return (
    <div>
     {!users ? <Login handleLogin={handleLogin} /> : ''}
     {users === 'Admin' ? (<AdminDashboard changeUser={setUsers} />) : users === 'employees' ? (<EmployeeDashboard data={loggedInUserData} changeUser={setUsers}/>
     ): null}
     {/* <EmployeeDashboard /> */}
     {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
