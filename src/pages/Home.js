import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="pt-32 grid grid-cols-1 lg:grid-cols-3 px-10">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static flex h-96 lg:h-auto">
                        <div className="self-center">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Tentang EduXam
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                Ini Body
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 col-span-2'>
                        <img src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="cover" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home