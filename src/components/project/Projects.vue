<template>
    <div class="ac-table-container table-container">
    <table class="table ac-table ac-striped is-fullwidth is-dark">
        <thead>
        <tr>
            <th>Name</th>
            <th>Supervisor</th>
            <th>CourseCode</th>
            <th>GithubLink</th>
            <th>Show Details</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects" :key="project._id">
                <td>{{project.name}}</td>
                <td>{{project.supervisor}}</td>
                <td>{{project.courseCode}}</td>
                <td>{{project.githubLink}}</td>
                <td>
                    <router-link :to="{name: 'ProjectDetails', params: { projectId: project._id }}">
                        <h5>{{ project.name }}</h5>
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
            projects: []
        }
    },
    mounted(){
        http.get('/student/projects')
        .then(res => {
            console.log(res.data.projects)
            return res.data.projects
        })
        .then(data => {this.projects = data})
        .catch(err => console.log("error on fetch = ",err))
    }
}
</script>

<style>

</style>