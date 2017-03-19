<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
    public function setUp() {
        parent::setUp();
        $this->artisan('migrate:refresh');
    }

    /**
     * Reguster Form Responds to Correct and Valid Data Input
     *
     * @return void
     */
    public function testRegisterFormRespondsToCorrectAndValidInput()
    {
        $this->browse(function ($browser) {
            $browser->visit('/register')
                    ->assertSee('Torg Registration')
                    ->type('name', 'Samuel Stenton')
                    ->type('username', 'Samuel')
                    ->type('email', 'up778465@myport.ac.uk')
                    ->type('password', 'supersecurepassword1')
                    ->type('password_confirmation', 'supersecurepassword1')
                    ->press('Register')
                    ->assertPathIs('/dashboard');
        });
    }
}
