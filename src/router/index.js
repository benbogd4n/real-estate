import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import About from '../views/About.vue'
import Edit from '../views/Edit-view.vue'
import New from '../views/New.vue'
import Delete from '../views/Delete.vue'
import Details from '../views/Details.vue'


const routes = [
    { 
        path: '/',
        name: 'Overview',
        component: Overview
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/edit?id=:houseId',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/new',
        name: 'New',
        component: New
    },
    {
        path: '/delete?id=:houseId',
        name: 'Delete',
        component: Delete
    },
    {
        path: '/details?id=:houseId',
        name: 'Details',
        component: Details
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router