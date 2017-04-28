<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lobby;
use App\Vote;

class VoteController extends Controller
{
  /**
   * Responds to a request to create a vote
   * @param  App\Lobby $lobby   The lobby to attach the vote to
   * @param  String $type       Type of vote being requested
   * @return JSON               Details of the requested vote
   */
    public function initiate($lobby, $type)
    {      
       $lobby = Lobby::find($lobby);
       return $lobby->votes()->create(['type' => $type])->{$type}();
    }

    /**
     * Responds to the request to add a vote from a user
     * @param  App\Lobby  $lobby  The lobby to add a vote to
     * @param  Request $request   Details of the vote from a yser
     * @return Boolean            True if vote created
     */
    public function create($lobby, Request $request)
    {      
       $lobby = Lobby::find($lobby);
       $lobby->currentVote()->add($request->all());
    }

    /**
     * Respond to a vote end request from the lobby admin
     * @param  App\Lobby $lobby   The lobby the vote resides in
     * @param  String $type       The vote type
     * @return App\User           The winner of the vote
     */
    public function end($lobby, $type)
    {      
        $lobby = Lobby::find($lobby);
        $vote = $lobby->currentVote();
        $vote->update(['ended' => true]);
        $user = $vote->winner();
        $user->addScore(50, 'Won vote');
        return $user;
    }
}
