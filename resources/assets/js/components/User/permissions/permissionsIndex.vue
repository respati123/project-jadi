<template>
    <div class="box">
        <div class="box-header">
            <h3 class="box-title margin-r-5">Data Table With Full Features</h3>
            <router-link class="btn btn-primary pull-right" :to="{ name : 'createPermissions'}">Create New Permissions</router-link>
            <hr class="divider">
        </div>
        <div>
            <my-vuetables :url="url" :field="fields"></my-vuetables>
        </div>
        <div class="alert-top alert alert-success">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>{{ messages === undefined ? '' : messages}}</strong> Indicates a successful or positive action.
        </div>
    </div>


</template>

<script>

    import axios from 'axios'
    import MyVuetables from "../../dataTables/MyVuetables";

    export default {
        name: "permissionsIndex",
        components: {MyVuetables},
        data() {
            return {
                alertSuccess: false,
                url: 'http://127.0.0.1:8000/api/v1/permissions',
                permissionData: [],
                fields: [
                    {
                        name: '__component:custom-actions',
                        title: 'Actions',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned'
                    },
                    {
                        name: 'name',
                    },
                    {
                        name: 'created_at',
                        title: 'createdAt'
                    },
                    {
                        name: 'created_by'
                    },
                    {
                        name: 'modifier_at'
                    },
                    {
                        name: 'modifier_by'
                    },
                ],
                results: [
                    {
                        name: 'respati',
                        kelas: 1,
                    },
                    {
                        name: 'respati',
                        kelas: 1,
                    }
                ],
                messages: ''
            }
        },
        methods: {
            readData() {
                axios.get("api/v1/permissions")
                    .then((response) => {
                        console.log(response.data);
                        this.results = response.data.permissions;
                    }, (error) => {
                          console.log(error.message);
                    });
            },
            actionDataTables(action, data, index){
                switch (action) {
                    case 'view-item':
                        console.log('masuk view');
                        break;
                    case 'edit-item':
                        console.log('masuk edit');
                        break;
                    case 'delete-item':
                        console.log('masuk delete');
                        break;
                    default:
                        break;
                }
            }
        },
        mounted() {

            console.log(this.$router.params);
            if(!this.$router.params === undefined) {
                this.alertSuccess = this.$router.params.alertBoolean;
                this.messages = this.$router.params.alertMessage;
            }
            console.log(this.alertSuccess + "," + this.messages);
            this.$events.$on('itemAction', eventData => {
                this.actionDataTables(eventData.action, eventData.data.id, eventData.index);
            });
        },
        created: function(){
            this.readData();
        }
    }
</script>

<style scoped>

</style>