import { useContext, useRef } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import img from '~/assets/images'

import Menu from '~/components/Popper/Menu'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Search from '../Search'
import { ModalContext } from '~/components/ModalProvider'
import { UserCurrentContext } from '~/components/UserCurrentContext'

import {
   MoreIcon,
   HelpIcon,
   LanguageIcon,
   ShortBoardIcon,
   UploadIcon,
   MessageIcon,
   InboxIcon,
   PlusIcon,
   UserIcon,
   CoinIcon,
   GearIcon,
   ThemeIcon,
   LogoutIcon,
} from '~/components/Icons'

import config from '~/config'
const cx = classNames.bind(styles)
const MENU_ITEMS = [
   {
      icon: <LanguageIcon />,
      title: 'English',
      children: {
         title: 'Languages',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'العربية',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'বাঙ্গালি (ভারত)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Cebuano (Pilipinas)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Čeština (Česká republika)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Deutsch',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Ελληνικά (Ελλάδα)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Español',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Suomi (Suomi)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Filipino (Pilipinas)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Français',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'עברית (ישראל)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'हिंदी',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Magyar (Magyarország)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Bahasa Indonesia (Indonesia)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Italiano (Italia)',
            },
            {
               type: 'language',
               code: 'vi',
               title: '日本語（日本）',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Basa Jawa (Indonesia)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'ខ្មែរ (កម្ពុជា)',
            },
            {
               type: 'language',
               code: 'vi',
               title: '한국어 (대한민국)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Bahasa Melayu (Malaysia)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'မြန်မာ (မြန်မာ)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Nederlands (Nederland)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Polski (Polska)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Português (Brasil)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Română (Romania)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Русский (Россия)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Svenska (Sverige)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'ไทย (ไทย)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Türkçe (Türkiye)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Українська (Україна)',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'اردو',
            },
            {
               type: 'language',
               code: 'vi',
               title: '简体中文',
            },
            {
               type: 'language',
               code: 'vi',
               title: '繁體中文',
            },
         ],
      },
   },
   // {
   //     icon: <FontAwesomeIcon icon={faCircleQuestion} />,
   //     title: 'Feedback and help',
   //     to: '/feedback',
   // },
   {
      icon: <HelpIcon />,
      title: 'Feedback and help',
      // to: '/feedback',
   },
   {
      icon: <ShortBoardIcon />,
      title: 'Keyboard shortcuts',
   },
   {
      icon: <ThemeIcon />,
      title: 'Dark mode',
   },
]
function Header({ stretch }) {
   const context = useContext(ModalContext)
   const userContext = useContext(UserCurrentContext)
   const imgRef = useRef()
   const userMenu = [
      {
         icon: <UserIcon />,
         title: 'View profile',
         to: `/@${userContext.dataUser?.data?.nickname}`,
      },
      {
         icon: <CoinIcon />,
         title: 'Get coin',
         // to: '/coin',
      },
      {
         icon: <GearIcon />,
         title: 'Settings',
         // to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <LogoutIcon />,
         title: 'Log out',
         to: '/logout',
         // onClick: function () {
         //    userContext.userCurrent = false
         //    userContext.dataUser = {}
         // },
         separate: true,
      },
   ]

   // console.log(currentUser, userContext.userCurrent)
   const handleMenuChange = (menuItem) => {
      if (menuItem.type === 'language') {
         console.log(menuItem.title)
      }
      // switch (menuItem.type) {
      //    case 'language':
      //       break

      //    default:
      //       throw new Error('Invalid')
      // }

      // Log out ko chuyen trang no fresh
      // if (menuItem.title === 'Log out') {
      //    userContext.userCurrent = false
      //    userContext.dataUser = {}
      // }

      // if (menuItem.title === 'Dark mode') {
      //    const rootElement = document.querySelector('#root')
      //    rootElement.classList.toggle('darktheme')
      //    rootElement.getAttribute('class') === 'darktheme'
      //       ? (imgRef.current.src = img.logo_darktheme)
      //       : (imgRef.current.src = img.logo)
      // }
      if (menuItem.title === 'Dark mode') {
         const bodyElement = document.querySelector('body')
         bodyElement.classList.toggle('darktheme')
         bodyElement.getAttribute('class') === 'darktheme'
            ? (imgRef.current.src = img.logo_darktheme)
            : (imgRef.current.src = img.logo)
      }
   }
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner', { stretch: stretch })}>
            <Link to={config.routes.home} className={cx('logo-link')}>
               {document.querySelector('body').getAttribute('class') === 'darktheme' ? (
                  <img ref={imgRef} src={img.logo_darktheme} alt="Logo" />
               ) : (
                  <img ref={imgRef} src={img.logo} alt="Logo" />
               )}
               {/* <img src={img.logo_darktheme} alt="Logo" /> */}
            </Link>

            <Search />

            <div className={cx('action')}>
               {userContext.userCurrent ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <Button to={config.routes.upload} className={cx('action-btn')}>
                           <UploadIcon />
                        </Button>
                        {/* <Button
                           // className={cx('action-btn')}
                           outline
                           leftIcon={<PlusIcon />}
                           // onClick={context.handleShowModal}
                           to={config.routes.upload}
                        >action-btn
                           Upload
                        </Button> */}
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Message" placement="bottom">
                        <button className={cx('action-btn', 'hide-on-mobile')}>
                           <MessageIcon />
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn', 'hide-on-mobile')}>
                           <InboxIcon />
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                        </button>
                     </Tippy>

                     <Menu items={userMenu} onChange={handleMenuChange}>
                        <Image
                           src={userContext.dataUser?.data?.avatar}
                           alt="avt"
                           className={cx('user-avatar')}
                        />
                     </Menu>
                     {/* <div className={cx('current-user')}></div> */}
                  </>
               ) : (
                  <>
                     <Button
                        outline
                        leftIcon={<PlusIcon />}
                        onClick={context.handleShowModal}
                        // to={config.routes.upload}
                     >
                        Upload
                     </Button>
                     <Button
                        className="hide-on-mobile"
                        onClick={context.handleShowModal}
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                     >
                        Log in
                     </Button>
                     <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn', 'ml-header-btn-more')}>
                           <MoreIcon />
                        </button>
                     </Menu>
                  </>
               )}

               {/* <Menu items={userMenu} onChange={handleMenuChange}>
                  {userContext.userCurrent ? (
                     <Image
                        src={userContext.dataUser?.data?.avatar}
                        alt="avt"
                        className={cx('user-avatar')}
                     />
                  ) : (
                  <button className={cx('more-btn')}>
                     <MoreIcon />
                  </button>
                  )} 
               </Menu> */}
            </div>
         </div>
      </header>
   )
}

export default Header
