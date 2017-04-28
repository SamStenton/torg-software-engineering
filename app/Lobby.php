<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User; 

class Lobby extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'title', 'slots', 'info',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Dynamically creates the Lobby Slug value on save
     * @param String $value 
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

    /**
     * Get users that belong to the lobby.
     * 
     * @return Collection App\User
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'lobby_users');
    }

    /**
     * Get vote relation.
     * 
     * @return Collection App\Vote
     */
    public function votes()
    {
        return $this->hasMany('App\Vote');
    }

    /**
     * Checks to see if the lobby can add more users.
     * 
     * @return Boolean
     */
    public function hasCapacity()
    {
        return $this->users()->count() < $this->slots;
    }
    
    /**
    * Checks to see if the user exists inside the lobby.
    *
    * @param user - The user inside the lobby
    * @return Boolean
    */
    public function userExistsInLobby(User $user)
    {
        return $this->users->where('id', $user->id)->count() > 0;
    }
    
    /**
    * Checks to see if user is in the lobby and then joins the user to the game
    *
    * @param user - The user joining the game
    * @return Boolean
    */    
    public function join(User $user)
    {

        if ($user->hasLobby() && !$user->lobby()->id == $this->id) {
            $this->leave($user);
        }

        if (! $this->hasCapacity() || $this->userExistsInLobby($user)) {
            return ;
        }
        $this->users()->attach($user->id);
    }
    
    /**
    * Checks to see if user is in the lobby, then exits the user.
    *
    * @param user - The user inside the lobby to leave
    * @return Boolean
    */    
    public function leave(User $user)
    {
        if (! $this->userExistsInLobby($user)) {
            return ;
        }
        $this->users()->detach($user->id);
    }

    /**
     * Gets the current vote for the lobby
     * @return App\Vote Vote Item
     */
    public function currentVote()
    {
        return $this->votes()->where('ended', false)->first();
    }
}
