@extends('app')

@section('content')

    <h1>Employee List</h1>

    @foreach($employees as $e)
        Name :  {{ $e->name }} | Address : {{ $e->address }} | Email : {{ $e->email }} 
        
        <form action="/deleteemployee" method="POST">
            {{ csrf_field() }}
            <input type="hidden" name="id" value="{{ $e->id }}" >
            <input type="submit" value="Delete">
        </form>
        
        <br>
    @endforeach

    <a href="/createemployee" class="btn btn-default" >Create Employee</a>

@endsection