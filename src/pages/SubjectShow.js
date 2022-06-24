import React, { useEffect, useState } from 'react'

const initialListMateri = [
    {
        id: '0',
        namaMateri: 'Animal Abuse',
        isiMateri: [
            "Definisi Robot",
            "Klasifikasi Robot",
            "Komponen / Struktur Dasar Robot",
            "Pengaplikasian Robot di Berbagai Bidang",
        ]
    },
    {
        id: '4',
        namaMateri: 'Plantae',
        isiMateri: [
            "Definisi Robot",
            "Klasifikasi Robot",
            "Komponen / Struktur Dasar Robot",
            "Pengaplikasian Robot di Berbagai Bidang",
        ]
    },
]

const SubjectShow = () => {

    const [listMateri, setListMateri] = useState(initialListMateri)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setListMateri(initialListMateri)
        setLoading(false)
    }, [])

    return (
        <div className='py-32 flex flex-col justify-center items-center'>
            {loading && <span>Loading</span>}
            <div className='bg-white w-5/6 md:w-4/5 rounded-3xl drop-shadow-xl mb-5'>
                <div className="p-10">
                    <h1 className='text-2xl font-bold mb-3'>Klasifikasi Makhluk Hidup | {`IPA 2`}</h1>
                    <h1 className='text-xl'>Sarah Susan S.Pd</h1>
                </div>
            </div>
            <ul class="list-none w-5/6 md:w-4/5">
                {listMateri.map((item, index) => {
                    return (
                        <li key={item.id} className='bg-white  rounded-3xl drop-shadow-xl mb-5'>
                            <div className="p-10">
                                <h1 className='text-2xl font-bold'>Pertemuan Minggu {index + 1}: {item.namaMateri}</h1>
                                <h3 className='text-xl my-3'>Materi M{index + 1}</h3>
                                <h3 className='text-xl font-semibold'>Materi ini berisi tentang</h3>
                                <ul className='list-disc ml-5'>
                                    {item.isiMateri.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SubjectShow