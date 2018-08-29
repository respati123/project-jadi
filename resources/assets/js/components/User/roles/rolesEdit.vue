<template>
   <div class="box box-info">
      <div class="box-header with-border">
         <h3 class="box-title">Horizontal Form</h3>
      </div>
      <!-- /.box-header -->
      <!-- form start -->
      <form class="form-horizontal">
         <div class="box-body">
            <div class="form-group">
               <label for="roleInput" class="col-sm-2 control-label">Role</label>

               <div class="col-sm-10">
                  <input class="form-control" id="roleInput" placeholder="role" type="text">
               </div>
            </div>
            <div class="form-group">
               <label for="permissions" class="col-sm-2 control-label">Password</label>
               <div class="col-sm-10">
                  <div class="textboxt-with-button" v-if="isEmpty">
                     <p>tidak ada data permission</p>
                     <router-link  :to="{name: 'createPermissions'}">Create Permissions</router-link>
                  </div>
                  <select v-else multiple="true" class="form-control" id="permissions" @dblclick="sortBy" v-model="multipleSelected">
                     <option v-for="(role, index) in roles"
                             :value="role.id" v-bind:key="index">
                        {{role.name}}
                     </option>
                  </select>
                  <pre>{{ this.roles }}</pre>
                  <pre>{{ this.rolesHasSelected }}</pre>
               </div>


            </div>

         </div>
         <!-- /.box-body -->
         <div class="box-footer">
            <button type="submit" class="btn btn-default">Cancel</button>
            <button type="submit" class="btn btn-info pull-right">Sign in</button>
         </div>
         <!-- /.box-footer -->
      </form>
   </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "editRoles",
        data(){
            return {
                multipleSelected:[],
                rolesHasSelected:[],
                roles:[],
                roleName: {
                    name: '',
                    id:''
                }
            }
        },
        mounted() {
            axios.get('/api/v1/getAllPermissions/')
                .then((response) => {
                    this.roles = response.data.data;
                });

            axios.get('/api/v1/roles/'+20)
                .then((response) => {
                    console.log(response.data.data.name);
                    this.roleName = {name: response.data.data.name, id: response.data.data.id}
                    this.rolesHasSelected = response.data.data.permission;
                }, (error) => {
                    console.log(error.message)
                });


            if(this.roleName !== null){
                console.log("masuk")
            }



        },

        methods: {
            sortBy: function() {

            }
        },
       watch: {
           isEmpty: function(){
               return this.roles.length === 0;
           },

       }

    }
</script>

<style scoped>

</style>