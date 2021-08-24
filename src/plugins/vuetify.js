import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
const theme = {
    alpha: '#EFBCB6',
    headColor: '#238E9E',
    textColor: '#04486E',
    newOne: '#5AAEB9',
    bottom: '#F6A096'
 }
export default new Vuetify({
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
    }
});
