import { useState, createContext } from 'react'

const UserCurrentContext = createContext()

function UserCurrent({ children }) {
   const [userCurrent, setUserCurrent] = useState(false)

   const value = {
      userCurrent,
      dataUser: {},
      // setUser: setUserCurrent(!userCurrent),
   }

   return (
      <UserCurrentContext.Provider value={value}>{children}</UserCurrentContext.Provider>
   )
}

export { UserCurrent, UserCurrentContext }
