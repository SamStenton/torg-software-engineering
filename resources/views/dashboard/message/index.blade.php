@extends('layouts.dashboard')

@section('content')
    <h1>Messages with Test User</h1>
    <div class="col-md-8 panel">
        <div class="message">
            <strong>You: </strong>
            Hello!
        </div>
        <div class="message">
            <strong>You: </strong>
            How are you?
        </div>
        <div class="message">
            <strong>Test User: </strong>
            Testing this thing
        </div>
        <div class="message">
            <strong>You: </strong>
            Lorum Ipsum
        </div>

        <input type="text" style="width: 100%; margin-top: 20px" placeholder="Press enter to send">
    </div>
@endsection
