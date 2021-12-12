<template>
    <div class="ac-table-container table-container">
    <table class="table ac-table ac-striped is-fullwidth is-dark">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>regNo</th>
            <th>Show Details</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student._id">
                <td>{{student.name}}</td>
                <td>{{student.email}}</td>
                <td>{{student.regNo}}</td>
                <td>
                    <router-link :to="{name: 'StudentDetails', params: { regNo: student.regNo }}">
                        <h5>{{ student.name }}</h5>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import http from "../../Http-comman";  


export default {
    data(){
        return {
            students: []
        }
    },
    mounted(){
        http.get('/students')
        .then(res => {
            console.log(res.data.students)
            return res.data.students
        })
        .then(data => {this.students = data})
        .catch(err => console.log("error on fetch = ",err))
    }
}
</script>

<style>

</style>