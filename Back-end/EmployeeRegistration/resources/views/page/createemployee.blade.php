@extends('app')

@section('content')

    <h1>Create Employee</h1>

    <form action="/saveemployee" method="POST">

        {{ csrf_field() }}

        <input type="text" name="name" placeholder="Name" >
        <input type="text" name="address" placeholder="Address" >
        <input type="text" name="email" placeholder="Email" >

        <input type="submit" value="Save" class="btn btn-default" >

    </form>

@endsection