import { useState, useEffect, useContext } from 'react'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import * as videoService from '~/services/videoService'
import { Context } from '~/components/PathContext'
import Video from './Video'
import styles from './Home.module.scss'
import { UserCurrentContext } from '~/components/UserCurrentContext'

const cx = classNames.bind(styles)

function Home() {
   const [videos, setVideos] = useState([])
   const [page, setPage] = useState(1)
   const [volume, setVolume] = useState(0.4)
   const [prevVolume, setPrevVolume] = useState(volume)
   const [mute, setMute] = useState(true)
   const location = useLocation().pathname
   const contextPath = useContext(Context)

   contextPath.handleSetData(videos)

   //Old Code
   // useEffect(() => {
   //    const fetchAPI = async () => {
   //       const result = await videoService.getVideos('for-you', page)
   //       setVideos((prev) => [...prev, ...result])
   //    }

   //    fetchAPI()
   // }, [page])

   //New Code
   const contextUser = useContext(UserCurrentContext)
   useEffect(() => {
      if (contextUser.userCurrent) {
         async function getVideos(url = '') {
            const response = await fetch(url, {
               method: 'GET',
               headers: {
                  Accept: 'application/json',
                  // 'Content-Type': 'multipart/form-data',
                  Authorization: 'Bearer ' + contextUser?.dataUser?.meta?.token,
               },
            })
            return response.json()
         }
         getVideos(
            `https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${page}`,
         ).then((data) => {
            const result = data.data
            setVideos((prev) => [...prev, ...result])
         })
      } else {
         const fetchAPI = async () => {
            const result = await videoService.getVideos('for-you', page)
            setVideos((prev) => [...prev, ...result])
         }

         fetchAPI()
      }
   }, [page])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   function handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
         setPage((page) => page + 1)
      }
   }

   const handleAdjustVolume = (e) => {
      setVolume(e.target.value / 100)
   }

   const toggleMuted = () => {
      if (mute) {
         setVolume(prevVolume)
         setMute(false)
      } else {
         setPrevVolume(volume)
         setVolume(0)
         setMute(true)
      }
   }

   // console.log(contextPath)
   return (
      <div className={cx('wrapper')}>
         {videos.map((video, index) => (
            <Video
               location={location}
               key={index}
               data={video}
               volume={volume}
               mute={mute}
               adjustVolume={handleAdjustVolume}
               toggleMuted={toggleMuted}
            ></Video>
         ))}
      </div>
   )
}

export default Home
