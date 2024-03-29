import { useContext, useState } from 'react'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import MessageLog from '~/components/MessageLog'
import { ModalContext } from '~/components/ModalProvider'
import { UserCurrentContext } from '~/components/UserCurrentContext'
import Button from '~/components/Button'
import styles from './Register.module.scss'
const cx = classNames.bind(styles)
function Register() {
   const context = useContext(ModalContext)
   const userContext = useContext(UserCurrentContext)

   const [inputEmail, setInputEmail] = useState('')
   const [inputPassword, setInputPassword] = useState('')
   const [messageLog, setMessageLog] = useState(false)

   const handleSubmit = () => {
      // setDatas({
      //    email: inputEmail,
      //    password: inputPassword,
      // })

      async function register(url = '') {
         const response = await fetch(url, {
            method: 'POST',
         })
         return response.json()
      }

      register(
         `https://tiktok.fullstack.edu.vn/api/auth/register?type=email&email=${inputEmail}&password=${inputPassword}`,
      ).then((data) => {
         if (data.status_code == 409 || data.status_code == 422) {
            setMessageLog(!messageLog)
            // alert('Invalid email address or an account already exists. ')
         }
         if (data.data) {
            // alert('Account Created Successfully.')
            context.handleHideModal()
         }
         // if (data.status_code == 401) {
         //    alert('Login fails because the email or password is incorrect.')
         // } else {
         //    userContext.userCurrent = true
         //    userContext.dataUser = data
         //    context.handleHideModal()
         // }
      })
   }
   return (
      <>
         <div className={cx('email', 'form-login')}>
            <div className={cx('email-label')}>Email</div>
            <input
               value={inputEmail}
               placeholder="Email..."
               type="email"
               className={cx('email-input')}
               onChange={(e) => setInputEmail(e.target.value)}
            />
         </div>
         <div className={cx('password', 'form-login')}>
            <div className={cx('password-label')}>Password</div>
            <input
               value={inputPassword}
               placeholder="Password..."
               className={cx('password-input')}
               type="password"
               onChange={(e) => setInputPassword(e.target.value)}
            />
         </div>
         {messageLog && (
            <MessageLog
               infoMessage={'Invalid email address or an account already exists. .'}
            />
         )}
         <Button
            onClick={handleSubmit}
            className={cx('btn-custom', 'form-login')}
            primary
         >
            Register
         </Button>
      </>
   )
}

export default Register
