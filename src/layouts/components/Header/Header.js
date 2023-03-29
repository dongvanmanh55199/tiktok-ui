import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   // faMagnifyingGlass,
   faSignIn,
   faEllipsisVertical,
   // faEarthAsia,
   // faCircleQuestion,
   // faKeyboard,
   // faCloudUpload,
   // faMessage,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import img from '~/assets/images'

import Menu from '~/components/Popper/Menu'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Search from '../Search'
import { ModalContext } from '~/components/ModalProvider'

import {
   MoreIcon,
   HelpIcon,
   LanguageIcon,
   ShortBoardIcon,
   UploadIcon,
   MessageIcon,
   InboxIcon,
   PlusIcon,
} from '~/components/Icons'

import config from '~/config'
import { useContext } from 'react'
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
      to: '/feedback',
   },
   {
      icon: <ShortBoardIcon />,
      title: 'Keyboard shortcuts',
   },
]
function Header({ stretch }) {
   const currentUser = false
   const context = useContext(ModalContext)

   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            break

         default:
            throw new Error('Invalid')
      }
      console.log(menuItem)
   }

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/userPath',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ]
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner', { stretch: stretch })}>
            <Link to={config.routes.home} className={cx('logo-link')}>
               <img src={img.logo} alt="Logo" />
            </Link>

            <Search />

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                           {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Message" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                        </button>
                     </Tippy>

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
                        onClick={context.handleShowModal}
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                     >
                        Log in
                     </Button>
                  </>
               )}
               <Menu
                  items={currentUser ? userMenu : MENU_ITEMS}
                  onChange={handleMenuChange}
               >
                  {currentUser ? (
                     <Image
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7311f55e7cbfa803afb1e964dbf185c4.webp?x-expires=1678719600&x-signature=OmflogK2c4%2B4ImS73mD6Bv6Cvlg%3D"
                        alt="avt"
                        className={cx('user-avatar')}
                        // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
                        <MoreIcon />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   )
}

export default Header
