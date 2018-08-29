<template>
    <div>
        <div class="box">
            <div class="box-header">
                <span class="fa fa-gear"></span>
                <h3 class="box-title margin-r-5">Category Programs</h3>
                <router-link :to="{ name: 'createCategory'}" class="btn btn-primary pull-right">Create New Category</router-link>
                <hr class="divider">
            </div>
            <div class="box-body">
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th>Categories List</th>
                            <th>Execute</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="box-list">
                                    <div class="box-list-img">
                                        <img src="../../../../../../public/images/icon__person.png" alt="">
                                        <p>Active</p>
                                    </div>
                                    <div class="box-list-desc">
                                        <h3>Pusat Perbelanjaan</h3>
                                        <p> Jenis dari pusat perbelanjaan yang secara arsitektur berupa bangunan tertutup dengan suhu yang diatur dan memiliki jalur untuk berjalan jalan yang terat...
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="coloum-button-list">

                                    <router-link class="btn btn-warning btn-margin" :to="{ name : 'editCategory', params: { id : '123'}}">Edit <i class="fa fa-pencil"></i></router-link>
                                    <router-link class="btn btn-danger btn-margin" :to="{ name : 'editListCustomers', params: { id : '123'}}">Delete <i class="fa fa-pencil"></i></router-link>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'indexCategory',
        methods: {
            addCategory: function(){

            }
        }

    }
</script>

<style scoped>


    .btn-margin  {
        margin: 0 12px;
    }

    .coloum-button-list {
        display: inline-flex;
        padding: 30px 0;

    }
</style>