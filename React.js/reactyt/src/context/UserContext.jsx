import React from 'react'

export const DataContext = React.createContext();

const UserContext = ({children}) => {
    // const userName = "Abdul";
  return (
    <div>
      <DataContext.Provider>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
