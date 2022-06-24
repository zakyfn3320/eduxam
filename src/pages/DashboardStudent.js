import React, { useEffect, useState } from 'react'
import {
    ChevronRightIcon
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

const initalListMapel = [
    {
        id: '0',
        namaMapel: 'Biologi'
    },
    {
        id: '2',
        namaMapel: 'Fisika'
    },
    {
        id: '4',
        namaMapel: 'Kimia'
    },
    {
        id: '0',
        namaMapel: 'Biologi'
    },
    {
        id: '2',
        namaMapel: 'Fisika'
    },
    {
        id: '4',
        namaMapel: 'Kimia'
    },
    {
        id: '0',
        namaMapel: 'Biologi'
    },
    {
        id: '2',
        namaMapel: 'Fisika'
    },
    {
        id: '4',
        namaMapel: 'Kimia'
    },
    {
        id: '4',
        namaMapel: 'Kimia'
    },
    {
        id: '0',
        namaMapel: 'Biologi'
    },
    {
        id: '2',
        namaMapel: 'Fisika'
    },
    {
        id: '4',
        namaMapel: 'Kimia'
    },
]

const DashboardStudent = () => {

    const [listMateri, setListMateri] = useState(initialListMateri)
    const [listMapel, setListMapel] = useState(initalListMapel)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setListMateri(initialListMateri)
        setLoading(false)
    }, [])

    return (
        <div className='md:h-screen py-32 flex justify-center items-center'>
            <div className='bg-white w-5/6 md:w-4/5 rounded-3xl drop-shadow-xl'>
                <div className="grid md:grid-cols-2">
                    <div className="p-10">
                        {loading && <span>Loading</span>}
                        <div className="flex justify-between">
                            <h1 className='text-2xl font-bold mb-5'>List Mata Pelajaran</h1>
                        </div>
                        <div className="h-96 overflow-y-auto">
                            <ul className='h-auto p-3'>
                                {listMapel.map(item => {
                                    return (
                                        <li className='mb-3 '>
                                            <div className='border-solid border-2 rounded-lg grow border-sky-500 p-3 hover:bg-sky-100 transition duration-150 '>{item.namaMapel}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="p-10">
                        {loading && <span>Loading</span>}

                        <div className="flex justify-between">
                            <h1 className='text-2xl font-bold mb-5'>List Materi</h1>
                        </div>
                        <div className="h-96 overflow-y-auto">
                            <ul className='h-auto p-3'>
                                {listMateri.map(item => {
                                    return (
                                        <li className='flex gap-5 items-center mb-3 '>
                                            <div className='border-solid border-2 rounded-lg grow border-sky-500 p-3 hover:bg-sky-100 transition duration-150 '>{item.namaPelajaran}</div>
                                            <button className=''><ChevronRightIcon className='fill-sky-500 w-7' /></button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStudent