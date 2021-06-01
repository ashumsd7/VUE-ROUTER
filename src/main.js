import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router'


import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsMember from './components/teams/TeamMembers.vue'
import TeamFooter from './components/teams/TeamFooter.vue'
import UserList from './components/users/UsersList.vue'
import UserFooter from './components/users/UserFooter.vue'



const router= createRouter({
    history: createWebHistory(),
    routes:[
        { name:'teams' ,path:'/teams', components:{default: TeamsList, footer: TeamFooter}, children:[
            {path:':teamId', name:'team-members' ,component:TeamsMember},
        ]},
        {path:'/users',components:{default: UserList, footer: UserFooter}},
        {path:'/', redirect:'/teams'},
   
        {path:'/:notFoundRoute(.*)', component:NotFound}
    ],
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition
        }
        else{
            return {
                tops:0,
                left:0
            }
        }
    }

    //if we want to override auto added class to active router link and add class
    // linkActiveClass:'now-active'
})

const app = createApp(App)
app.use(router)

app.mount('#app');
