<template>
    <div class="vue-tempalte">
        <form @submit.prevent="addProject">
            <h3>Add a Project</h3>

            <div class="form-group">
                <label>Name</label>
                <input type="text" required class="form-control form-control-lg" v-model="name"/>
            </div>

            <div class="form-group">
                <label>Description</label>
                <input type="text" required class="form-control form-control-lg" v-model="description"/>
            </div>

            <div class="form-group">
                <label>Registration number</label>
                <input type="number" required class="form-control form-control-lg" v-model="studentReg"/>
            </div>

            <div class="form-group">
                <label>GithubLink</label>
                <input type="text" required class="form-control form-control-lg" v-model="githubLink"/>
            </div>

            <div class="form-group">
                <label>Teacher</label>
                <input type="text" required class="form-control form-control-lg" v-model="teacher"/>
            </div>

            <div class="form-group">
                <label>Course</label>
                <input type="text" required class="form-control form-control-lg" v-model="course"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Add project</button>
        </form>
    </div>
</template>

<script>
import http from "../../Http-comman";  
export default {
    data() {
        return {
            githubLink: null,
            description: null,
            course: null,
            teacher: null,
            studentReg: null,
            name: null
        }
    },
    methods: {
        addProject: function() {
            http.post("/student/add-project", {   
                githubLink: this.githubLink,
                description: this.description,
                course: this.course,
                teacher: this.teacher,
                studentReg: this.studentReg,
                name: this.name
                
            }).then(response => {
                if(response.status === 200) {
                    this.$router.push({ path : '/myprojects' });
                }
            }).catch(err => console.log(err))
        }
    }
}
</script>