<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Message extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'thread_id', 'user_id', 'message',
    ];

    public function thread()
    {
        return $this->belongsTo('App\Thread');
    }

    public function participants()
    {
        return $this->hasMany('App\Participant');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }




}
