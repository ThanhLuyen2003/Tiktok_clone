import FollowPage from "../Pages/Following"
import HomePage from "../Pages/Home"
import Profile from "../Pages/Profile"
import Upload from "../Pages/Upload"


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowPage },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },


]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }