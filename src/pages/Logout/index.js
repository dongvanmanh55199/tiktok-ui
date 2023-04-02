import { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserCurrentContext } from '~/components/UserCurrentContext'
function Logout() {
   const contextUser = useContext(UserCurrentContext)
   contextUser.userCurrent = false
   contextUser.dataUser = {}
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
   return <Navigate to="/" />
   // {{API_ENDPOINT}}/api/auth/logout
   // return <Navigate to="/" />
}

export default Logout
