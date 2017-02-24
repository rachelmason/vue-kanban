<template>
  <div>
      <div class="row">
    <form  class="col s12" @submit.prevent="addBoard">
      
        <div class="input-field col s4">
            <input required="true" type="text" placeholder="name" v-model="newBoard.name">
        </div>
        <button class="waves-effect waves-light btn">add</button>
    </form>
</div>
           
        <ul>
            <li v-for ="board in boards"> <router-link :to="'boards/'+board._id+'/lists'">{{board.name}} </router-link> <span @click="removeBoard(board)">x</span> </li>

        </ul>
    </div>
</template>
<script>
export default {
    name:'user',
    data(){
        return{
            newBoard:{
                name:'',
                description:''
            }
            
        }
    },
    mounted(){
    this.$root.$data.store.actions.getBoards()
        },
    computed: {
        boards(){
         return this.$root.$data.store.state.boards
         }
        },
    methods:{
        addBoard(){
            this.$root.$data.store.actions.addBoard(this.newBoard)
        },
        removeBoard(board){
            this.$root.$data.store.actions.removeBoard(board)
        }

    }
}

</script>
<style>

</style>
