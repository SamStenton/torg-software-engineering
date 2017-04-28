
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_ForgotPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ForgotPasswordController.html">ForgotPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_LoginController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/LoginController.html">LoginController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_RegisterController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/RegisterController.html">RegisterController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_ResetPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ResetPasswordController.html">ResetPasswordController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_DashboardController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/DashboardController.html">DashboardController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_LobbyController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/LobbyController.html">LobbyController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_MessageController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/MessageController.html">MessageController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_MessagesController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/MessagesController.html">MessagesController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_VoteController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/VoteController.html">VoteController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_EncryptCookies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_TrimStrings" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/TrimStrings.html">TrimStrings</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_BroadcastServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/BroadcastServiceProvider.html">BroadcastServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_DashboardServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/DashboardServiceProvider.html">DashboardServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Lobby" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Lobby.html">Lobby</a>                    </div>                </li>                            <li data-name="class:App_Message" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Message.html">Message</a>                    </div>                </li>                            <li data-name="class:App_Participant" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Participant.html">Participant</a>                    </div>                </li>                            <li data-name="class:App_Score" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Score.html">Score</a>                    </div>                </li>                            <li data-name="class:App_Thread" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Thread.html">Thread</a>                    </div>                </li>                            <li data-name="class:App_User" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                            <li data-name="class:App_Vote" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Vote.html">Vote</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},
            
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_schedule", "name": "App\\Console\\Kernel::schedule", "doc": "&quot;Define the application&#039;s command schedule.&quot;"},
                    {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_commands", "name": "App\\Console\\Kernel::commands", "doc": "&quot;Register the Closure based commands for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_unauthenticated", "name": "App\\Exceptions\\Handler::unauthenticated", "doc": "&quot;Convert an authentication exception into an unauthenticated response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/LoginController.html", "name": "App\\Http\\Controllers\\Auth\\LoginController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\LoginController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_username", "name": "App\\Http\\Controllers\\Auth\\LoginController::username", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_logout", "name": "App\\Http\\Controllers\\Auth\\LoginController::logout", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/RegisterController.html", "name": "App\\Http\\Controllers\\Auth\\RegisterController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\RegisterController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_validator", "name": "App\\Http\\Controllers\\Auth\\RegisterController::validator", "doc": "&quot;Get a validator for an incoming registration request.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_create", "name": "App\\Http\\Controllers\\Auth\\RegisterController::create", "doc": "&quot;Create a new user instance after a valid registration.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/DashboardController.html", "name": "App\\Http\\Controllers\\DashboardController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\DashboardController", "fromLink": "App/Http/Controllers/DashboardController.html", "link": "App/Http/Controllers/DashboardController.html#method___construct", "name": "App\\Http\\Controllers\\DashboardController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\DashboardController", "fromLink": "App/Http/Controllers/DashboardController.html", "link": "App/Http/Controllers/DashboardController.html#method_index", "name": "App\\Http\\Controllers\\DashboardController::index", "doc": "&quot;Show the application dashboard.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/LobbyController.html", "name": "App\\Http\\Controllers\\LobbyController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\LobbyController", "fromLink": "App/Http/Controllers/LobbyController.html", "link": "App/Http/Controllers/LobbyController.html#method___construct", "name": "App\\Http\\Controllers\\LobbyController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\LobbyController", "fromLink": "App/Http/Controllers/LobbyController.html", "link": "App/Http/Controllers/LobbyController.html#method_index", "name": "App\\Http\\Controllers\\LobbyController::index", "doc": "&quot;Responds to a join lobby request&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\LobbyController", "fromLink": "App/Http/Controllers/LobbyController.html", "link": "App/Http/Controllers/LobbyController.html#method_create", "name": "App\\Http\\Controllers\\LobbyController::create", "doc": "&quot;Displays the lobby create form&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\LobbyController", "fromLink": "App/Http/Controllers/LobbyController.html", "link": "App/Http/Controllers/LobbyController.html#method_store", "name": "App\\Http\\Controllers\\LobbyController::store", "doc": "&quot;Stores a lobby in the database and redirects the user to it&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/MessageController.html", "name": "App\\Http\\Controllers\\MessageController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\MessageController", "fromLink": "App/Http/Controllers/MessageController.html", "link": "App/Http/Controllers/MessageController.html#method_index", "name": "App\\Http\\Controllers\\MessageController::index", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/MessagesController.html", "name": "App\\Http\\Controllers\\MessagesController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\MessagesController", "fromLink": "App/Http/Controllers/MessagesController.html", "link": "App/Http/Controllers/MessagesController.html#method_index", "name": "App\\Http\\Controllers\\MessagesController::index", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/VoteController.html", "name": "App\\Http\\Controllers\\VoteController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\VoteController", "fromLink": "App/Http/Controllers/VoteController.html", "link": "App/Http/Controllers/VoteController.html#method_initiate", "name": "App\\Http\\Controllers\\VoteController::initiate", "doc": "&quot;Responds to a request to create a vote&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\VoteController", "fromLink": "App/Http/Controllers/VoteController.html", "link": "App/Http/Controllers/VoteController.html#method_create", "name": "App\\Http\\Controllers\\VoteController::create", "doc": "&quot;Responds to the request to add a vote from a user&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\VoteController", "fromLink": "App/Http/Controllers/VoteController.html", "link": "App/Http/Controllers/VoteController.html#method_end", "name": "App\\Http\\Controllers\\VoteController::end", "doc": "&quot;Respond to a vote end request from the lobby admin&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/EncryptCookies.html", "name": "App\\Http\\Middleware\\EncryptCookies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/TrimStrings.html", "name": "App\\Http\\Middleware\\TrimStrings", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Lobby.html", "name": "App\\Lobby", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_getRouteKeyName", "name": "App\\Lobby::getRouteKeyName", "doc": "&quot;Get the route key for the model.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_setTitleAttribute", "name": "App\\Lobby::setTitleAttribute", "doc": "&quot;Dynamically creates the Lobby Slug value on save&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_users", "name": "App\\Lobby::users", "doc": "&quot;Get users that belong to the lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_votes", "name": "App\\Lobby::votes", "doc": "&quot;Get vote relation.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_hasCapacity", "name": "App\\Lobby::hasCapacity", "doc": "&quot;Checks to see if the lobby can add more users.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_userExistsInLobby", "name": "App\\Lobby::userExistsInLobby", "doc": "&quot;Checks to see if the user exists inside the lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_join", "name": "App\\Lobby::join", "doc": "&quot;Checks to see if user is in the lobby and then joins the user to the game&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_leave", "name": "App\\Lobby::leave", "doc": "&quot;Checks to see if user is in the lobby, then exits the user.&quot;"},
                    {"type": "Method", "fromName": "App\\Lobby", "fromLink": "App/Lobby.html", "link": "App/Lobby.html#method_currentVote", "name": "App\\Lobby::currentVote", "doc": "&quot;Gets the current vote for the lobby&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Message.html", "name": "App\\Message", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Message", "fromLink": "App/Message.html", "link": "App/Message.html#method_thread", "name": "App\\Message::thread", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Message", "fromLink": "App/Message.html", "link": "App/Message.html#method_participants", "name": "App\\Message::participants", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Message", "fromLink": "App/Message.html", "link": "App/Message.html#method_user", "name": "App\\Message::user", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Participant.html", "name": "App\\Participant", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Register any authentication \/ authorization services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/BroadcastServiceProvider.html", "name": "App\\Providers\\BroadcastServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\BroadcastServiceProvider", "fromLink": "App/Providers/BroadcastServiceProvider.html", "link": "App/Providers/BroadcastServiceProvider.html#method_boot", "name": "App\\Providers\\BroadcastServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/DashboardServiceProvider.html", "name": "App\\Providers\\DashboardServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\DashboardServiceProvider", "fromLink": "App/Providers/DashboardServiceProvider.html", "link": "App/Providers/DashboardServiceProvider.html#method_boot", "name": "App\\Providers\\DashboardServiceProvider::boot", "doc": "&quot;Bootstrap the application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\DashboardServiceProvider", "fromLink": "App/Providers/DashboardServiceProvider.html", "link": "App/Providers/DashboardServiceProvider.html#method_register", "name": "App\\Providers\\DashboardServiceProvider::register", "doc": "&quot;Register the application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapWebRoutes", "name": "App\\Providers\\RouteServiceProvider::mapWebRoutes", "doc": "&quot;Define the \&quot;web\&quot; routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapApiRoutes", "name": "App\\Providers\\RouteServiceProvider::mapApiRoutes", "doc": "&quot;Define the \&quot;api\&quot; routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Score.html", "name": "App\\Score", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Thread.html", "name": "App\\Thread", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/User.html", "name": "App\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_lobbies", "name": "App\\User::lobbies", "doc": "&quot;Relationship with lobbies table.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_lobby", "name": "App\\User::lobby", "doc": "&quot;Returns the users current lobby&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_friends", "name": "App\\User::friends", "doc": "&quot;Relationship with other users&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_score", "name": "App\\User::score", "doc": "&quot;Relationship with score&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_hasLobby", "name": "App\\User::hasLobby", "doc": "&quot;Find if the current user is part of a currently open lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_joinLobby", "name": "App\\User::joinLobby", "doc": "&quot;Join a user to a lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_leaveLobby", "name": "App\\User::leaveLobby", "doc": "&quot;Allow a user to leave a lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_addFriend", "name": "App\\User::addFriend", "doc": "&quot;Add a friend to the users profile.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_removeFriend", "name": "App\\User::removeFriend", "doc": "&quot;Remove a friend from the users profile.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_isFriendWith", "name": "App\\User::isFriendWith", "doc": "&quot;Checks to see if a user is friends with another user.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_findByUsername", "name": "App\\User::findByUsername", "doc": "&quot;Find a specific user by their unique username.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_addScore", "name": "App\\User::addScore", "doc": "&quot;Add points to users profile.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_currentScore", "name": "App\\User::currentScore", "doc": "&quot;Check the current score of a user.&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_hasScore", "name": "App\\User::hasScore", "doc": "&quot;Check to see if a user has over 0 points.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Vote.html", "name": "App\\Vote", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Vote", "fromLink": "App/Vote.html", "link": "App/Vote.html#method_lobby", "name": "App\\Vote::lobby", "doc": "&quot;Get users that belong to the lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\Vote", "fromLink": "App/Vote.html", "link": "App/Vote.html#method_users", "name": "App\\Vote::users", "doc": "&quot;Get users that belong to the lobby.&quot;"},
                    {"type": "Method", "fromName": "App\\Vote", "fromLink": "App/Vote.html", "link": "App/Vote.html#method_add", "name": "App\\Vote::add", "doc": "&quot;Add a vote from a user&quot;"},
                    {"type": "Method", "fromName": "App\\Vote", "fromLink": "App/Vote.html", "link": "App/Vote.html#method_winner", "name": "App\\Vote::winner", "doc": "&quot;Returns the winning users of a vote&quot;"},
                    {"type": "Method", "fromName": "App\\Vote", "fromLink": "App/Vote.html", "link": "App/Vote.html#method_basic", "name": "App\\Vote::basic", "doc": "&quot;Details for the basic vote type&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


