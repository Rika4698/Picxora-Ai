import React, { createContext } from 'react'


export const dataContext = createContext()

function UserContext({children}) {
  return (
    <div>
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext