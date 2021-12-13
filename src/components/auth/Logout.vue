<template>
    <div v-if="logout()">

    </div>
</template>

<script>
import http from "../../Http-comman";  
export default {
    data(){
        return{
        }
    },
    methods: {
        logout: function() {
            http.post("/logout").then(response => {
                console.log("response = ", response)
                this.$store.commit('unsetLog')
                this.$router.push({ path : '/' });
            }).catch(err => console.log(err))
        }
    }
}

</script>
