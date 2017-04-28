<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('lobby/{lobby}/initiate/{type}', ['as' => 'vote.initiate', 'uses' => 'VoteController@initiate']);
Route::get('lobby/{lobby}/end/{type}', ['as' => 'vote.end', 'uses' => 'VoteController@end']);
Route::post('lobby/{lobby}/vote', ['as' => 'vote.create', 'uses' => 'VoteController@create']);
