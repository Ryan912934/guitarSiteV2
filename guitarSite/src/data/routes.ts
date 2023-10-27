import { RootRoute, Route, Router } from "@tanstack/react-router"
import Root from "../Root"
import Home from "../pages/home"
import Songs from "../pages/songs"



export function makeRouteTree(){

    const rootRoute = new RootRoute({
        component: Root,
    })


    const homeRoute = new Route({
        path: '/',
        getParentRoute: () => rootRoute,
        component: Home,
    })
    
    const songRoute = new Route({
        path: '/songs',
        getParentRoute: () => rootRoute,
        component: Songs,
    })
    
    const routeTree = rootRoute.addChildren([homeRoute, songRoute])
    const router = new Router({ routeTree })

    return router;
}