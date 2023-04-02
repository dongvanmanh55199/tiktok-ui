import { useState, memo } from 'react'
import classNames from 'classnames/bind'

import styles from './VideoPreview.module.scss'
import img from '~/assets/images'

const cx = classNames.bind(styles)

function VideoPreview({ data }) {
   const [videoPreview, setVideoPreview] = useState(data)
   const videoURL = videoPreview && URL.createObjectURL(videoPreview)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <video
               // onTimeUpdate={(e) => {
               //    console.log(Math.floor(e.target.duration))
               // }}
               className={cx('video')}
               controls
               src={videoURL}
            />
         </div>
         <div>
            <img className={cx('img-upload')} src={img.upload} />
         </div>
      </div>
   )
}

export default memo(VideoPreview)
