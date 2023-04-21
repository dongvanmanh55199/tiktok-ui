import { useContext, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ConfirmComment.module.scss'
import { ConfirmContext } from '../ConfirmContext'
import { UserCurrentContext } from '../UserCurrentContext'
import Button from '../Button/Button'
import MessageLog from '../MessageLog'

const cx = classNames.bind(styles)
function ConfirmComment({ idCmt }) {
   // https://tiktok.fullstack.edu.vn/api/comments/2243
   const confirmContext = useContext(ConfirmContext)
   const userContext = useContext(UserCurrentContext)
   const [messageLog, setMessageLog] = useState(false)
   const handleDelete = () => {
      fetch(`https://tiktok.fullstack.edu.vn/api/comments/${idCmt}`, {
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
         confirmContext.toggleConfirmComment()
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
            <Button
               onClick={confirmContext.toggleConfirmComment}
               className={cx('cancel')}
            >
               Cancel
            </Button>
         </div>
         {messageLog && <MessageLog infoMessage={'Successfully deleted.'} />}
      </div>
   )
}

export default ConfirmComment
