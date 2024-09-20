<template>
  <div id="app">
    <router-view />  
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white; 
}

html, #app {
  height: 100%;
}
</style>
