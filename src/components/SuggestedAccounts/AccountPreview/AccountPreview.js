import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Image from '~/components/Image'

import styles from './AccountPreview.module.scss'
import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <Image
               className={cx('avatar')}
               styles={{ width: '30px' }}
               src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7311f55e7cbfa803afb1e964dbf185c4.webp?x-expires=1678719600&x-signature=OmflogK2c4%2B4ImS73mD6Bv6Cvlg%3D"
               alt="avatar"
            />
            <Button small primary>
               Follow
            </Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>dongvanmanh</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Dong Van Manh</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>9.9M </strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>9.9M </strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   )
}

export default AccountPreview
