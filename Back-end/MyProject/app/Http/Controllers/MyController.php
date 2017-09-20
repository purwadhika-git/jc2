<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyController extends Controller
{
    function isPalindrome($val = "")
    {
        return (strrev($val) == $val) ? "True" : "False";
    }
}
