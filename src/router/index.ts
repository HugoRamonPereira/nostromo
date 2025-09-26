import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home - Nostromo' } },
    { path: '/about', name: 'About', component: About, meta: { title: 'About - Nostromo' } },
    { path: '/sign-in', name: 'Sign in', component: SignIn, meta: { title: 'Sign in - Nostromo' } },
    { path: '/sign-up', name: 'Sign up', component: SignUp, meta: { title: 'Sign up - Nostromo' } },
  ],
});

// Global after‑hook – runs after every successful navigation
router.afterEach((to) => {
  // Fallback if a route forgets to set a title
  const defaultTitle = 'Nostromo – Your Space‑Travel Companion';
  document.title = (to.meta.title as string) ?? defaultTitle;
});

export default router;
