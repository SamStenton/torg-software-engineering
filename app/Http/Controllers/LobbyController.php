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

    /**
     * Responds to a join lobby request
     * @param  Lobby  $lobby    The lobby to join
     * @return View        
     */
    public function index(Lobby $lobby) {

        $lobby->join($this->user);

        return view('dashboard/lobby/index', compact('lobby'));
    }
    
    /**
     * Displays the lobby create form
     * @return View 
     */
    public function create() {
        return view('dashboard/lobby/create');
    }

    /**
     * Stores a lobby in the database and redirects the user to it
     * @param  Request $request     The lobby details
     * @return View           
     */
    public function store(Request $request) {
        $lobby = new Lobby;
        $lobby->fill($request->all());
        $lobby->user_id = $this->user->id;
        $lobby->slug = str_slug($lobby->title);
        $lobby->save();

        $this->user->addScore(50, "Created lobby");
        return Redirect(route('lobby.index', $lobby));
    }
}
