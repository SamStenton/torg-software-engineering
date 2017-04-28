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

     /**
     * Accessing the thread of the app.
     *
     * @return App\Thread
     */
    public function thread()
    {
        return $this->belongsTo('App\Thread');
    }

     /**
     * Accessing the amount of participants. 
     *
     * @return App\Participants
     */
    public function participants()
    {
        return $this->hasMany('App\Participant');
    }

     /**
     * Accessing the app user.
     *
     * @return App\User
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }




}
