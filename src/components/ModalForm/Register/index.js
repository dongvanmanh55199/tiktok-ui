import { useContext, useState } from 'react'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

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
         if (data.status_code == 409) {
            alert('Invalid email address or an account already exists. ')
         }
         if (data.data) {
            alert('Account Created Successfully.')

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
         <div className={cx('email')}>
            <div className={cx('email-label')}>Email</div>
            <input
               value={inputEmail}
               placeholder="Email..."
               type="email"
               className={cx('email-input')}
               onChange={(e) => setInputEmail(e.target.value)}
            />
         </div>
         <div className={cx('password')}>
            <div className={cx('password-label')}>Password</div>
            <input
               value={inputPassword}
               placeholder="Password..."
               className={cx('password-input')}
               type="password"
               onChange={(e) => setInputPassword(e.target.value)}
            />
         </div>
         <Button onClick={handleSubmit} to="/" className={cx('btn-custom')} primary>
            Register
         </Button>
      </>
   )
}

export default Register
