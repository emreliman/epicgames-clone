<template>
  <div id="nav-bar">
    <ul>
      <nuxt-link :to="{ name: 'index' }">
        <li><img src="@/assets/epicgames-logo.png" alt="loho" /></li>
      </nuxt-link>
      <nuxt-link :to="{ name: 'mağaza' }">
        <li>MAĞAZA</li>
      </nuxt-link>
      <li>HABERLER</li>
      <li>SSS</li>
      <li>YARDIM</li>
      <li>UNREAL ENGİNE</li>
      <li>EPİC GAMES'İ İNDİR</li>
      <nuxt-link v-if="!isLogin" :to="{ name: 'kayıt0l' }">
        <li id="papara">Kayıt ol</li>
      </nuxt-link>
      <nuxt-link v-if="!isLogin" :to="{ name: 'signin' }">
        <li>Giriş Yap</li>
      </nuxt-link>
      <li v-if="isLogin">{{ email }}</li>
      <li v-if="isLogin" @click="signOut">Çıkış Yap</li>
      <li><i class="fas fa-globe"></i></li>
    </ul>
  </div>
</template>

<script>
import config from "../assets/config.js";
import firebase from "firebase/app";
require("firebase/auth");
import { mapState, mapGetters } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      isLogin: false,
      email: null
    };
  },

  methods: {
    signOut() {
      firebase.auth().signOut();
      this.isLogin = false;
      this.email = null;
    },
    // flogin(){
    //   this.isLogin = this.$store.getters["getauser"] ? true : false

    // },
    takelog() {
      this.$root.$on("logg", text => {
        this.isLogin = true;
        this.email = text;
      });
    }
  },

  created() {
    //this.flogin()
  },
  mounted() {
    this.takelog();
  }
};
</script>

<style scoped>
#papara {
  margin-left: 45%;
}
</style>
