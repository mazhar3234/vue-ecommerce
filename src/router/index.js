import Vue from 'vue'
import Router from 'vue-router'
import Vue2Crumbs from 'vue-2-crumbs'
import Home from '@/components/home/Home'
import ContactUs from '@/components/contact/Contact.vue'
import ProductCategory from '@/components/category/Category.vue'
import ProductDetails from '@/components/product_list/ProductDetails.vue'
import ShoppingCart from '@/components/cart/ShoppingCart.vue'
import Checkout from '@/components/cart/Checkout.vue'
import About from '@/components/about/About.vue'
import Blog from '@/components/blog/Blog.vue'
import BlogDetails from '@/components/blog/BlogDetails.vue'
import Wishlist from '@/components/wishlist/Wishlist.vue'
import MyAccount from '@/components/my_account/MyAccount.vue'
import Compare from '@/components/compare/Compare.vue'
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

    },
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails

    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart

    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout

    },
    {
      path: '/about-us',
      name: 'About',
      component: About

    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog

    },
    {
      path: '/blog-details',
      name: 'BlogDetails',
      component: BlogDetails

    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist

    },
    {
      path: '/my-account',
      name: 'MyAccount',
      component: MyAccount

    },
    {
      path: '/compare-products',
      name: 'Compare',
      component: Compare

    }
  ]
})
