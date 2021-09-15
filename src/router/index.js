import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import ReplicaSets from '../views/ReplicaSets.vue'
import KafkaRouting from '../views/KafkaRouting.vue'
import Pipelines from '../views/Pipelines.vue'
import Repositories from '../views/Repositories.vue'
import TestView from '../views/TestView.vue'
import LogOut from '../views/LogOut.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/replica-sets',
    name: 'ReplicaSets',
    component: ReplicaSets
  },
  {
    path: '/pipelines',
    name: 'Pipelines',
    component: Pipelines
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/kafka-routing',
    name: 'KafkaRouting',
    component: KafkaRouting
  },
  {
    path: '/test-view',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/log-out',
    name: 'LogOut',
    component: LogOut
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
