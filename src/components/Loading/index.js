import styles from './Loading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function Loading() {
   return (
      <div className={cx('loader')}>
         <div className={cx('loader-a')}></div>
         <div className={cx('loader-b')}></div>
         <div className={cx('loader-c')}></div>
      </div>
   )
}

export default Loading
