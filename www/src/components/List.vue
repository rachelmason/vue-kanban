<template>
<div>
    <div class="list">
        <div class="heading">
            <h3>title</h3>
        </div>
        <card></card>
        <card></card>
        <card></card>
        <div class="addCard"></div>
    </div>
</div>
</template>
<script>
import Card from './Card'
export default {
    name:'list',
    components: {Card},
    data(){
        return{
            list:''
        }
    }
}

</script>
<style>
.list{
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