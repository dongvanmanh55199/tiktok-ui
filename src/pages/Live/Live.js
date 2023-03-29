import classNames from 'classnames/bind'

import styles from './Live.module.scss'
import img from '~/assets/images'

const cx = classNames.bind(styles)

function Live() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('view')}></div>
            <div className={cx('info')}>
               <p></p>
               <p></p>
               <p></p>
            </div>
            <div className={cx('heart')}>
               <img src={img.heart} />
            </div>
         </div>
      </div>
   )
}

export default Live
