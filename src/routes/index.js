import config from '~/config'

//Layout
import { HeaderLayout } from '~/layouts'

// Page
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

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
      path: config.routes.upload,
      component: Upload,
      layout: HeaderLayout,
   },
   {
      path: config.routes.search,
      component: Search,
      layout: null,
   },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
