import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons'

import * as video from '~/services/videoService'
// import sugarVideo from '~/assets/video'
import { NhungIcon, ShareIcon, FbIcon, TwitterIcon, WameIcon } from '~/components/Icons'
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
   console.log(videoList)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            {videoList.map((video) => (
               <div key={video.id} className={cx('content')}>
                  <div className={cx('container')}>
                     <div className={cx('header')}>
                        <Image
                           src={video.user.avatar}
                           alt="avt"
                           className={cx('avatar')}
                        />
                        <div>
                           <div className={cx('nickname')}>{video.user.nickname}</div>
                           <div
                              className={cx('name')}
                           >{`${video.user.first_name} ${video.user.last_name}`}</div>
                        </div>
                        <Button primary className={cx('btn')}>
                           Follow
                        </Button>
                     </div>
                     <div className={cx('description')}>
                        {video.description}{' '}
                        <span className={cx('tag')}>|| {video.created_at}</span>
                     </div>
                     <div className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span> {video.music || `Music by ${video.user.nickname}`}</span>
                     </div>
                     <div className={cx('action')}>
                        <div className={cx('action-l')}>
                           <div>
                              <FontAwesomeIcon className={cx('likes')} icon={faHeart} />
                              <span> {video.likes_count}</span>
                           </div>
                           <div>
                              <FontAwesomeIcon className={cx('cmt')} icon={faComment} />
                              <span> {video.comments_count}</span>
                           </div>
                        </div>
                        <div className={cx('action-r')}>
                           <NhungIcon className={cx('icon-share')} />
                           <ShareIcon className={cx('icon-share')} />
                           <FbIcon className={cx('icon-share')} />
                           <TwitterIcon className={cx('icon-share')} />
                           <WameIcon className={cx('icon-share')} />
                           <FontAwesomeIcon className={cx('icon-share')} icon={faShare} />
                        </div>
                     </div>
                     <div className={cx('container-comment')}>
                        <div className={cx('comment-item')}>
                           <div className={cx('info-cmt-r')}>
                              <Image src="htt" className={cx('avatar-cmt')} />
                              <div className={cx('info-cmt-container')}>
                                 <div className={cx('info-cmt')}>Dong Van Manh</div>
                                 <div className={cx('content-cmt')}>Ngolllllll</div>
                                 <div className={cx('detail-container')}>
                                    <div className={cx('detail-cmt')}>2023-03-22</div>
                                    <div className={cx('rep-cmt')}>Reply</div>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('icon-cmt-container')}>
                              <FontAwesomeIcon
                                 icon={faHeart}
                                 className={cx('icon-cmt')}
                              />
                              <div className={cx('accounted-like')}>0</div>
                           </div>
                        </div>
                        <div className={cx('post-cmt')}>Type to cmt</div>
                     </div>
                  </div>
                  <div>
                     <video className={cx('video')} controls src={video.file_url} />
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Content
