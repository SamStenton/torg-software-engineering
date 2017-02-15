@extends('layouts.dashboard')

@section('content')
    <h1>Dashboard</h1>
    <div class="row">
    @foreach ($lobbies as $lobby)
        <a href="{{ route('lobby.index', $lobby->slug) }}">
            <div class="col-sm-3 game-item">
                <div>{{ $lobby->title }}</div>
            </div>
        </a>
    @endforeach
    </div>

@endsection
