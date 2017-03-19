<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * Sets up the test environment before each test
     */
    public function setUp() {
        parent::setUp();
        $this->artisan('migrate:refresh');
    }

    /**
     * Creates a test user
     *
     * @return User
     */
    private function createUser() {
        return User::create([
            'name'  => 'Samuel Stenton',
            'username'  => 'Sam',
            'email' => 'up778465@myport.ac.uk',
            'password'  => 'supersecurepassword'
        ]);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testThatUserCanBeCreated()
    {
        $this->createUser();
        $this->assertTrue(User::all()->count() == 1);
        $user = User::find(1);

        // Check that users details are correctly saved
        $this->assertTrue($user->name == "Samuel Stenton");
        $this->assertTrue($user->username == "Sam");
        $this->assertTrue($user->email == "up778465@myport.ac.uk");
    }

    /**
     * Test a user can be deleted.
     *
     * @return void
     */
    public function testThatUserCanBeDeleted()
    {
        $this->createUser();
        User::find(1)->delete();

        // Check that user does not show up normally
        $this->assertTrue(User::all()->count() == 0);

        // Check that user still exists in database just 'soft deleted'
        $this->assertTrue(User::withTrashed()->count() == 1);
    }

    /**
     * Test a deleted user is only hidden.
     *
     * @return void
     */
    public function testThatUserCanBeRestored()
    {
        $this->createUser();
        $user = User::find(1);
        $user->delete();

        // Check that user still exists in database just 'soft deleted'
        $this->assertTrue(User::withTrashed()->count() == 1);

        // Restore the deleted user
        $user->restore();

        // User is nolonger deleted
        $this->assertTrue(User::all()->count() == 0);
    }

    public function testCanAddAnotherUserAsFriend()
    {
        // Using Factory disables requirements on certain fields being not null
        $sam = factory(User::class)->create(['username' => 'Sam']);
        $alice = factory(User::class)->create(['username' => 'Alice']);

        // Check users are not friends already
        $this->assertFalse($sam->isFriendWith($alice));

        // Add friend
        $sam->addFriend($alice);
        $sam->addFriend($alice);
        $this->assertTrue($sam->isFriendWith($alice));
        $this->assertEquals(1, $sam->friends()->count());
    }

    public function testCanRemoveAnotherUserAsFriend()
    {
        // Using Factory disables requirements on certain fields being not null
        $sam = factory(User::class)->create(['username' => 'Sam']);
        $alice = factory(User::class)->create(['username' => 'Alice']);

        // Check users are not friends already
        $this->assertFalse($sam->isFriendWith($alice));

        // Add friend
        $sam->addFriend($alice);
        $this->assertTrue($sam->isFriendWith($alice));

        // Remove friend
        $sam->removeFriend($alice);
        $this->assertFalse($sam->isFriendWith($alice));
    }

    public function testCanJoinALobby()
    {
        // Using Factory disables requirements on certain fields
        $sam = factory(User::class)->create(['username' => 'Sam']);
        $lobby = factory(\App\Lobby::class)->create(['user_id' => $sam->id]);

        // Check users are not friends already
        $this->assertFalse($sam->hasLobby());

        // Join Lobby
        $sam->joinLobby($lobby);
        $this->assertTrue($sam->hasLobby());
    }

    public function testCanLeaveALobby()
    {
        // Using Factory disables requirements on certain fields
        $sam = factory(User::class)->create(['username' => 'Sam']);
        $lobby = factory(\App\Lobby::class)->create(['user_id' => $sam->id]);

        // Check users are not friends already
        $this->assertFalse($sam->hasLobby());

        // Join Lobby
        $sam->joinLobby($lobby);
        $sam->joinLobby($lobby);
        $this->assertTrue($sam->hasLobby());
        $this->assertEquals(1, $sam->lobbies()->count());

        $sam->leaveLobby($lobby);
        $this->assertFalse($sam->hasLobby());
    }
}
