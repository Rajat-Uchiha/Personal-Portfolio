import React from 'react'

export default function PageNotfound() {
    return (
        <>
            <div className='min-h-screen w-full bg-stone-800 flex flex-col justify-center items-center' >
                <div>
                    <h1 className='text-white font-Chewy text-8xl text-center animate-bounce px-4' > 404</h1>
                </div>
                <div >
                    <h1 className='text-white font-Chewy text-6xl text-center px-4' > <br />Oops! Page not Found!</h1>
                </div>
            </div>
        </>
    )
}
