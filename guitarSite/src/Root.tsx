import { Outlet } from '@tanstack/react-router'

export default function Root() {
    return (
        <>
            <div className='bg-slate-800 text-red-800'>Nav</div>
            <Outlet />
        </>
    )
}
