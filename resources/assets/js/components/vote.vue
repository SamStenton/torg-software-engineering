<template>
    <div>
        <div @click="castVote('one')" class="vote-option">
            Vote One
        </div>

        <div @click="castVote('two')" class="vote-option">
            Vote Two
        </div>
    </div>
</template>

<script>
    export default {
        props: ['lobby', 'user'],
        data() {
            return {
                type: 'basic',
                end_time: null, 
                votes: [],
                echoObject: null
            }
        },
        mounted() {
            this.echoObject = Echo.join(`lobby.${this.lobby.slug}.vote`);
            this.listen()
        },
        created() {
            // var self = this;
            // bus.$on('playerJoined', function (player) {
            //   self.pushMessage({
            //     user: 'info',
            //     message: player.name + " joined."
            //   });
            // })
        },
        methods: {
            castVote(vote) {
                var self = this
                var exists = this.votes.find(function(vote) {
                    return vote.id == self.user.id
                });

                if (exists != undefined) {
                    this.removeVote(exists)
                }
                this.votes.push({id: 1, username: 'Sam', vote: vote})

                //Push to server
                bus.$emit('voted', this.user)
            },

            removeVote(vote) {
                this.votes .splice(this.votes.indexOf(vote), 1);
            },

            listen() {
                this.echoObject.listenForWhisper('voted', (e) => {
                    this.pushMessage(e)
                });
            },
        }
    }
</script>
