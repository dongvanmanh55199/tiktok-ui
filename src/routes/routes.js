import config from '~/config'

//Layout
import { HeaderLayout } from '~/layouts'
import StretchLayout from '~/layouts/StretchLayout'
import HeaderStretchLayout from '~/layouts/HeaderStretchLayout'

// Page
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Live from '~/pages/Live'
import Search from '~/pages/Search'
import Setting from '~/pages/Setting'
import Feedback from '~/pages/Feedback'
import Coin from '~/pages/Coin'
import Logout from '~/pages/Logout'
import Login from '~/pages/Login'
import VideoDetail from '~/components/VideoDetail'

//Public routes
const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
   },
   {
      path: config.routes.following,
      component: Following,
   },
   {
      path: config.routes.profile,
      component: Profile,
      layout: StretchLayout,
   },
   {
      path: config.routes.live,
      component: Live,
      layout: StretchLayout,
   },
   {
      path: config.routes.upload,
      component: Upload,
      layout: HeaderStretchLayout,
   },
   {
      path: config.routes.search,
      component: Search,
   },
   {
      path: config.routes.coin,
      component: Coin,
   },
   {
      path: config.routes.feedback,
      component: Feedback,
   },
   {
      path: config.routes.setting,
      component: Setting,
   },
   // {
   //    path: config.routes.login,
   //    component: Loading,
   //    layout: StretchLayout,
   // },
   {
      path: config.routes.video,
      component: VideoDetail,

      layout: null,
   },
   {
      path: config.routes.logout,
      component: Logout,
      layout: StretchLayout,
   },
   {
      path: config.routes.login,
      component: Login,
      layout: StretchLayout,
   },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
