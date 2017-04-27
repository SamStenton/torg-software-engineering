<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lobby;

class LobbyController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Make the user available throughout the controller
        $this->middleware(function ($request, $next) {
            $this->user = \Auth::user();
            return $next($request);
        });
    }

    public function index(Lobby $lobby) {
        $lobby->join($this->user);
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
