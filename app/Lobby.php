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
        'user_id', 'id'
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
     * Checks to see if the lobby can add more users.
     * 
     * @return Boolean
     */
    public function hasCapacity()
    {
        return $this->users()->count() < $this->slots;
    }

    public function userExistsInLobby(User $user)
    {
        return $this->users->where('id', $user->id)->count() > 0;
    }

    public function join(User $user)
    {
                if ($this->user->hasLobby() && !$this->user->lobby()->id == $lobby->id) {
            $this->user->lobby()->leave($this->user);
        }

        if (! $this->hasCapacity() || $this->userExistsInLobby($user)) {
            return ;
        }
        $this->users()->attach($user->id);
    }

    public function leave(User $user)
    {
        if (! $this->userExistsInLobby($user)) {
            return ;
        }
        $this->users()->detach($user->id);
    }
}
