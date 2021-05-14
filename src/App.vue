<template>
  <div id="app" class='container'>
    <h1>
       <img  src="./assets/smartphone.svg" alt="logo" width="100">
       {{ msg }}
    </h1>
    <hr>
    <router-view></router-view>    
    <hr>
  </div>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      msg: "Phones App" 
    };
  }
};
</script>

<style>
  .container {
    padding: 20px;
    }

    h1 {
      color: gray;
    }
</style>