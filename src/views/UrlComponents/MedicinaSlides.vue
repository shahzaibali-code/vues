<template>
<div class="mt-15">

  <div >
      <p class="text-h4 head ma-0"> Medicina Tradicional</p>
      <p class="text-h8 text-subtitle" style="font-size: 14px;">A sua qualidade de vida é o seu auto cuidado</p>
  </div>

  <!-- slider -->
    <v-slide-group
      
      active-class="success"
      
    >
    
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
      <v-card
        :color="active ? undefined : 'white'"
        class="ma-1 rounded-xl"
        height="300"
        width="125"
        @click="toggle"
        rounded
        outlined

      >
        <v-img
          height="135px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >

        <v-card-title style="padding:10px">
            <p class="header-card " style="margin-bottom: 1px;">
              Meditacao
            </p>
            <p class="text-caption subheader" >20 minutos dea</p>
        </v-card-title>
        </v-img>

        <v-card-text class="card-text">
          <p class="text-caption ma-0 calor">Porque?</p>
          <p class="text-body-2 ma-0">
            Você pensa muito, e isto é bom, mas um .
          </p>
          <p class="text-caption ma-0 calor">Porque?</p>
          <p class="text-body-2">
            Você pensa muito, e isto é bom comate.
          </p>
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-avatar size="35" class="avatar">
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

      <p class="text-h9 text-center head" style="font-size: 14px;">Clique na recomendação e inicie a sua vida holística</p>

  </div>
</template>

<script>
    export default {
        
    }
</script>

<style  >
.v-slide-group__next, 
.v-slide-group__prev {

    min-width: 0px;
}
.v-application .text-body-2 {
    font-size: 0.6875rem !important;
    font-weight: 500;
    line-height: 0.99rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
}
.v-application .text-caption {
    font-size: 0.6875rem !important;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
}
.head{
  color: #2592A1;
}
.header-card{
  color: #2592A1;
  margin: 1;
  display: block;
  font-size: 18px;
}
.calor {
  color: #F6A096;
}
.subheader{
  margin: auto;
  display: block;
  color: white;
  font-size: 10px;
}
.card-text{
}
.avatar{
  display: block;
  position: absolute;
  bottom: 50%;
}
</style>