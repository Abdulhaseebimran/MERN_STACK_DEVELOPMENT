import React, { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
        if (name === '' || email === '' || password === '') {
            alert('Please fill out all the fields');
        } else {
            alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
        }
    }
    const handleReset = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">User Form Handling</h1>
    <form action="">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder='Enter your name'
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder='Enter your email'
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder='Enter your password'
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="reset"
          className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default UserForm
