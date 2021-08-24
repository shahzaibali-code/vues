<template>
    <v-card class="mt-15" rounded>
        <v-card-title>
            <p class="head text-h5">Horários disponíves </p>
            <v-spacer></v-spacer>
            <v-icon>mdi-window-close</v-icon>
        </v-card-title>
        <v-card-text>
            <p class="text-caption text-center">Selecione o mês</p>
            <p class="text-h6"><datepicker class="text-center" placeholder="September 2019" full-month-name	></datepicker></p>



            <!-- <functional-calendar class="text-center" :is-modal='true' :is-date-picker='true'></functional-calendar> -->
            <p class="text-body-1 title">SETEMBRO 3</p>
            <p class="text-h5 head">Segunda-feira</p>
            <div class="images ma-5">
                <v-img
                max-height="70"
                class="ma-5"
                max-width="70"
                src="../../assets/all-assets/Caminho 23-1.svg"
                >
                <p class="my-6 text-center text-caption">9:00</p>
                </v-img>
                <v-img
                max-height="70"
                class="ma-5"
                max-width="70"
                src="../../assets/all-assets/Caminho 23-1.svg"
                >
                <p class="my-6 text-center text-caption">14:30</p>
                </v-img>
                <v-img
                max-height="70"
                class="ma-5"
                max-width="70"
                src="../../assets/all-assets/Caminho 23-1.svg"
                >
                <p class="my-6 text-center text-caption">13:00</p>
                </v-img>
                <v-img
                max-height="70"
                class="ma-5"
                max-width="70"
                src="../../assets/all-assets/Caminho 23-1.svg"
                >
                <p class="my-6 text-center text-caption">11:30</p>
                </v-img>
            </div>
            <p class="text-body-1 title">SETEMBRO 4</p>
            <p class="text-h5 head">Terça-feira</p>
            <div class="images ma-5">
            <v-img
            max-height="70"
            class="ma-5"
            max-width="70"
            src="../../assets/all-assets/Caminho 23-1.svg"
            >
            <p class="my-6 text-center text-caption">13:00</p>
            </v-img>
            <v-img
            max-height="70"
            class="ma-5"
            max-width="70"
            src="../../assets/all-assets/Caminho 23-1.svg"
            >
            <p class="my-6 text-center text-caption">12:00</p>
            </v-img>
            <v-img
            max-height="70"
            class="ma-5"
            max-width="70"
            src="../../assets/all-assets/Caminho 23-1.svg"
            >
            <p class="my-6 text-center text-caption">9:00</p>
            </v-img>
            <v-img
            max-height="70"
            class="ma-5"
            max-width="70"
            src="../../assets/all-assets/Caminho 23-1.svg"
            >
            <p class="my-6 text-center text-caption">13:40</p>
            </v-img>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import Datepicker from 'vuejs-datepicker';

    export default {
        data(){return {
            selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)]
        }},
        components: {
            FunctionalCalendar,
            Datepicker
        }
    }
</script>

<style lang="scss" scoped>
.head{
  color: #2592A1;
}
.title{
    color: #02456C;
}
.images{
    display: flex;
}
.img-text{
    margin: auto;
    display: block;
}
</style>