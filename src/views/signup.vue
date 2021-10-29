<template>
    <div class="row">
        <div class="col-4"></div>
            <div class="col-4">
                <center><h1>Signup</h1></center><br>
                <div class="mb-3">
                    <input v-model="userName" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <input v-model="emailid" type="email" class="form-control">
                </div>
                <div class="mb-3">
                    <input v-model="password" type="password" class="form-control">
                </div>
                <center>
                    <button @click="onSubmit" type="submit" class="btn btn-primary">Submit</button>
                </center>
        </div>
        <div class="col-4"></div>
        
    </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '../connections/api'

export default defineComponent({

    setup(){
        let emailid = ref("");
        let password = ref("");
        let userName = ref("");
        const router = useRouter()
        const onSubmit = async() => {
            const a = await API.signup({
                userName: userName.value,
                emailID: emailid.value,
                password: password.value
            })
            console.log(a);
        }

        return { userName, emailid, password, onSubmit }
    }

});

</script>

<style>

</style>