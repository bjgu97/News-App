import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({ // router 관리하는 객체. 
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news', // path : URL 주소 (URL에 대한 정보)
      component: NewsView, // component :  URL 주소로 갔을 때 표시될 컴포넌트
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    }
  ]
});

