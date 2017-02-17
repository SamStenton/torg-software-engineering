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
              <chat :lobby="{{ $lobby }}" :user="{{ $user }}"></chat>
          </div>
          <div class="col-md-12 panel">
              <vote :lobby="{{ $lobby }}"></vote>
          </div>
      </div>

@endsection
