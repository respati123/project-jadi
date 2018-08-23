<template>
    <div class="box">
        <div class="box-header">
            <h3 class="box-title margin-r-5">Data Table With Full Features</h3>
            <router-link class="btn btn-primary pull-right" :to="{ name : 'createListCustomers'}">Create New Customers</router-link>
            <hr class="divider">
        </div>
        <div>

        </div>
        <div class="alert-top alert alert-success" v-if="alertSuccess">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>{{ messages === undefined ? '' : messages}}</strong> Indicates a successful or positive action.
        </div>

        <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">View {{ dataView.titleModal }} </h4>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <tbody><tr>
                                <th style="width:50%">Name</th>
                                <td>{{ dataView.name }}</td>
                            </tr>
                            <tr>
                                <th>CreateddAt</th>
                                <td>{{ dataView.createdAt }}</td>
                            </tr>
                            <tr>
                                <th>CreatedBy</th>
                                <td>{{ dataView.createdBy }}</td>
                            </tr>
                            <tr>
                                <th>ModifierAt</th>
                                <td>{{ dataView.modifierAt}}</td>
                            </tr>
                            <tr>
                                <th>ModifierBy</th>
                                <td>{{ dataView.modifierBy}}</td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

    </div>
</template>

<script>
    import MyVuetables from "../../dataTables/MyVuetables"
    import Vue from 'vue'

    export default {
        name: "listCustomersIndex",
        components: {MyVuetables},
        data() {
            return {
                fields: [],
                url: '',
                messages: '',
                dataView: [],
                alertSuccess: false,
                alertMessage: '',
            }
        },
        mounted:  function(){

           if(this.$route.params.alertSuccess !== undefined){

               console.log(this.alertSuccess);
               this.alertSuccess = this.$route.params.alertSuccess;
               setTimeout(function(){
                   
               });
               this.alertSuccess = false;


           }
        },
    }
</script>

<style scoped>

</style>