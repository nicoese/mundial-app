import {SideLi} from "./SideLi";
import {useAuth0} from "@auth0/auth0-react";


export const Sidebar = () => {


    const lis = [
        {
            name: 'Datos Personales', link: 'data', svg: <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor"
                                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
        },
        {
            name: 'Mis compras',
            link: 'purchases',
            svg: <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
        },
        {
            name: 'Reseñas', link: 'reviews', svg: <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor"
                                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
        },
        {
            name: 'Salir', link: '/logout', svg: <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor"
                                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
        },
    ]

    const {user} = useAuth0()

    return <>

        <aside className="w-64 mt-32 border-2 min-w-[17%]" aria-label="Sidebar">
            <div className="overflow-y-auto py-10 px-2 bg-gray-50 rounded dark:bg-gray-800">
                <a className="flex items-center pl-2.5 mb-5 ml-3"
                    href={'/profile'}
                >
                    <img src={user && user.picture} className="mr-3 h-6 sm:h-7 rounded-full"
                         alt={user && user.name}
                    />
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{user && user.name}</span>
                </a>
                <ul className="space-y-2">

                    {
                        lis.map(e => {
                            return <SideLi
                                name={e.name}
                                link={e.link}
                                svg={e.svg}
                            />
                        })
                    }

                </ul>
            </div>
        </aside>


    < />
}