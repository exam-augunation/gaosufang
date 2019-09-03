import Home from '../views/home'
import Login from '../views/login'
import Rank from '../views/home/rank'


// import Home from '@/views/home'
// import Login from '@/views/login'
// import Rank from '@/views/home/rank'
const routes = [{
    component: Login,
    path: '/login'
}, {
    children: [{
        component: Rank,
        path: '/home/rank',
    }],
    component: Home,
    path: '/home'
}, {
    path: '/',
    redirect: '/login'
}]
export default routes