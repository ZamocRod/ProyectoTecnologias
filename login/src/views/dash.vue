<template>
    <div>
        SOY EL DASH
        <template v-if="user">
            <b-navbar toggleable type="dark" variant="info">
                <b-navbar-brand href="#">{{ user.displayName || user.email}}</b-navbar-brand>

                <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
                </b-navbar-toggle>

                <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/dash">Dash</b-nav-item>
                    <b-nav-item  @click.prevent="logout">Cerrar Sesión</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </template>
        <template v-else>
            No has ingresado :/
        </template>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data (){
        return{
            user: null
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name : 'Home'})
            })
        }
    },
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.user=user
            }else{
                this.user=null
            }
        })
    }
}
</script>