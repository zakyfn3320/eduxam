import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

const Lost = () => {

    const [second, setSecond] = useState(3)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setSecond((second - 1))
        }, 1000)
        if (second < 0) {
            navigate(-1)
        }
    }, [second, navigate])

    return (
        <div className="pt-32 grid grid-cols-1 lg:grid-cols-2 px-10 text-sky-500">
            <div className='mt-10'>
                <QuestionMarkCircleIcon className='w-full' />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static flex h-96 lg:h-auto">
                <div className="self-center">
                    <h1 className="text-4xl font font-extrabold tracking-tight text-Sky-900 sm:text-6xl">
                        You are lost
                    </h1>
                    <p className="mt-4 text-3xl text-gray-500">
                        Redirect you in {second === 0 ? `now` : second}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Lost