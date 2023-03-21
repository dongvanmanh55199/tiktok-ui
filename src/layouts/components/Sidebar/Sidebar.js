import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import Menu, { MenuItem } from './Menu'
import {
   HomeIcon,
   HomeActiveIcon,
   UserGroupActiveIcon,
   LiveActiveIcon,
   LiveIcon,
   UserGroupIcon,
} from '~/components/Icons'

import config from '~/config'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import * as userService from '~/services/userService'

const cx = classNames.bind(styles)
const INIT_PAGE = 1
const PER_PAGE = 5

function SideBar() {
   const [page, setPage] = useState(INIT_PAGE)
   const [suggestUsers, setSuggestUsers] = useState([])

   useEffect(() => {
      userService
         // .getSuggested({ page: 2, perPage: PER_PAGE })
         .getSuggested(page, PER_PAGE)
         .then((data) => {
            setSuggestUsers((prevUsers) => [...prevUsers, ...data])
         })
         .catch((error) => console.log(error))
   }, [page])

   const handleSeeMore = () => {
      setPage(page + 1)
   }
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               title="For You"
               to={config.routes.home}
               icon={<HomeIcon />}
               activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem
               title="Live"
               to={config.routes.live}
               icon={<LiveIcon />}
               activeIcon={<LiveActiveIcon />}
            />
         </Menu>

         <SuggestedAccounts
            label="Suggested accounts"
            data={suggestUsers}
            onSeeMore={handleSeeMore}
         />
         <SuggestedAccounts label="Following accounts" />
      </aside>
   )
}

export default SideBar
