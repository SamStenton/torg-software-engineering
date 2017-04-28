<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Relationship with lobbies table.
     * 
     * @return Collection
     */
    public function lobbies()
    {
        return $this->belongsToMany('App\Lobby', 'lobby_users');
    }

    /**
     * Returns the users current lobby
     * @return App\Lobby 
     */
    public function lobby()
    {
        return $this->lobbies->first();
    }

    /**
     * Relationship with other users
     *
     * @return  Collection 
     */
    public function friends()
    {
        return $this->belongsToMany('App\User', 'friends', 'user_id', 'friend_id');
    }

    /**
     * Relationship with score
     *
     * @return  Collection 
     */
    public function score()
    {
        return $this->hasMany('App\Score');
    }


    /**
     * Find if the current user is part of a currently open lobby.
     * 
     * @return Boolean
     */
    public function hasLobby()
    {
        return $this->lobbies()->exists();
    }

     /**
     * Join a user to a lobby.
     * 
     * @param Lobby $lobby The name of the lobby
     * @return Boolean
     */
    public function joinLobby(Lobby $lobby)
    {
        if ($this->hasLobby()) {
            return ;
        }

        $this->lobbies()->attach($lobby->id);
    }
    
     /**
     * Allow a user to leave a lobby.
     * 
     * @param Lobby $lobby The name of the lobby
     * @return Boolean
     */
    public function leaveLobby(Lobby $lobby)
    {
        if (! $this->hasLobby()) {
            return ;
        }

        $this->lobbies()->detach($lobby->id);
    }

     /**
     * Add a friend to the users profile.
     * 
     * @param User $user the name of the user being added
     * @return Boolean
     */
    public function addFriend(User $user)
    {
        if ($this->isFriendWith($user)) {
            return ;
        }
        $this->friends()->attach($user->id);
    }
    
     /**
     * Remove a friend from the users profile.
     * 
     * @param User $user The name of the user being removed
     * @return Boolean
     */
    public function removeFriend(User $user)
    {
        if (! $this->isFriendWith($user)) {
            return ;
        }
        $this->friends()->detach($user->id);
    }

     /**
     * Checks to see if a user is friends with another user.
     * 
     * @param User $user The name of the user being compared with
     * @return Boolean
     */
    public function isFriendWith(User $user)
    {
        return $this->friends()->where('friend_id', $user->id)->count() > 0;
    }

     /**
     * Find a specific user by their unique username.
     * 
     * @param $username The username of the user
     * @return string
     */
    public static function findByUsername($username) 
    {
        return self::where('username', $username)->first();
    }

     /**
     * Add points to users profile.
     * 
     * @param $amount The amount of points being added
     * @param $reason The reason the user is recieving the points
     * @var array
     */
    public function addScore($amount, $reason = null)
    {

        $this->score()->create([
            'user_id'   => $this->id,
            'score'     => $amount,
            'total'     => $this->currentScore() + $amount,
            'reason'    => $reason
        ]);
    }

     /**
     * Check the current score of a user.
     * 
     * @return integer 
     */
    public function currentScore() 
    {
        if ($this->hasScore()) {
            return $this->score()->orderBy('created_at', 'DESC')->first()->total;
        }

        return 0;
    }

     /**
     * Check to see if a user has over 0 points.
     * 
     * @return Boolean 
     */
    public function hasScore() 
    {
        return count($this->score) > 0;
    }

}
