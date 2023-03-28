import { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

import Header from '~/layouts/components/Header'
import SideBar from '~/layouts/components/Sidebar'
import GetApp from '~/components/GetApp'
import ModalForm from '~/components/ModalForm'
import { ModalContext } from '~/components/ModalProvider'
const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
   const context = useContext(ModalContext)
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <SideBar />
            <div className={cx('content')}>{children}</div>
            <GetApp />
         </div>
         {context.active && <ModalForm onHide={context.handleHideModal} />}
      </div>
   )
}

export default DefaultLayout
