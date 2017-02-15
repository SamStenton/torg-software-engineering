<template>
    <div>
        <div class="col-md-6 player" v-for="player in players">
          <div class="mini-profile">
            <div class="profile__photo circle"></div>
            <div class="profile__info">
                <p class="light info__level">Noob</p>
                <h3><small>{{ player.username }}</small></h3>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['lobby'],
        data() {
            return {
                players: [],
                echo: null
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.echo = Echo.join(`lobby.${this.lobby.slug}.list`)
            this.listen()
        },
        methods: {
            listen() {
                    this.echo.here((users) => {
                        this.players = users
                    })
                    .joining((user) => {
                        this.players.push(user)
                        console.log("Joining: " + user.name);
                    })
                    .leaving((user) => {
                        this.players.splice(this.players.indexOf(user), 1);
                        console.log("Leaving: " + user.name);
                    });
            }
        }
    }
</script>
