<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lobby;

class LobbyController extends Controller
{
    public function index(Lobby $lobby) {
        return view('dashboard/lobby/index', compact('lobby'));
    }

    public function create() {
        return view('dashboard/lobby/create');
    }

    public function store(Request $request) {
        $lobby = new Lobby;
        $lobby->fill($request->all());
        $lobby->user_id = \Auth::user()->id;
        $lobby->slug = str_slug($lobby->title);
        $lobby->save();

        return Redirect(route('lobby.index', $lobby));
    }
}
