import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserCurrentContext } from '~/components/UserCurrentContext'
function Logout() {
   const userCurrent = useContext(UserCurrentContext)
   userCurrent.userCurrent = false
   userCurrent.dataUser = {}
}

export default Logout
