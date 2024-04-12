import FollowPage from "../Pages/Following"
import HomePage from "../Pages/Home"
import Profile from "../Pages/Profile"
import Upload from "../Pages/Upload"
import { routes } from "../config/routes"

const publicRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.following, component: FollowPage },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: null },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }