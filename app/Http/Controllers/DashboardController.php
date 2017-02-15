<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lobby;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $lobbies = Lobby::all();
        return view('dashboard/index', compact('lobbies'));
    }
}
