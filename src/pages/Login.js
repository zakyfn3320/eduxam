import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'
import { AuthenticationContext } from '../hooks/Authentication'

const Login = () => {

    const [auth, setAuth] = useState({ email: '', password: '' })

    const authentication = useContext(AuthenticationContext)

    useEffect(() => {
        console.log('Authentication', authentication)
    }, [authentication])

    const doSignIn = () => {
        authentication.setUserState(auth)
        console.log('first', auth)
    }

    const handleValue = (e) => {
        setAuth(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 lg:w-1/2 rounded-3xl drop-shadow-xl'>
                <div className="grid grid-cols">
                    <div className='p-10 block'>
                        <h1 className='text-2xl font-bold'>Masuk ke akun Anda</h1>
                        <br />
                        <TextInput onChange={handleValue} type="email" name="email">Email</TextInput>
                        <TextInput onChange={handleValue} type="password" name="password">Password</TextInput>
                        <br />
                        <div className="grid place-content-center">
                            <div className="flex justify-center mb-2">
                                <button onClick={doSignIn} className='p-3 bg-red-500 rounded-lg text-white font-bold shrink'><span>Masuk</span></button>
                            </div>
                            <h3 className=''>Belum memiliki akun? silakan <Link to='/register' className='underline'>daftar</Link></h3>
                            <div>
                            </div>
                        </div>
                    </div>
                    <img className='rounded-r-3xl h-full w-full object-cover col-span-1 col-end-6' src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="people studying" />
                </div>
            </div>
        </div>
    )
}

export default Login