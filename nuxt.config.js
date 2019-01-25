const pkg = require("./package");

module.exports = {
    mode: "universal",
    env: {
        baseUrl: process.env.BASE_URL || "http://localhost:8089/api/"
    },

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: pkg.description
            }
        ],
        link: [],

        script: [
            // {
            //     src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
            //     type: 'text/javascript'
            // },

            // {
            //     src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
            //     type: 'text/javascript'
            // },

            // {
            //     src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
            //     type: 'text/javascript'
            // },
            // {
            //     src: "/plugins/ckeditor/ckeditor.js",
            //     type: "text/javascript"
            // },

            // {
            //     src: '/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
            //     type: 'text/javascript'
            // },
            // {
            //     src: '/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
            //     type: 'text/javascript'
            // }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#fff"
    },

    /*
     ** Global CSS
     */
    css: [
        // './assets/main.scss'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "@/plugins/axios.js",
        "@/plugins/user.js",
        "@/plugins/validation.js",
        "@/plugins/settings.js",
        "@/plugins/modules.js"
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        "@nuxtjs/axios"
    ],

    router: {
        middleware: "check-auth"
    },

    //   auth: {
    //     strategies: {
    //       cookie: {
    //         endpoints: {
    //           login: {
    //             url: "users/login",
    //             method: "post",
    //             propertyName: "token"
    //           },
    //           logout: {
    //             url: "logout",
    //             method: "post"
    //           },
    //           user: {
    //             url: "user",
    //             method: "get",
    //             propertyName: "user"
    //           }
    //         }
    //         // tokenRequired: true,
    //         // tokenType: "bearer"
    //       }
    //     }
    //   },
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: process.env.BASE_URL || "http://localhost:8089/api/"
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};