import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '../Button'
import { ModalContext } from '~/components/ModalProvider'
import { UserCurrentContext } from '../UserCurrentContext'
const cx = classNames.bind(styles)

function SuggestedAccounts({ sidebar, data, ...passProps }) {
   const context = useContext(ModalContext)
   const contextUser = useContext(UserCurrentContext)
   const [follow, setFollow] = useState(() => (data.is_followed ? 'Unfollow' : 'Follow'))

   const [followState, setFollowState] = useState(data.is_followed)
   // console.log(follow, data, data.id)
   // console.log(data)
   return (
      <div>
         <HeadlessTippy
            interactive
            appendTo={document.body}
            hideOnClick="false"
            placement="bottom"
            delay={[1000, 0]}
            offset={[0, 2]}
            zIndex="99"
            render={(attrs) => (
               <div tabIndex="-1" {...attrs}>
                  <PopperWrapper className={cx('account-tab')}>
                     <div className={cx('header')}>
                        <Image
                           className={cx('tippy-avatar')}
                           src={data?.avatar}
                           alt={data?.avatar}
                        />

                        {followState ? (
                           <Button
                              outline
                              onClick={() => {
                                 if (contextUser.userCurrent) {
                                    fetch(
                                       `https://tiktok.fullstack.edu.vn/api/users/${data.id}/unfollow`,
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
                                    context.handleShowModal()
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
                                       `https://tiktok.fullstack.edu.vn/api/users/${data.id}/follow`,
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
                     </div>

                     <div className={cx('tippy-username')}>
                        <span>{data?.nickname}</span>
                        {data?.tick && (
                           <FontAwesomeIcon
                              className={cx('verified')}
                              icon={faCheckCircle}
                           />
                        )}
                     </div>

                     <div className={cx('tippy-name')}>
                        {data?.full_name || `${data?.first_name} ${data?.last_name}`}
                     </div>

                     <div className={cx('user-stats')}>
                        <div className={cx('follower-stats')}>
                           <span className={cx('bold')}>{data?.followers_count}</span>{' '}
                           Followers
                        </div>

                        <div className={cx('like-stats')}>
                           <span className={cx('bold')}>{data?.likes_count}</span> Likes
                        </div>
                     </div>
                  </PopperWrapper>
               </div>
            )}
         >
            <Link
               to={`/@${data?.nickname}`}
               className={cx('wrapper', { sidebar })}
               {...passProps}
            >
               <Image className={cx('avatar')} src={data?.avatar} alt={data?.avatar} />

               <div className={cx('info')}>
                  <div className={cx('username')}>
                     <span>{data?.nickname}</span>
                     {data?.tick && (
                        <FontAwesomeIcon
                           className={cx('verified')}
                           icon={faCheckCircle}
                        />
                     )}
                  </div>
                  <div className={cx('name')}>
                     {data?.full_name || `${data?.first_name} ${data?.last_name}`}
                  </div>
               </div>
            </Link>
         </HeadlessTippy>
      </div>
   )
}

SuggestedAccounts.propTypes = {
   data: PropTypes.object.isRequired,
}

export default SuggestedAccounts
