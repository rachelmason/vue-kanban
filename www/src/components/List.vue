<template>
    <div>
        <router-link :to="'/lists/'+list._id">
            {{list.name}}
        </router-link><span @click="removelist(list)">x</span>
    </div>
</template>
<script>
    import Card from './Card'
    export default {
        name: 'list',
        components: { Card },
        mounted() {
            this.$root.$data.store.actions.getLists(this.$route.params.id)
        },
        computed: {
            lists() {
                return this.$root.$data.store.state.lists
            }
        },
        methods: {
            addList() {
                this.$root.$data.store.actions.addList(this.newList)
            },
            removeList(list) {
                this.$root.$data.store.actions.removeList(list)
            }
        }
    }

</script>
<style>
    .list {
        width: 20vw;
        height: 79vh;
        background: #A3C6C4;
        margin: 35px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>