// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
} from 'vuetify';
import Vue from 'vue';
import * as firebase from 'firebase';
import 'firebase/firestore';
import App from './App';
import router from './router';

import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#64DD17',
    secondary: '#CCFF90',
    accent: '#FFEA00',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
});

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD43vlf0T_KHIjjtNjeJP5Z1QtSbpkcVQU',
  authDomain: 'meal-api.firebaseapp.com',
  databaseURL: 'https://meal-api.firebaseio.com',
  projectId: 'meal-api',
  storageBucket: '',
  messagingSenderId: '244025235453',
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
