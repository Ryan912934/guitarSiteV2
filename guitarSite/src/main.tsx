import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { makeRouteTree } from './data/routes'
import './main.css'

const router = makeRouteTree()
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Render our app!
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
}
