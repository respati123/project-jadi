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
                </tr>
                </thead>
                <tbody>

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
                data: []
            }
        },
        methods: {
            readData() {
                axios.get("http://127.0.0.1:8000/api/v1/getdatapermissions")
                    .then((response) => {
                        console.log(response.data);
                       // this.data = response.data;
                       // this.data.forEach(function(item){
                       //    console.log("found :", item);
                       //    console.log("found in:", item.id);
                       // });
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