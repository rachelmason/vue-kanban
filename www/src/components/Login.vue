<template>
 <div class="container">

<div class="row">
    <form  class="col s12">
      
        <div class="input-field col s12">
            <input required="true" type="text" placeholder="Email" v-model="email" id="email">
            <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
            <input required="true" type="text" placeholder="Password" v-model="password" id="password">
            <label for="password">Password</label>
        </div>

        <button class="waves-effect waves-light btn">Login</button>
    </form>
</div>

    </div>

</template>
<script>
export default {
    name: 'login',
    data(){
        return {
            email: '',
            password: ''

        }
    }
}


</script>
<style>


</style>