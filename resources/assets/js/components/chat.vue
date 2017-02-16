<template>
    <div>
        <div class="messages">
          <p v-for="message in messages"><strong>...: </strong>{{ message.message }}</p>

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
        props: ['lobby'],
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
        methods: {
            pushMessage(message){
                this.messages.push(message)
                this.updateScroll()
            },
            listen() {
                this.echoObject.listenForWhisper('message', (e) => {
                    this.pushMessage(e)
                });
            },
            sendMessage() {
                var message = {
                    user: 'testing',
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
