@extends('layouts.dashboard')

@section('content')
    <h1>Create Lobby</h1>
    <div class="col-md-8 panel">
        <form action="{{ route('lobby.store') }}" method="post">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
              <div class="form-group">
                <label for="title">Lobby Title</label>
                <input type="text" class="form-control" name="title" placeholder="Lobby Title">
              </div>

              <div class="form-group">
                <label for="game">Select Game</label>
                <select class="form-control" name="game" id="game">
                    <option value="1">Battlefield 1</option>
                    <option value="2">Call Of Duty</option>
                    <option value="3">League Of Legends</option>
                </select>
              </div>

              <div class="form-group">
                  <label for="slots">Total Slots</label>
                  <input type="number" min="0" max="8" class="form-control" name="slots" value="6">
              </div>

              <div class="form-group">
                  <label for="info">Lobby Info</label>
                  <textarea name="info" id="info" class="form-control" cols="30" rows="5"></textarea>
              </div>

<!--       <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" id="password" placeholder="Password">
          </div> -->

              <div class="checkbox">
                <label>
                  <input type="checkbox" name="competative"> Competitive
                </label>
              </div>
              <button type="submit" class="btn btn-default">Create Lobby</button>
        </form>
    </div>
@endsection
