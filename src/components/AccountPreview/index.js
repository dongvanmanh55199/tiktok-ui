import { useContext, useState, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './AccountPreview.module.scss'
import Image from '../Image/Image'
import Button from '../Button/Button'
import { ModalContext } from '../ModalProvider'
import { UserCurrentContext } from '../UserCurrentContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function AccountPreview({ data, children }) {
   const context = useContext(ModalContext)
   const contextUser = useContext(UserCurrentContext)
   const [follow, setFollow] = useState(data.user.is_followed ? 'Unfollow' : 'Follow')
   useEffect(() => {
      setFollow(data.user.is_followed ? 'Unfollow' : 'Follow')
   }, [data.user.is_followed])
   const [followState, setFollowState] = useState(data.user.is_followed)

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

                     {followState ? (
                        <Button
                           outline
                           onClick={() => {
                              if (contextUser.userCurrent) {
                                 fetch(
                                    `https://tiktok.fullstack.edu.vn/api/users/${data.user_id}/unfollow`,
                                    {
                                       method: 'POST',
                                       headers: {
                                          Accept: 'application/json',
                                          Authorization:
                                             'Bearer ' +
                                             contextUser?.dataUser?.meta?.token,
                                       },
                                    },
                                 )
                                    .then((res) => res.json())
                                    .then((data) => {
                                       setFollowState(data.data.is_followed)
                                       setFollow('Follow')
                                    })
                              } else {
                                 alert('Hay Login')
                              }
                           }}
                        >
                           {follow}
                        </Button>
                     ) : (
                        <Button
                           primary
                           onClick={() => {
                              if (contextUser.userCurrent) {
                                 fetch(
                                    `https://tiktok.fullstack.edu.vn/api/users/${data.user_id}/follow`,
                                    {
                                       method: 'POST',
                                       headers: {
                                          Accept: 'application/json',
                                          Authorization:
                                             'Bearer ' +
                                             contextUser?.dataUser?.meta?.token,
                                       },
                                    },
                                 )
                                    .then((res) => res.json())
                                    .then((data) => {
                                       setFollowState(data.data.is_followed)
                                       setFollow('Unfollow')
                                    })
                              } else {
                                 context.handleShowModal()
                              }
                           }}
                        >
                           {follow}
                        </Button>
                     )}

                     {/* <Button primary onClick={context.handleShowModal}>
                        Follow
                     </Button> */}
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
