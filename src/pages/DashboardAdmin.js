import React, { useEffect, useState } from 'react'
import {
    PencilIcon,
    TrashIcon
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const initialListMateri = [
    {
        id: '0',
        namaPelajaran: 'Materi 1',
        namaGuru: '',
        jurusan: '',
        kelas: '',
        blobFile: ''
    },
    {
        id: '1',
        namaPelajaran: 'Materi 2',
        namaGuru: '',
        jurusan: '',
        kelas: '',
        blobFile: ''
    },
    {
        id: '3',
        namaPelajaran: 'Materi 3',
        namaGuru: '',
        jurusan: '',
        kelas: '',
        blobFile: ''
    },
]

const DashboardAdmin = () => {

    const [listMateri, setListMateri] = useState(initialListMateri)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setListMateri(initialListMateri)
        setLoading(false)
    }, [])

    return (
        <div className='py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 rounded-3xl drop-shadow-xl'>
                <div className="p-10">
                    <div className="flex justify-between">
                        <h1 className='text-2xl font-bold mb-5'>List materi</h1>
                        <div>
                            <Link to='/subject-new' className='bg-sky-500 py-2 px-5 mr-2 rounded-lg text-white font-semibold inline'>Tambah Materi +</Link>
                        </div>
                    </div>
                    {loading && <span>Loading</span>}
                    <ul>
                        {listMateri.map(item => {
                            return (
                                <li key={item.id} className='flex gap-5 items-center mb-3 '>
                                    <div className='border-solid border-2 rounded-lg grow border-sky-500 p-3 hover:bg-sky-100 transition duration-150 '>{item.namaPelajaran}</div>
                                    <Link to='/subject-edit' className=''><PencilIcon className='fill-sky-500 w-7' /></Link>
                                    <Link to='/subject-edit' className=''><TrashIcon className='fill-red-500 w-7' /></Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardAdmin