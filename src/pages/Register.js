import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'
import { AuthenticationContext } from '../hooks/Authentication'

const Register = () => {

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
                <div className='p-10'>
                    <h1 className='text-2xl font-bold'>Daftar Akun Baru</h1>
                    <br />
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <TextInput onChange={handleValue} name='name' type="text">Nama</TextInput>
                        <TextInput onChange={handleValue} name='email' type="email">Email</TextInput>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <TextInput onChange={handleValue} name='major' type="text">Jurusan</TextInput>
                        <TextInput onChange={handleValue} name='class' type="text">Kelas</TextInput>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2 mb-5">
                        <TextInput onChange={handleValue} name='password' type="password">Kata Sandi</TextInput>
                        <TextInput onChange={handleValue} name='passwordConfirm' type="password">Konfirmasi Kata Sandi</TextInput>
                    </div>
                    <div className="mb-2">
                        <button onClick={doSignIn} className='p-3 bg-red-500 rounded-lg text-white font-bold shrink'><span>Masuk</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register