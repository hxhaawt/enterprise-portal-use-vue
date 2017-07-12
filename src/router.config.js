import Home from './components/Home.vue'
import AboutUs from './components/About-us.vue'
import News from './components/News.vue'
import Products from './components/Products.vue'
import Solution from './components/Solution.vue'
import ExperienceCenter from './components/Experience-center.vue'
import SuccessfulDemo from './components/Successful-demo.vue'
import Cooperation from './components/Cooperation.vue'
import DataDownload from './components/Data-download.vue'
import Contact from './components/Contact.vue'

export default [
{
	path: '/home',
	component: Home
},
{
    path: '/about-us',
    component: AboutUs
},
{
    path: '/news',
    component: News
},
{
    path: '/products',
    component: Products
},
{
    path: '/solution',
    component: Solution
},
{
    path: '/experience-center',
    component: ExperienceCenter
},
{
    path: '/successful-demo',
    component: SuccessfulDemo
},
{
    path: '/cooperation',
    component: Cooperation
},
{
    path: '/data-download',
    component: DataDownload
},
{
    path: '/contact',
    component: Contact
},
{
    path: '*', 
    redirect: '/home'
}

]