import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Image from '~/components/Image'

import styles from './AccountPreview.module.scss'
import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountPreview({ account }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <Image
               className={cx('avatar')}
               styles={{ width: '30px' }}
               src={account.avatar}
               alt={account.nickname}
            />
            <Button small primary>
               Follow
            </Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>{account.nickname}</strong>
               {account.tick && (
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
               )}
            </p>
            <p className={cx('name')}>{`${account.first_name} ${account.last_name}`}</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>{account.followers_count} </strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>{account.likes_count} </strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   )
}

export default AccountPreview
