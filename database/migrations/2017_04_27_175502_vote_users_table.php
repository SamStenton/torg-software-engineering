<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class VoteUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vote_users', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('vote_id');
            $table->unsignedInteger('vote_user_id')->nullable();
            // $table->unsignedInteger('vote_team_id')->nullable();
            $table->primary(['user_id', 'vote_id']); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vote_users');
    }
}
