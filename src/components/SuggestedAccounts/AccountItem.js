import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '../Poper'

import styles from './SuggestedAccounts.module.scss'
import Image from '../Image'
import AccountPreview from './AccountPreview'
const cx = classNames.bind(styles)
function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      )
   }
   return (
      <div>
         <Tippy
            interactive
            delay={[800, 0]}
            offset={[-20, 6]}
            placement="bottom"
            render={renderPreview}
         >
            <div className={cx('account-item')}>
               <Image
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7311f55e7cbfa803afb1e964dbf185c4.webp?x-expires=1678719600&x-signature=OmflogK2c4%2B4ImS73mD6Bv6Cvlg%3D"
                  alt="avt"
                  className={cx('avatar')}
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>dongvanmanh</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('name')}>Dong Van Manh</p>
               </div>
            </div>
         </Tippy>
      </div>
   )
}

AccountItem.propTypes = {
   label: PropTypes.string.isRequired,
}
export default AccountItem
