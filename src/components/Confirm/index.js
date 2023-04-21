import { useContext, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Confirm.module.scss'
import { ConfirmContext } from '../ConfirmContext'
import { UserCurrentContext } from '../UserCurrentContext'
import Button from '../Button/Button'
import MessageLog from '../MessageLog'

const cx = classNames.bind(styles)
function Confirm({ idVideo }) {
   // https://tiktok.fullstack.edu.vn/api/videos/2095
   const confirmContext = useContext(ConfirmContext)
   const userContext = useContext(UserCurrentContext)
   const [messageLog, setMessageLog] = useState(false)
   const handleDelete = () => {
      fetch(`https://tiktok.fullstack.edu.vn/api/videos/${idVideo}`, {
         method: 'DELETE',
         headers: {
            Accept: 'application/json',
            // 'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + userContext?.dataUser?.meta?.token,
         },
      }).then((data) => {
         console.log(data.status)
         if (data.status === '204') {
            setMessageLog(!messageLog)
         }
         confirmContext.toggleConfirm()
      })
      //   confirmContext.toggleConfirm()
   }
   // console.log(confirmContext)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('overlay')}></div>
         <div className={cx('container')}>
            <div className={cx('title')}>{confirmContext.title}</div>
            {/* <div className={cx('delete')}>Delete</div>
            <div className={cx('cancel')}>Cancel</div> */}
            <Button onClick={handleDelete} className={cx('delete')}>
               {confirmContext.type}
            </Button>
            <Button onClick={confirmContext.toggleConfirm} className={cx('cancel')}>
               Cancel
            </Button>
         </div>
         {messageLog && <MessageLog infoMessage={'Successfully deleted.'} />}
      </div>
   )
}

export default Confirm
