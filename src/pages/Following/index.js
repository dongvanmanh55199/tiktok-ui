import classNames from 'classnames/bind'
import { useRef } from 'react'

import sugarVideo from '~/assets/video'
import Button from '~/components/Button'
import Image from '~/components/Image'
import styles from './Following.module.scss'

const cx = classNames.bind(styles)

function Following() {
   const videoRef = useRef()
   console.log(videoRef)
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('container')}>
               <div
                  className={cx('video-item')}
                  onMouseEnter={() => videoRef.current.play()}
               >
                  <video ref={videoRef} src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
               <div className={cx('video-item')}>
                  <video src={sugarVideo} className={cx('video')} />
                  <div className={cx('info-video')}>
                     <Image src="http" className={cx('info-img')} />
                     <div className={cx('name')}>
                        <strong>Dong Van Manh</strong>
                     </div>
                     <div className={cx('nickname')}>dongvanmanh280122</div>
                     <Button primary>Follow</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Following
