import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import JobsView from '@/view/JobsView.vue';
import NotFoundView from '@/view/NotFoundView.vue';
import SingleJobView from '@/view/SingleJobView.vue';
import SingleJobEdit from '@/view/SingleJobEdit.vue';
import AddJobView from '@/view/AddJobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'single-job',
      component: SingleJobView,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'single-job-edit',
      component: SingleJobEdit,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
