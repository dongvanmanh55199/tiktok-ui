import { useRef, useState, useContext } from 'react'
import classNames from 'classnames/bind'

import Button from '~/components/Button'
import styles from './Upload.module.scss'
import VideoPreview from './VideoPreview'
import { UserCurrentContext } from '~/components/UserCurrentContext'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)
const checkboxData = [
   {
      type: 'comment',
      title: 'Comment',
   },
   {
      type: 'duet',
      title: 'Duet',
   },
   {
      type: 'stitch',
      title: 'Stitch',
   },
]

function Upload() {
   const [infoVideo, setInfoVideo] = useState()
   const [captionInput, setCaptionInput] = useState()
   const [viewAble, setViewAble] = useState('public')
   const [allowInput, setAllowInput] = useState([])
   const [music, setMusic] = useState()
   const [thumbnail, setThumbnail] = useState()

   const inputRef = useRef()

   const contextUser = useContext(UserCurrentContext)
   const contextModal = useContext(ModalContext)

   // console.log(contextUser?.dataUser?.meta?.token)
   const handleCheck = (id) => {
      setAllowInput((prev) => {
         const isChecked = allowInput.includes(id)
         return isChecked ? allowInput.filter((item) => item !== id) : [...prev, id]
      })
   }
   const handleGetDataForm = () => {
      return {
         upload_file: infoVideo,
         description: captionInput,
         viewable: viewAble,
         allows: allowInput,
         thumbnail,
         music,
      }
   }

   const handleSubmit = () => {
      const data = { ...handleGetDataForm() }
      const form = new FormData()
      // console.log(data)
      form.append('upload_file', data.upload_file)
      form.append('description', data.description)
      form.append('viewable', data.viewable)
      if (data?.allows[0]) {
         form.append('allows[]', data?.allows[0])
      }
      if (data?.allows[1]) {
         form.append('allows[]', data?.allows[1])
      }
      if (data?.allows[2]) {
         form.append('allows[]', data?.allows[2])
      }
      form.append('music', data.music)
      form.append('thumbnail_time', data.thumbnail)
      async function login(url = '') {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               // 'Content-Type': 'multipart/form-data',
               Authorization: 'Bearer ' + contextUser?.dataUser?.meta?.token,
               // Authorization: 'basic ' + props.getToken(),
            },
            body: form,
         })
         return response.json()
      }
      login(`https://tiktok.fullstack.edu.vn/api/videos`).then((data) => {
         if (data.data.id) {
            alert('Upload thanh cong')
         } else {
            alert('Upload khong thanh cong')
         }
      })
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

               <div className={cx('thumbnail-wrap')}>
                  <span className={cx('title')}>Thumbnail time(s)</span>
                  <input
                     type="number"
                     value={thumbnail}
                     className={cx('thumbnail-input')}
                     onChange={(e) => setThumbnail(e.target.value)}
                  />
               </div>
               <div className={cx('privacy')}>
                  <span className={cx('title')}>Who can watch this video</span>
                  <select
                     onChange={(e) => {
                        setViewAble(e.target.value)
                     }}
                     className={cx('privacy-input')}
                  >
                     <option value="public" className={cx('privacy-input-value')}>
                        Public
                     </option>
                     <option value="friend" className={cx('privacy-input-value')}>
                        Friend
                     </option>
                     <option value="private" className={cx('privacy-input-value')}>
                        Private
                     </option>
                  </select>
               </div>
               <div className={cx('switch-wrap')}>
                  <span className={cx('title')}>Allow user to:</span>
                  <div className={cx('switch-wrap-container')}>
                     {checkboxData.map((checkboxItem, i) => (
                        <div className={cx('switch-wrap-inner')} key={i}>
                           <input
                              checked={allowInput.includes(checkboxItem.type)}
                              onChange={() => handleCheck(checkboxItem.type)}
                              className={cx('switch-wrap-input')}
                              type="checkbox"
                           />
                           <span className={cx('switch-wrap-label')}>
                              {checkboxItem.title}
                           </span>
                        </div>
                     ))}
                     {/* <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Comment</span>
                     <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Duet</span>
                     <input className={cx('switch-wrap-input')} type="checkbox" />
                     <span className={cx('switch-wrap-label')}>Stitch</span> */}
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
               <div className={cx('music')}></div>
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
