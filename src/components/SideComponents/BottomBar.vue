<template>
  <v-bottom-navigation
    color="alpha"
    grow
    app
    src="../../assets/all-assets/base.svg"
    class="gradient"
  >
    <v-btn class="pb-3">
      <span class="white--text">TESTER</span>

      <v-img
        src="../../assets/all-assets/icn_activity_inactive.svg"
        max-height="50"
        max-width="20"
        class="ma-3"
      ></v-img>
    </v-btn>

    <v-btn class="pb-3">
      <span class="white--text">HOME</span>

      <v-img
        src="../../assets/all-assets/icn_home_inactive.svg"
        max-height="50"
        max-width="20"
        class="ma-3"
      ></v-img>
    </v-btn>

    <v-btn class="pb-3">
      <span class="white--text">Recommendations</span>

      <v-img
        src="../../assets/all-assets/ic_speaker_notes_24px.svg"
        max-height="50"
        max-width="20"
        class="ma-3"
      ></v-img>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.gradient{
background: transparent linear-gradient(258deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box;
opacity: 1;
}
</style>