<template>
    <div >
        <div>

        <p>{{list.name}}</p>

        <Card v-for="card in list.cards" :card = "card"></Card>
        <form class="col s12" @submit.prevent="addCard">
            <div class="input-field col s2">
                <input required="true" type="text" placeholder="name" v-model="newCard.name">
            </div>
            <button class="waves-effect waves-light btn">add</button>
        </form>
        </div>
          
    
     
    </div>
</template>
<script>
    import Card from './Card'
    export default {
        name: 'list',
        props:['list','index'],
        components: { Card },
     
        mounted(){
            
            this.$root.$data.store.actions.getListCards(this.list._id, this.index)
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
            },
            addCard(){
                
            }
        }
    }

</script>
<style>
 
</style>