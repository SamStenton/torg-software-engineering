<template>
    <div>
        <div class="messages">
          <p v-for="message in messages"><strong>...: </strong>{{ message.message }}</p>

        </div>
        <input type="text" v-model="message" @keyup.enter="sendMessage">
    </div>
</template>

<script>
    export default {
        props: ['lobby'],
        data() {
            return {
                messages: [],
                message: '',
                echo: null
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.echo = Echo.join(`lobby.${this.lobby.slug}.chat`);
            this.listen()
        },
        methods: {
            listen() {
                this.echo.listenForWhisper('message', (e) => {
                    this.messages.push(e)
                });
            },

            sendMessage() {
                this.messages.push({
                    user: 'testing',
                    message: this.message
                })
                this.echo.whisper('message', {
                   user: 'test',
                   message: this.message
                });

                this.message = "";
            }
        }
    }
</script>
