<template>
  <div id="app">
    <NavBar></NavBar>
    <div id='main'>
      <router-view name='main'></router-view>
      
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,

  }
}
</script>

<style>

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  
}
#main{
  width: 80%;
  margin:  10px auto;
  
}
body{
  background-color: #e1e1e1;
}
*{
  margin: 0;
  padding: 0;
  box-sizing:content-box;
}
@media (max-width: 414px){
  #main{
    width: 100%;
    margin:  10px auto;
  }
}

</style>
