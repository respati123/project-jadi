<template>
    <div>
        <div class="col-md-12">
            <!-- Horizontal Form -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Horizontal Form</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->
                <form class="form-horizontal">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="inputName" class="col-sm-2 control-label">Name Roles</label>

                            <div class="col-sm-10">
                                <input class="form-control" v-model="roles.name" id="inputName" placeholder="roles" type="text">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">Permissions</label>
                            <div class="col-sm-10">
                                <div class="textboxt-with-button" v-if="isEmpty">
                                    <p>tidak ada data permission</p>
                                    <router-link  :to="{name: 'createPermissions'}">Create Permissions</router-link>
                                </div>
                                <select v-else multiple="true" class="form-control" @dblclick="sortBy" v-model="multipleSelected">
                                    <option v-for="(role, key) in roles"
                                    :value="role.id">
                                        {{role.name}}
                                    </option>
                                </select>

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2" style="display: flex;">
                                <div class="badge-theme" v-for="roleSelected in rolesHasSelected">
                                    <p>{{ roleSelected.name }}</p>
                                    <button type="button" class="close" aria-label="close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button class="btn btn-primary" v-bind:onclick="saveData">save</button>
                                <button class="btn btn-warning" v-bind:onclick="btnBack">Back</button>
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


    import axios from "axios";

    export default {
        name: "createUser",
        store: ['rolesHasSelected'],
        data() {
            return {

                multipleSelected: [],
                roles: [],

            }
        },
        computed: {
            isEmpty: function(){
                return this.roles.length === 0;
            }
        },
        methods: {
            saveData: function(){

            },
            btnBack: function(){

            },
            sortBy: function(e){
               let item = {};
               item["name"] = e.target.text;
               item["value"] = e.target.value;
                this.rolesHasSelected.push(item);
               console.log(this.rolesHasSelected);
            }

        },
        mounted: function(){
            axios.get('/api/v1/getAllPermissions/')
                .then((response) => {
                    this.roles = response.data.data;
                });
        }

    }
</script>
<style scoped>
    .textboxt-with-button {

        display: flex;
        padding-top: 8px;

    }

    .textboxt-with-button p {

        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;

    }
</style>