<template>
<div>
  <h2>The student reg is {{ regNo }}</h2>
  <div>
    <h3>Arnob kumar saha</h3>
    <h3>arnob@gmail.com</h3>
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
  beforeCreate(){
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