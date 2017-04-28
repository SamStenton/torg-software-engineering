<template>
        <section>
            <div class="level__progress">
                <div class="level__info">
                    <div class="info__points">{{ live }}<span>points</span></div>
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
        },
        created() {
            var self = this;
            bus
            .$on('voteEnded', function(winner) {
                if(self.user.username == winner.username)
                {
                    self.current = self.live;
                    self.addScore(50)
                }
            })
        },
        methods: {
            listen() {

            },
            addScore(amount) {
                self = this;
                setTimeout(function() {
                    self.live++
                    if(self.live == (self.current + amount)) {
                        clearTimeout(this)
                    }
                }, 50)
            }

        }
    }
</script>
