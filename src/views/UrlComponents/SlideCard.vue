<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="80%"
            rounded

  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
    <p class="text-h5 ma-0 ml-2 head">PSICÓLOGO</p>
    <p class="text-caption ma-0 pa-0 ml-2 head">sessões sob consulta</p>
    
    </v-img>

    <v-card-text>
        <p class="text-caption ma-0 calor">Porque?</p>
          <p class="text-body-2 ma-2">
            Você pensa muito, e isto é bom, mas um profissional pode te ajudar ser mais feliz.
        </p>
        
        <p class="text-caption ma-0 calor">Indicação</p>
          <p class="text-body-2 ma-2">
           Controle emocional, Reduz o stress, Combate a depressão.
        </p>

        <p class="text-caption ma-0 calor">Categoria 3</p>
          <p class="text-body-2 ma-2">
           Controle emocional, Reduz o stress, Combate a depressão. Controle emocional, Reduz o stress, Combate a depressão. Controle emocional, Reduz o stress, Combate a depressão. Controle emocional, Reduz o stress, Combate a depressão.Controle emocional, Reduz o stress, Combate a depressão.
        </p>

        <p class="text-caption ma-0 calor">Especialista em Psicanálise</p>
          <p class="text-body-2 ma-2">
           Satoshi Nakamoto
        </p>

        <p class="text-caption ma-0 calor">Endereço</p>
          <p class="text-body-2 ma-2 special">
           Rua Nostra Damus - 800 - centro - Brasília - DF - CEP 86870-000
        </p>
     </v-card-text>

    <v-card-actions class="background-footer">
      <v-img
                    src="../../assets/all-assets/icn_activity_inactive.svg"
                    max-height="50"
                    max-width="20"
                    class="ma-3"
                ></v-img>
                <span class="text-caption">
                    AGENDAR</span>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style lang="scss" scoped>
.head{
  color: #2592A1;
}
.special{
    color: #0F7FFF;
    text-decoration: underline;

}
.header-card{
  color: #2592A1;
  margin: auto;
  display: block;
}
.calor {
  color: #F6A096;
}
.subheader{
  margin: auto;
  display: block;
  color: white;
}
.card-text{
}
.avatar{
  display: block;
  position: absolute;
  bottom: 50%;
}
.background-footer{
    background: #F6A096 0% 0% no-repeat padding-box;
opacity: 1;
color: white;
justify-content: center;
height: 51px;
}
</style>