import VueRouter from 'vue-router'
//roles
import indexRoles from '../components/User/users/indexRoles'
import createRoles from '../components/User/users/createRoles'
import editRoles from '../components/User/users/editRoles'
//permissions
import permissionsIndex from '../components/User/permissions/permissionsIndex'
import createPermissions from '../components/User/permissions/permissionsCreate'
import editPermissions from '../components/User/permissions/permissionsEdit'


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
