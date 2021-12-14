<template>
    <div class="ac-table-container table-container">
    <table class="table ac-table ac-striped is-fullwidth is-dark">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Show Details</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="teacher in teachers" :key="teacher._id">
                <td>{{teacher.name}}</td>
                <td>{{teacher.email}}</td>
                <td>{{teacher.designation}}</td>
                <td>
                    <router-link :to="{name: 'teacherDetails', params: { regNo: teacher.regNo }}">
                        <h5>{{ teacher.name }}</h5>
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
            teachers: []
        }
    },
    mounted(){
        http.get('/teachers')
        .then(res => {
            console.log(res.data.teachers)
            return res.data.teachers
        })
        .then(data => {this.teachers = data})
        .catch(err => console.log("error on fetch = ",err))
    }
}
</script>

<style>

</style>