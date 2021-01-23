<template>
    <div class="giriş-card">
        <div class="giriş-logo">
          <img src="@/assets/epicgames-logo.png" alt="logo" />
        </div>
        <p
          style="
            color: rgba(255, 255, 255, 0.75);
            margin-left: 30px;
            font: Brutal, sans-serif;
            font-size: 13px;
          "
        >
          BİR EPIC GAMES HESABI ILE GIRIŞ YAP
        </p>

        <div class="giriş-görünenad">
          <input v-model="email" placeholder="*E-posta Adresi" required ><p style="margin-top:25px ;transform: translateX(-55px);">Gerekli</p> </input>
        </div>

        <div class="giriş-şifre">
          <input v-model="password" placeholder="*Şifre " type="password" required ><p style="margin-top:25px ;transform: translateX(-55px);" >Gerekli</p></input>
         
        </div>
         <p id="errormessage" v-if="error">{{message}} </p>
        <div class="giriş-teklifler">
          <input type="checkbox" />
          <p style="margin-top: 18px; margin-right: 110px">Beni hatırla</p>
          <p style="margin-top: 18px">Şifreni Mİ Unuttun?</p>
        </div>

        <button @click="signIn" class="giriş-devamet">HEMEN GİRİŞ YAP</button>
        <p
          style="
            text-align: center;
            color: rgba(255, 255, 255, 0.815);
            font-size: 12px;
          "
        >
          Gizlilik Politikası
        </p>
        <p
          style="
            color: rgba(244, 244, 244, 0.5);
            text-align: center;
            font-size: 12px;
          "
        >
          Epic Games hesabın yok mu? Kayıt Ol
        </p>
        <p
          style="
            color: rgba(244, 244, 244, 0.5);
            text-align: center;
            font-size: 12px;
            margin-top: -5px;
          "
        >
          Tüm kaydolma seçeneklerine geri dön
        </p>
        
      </div>

</template>
<script>
import {mapState,mapActions} from 'vuex';
import config from "../assets/config.js"
import firebase from 'firebase/app';
require('firebase/auth')
export default {
  data(){
    return{
      email:'',
      password:'',
      usern:null,
      error:false,
      message:null,
    }
  },
  created(){
   
   
  //  firebase.auth().onAuthStateChanged(user=>{
  //       this.usern=user
  //       this.aUpdateUser(this.usern);
  //     })
   


  },
 
  

  methods:{
    signIn(e){
      if (!firebase.apps.length) {
            firebase.initializeApp(config);
                                       }
            else {
              firebase.app(); 
                 }

      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
        console.log('all Good!');
        this.aUpdateUser(this.email);
        this.$root.$emit('logg',this.email);
        this.error=false;
      }
      ).catch(err=>{
        this.error=true;
        this.message=err.message;
      })
      
      
      
    },
    ...mapActions([
      'aUpdateUser'
    ]),
    
  }
}
</script>
<style  scoped>
#errormessage{
  color: red;
  font-size: 12px;
  margin-left: 30px;

}
</style>