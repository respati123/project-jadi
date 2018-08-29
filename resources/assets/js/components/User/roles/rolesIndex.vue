<template>

    <div class="box">
        <div class="box-header">
            <h3 class="box-title margin-r-5">Data Table With Full Features</h3>
            <router-link class="btn btn-primary pull-right" :to="{ name : 'createRoles'}">Create New</router-link>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Role Name</th>
                    <th>Has Permissions</th>
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

    import axios from 'axios'
    export default {
        name: "userIndex",
        data(){
            return {

            }
        },
        methods: {
          getData(){

              axios.get('/api/v1/roles/')
                  .then((response) => {
                     console.log(response.data.data);
                  }, (error) => {

                  });
          }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style scoped>

</style>