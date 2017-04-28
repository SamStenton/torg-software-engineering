<template>
        <section>
            <div class="level__progress">
                <div class="level__info">
                    <div id="score" class="info__points animated wobble">{{ live }}<span>points</span></div>
                    <!-- <div class="info__text">Until next level</div>  -->
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        props: ['user', 'score'],
        data() {
            return {
                current: this.score,
                live: this.score
            }
        },
        mounted() {
            // this.echoObject = Echo.join(`lobby.${this.lobby.slug}.chat`);
            this.listen()
            document.getElementById('score').classList.remove("wobble");
        },
        created() {
            var self = this;
            bus
            .$on('voteEnded', function(winner) {
                if(self.user.username == winner.username)
                {
                    self.current = self.live;
                    self.addScore(50)
                    document.getElementById('score').classList.toggle("wobble");
                    // document.getElementById('score').classList.remove("wobble");
                    bus.$emit('voteWon', {})
                }
            })
        },
        methods: {
            listen() {

            },
            addScore(amount) {
                this.live = this.current + amount;
            }

        }
    }
</script>
