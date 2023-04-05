import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ClientTable from './components/ClientTable.vue'
import ClientForm from './components/ClientForm.vue'
import ClientDetails from './components/ClientDetails.vue'
import NotFound from './components/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ClientTable, alias: '/home'},
        // { path: '/about', component: About },
        {path: '/add', component: ClientForm},
        {path: '/edit/:id', component: ClientDetails},
        { path: '/:notFound(.*)', component: NotFound, meta: { hideNav: true }}
    ]
})

createApp(App).use(router).mount('#app')
