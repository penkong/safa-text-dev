import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.use(VuePersianDatetimePicker, {
    name: 'custom-date-picker',
    props: {
        inputFormat: 'YYYY-MM-DD HH:mm',
        format: 'jYYYY-jMM-jDD HH:mm',
        editable: false,
        inputClass: 'form-control my-custom-class-name',
        placeholder: '',
        altFormat: 'YYYY-MM-DD HH:mm',
        color: 'red',
        autoSubmit: false,
    }
});
Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function( /* { store, ssrContext } */ ) {
    const Router = new VueRouter({
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes,

        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    });

    return Router;
}