import { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import MessageLog from '~/components/MessageLog'
import Button from '~/components/Button'
import styles from './Login.module.scss'
import { ModalContext } from '~/components/ModalProvider'
import { UserCurrentContext } from '~/components/UserCurrentContext'
const cx = classNames.bind(styles)
function Login() {
   const context = useContext(ModalContext)
   const userContext = useContext(UserCurrentContext)
   const [messageLog, setMessageLog] = useState(false)
   // const [messageSuccessLog, setMessageSuccessLog] = useState(false)
   const [inputEmail, setInputEmail] = useState('')
   const [inputPassword, setInputPassword] = useState('')

   // https://tiktok.fullstack.edu.vn/api
   // /auth/login?dongvanmanh2801@gmail.com=fmndajhgjng1
   // useEffect(() => {
   //    async function login(url = '', data = {}) {
   //       const response = await fetch(url, {
   //          method: 'POST',
   //          body: JSON.stringify(data),
   //       })
   //       return response.json()
   //    }

   //    login(
   //       `https://tiktok.fullstack.edu.vn/api/auth/login?dongvanmanh2801@gmail.com=fmndajhgjng1`,
   //       {
   //          email: 'dongvanmanh2801@gmail.com',
   //          password: 'fmndajhgjng1',
   //       },
   //    ).then((data) => console.log(data))
   // }, [])

   const handleSubmit = () => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
      } else {
         setMessageLog(!messageLog)
         return
      }

      // setDatas({
      //    email: inputEmail,
      //    password: inputPassword,
      // })

      async function login(url = '') {
         const response = await fetch(url, {
            method: 'POST',
         })
         return response.json()
      }

      login(
         `https://tiktok.fullstack.edu.vn/api/auth/login?email=${inputEmail}&password=${inputPassword}`,
      ).then((data) => {
         if (data.status_code === 401 || data.status_code === 422) {
            setMessageLog(!messageLog)
         } else {
            //old
            // userContext.userCurrent = true
            // userContext.dataUser = data

            //new
            // console.log(data)
            userContext.handleLogin()
            userContext.handleSetData(data)

            context.handleHideModal()
         }
      })
   }
   // useEffect(() => {
   //    if (messageSuccessLog) {
   //       context.handleHideModal()
   //    }
   // }, [messageSuccessLog])
   // useEffect(() => {
   //    async function login(url = '') {
   //       const response = await fetch(url, {
   //          method: 'POST',
   //       })
   //       return response.json()
   //    }

   //    login(
   //       `https://tiktok.fullstack.edu.vn/api/auth/login?email=${datas.email}&password=${datas.password}`,
   //    ).then((data) => {
   //       userContext.userCurrent = true

   //       userContext.dataUser = data
   //    })
   // }, [datas])

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
         <Link className={cx('forgotpass', 'form-login')}>Forgot password?</Link>
         {messageLog && (
            <MessageLog
               infoMessage={'Login fails because the email or password is incorrect.'}
            />
         )}
         {/* {messageSuccessLog && <MessageLog infoMessage={'Successful login..'} />} */}

         <Button
            onClick={handleSubmit}
            primary
            className={cx('btn-custom', 'form-login')}
         >
            Login
         </Button>
      </>
   )
}

export default Login
