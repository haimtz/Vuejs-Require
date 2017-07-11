requirejs.config({
    paths: {
        "Vue": "https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min",
        "vue": "https://rawgit.com/edgardleal/require-vue/master/dist/require-vuejs",
        'vue_router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/2.1.1/vue-router.min',
        "views": "views"
    },
    shim: {
        "Vue": { exports: "Vue" },
        "vue_router": {
            exports: 'VueRouter'
        }
    }
});

// to use component in your code with RequireJS: 
// put a reference to your component file with or without extencion after 'vue!' 

require(["Vue", "vue_router", "routes"], function (Vue, VueRouter, AppRoutes) {
    Vue.use(VueRouter);

    var router = new VueRouter({
        mode: 'hash',
        routes: AppRoutes
    });

    var app = new Vue({
        el: "#app",
        data: {
            text: "Hello Vue",
            rt: AppRoutes
        },
        router: router
    });
});