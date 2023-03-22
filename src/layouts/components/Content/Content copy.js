import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import * as video from '~/services/videoService'
import sugarVideo from '~/assets/video'
import Button from '~/components/Button'
import styles from './Content.module.scss'
import Image from '~/components/Image'
const cx = classNames.bind(styles)

function Content() {
   const [videoList, setVideoList] = useState([])
   useEffect(() => {
      video.getVideos().then((data) => {
         setVideoList(data)
      })
   }, [])
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            {videoList.map((video) => (
               <header className={cx('header')}>
                  <Image className={cx('avatar')} src={video.user.avatar} alt="avt" />
                  <div className={cx('container')}>
                     <div className={cx('name')}>
                        {`${video.user.first_name} ${video.user.last_name}`}
                     </div>
                     <div className={cx('description')}>
                        {video.description}
                        <span className={cx('tag')}> || {video.created_at}</span>
                     </div>
                     <div className={cx('wrapper-video')}>
                        <video src={video.file_url} className={cx('video')} controls />
                        <div className={cx('action')}>
                           <div className={cx('likes')}></div>
                           <div className={cx('comments')}></div>
                           <div className={cx('share')}></div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <Button primary className={cx('btn-follow')}>
                        Follow
                     </Button>
                  </div>
               </header>
            ))}
            {/* <header className={cx('header')}>
               <Image className={cx('avatar')} src="" alt="avt" />
               <div className={cx('container')}>
                  <div className={cx('name')}>Name</div>
                  <div className={cx('description')}>
                     description
                     <span className={cx('tag')}> tag</span>
                  </div>
                  <div className={cx('wrapper-video')}>
                     <video src={sugarVideo} className={cx('video')} controls />
                     <div className={cx('action')}>
                        <div className={cx('likes')}></div>
                        <div className={cx('comments')}></div>
                        <div className={cx('share')}></div>
                     </div>
                  </div>
               </div>
               <div>
                  <Button primary className={cx('btn-follow')}>
                     Follow
                  </Button>
               </div>
            </header> */}
         </div>
      </div>
   )
}

export default Content
