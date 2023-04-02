import classNames from 'classnames/bind'
import styles from './VideoDetail.module.scss'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../PathContext'
import Image from '../Image/Image'
import sugarVideo from '~/assets/video'
import Button from '../Button/Button'
import {
   MusicIcon,
   HeartIcon,
   CommentIcon,
   EmbedIcon,
   PaperPlaneIcon,
   ShareSolidIcon,
} from '../Icons'
import img from '~/assets/images'
const cx = classNames.bind(styles)
function VideoDetail() {
   const location = useLocation().pathname
   console.log(location)
   const context = useContext(Context)
   console.log(context)

   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('video-wrapper')}>
               <div className={cx('video-inner')}>
                  <Image
                     src="https://files.fullstack.edu.vn/f8-tiktok/videos/1923-64192d7a6199d.jpg"
                     className={cx('thumbnail')}
                  />

                  <video src={sugarVideo} className={cx('video')} />
               </div>
            </div>
            <div className={cx('video-info')}>
               <div className={cx('video-info-wrapper')}>
                  <div className={cx('video-info-detail')}>
                     <div className={cx('video-info-detail-wrapper')}>
                        <Image src="https" className={cx('avatar')} />
                        <div className={cx('info-wrapper')}>
                           <div className={cx('nickname')}>dongvanmanh2801</div>
                           <div className={cx('name')}>Dong Van Manh</div>
                        </div>
                     </div>
                     <Button primary>Follow</Button>
                  </div>
                  <div className={cx('video-info-caption')}>
                     Siêu phẩm hot girl Douyin nhảy cực cuốn trên phố đi bộ #girl #douyin
                     #gaixinhtiktok
                  </div>
                  <div className={cx('video-info-music')}>
                     <MusicIcon />
                     Yêu Anh Đi Mẹ Anh Bán Bánh Mì_AM Remix - CD03ᥫ᭡[WS]
                  </div>
                  <div className={cx('video-info-link')}>
                     <div className={cx('video-info-link-wrapper')}>
                        <div className={cx('icon-left')}>
                           <HeartIcon className={cx('video-info-link-icon')} />
                           <span className={cx('icon-left-num')}>0</span>
                           <CommentIcon className={cx('video-info-link-icon')} />
                           <span className={cx('icon-left-num')}>0</span>
                        </div>
                        <div>
                           <EmbedIcon className={cx('video-info-link-icon')} />
                           <PaperPlaneIcon className={cx('video-info-link-icon')} />
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
                           <ShareSolidIcon className={cx('video-info-link-icon')} />
                        </div>
                     </div>

                     <input
                        disabled
                        value={location + '12312312312312312'}
                        type="text"
                        className={cx('link')}
                     />
                  </div>
               </div>
               <div className={cx('video-info')}>CMT</div>
               <div className={cx('video-info')}>POST CMT</div>
            </div>
         </div>
      </div>
   )
}

export default VideoDetail
