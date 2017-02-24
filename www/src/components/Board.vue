<template>
    <div>
        Active Board: {{board.name}} {{board.description}}
        <ul>
            <li v-for="list in lists">
                <List></List>
            </li>
        </ul>
        <form class="col s12" @submit.prevent="addList">
            <div class="input-field col s2">
                <input required="true" type="text" placeholder="name" v-model="newList.name">
            </div>
            <button class="waves-effect waves-light btn">add</button>
        </form>
    </div>

</template>

<script>
    import List from './List'
    export default {
        name: 'board',
        components: { List },
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