import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'

import MenuItem from './MenuItem'
import Header from './Header'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const defaultFn = () => {}
const cx = classNames.bind(styles)
function Menu({ children, hideOnClick = false, items = [], onChange = defaultFn }) {
   const [history, setHistory] = useState([{ data: items }])
   const current = history[history.length - 1]

   const renderItems = () => {
      return current.data.map((item, i) => {
         const isParent = !!item.children
         return (
            <MenuItem
               key={i}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children])
                  } else {
                     onChange(item)
                  }
               }}
            />
         )
      })
   }
   return (
      <Tippy
         interactive
         delay={[0, 600]}
         offset={[12, 8]}
         hideOnClick={hideOnClick}
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header
                        title={current.title}
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1))
                        }}
                     />
                  )}
                  <div className={cx('menu-body')}>{renderItems()}</div>
               </PopperWrapper>
            </div>
         )}
         onHidden={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   )
}
export default Menu
