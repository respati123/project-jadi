import VueRouter from 'vue-router'
import componentIndex from '../components/User/users/userIndex'
import createUser from '../components/User/users/createUser'


const router = new VueRouter({
    routes: [
        //roles
        {path: '/roles', components: {componentsIndex: indexRoles}, name: 'rolesIndex'},
        {path:'/roles/create',component: createRoles,name: 'createUser'},
        {path:'/roles/edit/:id',component: editRoles,name: 'editUser'},
        //permissions
        {path: '/permissions',components: {componentsIndex: permissionsIndex}, name:'indexPermissions'},
        {path: '/permissions/create',component: createPermissions, name: 'createPermissions'},
        {path: '/permissions/edit/:id',component: editPermissions, name: 'editPermissions'}
    ],
    mode: 'history'
});

export default router;
