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
   Route::get('create', function(){
      return view('welcome');
   })->where('role-create', '[\/\w\.-]*')->name('create');
});


Route::group(['prefix'=>'permissions', 'as' => 'permissions.'], function(){
   Route::get('/', function(){
      return view('welcome');
   })->where('permission', '[\/\w\.-]*')->name('index');
   Route::get('/create', function(){
      return view('welcome');
   })->where('create-permission', '[\/\w\.-]*')->name('create');
});