import React from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'

const Register = () => {
    return (
        <div className='md:h-screen py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 lg:w-1/2 rounded-3xl drop-shadow-xl'>
                <div className='p-10'>
                    <h1 className='text-2xl font-bold'>Daftar Akun Baru</h1>
                    <br />
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <TextInput type="text">Nama</TextInput>
                        <TextInput type="email">Email</TextInput>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <TextInput type="text">Jurusan</TextInput>
                        <TextInput type="text">Jurusan</TextInput>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2 mb-5">
                        <TextInput type="password">Kata Sandi</TextInput>
                        <TextInput type="password">Konfirmasi Kata Sandi</TextInput>
                    </div>
                    <div className="mb-2">
                        <Link to='/login' className='p-3 bg-red-500 rounded-lg text-white font-bold shrink'><span>Masuk</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register