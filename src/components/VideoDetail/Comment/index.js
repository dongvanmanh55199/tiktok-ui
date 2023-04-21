import classNames from 'classnames/bind'
import { useContext, useRef, useState } from 'react'

import { UserCurrentContext } from '~/components/UserCurrentContext'
import Button from '~/components/Button/Button'
import styles from './Comment.module.scss'
const cx = classNames.bind(styles)
function Comment({ uuidVideo }) {
   const [commentInput, setCommentInput] = useState()
   const userContext = useContext(UserCurrentContext)
   const inputRef = useRef()

   //    https://tiktok.fullstack.edu.vn/api/videos/0f93e765-97ec-4d73-ae95-c3888060c2c5/comments

   const handleSubmit = () => {
      fetch(
         `https://tiktok.fullstack.edu.vn/api/videos/${uuidVideo}/comments?comment=${commentInput}`,
         {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               // 'Content-Type': 'multipart/form-data',
               Authorization: 'Bearer ' + userContext?.dataUser?.meta?.token,
            },
         },
      ).then((data) => {
         if (data.status === 200) {
            inputRef.current.value = ''
            inputRef.current.focus()
         }
      })
   }
   return (
      <div className={cx('video-post')}>
         <div className={cx('video-post-inner')}>
            <input
               ref={inputRef}
               className={cx('cmt-input')}
               value={commentInput}
               onChange={(e) => setCommentInput(e.target.value)}
               placeholder="Add comment..."
               type="text"
            />
            <Button onClick={handleSubmit} small className={cx('cmt-btn')}>
               Post
            </Button>
         </div>
      </div>
   )
}

export default Comment
