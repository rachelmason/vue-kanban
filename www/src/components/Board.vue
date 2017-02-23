<template>
    <div>
        Active Board: {{board.name}} {{board.description}}
    </div>

</template>

<script>
    export default {
        name: 'board',
        mounted() {
            this.$root.$data.store.actions.getBoard(this.$route.params.id)
        },
        computed: {
            board() {
                return this.$root.$data.store.state.activeBoard
            }
        }
    }

</script>

<style>

</style>