import React from "react";
import Layout from "@/layout";

import {IResorce} from "@/models/IResorce";

const routers: IResorce[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/discover/discover',
        exact: true,
    },
    {
        path: '/discover',
        component: Layout,
        routers: [
            {
                path: '/discover/discover',
                component: React.lazy(() => import("@/pages/Discover")),
                exact: true,
            },
            {
                path: '/discover/test',
                component: React.lazy(() => import("@/pages/Test")),
                exact: true
            },
            {
                path: '/discover/home',
                component: React.lazy(() => import("@/pages/Home")),
                exact: true
            }
        ]
    }
]

export default routers
