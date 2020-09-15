import Vue from 'vue'
import Router from 'vue-router'
import Vue2Crumbs from 'vue-2-crumbs'
import Home from '@/components/home/Home'
import ContactUs from '@/components/contact/Contact.vue'
import ProductCategory from '@/components/category/Category.vue'
Vue.use(Router)
Vue.use(Vue2Crumbs)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs

    },
    {
      path: '/product-category',
      name: 'ProductCategory',
      component: ProductCategory

    }
  ]
})
