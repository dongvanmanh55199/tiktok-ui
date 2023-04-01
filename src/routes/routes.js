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
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
