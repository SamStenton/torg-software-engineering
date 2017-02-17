@extends('layouts.dashboard')

@section('content')
    <h1>Dashboard</h1>
    <div class="row">
    @foreach ($lobbies as $lobby)
        <a href="{{ route('lobby.index', $lobby->slug) }}">
            <div class="col-sm-3 game-item">
                <div style="background-image: url('images/battlefieldbackground.jpg')">
                    <div class="details">{{ $lobby->title }} <br /> Battlefield 1</div>
                </div>
            </div>
        </a>
    @endforeach
    </div>

@endsection
