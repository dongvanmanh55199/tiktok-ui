import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserCurrentContext } from '~/components/UserCurrentContext'
import { Context } from '~/components/PathContext'

function Logout() {
   const userContext = useContext(UserCurrentContext)
   const contextPath = useContext(Context)
   userContext.handleLogout()
   userContext.handleSetData({})
   // useEffect(() => {
   //    async function login(url = '') {
   //       const response = await fetch(url, {
   //          method: 'POST',
   //          headers: {
   //             Authorization: 'Bearer ' + contextUser?.dataUser?.meta?.token,
   //          },
   //       })
   //       return response.json()
   //    }

   //    login(`https://tiktok.fullstack.edu.vn/api/auth/logout`).then((data) => {
   //       if (data.tatus_code == 204) {
   //          alert('Logout thanh cong')
   //          contextUser.userCurrent = false
   //          contextUser.dataUser = {}
   //       }
   //    }, [])
   // }, [])

   return <Navigate to={contextPath.path} />

   // {{API_ENDPOINT}}/api/auth/logout
   // return <Navigate to="/" />
}

export default Logout
