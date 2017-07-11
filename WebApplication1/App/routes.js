define(["Vue",
    'vue!views/component.html',
    'vue!views/about.html',
], function (Vue, Home, About) {
    return [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/about',
            name: "About",
            component: About
        }
    ]
});