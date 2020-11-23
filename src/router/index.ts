import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import CalendarComponent from '@/views/Calendar.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';
import NotFoundComponent from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta: {
      title: 'home',
    },
  },
  {
    path: '/calendar/:type',
    name: 'calendar',
    meta: {
      title: 'calendar',
    },
    component: CalendarComponent,
    props: true,
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: 'profile',
    },
    component: ProfileComponent,
  },
  {
    path: '/share',
    name: 'share',
    meta: {
      title: 'share',
    },
    component: ShareComponent,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    meta: {
      title: 'sign-in',
    },
    component: SignInComponent,
  },
  {
    path: '*',
    meta: {
      title: 'not found',
    },
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(to => {
  if (!to.meta.title) {
    return;
  }

  document.title = to.meta.title;
});

export default router;
