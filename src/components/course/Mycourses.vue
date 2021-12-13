<template>
    <div>
        <div><button @click="gotoAllcourse" style="float: left;"> See all courses </button> </div>
         <div><button @click="createcourse" style="float: right;"> Create course </button> </div>
        <div class="ac-table-container table-container">
        <table class="table ac-table ac-striped is-fullwidth is-dark">
            <thead>
            <tr>
                <th>Name</th>
                <th>CourseCode</th>
                <th>Description</th>
                <th>Teacher</th>
                <th>year</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course._id">
                    <td>{{course.name}}</td>
                    <td>{{course.courseCode}}</td>
                    <td>{{course.description}}</td>
                    <td>{{course.teacherId}}</td>
                    <td>{{course.year}}</td>
                    <td>
                        <router-link :to="{name: 'courseDetails', params: { courseId: course._id }}">
                            <h5>{{ course.name }}</h5>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import http from "../../Http-comman";  


export default {
    data(){
        return {
            courses: []
        }
    },
    mounted(){
        http.get('/student/mycourses')
        .then(res => {
            console.log(res.data.courses)
            return res.data.courses
        })
        .then(data => {this.courses = data})
        .catch(err => console.log("error on fetch = ",err))
    },
    methods: {
        gotoAllcourse: function(){
             this.$router.push({ path : '/course' });
        },
        createcourse: function(){
            this.$router.push({ path : '/add-course' });
        }
    }
}
</script>

<style>

</style>