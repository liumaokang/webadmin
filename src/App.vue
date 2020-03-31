<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0px;
  }
  body,.wrapper,#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
