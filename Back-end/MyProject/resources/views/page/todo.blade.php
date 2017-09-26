@extends('app')

@section('title', 'To Do')

@section('content')

<div class="panel panel-default" style="margin-top:50px">
    <div class="panel-heading">
      <h3 class="panel-title">New To Do</h3>
    </div>
    <div class="panel-body">
        <form action="/addtodo" method="POST" >
            
            {{ csrf_field() }}

            <div class="form-group">
                <label>To Do</label>
                <input type="text" class="form-control" name="mytodo">
            </div>
            <button class="btn btn-default" type="submit" ><b>+</b> Add To Do</button>
        </form>
    </div>
 </div>

<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">To Do List</h3>
    </div>
    <div class="panel-body">
        <table class="table table-striped table-bordered">
            <tr>
                <th>To Do</th>
                <th></th>
            </tr>

            @foreach($data as $d)
                    <tr>
                        <td> {{ $d->description }} </td>
                        <td>
                            <button type="submit" class="btn btn-danger">
                                <span class="glyphicon glyphicon-trash"></span> Delete
                            </button>
                        </td>
                    </tr>
            @endforeach

        </table>
    </div>
</div>

@endsection