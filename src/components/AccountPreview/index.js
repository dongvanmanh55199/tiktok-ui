import { useContext } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './AccountPreview.module.scss'
import Image from '../Image/Image'
import Button from '../Button/Button'
import { ModalContext } from '../ModalProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function AccountPreview({ data, children }) {
   const context = useContext(ModalContext)
   return (
      <HeadlessTippy
         interactive
         hideOnClick="false"
         placement="bottom"
         delay={[400, 0]}
         offset={[40, 30]}
         zIndex="99"
         render={(attrs) => (
            <div tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('account-tab')}>
                  <div className={cx('header')}>
                     <Image
                        className={cx('tippy-avatar')}
                        src={data?.user.avatar}
                        alt={data?.user.avatar}
                     />

                     <Button primary onClick={context.handleShowModal}>
                        Follow
                     </Button>
                  </div>

                  <div className={cx('tippy-username')}>
                     <span>{data?.user.nickname}</span>
                     {data?.user.tick && (
                        <FontAwesomeIcon
                           className={cx('verified')}
                           icon={faCheckCircle}
                        />
                     )}
                  </div>

                  <div className={cx('tippy-name')}>
                     {data?.user.full_name ||
                        `${data?.user.first_name} ${data?.user.last_name}`}
                  </div>

                  <div className={cx('user-stats')}>
                     <div className={cx('follower-stats')}>
                        <span className={cx('bold')}>{data?.user.followers_count}</span>{' '}
                        Followers
                     </div>

                     <div className={cx('like-stats')}>
                        <span className={cx('bold')}>{data?.user.likes_count}</span> Likes
                     </div>
                  </div>

                  <div className={cx('user-bio')}>{data?.user.bio}</div>
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </HeadlessTippy>
   )
}

export default AccountPreview
