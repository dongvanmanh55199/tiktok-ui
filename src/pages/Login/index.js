import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '~/components/PathContext'
import Loading from '~/components/Loading'
function Login() {
   const contextPath = useContext(Context)
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

   return (
      <div>
         <Loading />
         <Navigate to={contextPath.path} />
      </div>
   )
   return <Navigate to={contextPath.path} />

   // {{API_ENDPOINT}}/api/auth/logout
   // return <Navigate to="/" />
}

export default Login
