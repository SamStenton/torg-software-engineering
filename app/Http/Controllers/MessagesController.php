<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessagesController extends Controller
{
    public function index() {
        $messages = Message::toMe();
        return view('dashboard/messages/index', compact('messages'));
    }
}
