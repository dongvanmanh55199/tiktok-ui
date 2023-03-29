import classNames from 'classnames/bind'

import styles from './VideosFollow.module.scss'
import Image from '~/components/Image'
import Button from '~/components/Button'
import sugarVideo from '~/assets/video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function VideosFollow({ data }) {
   console.log(data)
   return (
      <>
         {data &&
            data.map((videoItem) => (
               <div key={videoItem.id} className={cx('video-item')}>
                  <Image
                     src={videoItem.popular_video.thumb_url}
                     className={cx('video-background')}
                  />
                  <video
                     onMouseOver={(e) => e.target.play()}
                     onMouseOut={(e) => e.target.pause()}
                     src={videoItem.popular_video.file_url}
                     className={cx('video')}
                  ></video>
                  <div className={cx('info-video')}>
                     <Image
                        src={videoItem.avatar}
                        alt={videoItem.nickname}
                        className={cx('info-img')}
                     />
                     <div className={cx('name')}>
                        <strong>{`${videoItem.first_name} ${videoItem.last_name}`}</strong>
                     </div>
                     <div className={cx('nickname')}>
                        {videoItem.nickname}
                        {videoItem.tick && (
                           <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
                        )}
                     </div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
            ))}
      </>
   )
}

export default VideosFollow
