import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      setLocalStorage();
        const {employeesData, AdminData} = getLocalStorage();
        setUserData({employeesData, AdminData});
    },[]);
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider