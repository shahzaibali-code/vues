<template>
  <div>
    
    <v-card min-height="360" max-height="800" elevation="2" rounded class="mx-auto">
       <v-card-title>
        <v-avatar size="62" class="mr-5">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            <v-img
              class="icon"
              src="../../assets/all-assets/ic_add_a_photo_24px.svg"
            ></v-img>
          </v-img>
        </v-avatar>
        <span>
          <h5 class="head ma-0 pa-0 text-h5">JOSÉ ANACLETO</h5>
          <h6 class="ma-0 pa-0 text-subtitle-2">Meu corpo 360º</h6>
          <p class="font-weight-light text-caption">
            Última análise às 5:37 PM, hoje
          </p>
        </span>
      </v-card-title>
      <v-card-subtitle class="subtitle px-2">
        <v-row class="text-center">
          <v-col cols="6" sm="6" lg="6" xl="6" class="minColor ma-0 pa-0">
            <p class="text-h4 ma-0 pa-0">5</p>
            <p class="text-caption ma-0 pa-0">Minha pontuação</p>
          </v-col>
          <v-col cols="6" sm="6" lg="6" xl="6" class="ma-0 pa-0">
            <p class="text-h4 ma-0 pa-0">7,2</p>
            <p class="text-caption ma-0 pa-0">Média da população</p>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text class="my-15"> Radar Chart </v-card-text>
      <v-card-actions class="card-bottom">
        <v-img
          src="../../assets/all-assets/icn_activity_inactive.svg"
          max-height="50"
          max-width="20"
          class="ma-3"
        ></v-img>
        <span class="text-caption"> CONTINUAR TESTES</span>
      </v-card-actions>
    </v-card>
     <v-card min-height="360" max-height="800" elevation="2" class="mt-10">
      <v-card-title>
        <span>
          <h5 class="head ma-0 pa-0 text-h5">MEU HISTORICO</h5>
          <h6 class="ma-0 pa-0 text-caption">Sua evolução na linha do tempo</h6>
          <p class="font-weight-light text-caption">De 10/01/19 à 17/01/19</p>
        </span>
      </v-card-title>
      <v-card-subtitle class="subtitle px-2">
        <v-row class="text-center">
          <v-col cols="6" sm="6" lg="6" xl="6" class="minColor ma-0 pa-0">
            <p class="text-h6">5,5 hoje</p>
          </v-col>
          <v-col cols="6" sm="6" lg="6" xl="6" class="minColor ma-0 pa-0">
            <p class="text-h6">2,3 semanal</p>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text class="my-15"> Line Chart </v-card-text>
      <v-card-actions class="card-bottom">
        <v-img
          src="../../assets/all-assets/ic_speaker_notes_24px.svg"
          max-height="50"
          max-width="20"
          class="ma-3"
        ></v-img>
        <span class="text-caption"> NÃO ESTÁ SE SAINDO BEM?</span>
      </v-card-actions>
    </v-card>
    
  </div>
</template>

<script>
import RadarChart from "../../components/Charts/RadarChart.vue";
import LineChart from "../../components/Charts/LineChart.js";


export default {
  components: {
    RadarChart,
    LineChart,
  },
  data() {
    return {
      // datacollection: null,
      // radarChartOptions: {
      //     responsive: true,
      //     scales: {
      //         yAxes: [
      //         {
      //             ticks: {
      //             beginAtZero: true,
      //             display: false,
      //             min: 0,
      //             max: 10
      //             },
      //             gridLines: {
      //             display: false
      //             },
      //             scaleLabel: {
      //             display: false
      //             }
      //         }
      //         ],
      //         xAxes: [
      //         {
      //             gridLines: {
      //             display: false
      //             }
      //         }
      //         ]
      //     }
      // },
      // cards : [
      //     {
      //         title: "Personal Growth",
      //         importance: 9,
      //         effectiveness: 7
      //     },
      //     {
      //         title: "Leisure",
      //         importance: 8,
      //         effectiveness: 7
      //     },
      //     {
      //         title: "Sprituality",
      //         importance: 8,
      //         effectiveness: 7
      //     },
      //     {
      //         title: "Work",
      //         importance: 9,
      //         effectiveness: 6
      //     },
      //     {
      //         title: "Health",
      //         importance: 4,
      //         effectiveness: 3
      //     },
      //     {
      //         title: "Community & Environment",
      //         importance: 6,
      //         effectiveness: 5
      //     },
      //     {
      //         title: "Family Relationships",
      //         importance: 2,
      //         effectiveness: 10
      //     },
      //     {
      //         title: "Social Relationships",
      //         importance: 8,
      //         effectiveness: 7
      //     },
      //     {
      //         title: "Intimate Relationships",
      //         importance: 9,
      //         effectiveness: 4
      //     },
      //     {
      //         title: "Parenting",
      //         importance: 5,
      //         effectiveness: ""
      //     }
      // ]
    };
  },
  mounted() {
   
  },
  computed: {
    radarChartData() {
      return {
        labels: this.cards.map((card) => card.title),
        datasets: [
          {
            label: "Importance",
            backgroundColor: "rgb(54, 162, 235, 0.75)",
            data: this.cards.map((card) => card.importance),
          },
          {
            label: "Effectiveness",
            backgroundColor: "rgb(75, 192, 192, 0.75)",
            data: this.cards.map((card) => card.effectiveness),
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.head {
  color: #238e9e;
}
.subtitle {
  background: transparent
    linear-gradient(0deg, #f1c4bf 0%, #f1c4bf 74%, #c7a8a5 100%) 0% 0% no-repeat
    padding-box;
  opacity: 1;
  height: 57px;
}
.minColor {
  color: #04486e;
}
.card-bottom {
  background: #2693a2 0% 0% no-repeat padding-box;
  opacity: 1;
  color: white;
  justify-content: center;
  height: 51px;
}
.center-row {
  justify-content: center;
  align-items: center;
}
.icon {
  max-height: 28px;
  max-width: 31px;
  margin: auto;
  display: block;
}
</style>