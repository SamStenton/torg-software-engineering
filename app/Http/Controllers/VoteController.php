<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lobby;
use App\Vote;

class VoteController extends Controller
{
    public function initiate($lobby, $type)
    {      
       $lobby = Lobby::find($lobby);
       return $lobby->votes()->create(['type' => $type])->{$type}();
    }

    public function create($lobby, Request $request)
    {      
       $lobby = Lobby::find($lobby);
       $lobby->currentVote()->add($request->all());
    }

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
