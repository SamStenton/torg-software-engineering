<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
    public function hasCapacity() {
        return $this->users()->count() < $this->slots;
    }
}
