@extends('layouts.dashboard')

@section('content')

    <div class="col-md-12 panel">
      {{-- <div class="game"><h1>{{ $lobby->game }}</h1></div> --}}
      <div class="game"><h1>Battlefield 1</h1></div>
      <div class="title">{{ $lobby->title }}</div>
    </div>


      <div id="lobby__players" class="col-md-6 panel">
        <players :lobby="{{ $lobby }}"></players>
      </div>

      <div class="col-md-6">
          <div class="col-md-12 panel">
              <chat :lobby="{{ $lobby }}"></chat>
          </div>
          <div class="col-md-12 panel">
            Vote: <small>none</small>
            <a href="">
              <div class="vote-option">
                Team 1
              </div>
            </a>
            <a href="">
              <div class="vote-option">
                Team 2
              </div>
            </a>
          </div>
      </div>

@endsection
