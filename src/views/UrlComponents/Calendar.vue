<template>
<div class="mt-15">
    <functional-calendar :is-multiple-date-picker='true' :change-month-function='true' :change-year-function='true'></functional-calendar>
    </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';

    export default {
        components: {
            FunctionalCalendar
        },
        data() {
            return {
                calendarData: {},
                array: ['dayNames', 'navigationArrows', 'leftAndRightDays', 'month']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>