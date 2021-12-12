<template>
  <div class="home">
    <Students/>
  </div>
</template>

<script>
// @ is an alias to /src
import Students from '@/components/student/Students.vue'

export default {
  name: 'Home',
  components: {
    Students
  }
}
</script>
