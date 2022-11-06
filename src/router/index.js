import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Field from '../views/Field.vue';
import Transaction from '../views/Transaction.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import BookingForm from '../views/BookingForm.vue';
import EditField from '../views/EditField.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/field',
    name: 'field',
    component: Field,
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/field/booking',
    name: 'booking',
    component: BookingForm,
  },
  {
    path: '/field/edit',
    name: 'edit',
    component: EditField,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
