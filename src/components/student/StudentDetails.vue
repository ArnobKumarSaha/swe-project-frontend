<template>
<div>
  <h2>The student reg is {{ regNo }}</h2>
  <div v-if="student">
    <h2>{{student.name}}</h2>
  </div>
  <div v-else>Loading ... 
    this.$router.push({ name: 'login' })
  </div>
</div>

</template>

<script>

import http from "../../Http-comman";  

export default {
  props: ["regNo"],
  data(){
      return {
          student: null
      }
  },
  mounted(){
      http.get('/student/' + this.regNo)
      .then(res => {
          console.log(res.data)
          return res.data.student
      })
      .then(data => {this.student = data})
      .catch(err => console.log("error on fetch = ",err))
  }
}
</script>

<style>

</style>