<template>
    <div>
        <div class="messages">
          <p v-for="message in messages"><strong>{{ message.user }}: </strong>{{ message.message }}</p>
        </div>
        <input type="text" v-model="message" @keyup.enter="sendMessage">
    </div>
</template>
<style>
    .messages {
        height: 250px;
        overflow: scroll;
    }
</style>
<script>
    export default {
        props: ['lobby', 'user'],
        data() {
            return {
                messages: [],
                message: '',
                echoObject: null
            }
        },
        mounted() {
            this.echoObject = Echo.join(`lobby.${this.lobby.slug}.chat`);
            this.listen()
        },
        created() {
            var self = this;
            bus
            .$on('playerJoined', function (player) {
              self.pushMessage({
                user: 'info',
                message: player.name + " joined."
              });
            })
            .$on('voted', function(player) {
                self.pushMessage({
                  user: 'vote',
                  message: player.username + " voted."
                });
            })
            .$on('voteInitiated', function(vote) {
                self.pushMessage({
                  user: 'vote created',
                  message: vote.title
                });
            })
            .$on('voteEnded', function(vote) {
                self.pushMessage({
                  user: 'vote',
                  message: 'ended'
                });
            })
            .$on('voteWon', function(vote) {
                self.pushMessage({
                  user: 'vote',
                  message: "You are the winner. +50 Points"
                });
            })
        },
        methods: {
            pushMessage(message){
                this.messages.push(message)
                this.updateScroll()
            },
            listen() {
                this.echoObject
                .listenForWhisper('message', (e) => {
                    this.pushMessage(e)
                })

            },
            sendMessage() {
                var message = {
                    user: this.user.username,
                    message: this.message
                }
                this.pushMessage(message);
                this.echoObject.whisper('message', message);
                this.message = "";
            },
            updateScroll() {
                var element = document.getElementsByClassName("messages")[0];
                element.scrollTop = element.scrollHeight;
            }
        }
    }
</script>
