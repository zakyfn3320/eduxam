import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import { AuthenticationContext } from '../hooks/Authentication'

const initialUser = {
    name: 'user', email: 'user@mail.com', password: '123qwe!@', major: 'bio', class: 'qwe'
}

const Register = () => {

    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate()
    const blankFormat = /^$/;
    const emailFormat = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const passwordFormat = /^(?=.*\d).{8,}$/;

    const authentication = useContext(AuthenticationContext)

    const doSignIn = (e) => {
        authentication.doRegisterUser(user)
        navigate("/login")
        alert('Registrasi berhasil')
        e.preventDefault()
    }

    const handleValue = (e) => {
        if (e.target.name !== "passwordConfirm") {
            setUser(prev => ({
                ...prev, [e.target.name]: e.target.value
            }))
        }
    }


    return (
        <div className='py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 lg:w-1/2 rounded-3xl drop-shadow-xl'>
                <div className='p-10'>
                    <h1 className='text-2xl font-bold'>Daftar Akun Baru</h1>
                    <br />
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <div>
                            <TextInput onChange={handleValue} name='name' type="text">Nama</TextInput>
                            {blankFormat.test(user.name) && <span className='text-red-700 font-semibold'>Nama tidak boleh kosong</span>}
                        </div>
                        <div>
                            <TextInput onChange={handleValue} name='email' type="email">Email</TextInput>
                            {!emailFormat.test(user.email) && <span className='text-red-700 font-semibold'>Email mengikuti format user@email.com</span>}
                        </div>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2">
                        <div>
                            <TextInput onChange={handleValue} name='major' type="text">Jurusan</TextInput>
                            {blankFormat.test(user.major) && <span className='text-red-700 font-semibold'>Jurusan tidak boleh kosong</span>}
                        </div>
                        <div>
                            <TextInput onChange={handleValue} name='class' type="text">Kelas</TextInput>
                            {blankFormat.test(user.class) && <span className='text-red-700 font-semibold'>Kelas tidak boleh kosong</span>}
                        </div>
                    </div>
                    <div className="grid md:gap-5 md:grid-cols-2 mb-5">
                        <div>
                            <TextInput onChange={handleValue} name='password' type="password">Kata Sandi</TextInput>
                            {!passwordFormat.test(user.password) && <span className='text-red-700 font-semibold'>Password minimal 8 karakter</span>}
                        </div>
                        <div>
                            <TextInput onChange={handleValue} name='passwordConfirm' type="password">Konfirmasi Kata Sandi</TextInput>

                        </div>
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