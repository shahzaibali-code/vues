<template>
    <v-app-bar
      color="#6A76AB"
      prominent
      app
      src="../../assets/all-assets/base.svg"
    >
      <v-img
          src="../../assets/all-assets/mia-wht.png"
          max-height="200"
          max-width="250"
        ></v-img>

        <v-spacer></v-spacer>
        <v-img
          src="../../assets/all-assets/ic_fingerprint_24px.svg"
          max-height="50"
          max-width="20"
          class="ma-3"
        ></v-img>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.size{
top: 0px;
left: 7.450580596923828e-9px;
width: 269px;
height: 111px;
}
.interface{
background: transparent url('../../assets/TopBanner/mia-wht.png') 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;
}

.app-header {
  position: relative;
  top: 40px;
}
.styling{
top: 0px;
left: 0px;
right: 0px;
width: 200%;
height: 112px;
background: transparent url('../../assets/all-assets/base.svg') 0% 0% no-repeat padding-box;
opacity: 1;
}
</style>