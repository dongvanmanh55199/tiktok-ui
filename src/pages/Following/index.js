import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Following.module.scss'
import VideosFollow from './VideosFollow'
import * as suggestedAccountService from '~/services/userService'

const cx = classNames.bind(styles)

function Following() {
   const [videoFollow, setVideoFollow] = useState([])

   useEffect(() => {
      const fetchAPI = async () => {
         const result = await suggestedAccountService.getSuggested(1, 15)
         setVideoFollow(result)
      }
      fetchAPI()
   }, [])

   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('container')}>
               <VideosFollow data={videoFollow} />
            </div>
         </div>
      </div>
   )
}

export default Following
