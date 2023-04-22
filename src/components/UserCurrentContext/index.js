import { useState, createContext } from 'react'

const UserCurrentContext = createContext()

function UserCurrent({ children }) {
   const [userCurrent, setUserCurrent] = useState(false)
   const [dataUser, setDataUser] = useState({})
   const [refreshApiCmt, setRefreshApiCmt] = useState(false)
   const [refreshApiFollow, SetRefreshApiFollow] = useState(false)
   const handleLogin = () => {
      setUserCurrent(true)
   }
   const handleLogout = () => {
      setUserCurrent(false)
   }
   const handleSetData = (data) => {
      setDataUser(data)
   }
   const handleRefreshApiCmt = () => {
      setRefreshApiCmt(!refreshApiCmt)
   }
   const handleRefreshApiFollow = () => {
      SetRefreshApiFollow(!refreshApiFollow)
   }

   const value = {
      refreshApiFollow,
      handleRefreshApiFollow,
      refreshApiCmt,
      handleRefreshApiCmt,
      userCurrent,
      handleLogin,
      handleLogout,
      handleSetData,
      dataUser,
      // dataUser: {},
   }

   return (
      <UserCurrentContext.Provider value={value}>{children}</UserCurrentContext.Provider>
   )
}

export { UserCurrent, UserCurrentContext }
