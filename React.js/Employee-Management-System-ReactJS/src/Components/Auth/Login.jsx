import React from 'react'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log("Email" + email +  "password: " + password);
  }
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <div className='bg-slate-900 p-8 rounded-lg shadow-lg w-full max-w-md border' style={{ borderColor: 'rgb(0, 255, 255)', borderWidth: '2px' }}>
      <h2 className='text-2xl font-semibold text-white text-center mb-6'>Login</h2>
      <form action="" 
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      >
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm-2 font-medium text-gray-300'>Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
            placeholder="Enter your email" 
          />
        </div>
        <div className='mb-6'>
          <label htmlFor="password" className='block text-sm-2 font-medium text-gray-300'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full mt-1 p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
            placeholder="Enter your password" 
          />
        </div>
        <div className='mb-4'>
          <button className='w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md'>
            Login
          </button>
        </div>
      </form>
      <p className='text-center text-sm text-gray-600'>
        Forgot your password? <a href="#" className='text-blue-500 hover:underline'>Reset here</a>
      </p>
    </div>
  </div>

  )
}

export default Login
