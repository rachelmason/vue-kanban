<template>
    
<div class="navbar-fixed">
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">AR-ganize</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#"><router-link :to"{name:'login'}">Login</a></router-link></li>
        <li><a href="#"><router-link :to"{name:'register'}">Register</a></router-link></li>
        
      </ul>
    </div>
  </nav>
    

</div>

    

</template>
<script>
import Register from './Register'

export default {
    name: 'navbar',
    components: {Register},
  
    methods: {
       
    }
    

}


</script>
<style>
nav{
  background: #354649;
}

</style>