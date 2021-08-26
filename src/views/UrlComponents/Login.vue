<template>
    <div class="mt-15">
      
 <form min-width="340" max-width="800"  >
    <v-text-field
      v-model="username"
      label="username"
      prepend-inner-icon="mdi-account"


      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      prepend-inner-icon="mdi-lock"
      label="password"
      required
    ></v-text-field>

    
    <v-btn
      class="ma-2 pa-5 btn white--text"
      color="newOne"
      v-on:click="loginTriger"
      rounded
      dark
      block
    >
      ENTRAR
    </v-btn>
  </form>
      </v-card>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginTriger() {
      this.$store.dispatch("UserLogin", {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: {
    isValid() {
      if (this.username.length < 2) {
        return false;
      }
      if (this.password.length < 3) {
        return false;
      }
      return true;
    },
    UserInfo() {
      return this.$store.state.Token;
    },
    Loading() {
      return this.$store.state.Loading;
    },
  },
  watch: {
    UserInfo(newval) {
      if (this.UserInfo) {
        console.log("ff");
        axios.defaults.headers.common["Bearer"] = newval;
        this.$router.push("/Start");
      }
    },
  },
    }
</script>

<style lang="scss" scoped>
.btn {
box-shadow: 0px 3px 6px #00000029;
border-radius: 26px;
opacity: 1;
}
</style>