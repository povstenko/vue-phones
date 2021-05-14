import VueRouter from 'vue-router';
import Table from './Table';
import Add_edit from './Add_edit';
export default new VueRouter({

    routes: [
        { path: '/', component: Table },
        { path: '/add', component: Add_edit },
        { path: '/edit/:id', component: Add_edit },
        { path: '/home', component: Table }
    ],

    mode: 'history'
})
