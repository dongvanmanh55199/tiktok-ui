import classNames from 'classnames/bind'
import styles from './MessageLog.module.scss'
const cx = classNames.bind(styles)
function MessageLog({ infoMessage }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>{infoMessage}</div>
      </div>
   )
}

export default MessageLog
