import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'

import styles from './VideoDetail.module.scss'
import { Context } from '../PathContext'
// import { ModalContext } from '../ModalProvider'
import { UserCurrentContext } from '../UserCurrentContext'
import Image from '../Image/Image'
import sugarVideo from '~/assets/video'
import Button from '../Button/Button'
import {
   MusicIcon,
   HeartIcon,
   CommentIcon,
   EmbedIcon,
   CloseIcon,
   PaperPlaneIcon,
   ShareSolidIcon,
   EllipsisHorizontalIcon,
   HeartSolidIcon,
   PrevIcon,
   NextIcon,
} from '../Icons'
import img from '~/assets/images'
const cx = classNames.bind(styles)
function VideoDetail() {
   const contextUser = useContext(UserCurrentContext)
   const context = useContext(Context)
   const location = useLocation().pathname

   let index = -1

   if (context.path.includes('@')) {
      context?.data?.find((item) => {
         index++
         // return item.uuid === 'ab771700-ec3d-4561-90c0-380eaec9a88e'
         return item.uuid === location.split('/')[3]
      })
   } else {
      context?.data?.find((item) => {
         index++
         console.log(item.user_id === context.ui)
         return item.user_id === context.ui
      })
   }
   // if (context.path.includes('@') && location.path.includes('@')) {
   //    fetch(`https://tiktok.fullstack.edu.vn/api/users/${location.split('/')[1]}`)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          context.path = location.split('/')[1]
   //          context.data = data.data.videos
   //          context.ui = data.data.id

   //          console.log(context)
   //          context?.data?.find((item) => {
   //             index++
   //             return item.uuid === 'ab771700-ec3d-4561-90c0-380eaec9a88e'
   //          })
   //       })
   // }
   // console.log(location.split('/')[1])
   // else if (location.includes('@')) {
   //
   // }

   console.log(index)
   console.log(context)
   const [indexArr, setIndexArr] = useState(index)

   // console.log(context.data[indexArr])

   // const contextModal = useContext(ModalContext)
   // console.log(context)
   // console.log(contextUser)

   // console.log(context.data.length, indexArr)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('video-wrapper')}>
               <div className={cx('video-inner')}>
                  <Button to={context.path} className={cx('video-btn')} rounded>
                     <CloseIcon />
                  </Button>
                  {indexArr === 0 || (
                     <Button
                        onClick={() => setIndexArr((prev) => prev - 1)}
                        className={cx('video-btn-prev')}
                        rounded
                     >
                        <PrevIcon />
                     </Button>
                  )}
                  {indexArr === context?.data?.length - 1 || (
                     <Button
                        onClick={() => setIndexArr((prev) => prev + 1)}
                        className={cx('video-btn-next')}
                        rounded
                     >
                        <NextIcon />
                     </Button>
                  )}
                  <Image
                     src={context.data[indexArr].thumb_url}
                     className={cx('thumbnail')}
                  />

                  <video
                     autoPlay
                     controls
                     src={context.data[indexArr].file_url}
                     className={cx('video')}
                  />
               </div>
            </div>
            <div className={cx('video-info')}>
               <div>
                  <div className={cx('video-info-wrapper')}>
                     <div className={cx('video-info-detail')}>
                        <div className={cx('video-info-detail-wrapper')}>
                           <Image
                              src={context?.data[indexArr]?.user?.avatar}
                              className={cx('avatar')}
                           />
                           <div className={cx('info-wrapper')}>
                              <div className={cx('nickname')}>
                                 {context?.data[indexArr]?.user?.nickname}
                              </div>
                              <div
                                 className={cx('name')}
                              >{`${context.data[indexArr].user.first_name} ${context.data[indexArr].user.last_name}`}</div>
                           </div>
                        </div>
                        <Button primary>Follow</Button>
                     </div>
                     <div className={cx('video-info-caption')}>
                        {context.data[indexArr].description}
                     </div>
                     <div className={cx('video-info-music')}>
                        <MusicIcon />
                        {context.data[indexArr].music ||
                           `Music by ${context.data[indexArr].user.nickname}`}
                     </div>
                     <div className={cx('video-info-link')}>
                        <div className={cx('video-info-link-wrapper')}>
                           <div className={cx('icon-left')}>
                              <Button rounded className={cx('icon-l-btn')}>
                                 <HeartIcon className={cx('video-icon-l')} />
                              </Button>
                              <span className={cx('icon-left-num')}>
                                 {context.data[indexArr].likes_count}
                              </span>
                              <Button rounded className={cx('icon-l-btn')}>
                                 <CommentIcon className={cx('video-icon-l')} />
                              </Button>
                              <span className={cx('icon-left-num')}>
                                 {context.data[indexArr].comments_count}
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
                  <div className={cx('cmt')}>
                     {contextUser.userCurrent ? (
                        <div className={cx('cmt-inner')}>
                           <div className={cx('cmt-l')}>
                              <Image className={cx('cmt-avt')} src="https" />
                              <div className={cx('cmt-info')}>
                                 <div className={cx('cmt-nickname')}>Dong Van Manh</div>
                                 <div className={cx('cmt-text')}>hayyy</div>
                                 <div className={cx('cmt-time')}>
                                    a few second ago{' '}
                                    <span className={cx('cmt-info')}> Reply</span>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('cmt-r')}>
                              <EllipsisHorizontalIcon className={cx('cmt-icon')} />

                              <HeartSolidIcon className={cx('cmt-icon')} />
                              <div className={cx('cmt-number')}>0</div>
                           </div>
                        </div>
                     ) : (
                        <div className={cx('cmt-message')}>
                           YOU NEED TO LOGIN TO USE COMMENTS.
                           {/* <Button text onClick={contextModal.handleShowModal}>
                              Login
                           </Button> */}
                        </div>
                     )}
                  </div>
               </div>
               <div className={cx('video-post')}>
                  <div className={cx('video-post-inner')}>
                     <input
                        className={cx('cmt-input')}
                        placeholder="Add comment..."
                        type="text"
                     />
                     <Button small className={cx('cmt-btn')}>
                        Post
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VideoDetail
