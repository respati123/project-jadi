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
                                    <router-link  :to="{name: 'createUser'}">Create Permissions</router-link>
                                </div>
                                <select v-else multiple="true" class="form-control" v-model="multipleSelected">
                                    <option v-for="option in options"
                                    :value="option.language">
                                        {{option.name}}
                                    </option>
                                </select>
                                <pre>{{ multipleSelected }}</pre>

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <!--<button class="btn btn-primary" v-bind:onclick="saveData">save</button>-->
                                <!--<button class="btn btn-warning" v-bind:onclick="back">Back</button>-->
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
        name: "createUser",
        data() {
            return {

                multipleSelected: [],
                options: [],
                roles: [
                    {
                        name: "respati",
                        selected: false,
                    },
                    {
                        name: "respati",
                        selected: false,
                    },
                ]
            }
        },
        computed: {
            isEmpty: function(){
                return this.roles.length === 0;
            }
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