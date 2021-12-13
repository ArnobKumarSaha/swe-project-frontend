<template>
    <div class="vue-tempalte">
        <form @submit.prevent="submitHandler">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" required class="form-control form-control-lg" v-model="email"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" required class="form-control form-control-lg" v-model="password"/>
            </div>

            <div>
                <input type="radio" id="student" value="student" v-model="typeOfUser">
                <label for="student">Student </label>

                <input type="radio" id="teacher" value="teacher" v-model="typeOfUser">
                <label for="teacher">Teacher</label>

                <input type="radio" id="admin" value="admin" v-model="typeOfUser">
                <label for="admin">Admin</label>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
import http from "../../Http-comman";  
export default {
    data() {
        return {
            email: null,
            password: null,
            typeOfUser: null
        }
    },
    methods: {
        submitHandler: function() {
            console.log("login = ", this.email, this.password, this.typeOfUser)
            http.post("/login", {   
                email: this.email,
                password: this.password,
                typeOfUser: this.typeOfUser
            }).then(response => {
                console.log("response = ", response)
                if(response.status === 200) {
                    this.$store.commit('setLog')
                    // var user = response.data.user
                    // this.$store.commit('setUser', user)
                    // console.log("user = ", user)
                    this.$router.push({ path : '/' });
                }
            }).catch(err => console.log(err))
        }
    }
}
</script>