<template>
    <div>
        <div v-if="admin">
            <div v-if="vote.status == null" class="available-votes">
                <p>Please select a type of vote to initiate</p>
                <div @click="initiate('basic')" class="vote-option">Basic</div>
            </div>
            <div v-if="vote.status != null" class="vote-controls">
                <div @click="end()" class="vote-option">End Vote</div>
            </div>
        </div>
        <div v-if="vote.status != null">
            <h4>{{ vote.title }}</h4>
            <div v-for="option in vote.options" @click="castVote(option.id)" class="vote-option">
                {{ option.display }}
            </div>
        </div>
        <div v-else>
            <h5>There is nothing to vote on</h5>
        </div>
    </div>
</template>
<style>
    .vote-option {
        display: inline-block;
        height: 50px;
        margin-left: 10px;
        padding: 10px;
        cursor: pointer;
        background: grey;
        color: white;
    }
</style>
<script>
    export default {
        props: {lobby: Object, user: Object, admin: Boolean},
        data() {
            return {
                echoObject: null,
                vote: {
                    title: null,
                    type: null,
                    status: null,
                    options: [],
                }
            }
        },
        mounted() {
            this.echoObject = Echo.join(`lobby.${this.lobby.slug}.vote`);
            this.listen()
        },
        created() {

        },
        methods: {
            initiate(type) {
                var self = this
                axios.get(`/api/lobby/${this.lobby.id}/initiate/${type}`)
                  .then(function (response) {
                    self.vote.type = type
                    self.vote.status = 'running'
                    self.vote.options = response.data.options
                    self.vote.title = response.data.title
                    self.echoObject.whisper('voteInitiated', self.vote); 
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                // bus.$emit('voteInitiated', self.vote)
            },
            end() {
                var self = this
                axios.get(`/api/lobby/${this.lobby.id}/end/${this.vote.type}`)
                  .then(function (response) {
                    self.vote = {
                        title: null,
                        type: null,
                        status: null,
                        options: [],
                    }
                    bus.$emit('voteEnded', response.data);
                    self.echoObject.whisper('voteEnded', response.data); 
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            },
            castVote(vote) {

                //Push to server
                axios.post(`/api/lobby/${this.lobby.id}/vote`, {
                    user: this.user.id,
                    vote: vote
                  })
                  .then(response => {
                    this.echoObject.whisper('userVoted', this.user); 
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            },

            removeVote(vote) {
                this.votes.splice(this.vote.responses.indexOf(vote), 1);
            },

            listen() {
                this.echoObject
                .listenForWhisper('voteInitiated', (vote) => {
                    bus.$emit('voteInitiated', vote);
                    this.vote = vote
                })
                .listenForWhisper('voteEnded', (winner) => {
                    this.vote = {
                        title: null,
                        type: null,
                        status: null,
                        options: [],
                    }
                    bus.$emit('voteEnded', winner);
                })
                .listenForWhisper('userVoted', (user) => {
                    bus.$emit('voted', user);
                });


            },
        }
    }
</script>
