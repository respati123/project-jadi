<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix'=>'roles', 'as' => 'roles.'], function(){
    Route::get('/', function(){
        return view('welcome');
    })->where('role', '[\/\w\.-]*')->name('index');
    Route::get('/edit/{id}', function(){
        return view('welcome');
    })->where('role-edit', '[\/\w\.-]*')->name('edit');
   Route::get('create', function(){
      return view('welcome');
   })->where('role-create', '[\/\w\.-]*')->name('create');
});


Route::group(['prefix'=>'permissions', 'as' => 'permissions.'], function(){
   Route::get('/', function(){
      return view('welcome');
   })->where('permission', '[\/\w\.-]*')->name('index');
    Route::get('/edit/{id}', function(){
        return view('welcome');
    })->where('edit-permission', '[\/\w\.-]*')->name('edit');
   Route::get('/create', function(){
      return view('welcome');
   })->where('create-permission', '[\/\w\.-]*')->name('create');
});

Route::group(['prefix' => 'listcustomer', 'as' => 'listcustomer.'], function(){
    Route::get('/', function(){
        return view('welcome');
    })->where('list-customers', '[\/\w\.-]*')->name('index');
    Route::get('/edit/{id}', function(){
        return view('welcome');
    })->where('edit-list-customers', '[\/\w\.-]*')->name('edit');
    Route::get('/create', function(){
        return view('welcome');
    })->where('create-list-customers', '[\/\w\.-]*')->name('create');
});

Route::get('/delete', function(){

    $roles = \App\Role::find(20);

    $roles->permission()->detach([14]);
    return 'sukses';
});

