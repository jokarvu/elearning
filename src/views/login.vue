<template>
    <b-container fluid id="normalize-container-fluid">
        <b-col md="12">
            <b-row>
                <b-col md="6" xl="8" class="h-100" id="login"></b-col>
                <b-col md="6" xl="4" sm="12" class="text-center" id="login-form">
                    <img src="@/assets/img/logoDPT.png" alt="" width="200px">
                    <form @click.prevent="login" class="text-left mx-5 my-5">
                        <b-form-group
                            id="fieldset-2"
                            label="Email"
                            label-for="input-2"
                            >
                            <b-form-input type="email" id="input-1" v-model="email" trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="fieldset-2"
                            label="Password"
                            label-for="input-2"
                            >
                            <b-form-input type="password" id="input-2" v-model="password" trim></b-form-input>
                        </b-form-group>
                        <b-button variant="primary" id="btn-login" type="submit">Login</b-button>
                    </form>
                </b-col>
            </b-row>
        </b-col>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    mounted () {
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    },
    methods: {
        login () {
            var formData = new FormData();
            formData.append('pseudonym_session[unique_id]', 'vuhoanghiep097@gmail.com');
            formData.append('pseudonym_session[password]', 'b15dcpt082');
            axios.post('https://canvas.ptitn.cf/login/canvas', formData).then(res => {
                console.log('ok');
                console.log(res);
            }).catch(error => {
                console.log('error');
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss">
#login {
    background-image: url('/img/login.jpg');
    background-repeat: no-repeat;
    background-position: center;
    min-width: 320px;
    min-height: 100vh;
}
#btn-login {
    color: white;
}
#login-form {
    margin-top: 10%;
}
@media screen and (max-width: 768px) {
    #login {
        display: none;
    }
    #login-form {
        margin-top: 35%;
    }
}
</style>
