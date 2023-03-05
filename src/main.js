import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import { Swipe, SwipeItem, Tab, Tabs,DropdownMenu, DropdownItem,TreeSelect  } from 'vant';   // vant css

import 'normalize.css'
import './style/index.scss'

import ShopList from '../src/index/ShopList.vue'

createApp(App)
.use(Swipe)
.use(SwipeItem)
.use(Tab)
.use(Tabs)
.use(DropdownMenu)
.use(DropdownItem)
.use(router)
.use(store)
.use(TreeSelect )
.component('ShopList',ShopList)
.mount('#app')
