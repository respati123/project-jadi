import VueRouter from 'vue-router'
import componentIndex from '../components/User/users/userIndex'
import createUser from '../components/User/users/createUser'

const router = new VueRouter({
    routes: [
        {
            path: '/users',
            components: {
                componentsIndex: componentIndex
            }
        },
        {
            path:'/users/create',
            component: createUser,
            name: 'createUser'
        },
        {
            path:'/users/edit/:id',
            component:
        }
    ],
    mode: 'history'
});

export default router;
