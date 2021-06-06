import React from "react";
import Layout from "@/layout";

import {IRouterType} from "@/types/IRouterType";

const routers: IRouterType[] = [
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
