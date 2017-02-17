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
        'to', 'from', 'message',
    ];

    public static function generateMessages() {
        for ($i=0; $i < 20; $i++) { 
            self::create([
                'to' => 5,
                'from' => 4,
                'message' => uniqid()
            ]);
        }
    }
    public static function toMe() {
        $to = self::where('to', Auth::user()->id)->get();
        return $to->groupBy('from');
    }

    public static function with($id) {
        $from = self::where('from', Auth::user()->id)->Orwhere('to', $id)->get();
        // $to = self::where('from', Auth::user()->id)->where('to', $id)->get();
        dd($from);
    
    }

}
