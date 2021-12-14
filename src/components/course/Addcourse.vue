<template>
    <div class="vue-tempalte">
        <form @submit.prevent="submitHandler">
            <h3>Add Course</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" required class="form-control form-control-lg" v-model="name"/>
            </div>

            <div class="form-group">
                <label>Course Code</label>
                <input type="text" required class="form-control form-control-lg" v-model="courseCode"/>
            </div>

            <div class="form-group">
                <label>year</label>
                <input type="number" required class="form-control form-control-lg" v-model="year"/>
            </div>

            <div class="form-group">
                <label>Teacher name</label>
                <input type="text" required class="form-control form-control-lg" v-model="teacherName"/>
            </div>

            <div class="form-group">
                <label>Description</label>
                <input type="text" required class="form-control form-control-lg" v-model="description"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Add this course</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'Login'}">sign in?</router-link>
            </p>
            <p class="forgot-password text-right">
                Are you a Teacher ?
                <router-link :to="{name: 'Signupteacher'}">Register here?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import http from "../../Http-comman";  
export default {
    data() {
        return {
            description: null,
            teacherName: null,
            year: null,
            courseCode: null,
            name: null
        }
    },
    methods: {
        submitHandler: function() {
            http.post("/admin/add-course", {   
                description: this.description,
                teacher: this.teacherName,
                year: this.year,
                courseCode: this.courseCode,
                name: this.name
            }).then(response => {
                if(response.status === 200) {
                    this.$router.push({ path : '/' });
                }
            }).catch(err => console.log(err))
        }
    }
}
</script>