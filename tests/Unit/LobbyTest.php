<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Lobby;

class LobbyTest extends TestCase
{
    /**
     * Sets up the test environment before each test
     */
    public function setUp() {
        parent::setUp();
        $this->artisan('migrate:refresh');
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLobbyCanBeCreated()
    {
        Lobby::create([
            'title' => 'Bills Lobby',
            'user_id' => 1,
            'slots' => 2,
            'info'  => 'A test lobby'
        ]);

        $lobby = Lobby::find(1);
        $this->assertTrue($lobby->title == 'Bills Lobby');
        $this->assertTrue($lobby->slots == 2);
        $this->assertTrue($lobby->info == 'A test lobby');
    }
}
