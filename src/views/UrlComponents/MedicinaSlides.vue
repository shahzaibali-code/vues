<template>
<div class="mt-15">

  <div>
      <p class="text-h3 head ma-0"> Medicina Tradicional</p>
      <p class="text-subtitle">A sua qualidade de vida é o seu auto cuidado</p>
  </div>

  <!-- slider -->
    <v-slide-group
      class="pa-4"
      active-class="success"
      show-arrows
    >
    
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
      <v-card
        :color="active ? undefined : 'white'"
        class="ma-4"
        height="440"
        width="200"
        @click="toggle"
        rounded

      >
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >

        <v-card-title>
            <p class="header-card">
              Meditacao
            </p>
            <p class="text-caption subheader">20 minutos dea</p>
        </v-card-title>
        </v-img>

        <v-card-text class="card-text">
          <p class="text-caption ma-0 calor">Porque?</p>
          <p class="text-body-2 ma-0">
            Você pensa muito, e isto é bom, mas um profissional pode te ajudar ser mais feliz.
          </p>
          <p class="text-caption ma-0 calor">Porque?</p>
          <p class="text-body-2">
            Você pensa muito, e isto é bom, mas um profissional pode te ajudar ser mais feliz.
          </p>
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-avatar size="56" class="avatar">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>

            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>


          </v-row>
      </v-card>
      </v-slide-item>

    </v-slide-group>

      <p class="text-h4 text-center head">Clique na recomendação e inicie a sua vida holística</p>

  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.head{
  color: #2592A1;
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
</style>