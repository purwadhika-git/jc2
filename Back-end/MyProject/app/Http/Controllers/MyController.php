<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyController extends Controller
{
    function isPalindrome($val = "")
    {
        //return (strrev($val) == $val) ? "True" : "False";

        return view('app', ["name" => "Hasbi"]);
    }

    function About()
    {
        return view('page.about');
    }
}
