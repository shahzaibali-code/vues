<template>
    <div class="mt-15">
 <form>
    <v-text-field
      v-model="name"
      label="Email"
      prepend-inner-icon="mdi-account"


      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      prepend-inner-icon="mdi-lock"
      label="Senha"
      required
    ></v-text-field>

    
    <v-btn
      class="ma-2 pa-5 btn white--text"
      color="newOne"
      rounded
      dark
      block
    >
      ENTRAR
    </v-btn>
  </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                email: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
box-shadow: 0px 3px 6px #00000029;
border-radius: 26px;
opacity: 1;
}
</style>