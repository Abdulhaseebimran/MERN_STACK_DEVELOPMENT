import React, {useState} from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // const [firstName, setFirstName] = useState('');

  // if(!data){
  //   setLocalStorage("Admin");
  // }else{
  //   setFirstName(data.firstName);
  // }


  const loggedOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>username 👋</span> </h1>
      <button onClick={loggedOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm font-medium hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header
