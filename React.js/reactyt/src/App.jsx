import React from 'react'
import Counter from './Components/Counter'
import UserForm from './Components/UserForm'
import Navbar from './Components/Navbar'
import Ex from "./Components/Ex"
import UserApi from './Components/UserApi'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      {/* <Counter /> */}
      {/* <UserForm /> */}
      {/* <Navbar /> */}
      {/* <Ex name= "Example"/> */}
      <h1>Hello worlds</h1>
      {/* <UserApi/> */}
      <Routes>
        <Route path="/" element={<Ex name="Example" />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/ex" element={<Ex name="Example" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="api" element={<UserApi />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
