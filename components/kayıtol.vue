<template>
  <div class="kayıtol-card">
    <div class="kaytol-logo">
      <img src="@/assets/epicgames-logo.png" alt="logo" />
    </div>
    <div class="kayıtol-droplist">
      <p
        style="
              color: #f4f4f4;
              font-size: 12px;
              font-family: Brutal, sans-serif;
              margin-left: 32px;
            "
      >
        KAYIT OL
      </p>

      <button class="kayıtol-dropbtn">
        Turkey
        <svg
          class="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style="width: 2rem; height: 2rem; float: right"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
      <div class="kayıtol-drop-content">
        <!--
            <ul>
              <li>Turkey</li>
              <li>United States</li>
              <li>United Kingdom</li>
            </ul>
            -->
      </div>
    </div>
    <div class="kayıtol-adsoyad">
      <input placeholder="*Ad" required />
      <input placeholder="*Soyadı" required />
    </div>
    <div class="kayıtol-görünenad">
      <input placeholder="*Görünen Ad" required />

      <input v-model="email" placeholder="*E-posta Adresi" required />
    </div>

    <div class="kayıtol-şifre">
      <input
        v-model="password"
        placeholder="*Şifre "
        type="password"
        required
      />
    </div>
    <div class="kayıtol-teklifler">
      <input type="checkbox" />
      <p>
        Epic Games'ten haberler, anketler ve özel teklifler almak istiyorum.
      </p>
    </div>
    <div class="kayıtol-okudum">
      <input type="checkbox" />
      <p>Okudum ve onaylıyorum</p>
    </div>
    <button @click="register" class="kayıtol-devamet">
      DEVAM ET
    </button>

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
      Epic Games hesabın var mı? Giriş Yap
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
    <button @click="aUpdateUser" class="updater" style="display:none"></button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import config from "../assets/config.js";
import firebase from "firebase/app";
require("firebase/auth");
export default {
  name: "kayıtol",
  data() {
    return {
      email: "",
      password: "",
      usern: null,
      success: false
    };
  },
  created() {
    this.startfirebase();
  },
  computed: {
    ...mapState(["authuser"])
  },
  methods: {
    startfirebase() {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      } else {
        firebase.app();
      }
      firebase.auth().onAuthStateChanged(user => {
        this.usern = user;
        this.aUpdateUser(this.usern);
      });
    },
    ...mapActions(["aUpdateUser"]),

    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          setTimeout(() => {
            window.location.href = "/signin";
          }, 1000);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
        });
      console.log(this.authuser);
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"
    );
    document.head.appendChild(recaptchaScript);
  }
};
</script>
