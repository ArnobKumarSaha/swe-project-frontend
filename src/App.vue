<template>
  <div class="vue-tempalte">
    <NavigationBar></NavigationBar>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation   from './components/Nav.vue'
import http from "./Http-comman";  
export default {
  components: {
    'NavigationBar': Navigation
  },
  beforeCreate() {
    http.get("/isloggedin").then(response => {
        console.log("response in check = ", response.data)
        
        if(response.data.isLoggedIn)
            this.$store.commit('setLog')
        else this.$store.commit('unsetLog')
    }).catch(err => console.log(err))
  }
}

</script>
