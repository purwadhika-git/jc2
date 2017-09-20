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


Route::get('/data', function() {

    $obj = new stdClass; // anonymous class in php
    $obj->name = "My Name";
    $obj->phoneNumber = "0817273182";

    return response()->json($obj, 200); 
});

Route::post('/data', function(Request $request) {

    $request->validate([
        'id' => 'required'
    ]);

    $id = $request->input('id');
    $name = $request->input('name');

    $obj = new stdClass;
    $obj->id = $id;
    $obj->name = $name;

    return response()->json($obj, 200); 
});


