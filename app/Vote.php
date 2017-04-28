<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lobby_id', 'type', 'ended'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * Get users that belong to the lobby.
     * 
     * @return Collection App\User
     */
    public function lobby()
    {
        return $this->belongsTo('App\Lobby');
    }


    /**
     * Get users that belong to the lobby.
     * 
     * @return Collection App\User
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'vote_users')->withPivot('vote_user_id');
    }

    public function add($params)
    {
        $user = User::find($params['user']);
        $this->users()->where('user_id', $user->id)->detach();
        $this->users()->attach($user->id, ['vote_user_id' => $params['vote']]);
    }
    
    public function winner()
    {
       return User::find($this->users->groupBy('pivot_vote_user_id')->first()->first()->pivot->vote_user_id);
    }

    public function basic()
    {
        return Collect([
            'title' => 'Select the winning player',
            'options' => $this->lobby->users->map(function($user) {
                return Collect([
                    'id' => $user->id,
                    'display' => $user->username
                ]);
            })
        ]);
    }


    
}
