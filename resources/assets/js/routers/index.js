import VueRouter from 'vue-router'
import indexRoles from '../components/User/roles/indexRoles'
import createRoles from '../components/User/roles/createRoles'
import editRoles from '../components/User/roles/editRoles'
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
