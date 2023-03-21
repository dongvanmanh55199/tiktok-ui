import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import AccountItem from './AccountItem'

import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)
function SuggestedAccounts({ label, data = [], onSeeMore }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         {data.map((account) => (
            <AccountItem key={account.id} data={account} />
         ))}
         <p className={cx('more-btn')} onClick={onSeeMore}>
            See more
         </p>
      </div>
   )
}

SuggestedAccounts.propTypes = {
   label: PropTypes.string.isRequired,
   data: PropTypes.array,
}

export default SuggestedAccounts
