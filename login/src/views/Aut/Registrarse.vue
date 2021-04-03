<template>
    <div>
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h3>Crear una cuenta</h3><hr>
            <form action="#" @submit.prevent="registrarse">
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="person"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="text" placeholder="Nombre Apellido" v-model='nombre'></b-form-input>
              </b-input-group>
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="email" placeholder="me@unimilitar.edu.co"  v-model='email'></b-form-input>
              </b-input-group>
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="password" placeholder="Contraseña"  v-model='contrasena'></b-form-input>
              </b-input-group>

              <b-button type= "submit" variant="warning" class="button is-primary">
                <b-icon icon="person-fill" aria-hidden="true"></b-icon> 
                Registrarse
              </b-button>
              <br>
              <div>
                  <b-alert v-model='alerta' show variant="danger">
                    {{ error }}
                  </b-alert>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import '@/firebase/init.js'
import firebase from 'firebase'
export default {
  data(){
    return{
      nombre:'',
      email: '',
      contrasena: '',
      error: '',
      alerta: false
    }
  },
  name: 'Registrarse',
  methods:{
    registrarse(){
      this.error=''
      if(this.nombre && this.email && this.contrasena){
        //enviar
        this.alerta=false;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.contrasena)
        .then(user=>{
          //Actualizar usuario
          if(user){
              user.user.updateProfile({
              displayName: this.nombre
            }).then((u)=>{
              
              this.nombre=''
              this.email=''
              this.contrasena=''
              console.log(u)
              this.$router.push({name:'dash'})

            }).catch((err)=>{
              this.error=err.message
            })
          }
        }).catch(err=>{
          this.error=err.message
        })
      }else{
        this.alerta=true
        this.error='Complete todos los campos'
      }
    }
  }
}
</script>