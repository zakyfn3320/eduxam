import { Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../hooks/Authentication'

const links = [
    { id: 0, name: 'Home', link: '/' },
    { id: 1, name: 'Dashboard', link: '/dashboard' },
]

const Header = () => {

    const authentication = useContext(AuthenticationContext)
    const navigate = useNavigate()
    const showContent = authentication.isLoggedIn
    const showAuthButton = !authentication.isLoggedIn

    const doLogout = () => {
        const logoutSuccess = authentication.doLogout()
        if (logoutSuccess) navigate('/login')
    }

    return (
        <>
            <Popover className="fixed w-full bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1 align-middle align-middle">
                            <Link to="/" className='flex'>
                                <span className="sr-only">EduXam</span>
                                {/* <img
                                    className="h-8 w-auto sm:h-10"
                                    src={require('../asset/image/Logo.png')}
                                    alt=""
                                /> */}
                                <span className='text-3xl font-bold ml-2'>Edu<span className='text-green-600'>Xam</span></span>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        {showContent && (<>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                {links.map(item => {
                                    return (

                                        <Link key={item.id} to={item.link} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </Popover.Group>
                        </>)}
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            {/* <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </Link> */}
                            {showAuthButton ? (<>
                                <Link to='/register' className='bg-red-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Daftar</Link>
                                <Link to='/login' className='bg-green-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Masuk</Link>
                            </>) : (
                                <button onClick={doLogout} className='bg-orange-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Logout</button>
                            )}
                            {/* <ButtonCart /> */}
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        {/* <img
                                            className="h-8 w-auto sm:h-10"
                                            src={require('../asset/image/Logo.png')}
                                            alt="Logo"
                                        /> */}
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {showContent && links.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={item.link}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </Link>
                                        ))}
                                        {showAuthButton ? (<>
                                            <Link to='/register' className='bg-red-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Daftar</Link>
                                            <Link to='/login' className='bg-green-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Masuk</Link>
                                        </>) : (
                                            <button onClick={doLogout} className='bg-orange-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold'>Logout</button>
                                        )}
                                        {/* <ButtonCart /> */}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}

export default Header;