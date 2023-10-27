import {
    RootRoute,
    Route,
    Router,
    RouterProvider,
} from '@tanstack/react-router'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import Songs from './pages/songs'

let rootRoute = new RootRoute({
    component: () => <div> root </div>,
})

let homeRoute = new Route({
    path: '/',
    getParentRoute: () => rootRoute,
    component: Home,
})

let songRoute = new Route({
    path: '/songs',
    getParentRoute: () => rootRoute,
    component: Songs,
})

const routeTree = rootRoute.addChildren([homeRoute, songRoute])
const router = new Router({ routeTree })
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Render our app!
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
}
