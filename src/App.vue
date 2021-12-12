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
export default {
  components: {
    'NavigationBar': Navigation
  }
}

</script>
