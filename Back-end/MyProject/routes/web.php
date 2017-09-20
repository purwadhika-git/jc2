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


// route = ispalindrome
// controller = MyController


Route::get('/ispalindrome/{val?}', 'MyController@isPalindrome');

Route::group(['prefix' => 'calculator'], function() {
    
    Route::get('/add/{angka1?}/{angka2?}', 'CalculatorController@Add');

    Route::get('/subtract/{angka1?}/{angka2?}', 'CalculatorController@Add');

    Route::get('/multiply/{angka1?}/{angka2?}', 'CalculatorController@Add');

    Route::get('/divide/{angka1?}/{angka2?}', 'CalculatorController@Add');
});

Route::get('/', function() {
    return view('welcome');
});

