<template>
    <div>
        
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
            }
        },
        mounted() {
            
        },
        methods: {
            castVote(vote) {
                this.votes.push({id: 1, username: 'Sam', vote: vote})
                this.$emit('voted', {id: 1, username: 'Sam'})
            }
        }
    }
</script>
