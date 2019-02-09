<template>
  <div id="app">
    <h1>Claim Request Form</h1>
    <!-- get form -->
    <requestForm/>
  </div>
</template>

<script>
import requestForm from './components/requestForm/requestForm.vue'

export default {
  name: 'app',
  components: {
    requestForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
