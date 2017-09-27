<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    function GetEmployee(){
        $employeeList = DB::select('select * from employee where deleted = 0');
        return view('page.employeelist', [ "employees" => $employeeList ]);
    }

    function CreateEmployee(){
        return view('page.createemployee');
    }

    function SaveEmployee(Request $req){
        $name = $req->name;
        $address = $req->address;
        $email = $req->email;

        
        DB::insert('insert into employee (name, email, address, deleted) values (?, ?, ?, ?)', [$name, $email, $address, 0]);
        
        return redirect('/');
    }

    function DeleteEmployee(Request $req){
        $id = $req->id;

        DB::update('update employee set deleted = 1 where id = ?', [$id]);

        return redirect('/');
    }
    
}
