import { createRouter, createWebHistory } from 'vue-router';
import SpaceList from '../components/SpaceList.vue';
import SpaceForm from '../components/SpaceForm.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'CreateSpace', // O nome deve bater exatamente
    component: SpaceForm
  },
  {
    path: '/edit/:id',
    name: 'EditSpace',
    component: SpaceForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
