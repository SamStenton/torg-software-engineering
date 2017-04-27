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
     * Find if the current user is part of a currently open lobby.
     * 
     * @return Boolean
     */
    public function hasLobby()
    {
        return $this->lobbies()->exists();
    }

    public function joinLobby(Lobby $lobby)
    {
        if ($this->hasLobby()) {
            return ;
        }

        $this->lobbies()->attach($lobby->id);
    }

    public function leaveLobby(Lobby $lobby)
    {
        if (! $this->hasLobby()) {
            return ;
        }

        $this->lobbies()->detach($lobby->id);
    }

    public function addFriend(User $user)
    {
        if ($this->isFriendWith($user)) {
            return ;
        }
        $this->friends()->attach($user->id);
    }

    public function removeFriend(User $user)
    {
        if (! $this->isFriendWith($user)) {
            return ;
        }
        $this->friends()->detach($user->id);
    }

    public function isFriendWith(User $user)
    {
        return $this->friends()->where('friend_id', $user->id)->count() > 0;
    }

    public static function findByUsername($username) 
    {
        return self::where('username', $username)->first();
    }


}
