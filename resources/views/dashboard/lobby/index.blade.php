@extends('layouts.dashboard')

@section('content')

    <div class="col-md-12 panel">
      {{-- <div class="game"><h1>{{ $lobby->game }}</h1></div> --}}
      <div class="game"><h1>Battlefield 1</h1></div>
      <div class="title">{{ $lobby->title }}</div>
    </div>


      <div id="lobby__players" class="col-md-6 panel">
        <div class="col-md-6 player">
          <div class="mini-profile">
            <div class="profile__photo circle"></div>
            <div class="profile__info">
                <p class="light info__level">Noob</p>
                <h3><small>{{ $user->username }}</small></h3>
            </div>
          </div>
        </div>
        @for ($i = 0; $i < 11; $i++)
          <div class="col-md-6 player">
            <div class="mini-profile">
              <div class="profile__photo circle"></div>
              <div class="profile__info">
                  <p class="light info__level">Noob</p>
                  <h3><small>Username</small></h3>
              </div>
            </div>
          </div>
        @endfor
      </div>

      <div class="col-md-6">
          <div class="col-md-12 panel">
            <div class="messages">
              <p><strong>Sam: </strong>asdasd</p>
              <p><strong>Sam: </strong>asdasd</p>
              <p><strong>Sam: </strong>asdasd</p>

            </div>
            <input type="text">
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
