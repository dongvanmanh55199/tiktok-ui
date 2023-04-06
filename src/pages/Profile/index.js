import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Profile.module.scss'
import Image from '~/components/Image'
import {
   BanIcon,
   EllipsisHorizontalIcon,
   FlagIcon,
   LinkIcon,
   ShareIcon,
   UserRegularIcon,
} from '~/components/Icons'
import ShareAction from '~/components/ShareAction'
import VideoPreview from './VideoPreview'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Context } from '~/components/PathContext'
import { UserCurrentContext } from '~/components/UserCurrentContext'
import HandleLogicFollow from './HandleLogicFollow'

const cx = classNames.bind(styles)

function Profile() {
   const location = useLocation()
   const data = location.pathname
   const [videos, setVideos] = useState([])
   const [info, setInfo] = useState()
   const contextPath = useContext(Context)

   const contextUser = useContext(UserCurrentContext)

   useEffect(() => {
      if (contextUser.userCurrent) {
         fetch(`https://tiktok.fullstack.edu.vn/api/users${data}`, {
            method: 'GET',
            headers: {
               Accept: 'application/json',
               // 'Content-Type': 'multipart/form-data',
               Authorization: 'Bearer ' + contextUser?.dataUser?.meta?.token,
            },
         })
            .then((response) => response.json())
            .then((json) => {
               setInfo(json)
               setVideos(json.data.videos)
            })
      } else {
         fetch(`https://tiktok.fullstack.edu.vn/api/users${data}`)
            .then((response) => response.json())
            .then((json) => {
               setInfo(json)
               setVideos(json.data.videos)
            })
      }
   }, [data])
   contextPath.path = data
   contextPath.ui = videos[0]?.user_id
   contextPath.data = videos

   // console.log(contextPath)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('info-container')}>
            {info && (
               <div className={cx('info')}>
                  <div className={cx('basic')}>
                     <Image
                        className={cx('avatar')}
                        src={info.data.avatar}
                        alt={data.avatar}
                     />
                     <div className={cx('text')}>
                        <div className={cx('username')}>
                           {info.data.nickname}
                           {info.data.tick && (
                              <FontAwesomeIcon
                                 className={cx('check')}
                                 icon={faCheckCircle}
                              />
                           )}
                        </div>
                        <div className={cx('name')}>
                           {info.data.full_name ||
                              `${info.data.first_name} ${info.data.last_name}`}
                        </div>
                        <HandleLogicFollow data={info} />
                     </div>
                  </div>

                  <div className={cx('counts')}>
                     <div className={cx('following')}>
                        <strong>{info.data.followings_count}</strong> Following
                     </div>
                     <div className={cx('followers')}>
                        <strong>{info.data.followers_count}</strong> Followers
                     </div>
                     <div className={cx('likes')}>
                        <strong>{info.data.likes_count}</strong> Likes
                     </div>
                  </div>

                  <div className={cx('bio')}>
                     {info.data.bio ? info.data.bio : 'No bio yet.'}
                  </div>

                  <a href={data.website_url} target="blank">
                     {info.data.website_url && (
                        <div className={cx('website')}>
                           <LinkIcon className={cx('link-icon')} />
                           {info.data.website_url}
                        </div>
                     )}
                  </a>
               </div>
            )}
            <div className={cx('side-btns')}>
               <div className={cx('share-btn')}>
                  <ShareAction offset={[-100, 10]}>
                     <div>
                        <ShareIcon />
                     </div>
                  </ShareAction>
               </div>

               <HeadlessTippy
                  interactive
                  hideOnClick="false"
                  placement="bottom-end"
                  offset={[0, 10]}
                  delay={[0, 700]}
                  zIndex="99"
                  render={(attrs) => (
                     <div tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('more-tab')}>
                           <div className={cx('action-report')}>
                              <p>
                                 <FlagIcon height="16" /> Report
                              </p>
                           </div>

                           <div className={cx('action-block')}>
                              <p>
                                 <BanIcon /> Block
                              </p>
                           </div>
                        </PopperWrapper>
                     </div>
                  )}
               >
                  <div>
                     <EllipsisHorizontalIcon />
                  </div>
               </HeadlessTippy>
            </div>
         </div>

         <div className={cx('video-container')}>
            <div className={cx('tabs')}>
               <p className={cx('video-tab')}>Videos</p>
               <p className={cx('liked-tab')}>Liked</p>
               <div className={cx('underline')}></div>
            </div>

            {videos.length > 0 && (
               <div className={cx('videos')}>
                  {videos.map((video, index) => {
                     return <VideoPreview data={video} key={index} />
                  })}
               </div>
            )}

            {videos.length === 0 && (
               <div className={cx('no-content')}>
                  <div>
                     <UserRegularIcon />
                     <p className={cx('title')}>No content</p>
                     <p className={cx('description')}>
                        This user has not published any videos.
                     </p>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Profile
