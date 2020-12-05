export default [
    {
        component: () =>
            import(/* webpackChunkName: "expenses" */ "@/views/Article.vue"),
        name: 'articles',
        path: '/articles/:id',
        meta: { index: 0 },
        children: [
            {
                name: 'hash',
                path: '#',
                component: () =>
                    import(/* webpackChunkName: "studio" */ "@/views/Home.vue"),

            },

        ]

    },
    {
        component: () =>
            import(/* webpackChunkName: "expenses" */ "@/views/Project.vue"),
        name: 'projects',
        path: '/projects/:id',
        meta: { index: 2 },

    },



]
