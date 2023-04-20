import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useContext } from 'react'

import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'
import ModalForm from '~/components/ModalForm'
import styles from './HeaderStretchLayout.scss'
import GetApp from '~/components/GetApp'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function HeaderStretchLayout({ children }) {
   const context = useContext(ModalContext)

   return (
      <div className={cx('wrapper')}>
         <Header stretch />
         <div className={cx('container')}>
            <div className={cx('content', 'ml-tablet', 'ml')}>
               {children}
               <GetApp />
            </div>
         </div>

         {context.active && <ModalForm onHide={context.handleHideModal} />}
      </div>
   )
}

HeaderStretchLayout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default HeaderStretchLayout
