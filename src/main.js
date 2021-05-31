import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router'


import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsMember from './components/teams/TeamMembers.vue'
import UserList from './components/users/UsersList.vue'


const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/teams', component:TeamsList,},
        {path:'/users', component:UserList},
        {path:'/', redirect:'/teams'},
        {path:'/teams/:teamId', component:TeamsMember},
        {path:'/:notFoundRoute(.*)', component:NotFound}
    ],

    //if we want to override auto added class to active router link and add class
    // linkActiveClass:'now-active'
})

const app = createApp(App)
app.use(router)

app.mount('#app');
