import VueRouter from 'vue-router'
import componentIndex from '../components/User/users/userIndex'
import createUser from '../components/User/users/createUser'
import editUser from '../components/User/users/editUser'

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
            component: editUser,
            name: 'editUser'
        }
    ],
    mode: 'history'
});

export default router;
