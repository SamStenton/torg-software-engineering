<template>
    <div>
        <div class="col-md-6 player" v-for="player in players">
          <div class="mini-profile">
            <div class="profile__photo circle"></div>
            <div class="profile__info">
                <p class="light info__level">Noob <span v-if="player.voted">(Voted)</span></p>
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
        created() {
            bus
            .$on('voted', player => {
                this.findbyUsername(player.username).voted = true;
            })
        },
        methods: {
            listen() {
                this.echo.here((users) => {
                    this.players = users
                    this.clearVotedFlags();
                })
                .joining((user) => {
                    user.voted = false;
                    this.players.push(user)
                    bus.$emit('playerJoined', user)
                    console.log("Joining: " + user.username);
                })
                .leaving((user) => {
                    this.players.splice(this.players.indexOf(user), 1);
                    console.log("Leaving: " + user.name);
                });
            },

            findbyUsername(username)
            {
                return this.players.find(function(user) {
                    return user.username = username
                })
            },

            clearVotedFlags()
            {
                this.players.forEach(user => {
                    user.voted = false;
                })
            }

        }
    }
</script>
