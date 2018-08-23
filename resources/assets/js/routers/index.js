import VueRouter from 'vue-router'
import indexRoles from '../components/User/roles/rolesIndex'
import createRoles from '../components/User/roles/rolesCreate'
import editRoles from '../components/User/roles/rolesEdit'
import permissionsIndex from '../components/User/permissions/permissionsIndex'
import createPermissions from '../components/User/permissions/permissionsCreate'
import editPermissions from '../components/User/permissions/permissionsEdit'

//import view list-customers
import listCustomersIndex from '../components/Customers/list-costumers/listCustomersIndex'
import createListCustomers from '../components/Customers/list-costumers/listCustomersCreate'
import editListCustomers from '../components/Customers/list-costumers/listCustomersEdit'


const router = new VueRouter({
    routes: [
        //roles
        {path: '/roles', components: {componentsIndex: indexRoles}, name: 'rolesIndex'},
        {path:'/roles/create',component: createRoles,name: 'createRoles'},
        {path:'/roles/edit/:id',component: editRoles,name: 'editRoles'},
        //permissions
        {path: '/permissions',components: {componentsIndex: permissionsIndex}, name:'indexPermissions'},
        {path: '/permissions/create',component: createPermissions, name: 'createPermissions'},
        {path: '/permissions/edit/:id',component: editPermissions, name: 'editPermissions'},

        //customers
        {path: '/listcustomer', components: {componentsIndex: listCustomersIndex}, name:'indexListCustomers'},
        {path: '/listcustomer/create', component:  createListCustomers, name: 'createListCustomers'},
        {path: '/listcustomer/edit/:id', component: editListCustomers, name: 'editListCustomers'}


    ],
    mode: 'history'
});

export default router;
