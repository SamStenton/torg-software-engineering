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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/loaderio-0d3e4ef483c804539792f9cb17d2251c.txt', function () {
    return 'loaderio-0d3e4ef483c804539792f9cb17d2251c';
});

Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout');

Route::get('/dashboard', 'DashboardController@index');

Route::get('/lobby/create', ['as' => 'lobby.create', 'uses' => 'LobbyController@create']);
Route::post('/lobby/store', ['as' => 'lobby.store', 'uses' => 'LobbyController@store']);
Route::get('/lobby/{lobby}', ['as' => 'lobby.index', 'uses' => 'LobbyController@index']);

Route::get('/messages', ['as' => 'messages.index', 'uses' => 'MessagesController@index']);

Route::get('/message/{user}', ['as' => 'message.index', 'uses' => 'MessageController@index']);


