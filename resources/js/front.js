window.Vue = require('Vue');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; //csrf token from cookie to backend

import App from './views/App.vue';
import Vue from 'vue';

const app = new Vue({
    el: '#app',
    render: h => h(App)
});