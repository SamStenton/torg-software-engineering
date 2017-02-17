<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Torg') }}</title>

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body id="dashboard">
    <header class="container-fluid no-padding">
        <section id="profile" class="col-md-2">
            <div class="mini-profile">
                <div class="profile__photo circle"></div>
                <div class="profile__info">
                    <p class="light info__level">Noob</p>
                    <h3><small>Username</small></h3>
                </div>
            </div>
        </section>
        <section id="top" class="col-md-10">
            <a href="{{ route('lobby.create') }}"><button class="btn">Create Lobby</button></a>
        </section>
    </header>
    <main class="container-fluid no-padding">
        <aside class="col-md-2">
            <nav>
                <ul>
                    <li><i class="fa fa-ticket fa-2x" aria-hidden="true"></i><a href="/dashboard">Dashboard</a></li>
                    <li><i class="fa fa-user fa-2x" aria-hidden="true"></i><a href="">Profile</a></li>
                    <li><i class="fa fa-comments-o fa-2x" aria-hidden="true"></i><a href="{{ route('messages.index') }}">Messages</a></li>
                    <li><i class="fa fa-sliders fa-2x" aria-hidden="true"></i><a href="">Settings</a></li>
                    <li><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i><a href="/logout">Logout</a></li>
                </ul>
            </nav>

            <section>
                <div class="level__progress">
                    <div class="level__info">
                        <div class="info__points">123<span>points</span></div>
                        <div class="info__text">Until next level</div>
                    </div>
                </div>
            </section>
        </aside>
        <article id="app" class="col-md-10 container">
            @yield('content')
        </article>
    </main>
    <!-- Scripts -->
    <script src="/js/app.js"></script>
</body>
</html>
