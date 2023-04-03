import { useState, useEffect, useContext } from 'react'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import * as videoService from '~/services/videoService'
import { Context } from '~/components/PathContext'
import Video from './Video'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
   const [videos, setVideos] = useState([])
   const [page, setPage] = useState(1)
   const [volume, setVolume] = useState(0.4)
   const [prevVolume, setPrevVolume] = useState(volume)
   const [mute, setMute] = useState(true)
   const location = useLocation().pathname
   const contextPath = useContext(Context)

   // console.log(contextPath)
   // console.log(videos)
   contextPath.data = videos
   useEffect(() => {
      const fetchAPI = async () => {
         const result = await videoService.getVideos('for-you', page)
         setVideos((prev) => [...prev, ...result])
      }

      fetchAPI()
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
