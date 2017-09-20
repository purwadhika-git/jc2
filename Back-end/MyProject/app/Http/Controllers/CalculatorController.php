<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{

    function Add ($angka1 = 1, $angka2 = 1) {
        $var = $angka1 + $angka2;
        return $var;
    }

    function Subtract ($angka1 = 1, $angka2 = 1) {
        $var = $angka1 - $angka2;
        return $var;
    }

    function Multiply ($angka1 = 1, $angka2 = 1) {
        $var = $angka1 * $angka2;
        return $var;
    }

    function Divide ($angka1 = 1, $angka2 = 1) {
        $var = $angka1 / $angka2;
        return $var;
    }

}
