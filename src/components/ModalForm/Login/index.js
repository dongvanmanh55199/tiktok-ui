import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import styles from './Login.module.scss'
const cx = classNames.bind(styles)
function Login() {
   return (
      <>
         <div className={cx('email')}>
            <div className={cx('email-label')}>Email</div>
            <input placeholder="Email..." type="email" className={cx('email-input')} />
         </div>
         <div className={cx('password')}>
            <div className={cx('password-label')}>Password</div>
            <input
               placeholder="Password..."
               className={cx('password-input')}
               type="password"
            />
         </div>
         <Link className={cx('forgotpass')}>Forgot password?</Link>

         <Button primary className={cx('btn-custom')}>
            Login
         </Button>
      </>
   )
}

export default Login
