import { useContext, useEffect, useState } from 'react'
import moment from 'moment/moment'
import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'

import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'

import { EllipsisHorizontalIcon, HeartSolidIcon, DeleteIcon, EditIcon } from '../../Icons'

import styles from './CommentContent.module.scss'

import img from '~/assets/images'
import Button from '~/components/Button/Button'

import { UserCurrentContext } from '~/components/UserCurrentContext'
import { ModalContext } from '~/components/ModalProvider'
import { ConfirmContext } from '~/components/ConfirmContext'
import ConfirmComment from '~/components/ConfirmComment'
const cx = classNames.bind(styles)
function CommentContent({ data }) {
   const userContext = useContext(UserCurrentContext)
   const modalContext = useContext(ModalContext)
   const confirmContext = useContext(ConfirmContext)
   const [idCmt, setIdCmt] = useState()
   const location = useLocation().pathname

   const [comment, setComment] = useState('')
   useEffect(() => {
      if (userContext.userCurrent) {
         fetch(
            `https://tiktok.fullstack.edu.vn/api/videos/${
               location.split('/')[3]
            }/comments`,
            {
               headers: {
                  Accept: 'application/json',
                  // 'Content-Type': 'multipart/form-data',
                  Authorization: 'Bearer ' + userContext?.dataUser?.meta?.token,
                  // Authorization: 'basic ' + props.getToken(),
               },
            },
         )
            .then((res) => res.json())
            .then((data) => {
               if (data.status_code === 401) {
                  console.log('chua login')
               }
               setComment(data)
            })
      }
   }, [userContext.refreshApiCmt])
   return (
      <div className={cx('cmt')}>
         {userContext.userCurrent ? (
            comment?.data?.map((cmtItem, index) => (
               <div key={index} className={cx('cmt-inner')}>
                  <div className={cx('cmt-l')}>
                     <img
                        className={cx('cmt-avt')}
                        src={cmtItem?.user?.avatar}
                        onError={(e) => (e.target.src = img.noImage)}
                     />
                     <div className={cx('cmt-info')}>
                        <Link
                           to={`/@${cmtItem?.user?.nickname}`}
                           className={cx('cmt-nickname')}
                        >
                           {/* {cmtItem?.user?.nickname} */}
                           {cmtItem?.user?.first_name
                              ? cmtItem?.user?.first_name + ' ' + cmtItem?.user?.last_name
                              : cmtItem?.user?.nickname}
                           {cmtItem?.user?.id === data?.user_id && (
                              <span className={cx('creator')}> - Creator</span>
                           )}
                        </Link>
                        <div className={cx('cmt-text')}>{cmtItem?.comment}</div>
                        <div className={cx('cmt-time')}>
                           {moment(new Date(cmtItem?.created_at)).fromNow()}
                           {/* {cmtItem?.created_at}
                           {dateTimeAgo} */}
                           {/* {Showtime} */}
                           <span className={cx('cmt-info')}> Reply</span>
                        </div>
                     </div>
                  </div>
                  <div className={cx('cmt-r')}>
                     {userContext.dataUser?.data?.id === cmtItem.user.id && (
                        <HeadlessTippy
                           interactive
                           delay={[0, 300]}
                           offset={[12, 8]}
                           placement="left"
                           render={(attrs) => (
                              <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                                 <PopperWrapper className={cx('custom-popper')}>
                                    <Button
                                       onClick={() => {
                                          setIdCmt(cmtItem.id)
                                          confirmContext.setDataType('Delete')
                                          confirmContext.setDataTitle(
                                             'Are you sure you want to delete this comment?',
                                          )
                                          confirmContext.toggleConfirmComment()
                                       }}
                                       className={cx('more-btn-inner')}
                                       leftIcon={<DeleteIcon />}
                                    >
                                       Delete
                                    </Button>
                                    <Button
                                       className={cx('more-btn-inner')}
                                       leftIcon={<EditIcon />}
                                    >
                                       Update
                                    </Button>
                                 </PopperWrapper>
                              </div>
                           )}
                        >
                           <button className={cx('more-btn')}>
                              <EllipsisHorizontalIcon className={cx('cmt-icon')} />
                           </button>
                        </HeadlessTippy>
                     )}

                     <HeartSolidIcon className={cx('cmt-icon')} />
                     <div className={cx('cmt-number')}>{cmtItem?.likes_count}</div>
                  </div>
                  {confirmContext.isConfirmComment && <ConfirmComment idCmt={idCmt} />}
               </div>
            ))
         ) : (
            <div className={cx('cmt-message')}>
               You need to login to use comments.
               <Button
                  className={cx('cmt-btn-l')}
                  text
                  onClick={modalContext.handleShowModal}
               >
                  Login
               </Button>
            </div>
         )}
      </div>
   )
}

export default CommentContent
