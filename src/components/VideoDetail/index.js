import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import styles from './VideoDetail.module.scss'
import { Context } from '../PathContext'
import { ConfirmContext } from '../ConfirmContext'

import { Wrapper as PopperWrapper } from '~/components/Popper'
// import { ModalContext } from '../ModalProvider'
import { UserCurrentContext } from '../UserCurrentContext'
import Image from '../Image/Image'
// import sugarVideo from '~/assets/video'
import Button from '../Button/Button'
import {
   MusicIcon,
   HeartIcon,
   CommentIcon,
   EmbedIcon,
   CloseIcon,
   PaperPlaneIcon,
   ShareSolidIcon,
   PrevIcon,
   NextIcon,
   MoreIcon,
   DeleteIcon,
   EditIcon,
} from '../Icons'
import img from '~/assets/images'
import AccountPreview from '../AccountPreview'
import { ModalContext } from '../ModalProvider'
import ModalForm from '../ModalForm'
import Confirm from '../Confirm'
import Comment from './Comment'
import CommentContent from './CommentContent'
const cx = classNames.bind(styles)
function VideoDetail() {
   const contextUser = useContext(UserCurrentContext)
   const contextModal = useContext(ModalContext)
   const context = useContext(Context)
   const location = useLocation().pathname
   let index = -1
   // const [followState, setFollowState] = useState()

   if (context.path.includes('@')) {
      context?.data?.find((item) => {
         index++
         // return item.uuid === 'ab771700-ec3d-4561-90c0-380eaec9a88e'
         return item.uuid === location.split('/')[3]
      })
   } else {
      context?.data?.find((item) => {
         index++
         return item.uuid === location.split('/')[3]
         // return item.user_id === context.ui
      })
   }

   // if (context.path === '') {
   // async function GetdataVideo() {
   //    const response = await fetch(
   //       `https://tiktok.fullstack.edu.vn/api/users/${location.split('/')[1]}`,
   //    )
   //    const data = await response.json()
   //    return data
   // }
   // GetdataVideo().then((data) => {
   //    context.path = location.split('/')[1]
   //    context.data = data.data.videos
   //    context.ui = data.data.id
   // })
   // console.log(context)
   // alert('Fix hoai ko dc:(')

   // context.path = location.split('/')[1]
   // context.data = data.data.videos
   // context.ui = data.data.id
   // console.log(context)
   // context?.data?.find((item) => {
   //    setIndexData((prev) => prev + 1)
   //    console.log(indexData)
   //    return item.uuid === location.split('/')[3]
   // })
   // }

   const [comment, setComment] = useState('')
   useEffect(() => {
      if (contextUser.userCurrent) {
         fetch(
            `https://tiktok.fullstack.edu.vn/api/videos/${
               location.split('/')[3]
            }/comments`,
            {
               headers: {
                  Accept: 'application/json',
                  // 'Content-Type': 'multipart/form-data',
                  Authorization: 'Bearer ' + contextUser?.dataUser?.meta?.token,
                  // Authorization: 'basic ' + props.getToken(),
               },
            },
         )
            .then((res) => res.json())
            .then((data) => {
               if (data.status_code == 401) {
                  console.log('chua login')
               }
               setComment(data)
            })
      }
   }, [location.split('/')[3]])
   const [indexArr, setIndexArr] = useState(index)
   const [follow, setFollow] = useState(
      context?.data[indexArr].user.is_followed ? 'Unfollow' : 'Follow',
   )
   useEffect(() => {
      setFollow(context?.data[indexArr].user.is_followed ? 'Unfollow' : 'Follow')
   }, [context?.data[indexArr].user.is_followed])
   const [followState, setFollowState] = useState(
      context?.data[indexArr].user.is_followed,
   )
   const confirmContext = useContext(ConfirmContext)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner', 'video-detail')}>
            <div className={cx('video-wrapper')}>
               <div className={cx('video-inner')}>
                  <Button to={context.path} className={cx('video-btn')} rounded>
                     <CloseIcon />
                  </Button>
                  {indexArr === 0 || (
                     <Button
                        to={`/@${context?.data[indexArr - 1].user.nickname}/videos/${
                           context?.data[indexArr - 1].uuid
                        }`}
                        onClick={() => setIndexArr((prev) => prev - 1)}
                        className={cx('video-btn-prev')}
                        rounded
                     >
                        <PrevIcon />
                     </Button>
                  )}
                  {indexArr === context?.data?.length - 1 || (
                     <Button
                        to={`/@${context?.data[indexArr + 1].user.nickname}/videos/${
                           context?.data[indexArr + 1].uuid
                        }`}
                        onClick={() => {
                           setIndexArr((prev) => prev + 1)
                        }}
                        className={cx('video-btn-next')}
                        rounded
                     >
                        <NextIcon />
                     </Button>
                  )}
                  <Image
                     src={context?.data[indexArr]?.thumb_url}
                     className={cx('thumbnail')}
                  />

                  <video
                     autoPlay
                     controls
                     src={context?.data[indexArr]?.file_url}
                     className={cx('video', 'video-detail-video-width')}
                  />
               </div>
            </div>
            <div className={cx('video-info')}>
               <div>
                  <div className={cx('video-info-wrapper')}>
                     <div className={cx('video-info-detail')}>
                        <Link
                           to={`/${location.split('/')[1]}`}
                           className={cx('video-info-detail-wrapper')}
                        >
                           <Image
                              src={context?.data[indexArr]?.user?.avatar}
                              className={cx('avatar')}
                           />
                           <AccountPreview data={context?.data[indexArr]}>
                              <div className={cx('info-wrapper')}>
                                 <div className={cx('nickname', 'font-size')}>
                                    {context?.data[indexArr]?.user?.nickname}
                                 </div>
                                 <div
                                    className={cx('name')}
                                 >{`${context?.data[indexArr]?.user?.first_name} ${context.data[indexArr].user.last_name}`}</div>
                              </div>
                           </AccountPreview>
                        </Link>
                        {contextUser.dataUser?.data?.id ===
                           context?.data[indexArr]?.user_id && (
                           <HeadlessTippy
                              interactive
                              delay={[0, 300]}
                              offset={[12, 8]}
                              placement="left"
                              render={(attrs) => (
                                 <div
                                    className={cx('menu-list')}
                                    tabIndex="-1"
                                    {...attrs}
                                 >
                                    <PopperWrapper className={cx('custom-popper')}>
                                       <Button
                                          onClick={() => {
                                             confirmContext.setDataType('Delete')
                                             confirmContext.setDataTitle(
                                                'Are you sure you want to delete this video?',
                                             )
                                             confirmContext.toggleConfirm()
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
                                 <MoreIcon />
                              </button>
                           </HeadlessTippy>
                        )}

                        {followState ? (
                           <Button
                              style={{
                                 display:
                                    contextUser.dataUser?.data?.id ===
                                    context?.data[indexArr]?.user_id
                                       ? 'none'
                                       : 'inline-flex',
                              }}
                              outline
                              onClick={() => {
                                 if (contextUser.userCurrent) {
                                    fetch(
                                       `https://tiktok.fullstack.edu.vn/api/users/${context?.data[indexArr].user_id}/unfollow`,
                                       {
                                          method: 'POST',
                                          headers: {
                                             Accept: 'application/json',
                                             Authorization:
                                                'Bearer ' +
                                                contextUser?.dataUser?.meta?.token,
                                          },
                                       },
                                    )
                                       .then((res) => res.json())
                                       .then((data) => {
                                          setFollowState(data.data.is_followed)
                                          setFollow('Follow')
                                       })
                                 } else {
                                    contextModal.handleShowModal()
                                 }
                              }}
                           >
                              {follow}
                           </Button>
                        ) : (
                           <Button
                              style={{
                                 display:
                                    contextUser.dataUser?.data?.id ===
                                    context?.data[indexArr]?.user_id
                                       ? 'none'
                                       : 'inline-flex',
                              }}
                              primary
                              onClick={() => {
                                 if (contextUser.userCurrent) {
                                    fetch(
                                       `https://tiktok.fullstack.edu.vn/api/users/${context?.data[indexArr].user_id}/follow`,
                                       {
                                          method: 'POST',
                                          headers: {
                                             Accept: 'application/json',
                                             Authorization:
                                                'Bearer ' +
                                                contextUser?.dataUser?.meta?.token,
                                          },
                                       },
                                    )
                                       .then((res) => res.json())
                                       .then((data) => {
                                          setFollowState(data.data.is_followed)
                                          setFollow('Unfollow')
                                       })
                                 } else {
                                    contextModal.handleShowModal()
                                 }
                              }}
                           >
                              {follow}
                           </Button>
                        )}
                     </div>
                     <div className={cx('video-info-caption')}>
                        {context?.data[indexArr]?.description}
                     </div>
                     <div className={cx('video-info-music')}>
                        <MusicIcon />
                        {context?.data[indexArr]?.music ||
                           `Music by ${context?.data[indexArr]?.user?.nickname}`}
                     </div>
                     <div className={cx('video-info-link')}>
                        <div className={cx('video-info-link-wrapper')}>
                           <div className={cx('icon-left')}>
                              <Button rounded className={cx('icon-l-btn')}>
                                 <HeartIcon className={cx('video-icon-l')} />
                              </Button>
                              <span className={cx('icon-left-num')}>
                                 {context?.data[indexArr]?.likes_count}
                              </span>
                              <Button rounded className={cx('icon-l-btn')}>
                                 <CommentIcon className={cx('video-icon-l')} />
                              </Button>
                              <span className={cx('icon-left-num')}>
                                 {context?.data[indexArr]?.comments_count}
                              </span>
                           </div>
                           <div className={cx('video-icon-r')}>
                              <Tippy delay={[100, 50]} content="Embed" placement="bottom">
                                 <div className={cx('video-icon-r-item')}>
                                    <EmbedIcon className={cx('video-info-link-icon')} />
                                 </div>
                              </Tippy>
                              <Tippy
                                 delay={[100, 50]}
                                 content="Send To Friends"
                                 placement="bottom"
                              >
                                 <div className={cx('video-icon-r-item')}>
                                    <PaperPlaneIcon
                                       className={cx('video-info-link-icon')}
                                    />
                                 </div>
                              </Tippy>
                              <Tippy
                                 delay={[100, 50]}
                                 content="Share To Facebook"
                                 placement="bottom"
                              >
                                 <div className={cx('video-icon-r-item')}>
                                    <img
                                       src={img.facebook}
                                       className={cx('video-info-link-icon')}
                                    />
                                 </div>
                              </Tippy>
                              <Tippy
                                 delay={[100, 50]}
                                 content="Share To Whatsapp"
                                 placement="bottom"
                              >
                                 <div className={cx('video-icon-r-item')}>
                                    <img
                                       src={img.whatsapp}
                                       className={cx('video-info-link-icon')}
                                    />
                                 </div>
                              </Tippy>
                              <Tippy
                                 delay={[100, 50]}
                                 content="Share To Twitter"
                                 placement="bottom"
                              >
                                 <div className={cx('video-icon-r-item')}>
                                    <img
                                       src={img.twitter}
                                       className={cx('video-info-link-icon')}
                                    />
                                 </div>
                              </Tippy>
                              <Tippy delay={[100, 50]} content="Share" placement="bottom">
                                 <div className={cx('video-icon-r-item')}>
                                    <ShareSolidIcon
                                       className={cx('video-info-link-icon')}
                                    />
                                 </div>
                              </Tippy>
                              {/* <PaperPlaneIcon className={cx('video-info-link-icon')} />
                              <img
                                 src={img.facebook}
                                 className={cx('video-info-link-icon')}
                              />
                              <img
                                 src={img.whatsapp}
                                 className={cx('video-info-link-icon')}
                              />
                              <img
                                 src={img.twitter}
                                 className={cx('video-info-link-icon')}
                              />
                              <ShareSolidIcon className={cx('video-info-link-icon')} /> */}
                           </div>
                        </div>

                        <input
                           disabled
                           value={location}
                           type="text"
                           className={cx('link')}
                        />
                     </div>
                  </div>
                  <CommentContent data={context?.data[indexArr]} dataComment={comment} />
               </div>
               <Comment uuidVideo={location.split('/')[3]} />
            </div>

            {contextModal.active && <ModalForm onHide={contextModal.handleHideModal} />}
         </div>
         {confirmContext.isConfirm && <Confirm idVideo={context?.data[indexArr].id} />}
      </div>
   )
}

export default VideoDetail
