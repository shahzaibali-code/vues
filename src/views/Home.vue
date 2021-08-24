<template>
        
        <v-container >
            <detailed-charts></detailed-charts>
            <medicina-slides></medicina-slides>
            <slide-card></slide-card>
            <week-schedule></week-schedule>
            <calendar></calendar>
            <modal-window></modal-window>
            <login></login>
        </v-container>

</template>

<script>
import DetailedCharts from './UrlComponents/DetailedCharts.vue'
import MedicinaSlides from './UrlComponents/MedicinaSlides.vue'
import SlideCard from './UrlComponents/SlideCard.vue'
import WeekSchedule from './UrlComponents/WeekSchedule.vue'
import Calendar from './UrlComponents/Calendar.vue'
import ModalWindow from './UrlComponents/ModalWindow.vue'
import Login from './UrlComponents/Login.vue'
    export default {
        components: {
            DetailedCharts,
            MedicinaSlides,
            SlideCard,
            WeekSchedule,
            Calendar,
            ModalWindow,
            Login
        }
    }
</script>

<style lang="scss" scoped>

</style>