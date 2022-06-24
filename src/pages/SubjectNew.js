import React from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'

const SubjectNew = () => {
    return (
        <div className='py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 rounded-3xl drop-shadow-xl'>
                <div className="p-10">
                    <h1 className='text-2xl font-bold mb-5'>Tambah Materi</h1>
                    <div className="mb-3">
                        <TextInput>Nama Guru</TextInput>
                        <TextInput>Nama Pelajaran</TextInput>
                        <TextInput>Jurusan</TextInput>
                        <TextInput>Kelas</TextInput>
                    </div>
                    <span className={`text-lg font-semibold pointer-events-none`}>File Materi </span><br />
                    <input type="file" />
                    <div className="mb-2 flex justify-end">
                        <Link to='/dashboard' className='p-3 bg-sky-500 rounded-lg text-white font-bold shrink'><span>Tambahkan</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectNew