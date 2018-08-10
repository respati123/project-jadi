<template>
    <div class="box">
        <div class="box-header">
            <h3 class="box-title margin-r-5">Data Table With Full Features</h3>
            <router-link class="btn btn-primary pull-right" :to="{ name : 'createPermissions'}">Create New Permissions</router-link>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Permission Name</th>
                    <th>Created By</th>
                    <th>Created At</th>
                    <th>Modifier By</th>
                    <th>Modifier At</th>
                    <th>Execute</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="result in results">
                        <td>{{ result.name }}</td>
                        <td>{{ result.created_by }}</td>
                        <td>{{ result.created_at }}</td>
                        <td>{{ result.modifier_by }}</td>
                        <td>{{ result.modifier_at }}</td>
                        <td>
                            <router-link :to="{ name: 'editPermissions', params: { id : result.id }}" class="btn btn-primary">
                                <i class="fa fa-pencil"></i>
                                edit
                            </router-link>
                            <router-link class="btn btn-danger" :to="{ path: 'permissions/delete/' + result.id}">
                                <i class="fa fa-times"></i>
                                delete
                            </router-link>
                        </td>
                        <!--<td>-->
                            <!--<router-link :to="{ path: '/permissions/edit/' + result.id }" class="btn btn-primary">-->
                            <!--<i class="fa fa-pencil"></i>-->
                            <!--Edit-->
                            <!--</router-link>-->
                        <!--</td>-->
                        <!--<td>-->
                            <!--<button class="btn btn-danger">-->
                                <!--<i class="fa fa-times"></i>-->
                                <!--Delete-->
                            <!--</button>-->
                        <!--</td>-->
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->
    </div>
</template>

<script>
    export default {
        name: "permissionsIndex",
        data() {
            return {
                alertSuccess: false,
                permissionData: [],
                results: []
            }
        },
        methods: {
            readData() {
                axios.get("http://127.0.0.1:8000/api/v1/getdatapermissions")
                    .then((response) => {
                     this.results = response.data.data;
                    }, (error) => {
                          console.log(error.message);
                    });
            }
        },
        mounted() {

            this.alertSuccess = this.$route.params.alertSuccess;
            console.log(this.alertSuccess)
        },
        created: function(){
            this.readData();
        }
    }
</script>

<style scoped>

</style>