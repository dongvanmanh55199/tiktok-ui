import { useRef, useState, useContext } from 'react'
import classNames from 'classnames/bind'

import Button from '~/components/Button'
import styles from './Upload.module.scss'
import VideoPreview from './VideoPreview'
import { UserCurrentContext } from '~/components/UserCurrentContext'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function Upload() {
   const [infoVideo, setInfoVideo] = useState()
   const [captionInput, setCaptionInput] = useState()
   const [viewAble, setViewAble] = useState()
   const [allowInput, setAllowInput] = useState()
   const [music, setMusic] = useState()

   const inputRef = useRef()

   const contextUser = useContext(UserCurrentContext)
   const contextModal = useContext(ModalContext)

   // console.log(infoVideo, infoVideo.name)

   const handleGetDataForm = () => {
      const data = {
         upload_file: infoVideo,
         description: captionInput,
         viewable: viewAble,
         allow: allowInput,
         music,
      }
      return data
   }

   const handleSubmit = () => {
      handleGetDataForm()
      // async function login(url = '') {
      //    const response = await fetch(url, {
      //       method: 'POST',
      //    })
      //    return response.json()
      // }
      // login(
      //    `https://tiktok.fullstack.edu.vn/api/videos?upload_file=${inputEmail}&description=${inputPassword}&viewable=&allows[]=&music&thumbnail_time=`,
      // ).then((data) => {
      //    console.log(data)
      // })
   }

   return (
      <div className={cx('wrapper')}>
         {/* <video style={{ width: '300px' }} controls src={videoURL} /> */}
         <span className={cx('title')}>Upload video</span>
         <span className={cx('subtitle')}>Post a video to your account</span>

         <div className={cx('content')}>
            <div className={cx('uploader')}>
               <div className={cx('upload')}>
                  <input
                     ref={inputRef}
                     type="file"
                     accept="video/*"
                     style={{ display: 'none' }}
                     onChange={(e) => {
                        setInfoVideo(e.target.files[0])
                     }}
                  />
                  <div
                     onClick={() => {
                        inputRef.current.click()
                     }}
                     className={cx('upload-card')}
                  >
                     {infoVideo && <VideoPreview data={infoVideo} />}

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
                  <input
                     value={captionInput}
                     onChange={(e) => setCaptionInput(e.target.value)}
                     className={cx('caption-input')}
                     type="text"
                  />
               </div>
               <div className={cx('cover-wrap')}>
                  <span className={cx('title')}>Cover</span>
                  <input type="text" className={cx('cover-input')} />
               </div>
               <div className={cx('privacy')}>
                  <span className={cx('title')}>Who can watch this video</span>
                  <select className={cx('privacy-input')}>
                     <option value="1" className={cx('privacy-input-value')}>
                        Public
                     </option>
                     <option value="2" className={cx('privacy-input-value')}>
                        Friend
                     </option>
                     <option value="3" className={cx('privacy-input-value')}>
                        Private
                     </option>
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
                  <input
                     value={music}
                     onChange={(e) => setMusic(e.target.value)}
                     className={cx('music-input')}
                     type="text"
                  />
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

                  <Button
                     onClick={() => {
                        if (contextUser.userCurrent) {
                           handleSubmit()
                        } else {
                           contextModal.handleShowModal()
                        }
                     }}
                     primary
                  >
                     Post
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Upload
