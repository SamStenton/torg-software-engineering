@extends('layouts.dashboard')

@section('content')
    <h1>Messages</h1>
    <div class="col-md-8 panel">

        <div class="user">
            <a href="{{ route('message.index', 6) }}">From Test User</a>
        </div>
        <div class="user">
            <a href="{{ route('message.index', 6) }}">From Damon</a>
        </div>

        <div class="user">
            <a href="{{ route('message.index', 6) }}">From Alex</a>
        </div>


    </div>
@endsection
