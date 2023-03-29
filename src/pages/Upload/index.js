import classNames from 'classnames/bind'
import Button from '~/components/Button'

import styles from './Upload.module.scss'

const cx = classNames.bind(styles)

function Upload() {
   return (
      <div className={cx('wrapper')}>
         <span className={cx('title')}>Upload video</span>
         <span className={cx('subtitle')}>Post a video to your account</span>

         <div className={cx('content')}>
            <div className={cx('uploader')}>
               <div className={cx('upload')}>
                  <input type="file" accept="video/*" style={{ display: 'none' }} />
                  <div className={cx('upload-card')}>
                     <img
                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                        className={cx('cloud-icon')}
                        alt=""
                     />

                     <div className={cx('text-main')}>
                        <span>Select video to upload</span>
                     </div>
                     <div className={cx('text-sub')}>
                        <span>Or drag and drop a file</span>
                     </div>
                     <div className={cx('text-video-info')}>
                        <span>MP4 or WebM</span>
                        <span>720x1280 resolution or higher</span>
                        <span>Up to 10 minutes</span>
                        <span>Less than 2 GB</span>
                     </div>

                     <Button primary>Select file</Button>
                  </div>
               </div>
            </div>

            <div className={cx('form')}>
               <div className={cx('caption-wrap')}>
                  <span className={cx('title')}>Caption</span>
                  <input className={cx('caption-input')} type="text" />
               </div>
               <div className={cx('cover-wrap')}>
                  <span className={cx('title')}>Cover</span>
                  <input type="text" className={cx('cover-input')} />
               </div>
               <div className={cx('privacy')}>
                  <span className={cx('title')}>Who can watch this video</span>
                  <select className={cx('privacy-input')}>
                     <option className={cx('privacy-input-value')}>Public</option>
                     <option className={cx('privacy-input-value')}>Friend</option>
                     <option className={cx('privacy-input-value')}>Private</option>
                  </select>
               </div>
               <div className={cx('switch-wrap')}>
                  <span className={cx('title')}>Allow user to:</span>
                  <div className={cx('switch-wrap-container')}>
                     <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Comment</span>
                     <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Duet</span>
                     <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Stitch</span>
                  </div>
               </div>
               <div className={cx('music')}>
                  <span className={cx('title')}>Music</span>
                  <input className={cx('music-input')} type="text" />
               </div>
               <div className={cx('copyright-wrap')}>
                  <span className={cx('title')}>Run a copyright check</span>

                  <span>
                     We'll check your video for potential copyright infringements on used
                     sounds. If infringements are found, you can edit the video before
                     posting.Learn more
                  </span>
               </div>
               <div className={cx('btn-wrap')}>
                  <Button outline>Discard</Button>
                  <Button outline>Post</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Upload
