<template>
    <v-app class="root">
        <nav-bar></nav-bar>
        <v-row >
                <v-col cols="12" sm="12" md="12">
        <v-main>
            <router-view/>
        </v-main>
</v-col>
            </v-row>

        <v-btn
            class="mx-2 stick"
            fab
            dark
            color="bottom"
        >
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
        <bottom-bar></bottom-bar>
    </v-app>
</template>

<script>
import NavBar from '../components/SideComponents/NavBar.vue'
import BottomBar from '../components/SideComponents/BottomBar.vue'
    export default {
        components: {
            NavBar,
            BottomBar
        }
    }
</script>

<style lang="scss" scoped>
.root{
    background-color: #F7F7F7;
}
.stick {
 position: fixed;
    bottom: 80px;
    right: 0; 
}
</style>