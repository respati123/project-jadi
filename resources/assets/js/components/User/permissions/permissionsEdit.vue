<template>
    <div>
        <div class="col-md-12">
            <!-- Horizontal Form -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Permissions Edit</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->
                <form class="form-horizontal">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="inputName" class="col-sm-2 control-label">Permissions name</label>

                            <div class="col-sm-10">
                                <input class="form-control" v-model="permission.name" id="inputName" placeholder="Permissions" type="text">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button class="btn btn-primary" type="button" @click.prevent="updateData">save</button>
                                <button class="btn btn-warning" type="button" :onclick="permissionBack">Back</button>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </form>
            </div>
            <!-- /.box -->

        </div>
    </div>
</template>

<script>
    export default {

        name: "permissionsEdit",
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.permissionId = id;
            axios.get('')


        },
        data: function(){
            return {
                permissionId: null,
                permission: {
                    name: ''
                }
            }
        },

        methods: function(){

        }
    }
</script>

<style scoped>

</style>