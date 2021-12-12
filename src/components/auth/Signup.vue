<template>
    <div class="vue-tempalte">
        <form @submit.prevent="submitHandler">
            <h3>Student SignUp</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" required class="form-control form-control-lg" v-model="name"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" required class="form-control form-control-lg" v-model="email"/>
            </div>

            <div class="form-group">
                <label>Registration number</label>
                <input type="number" required class="form-control form-control-lg" v-model="regNo"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" required class="form-control form-control-lg" v-model="password"/>
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" required class="form-control form-control-lg" v-model="confirmPassword"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

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
            email: null,
            password: null,
            confirmPassword: null,
            regNo: null,
            name: null
        }
    },
    methods: {
        submitHandler: function() {
            http.post("/signup-student", {   
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                name: this.name,
                regNo: this.regNo
                
            }).then(response => {
                if(response.status === 200) {
                    this.$router.push({ path : '/' });
                }
            }).catch(err => console.log(err))
        }
    }
}
</script>