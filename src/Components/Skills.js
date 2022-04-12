import React from 'react'
export default function Skills(props) {

    return (

        <>
            <div style={props.bgStyle}>
                <div  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>

                <div className='py-2 '>
                    <h1 className='text-3xl py-2 md:text-4xl lg:text-5xl hover xl:text-5xl font-Chewy rounded-full text-center text-white  underline underline-offset-4 ' >Technical Skills</h1>
                </div>


                <div className='w-full px-2  mx-auto' >

                    <a href="https://www.geeksforgeeks.org/html/" className=' sm:px-6 sm:flex sm:flex-row  hover:cursor-pointer flex-col mx-auto justify-evenly items-center hover:transition rounded-xl  transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105 '>
                        <label htmlFor="file"><svg className='mx-auto  h-20 w-20 lg:h-24 lg:w-24 xl:w-28 xl:h-28' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path className='fill-red-600' d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" /></svg></label>
                        <h1 className='text-red-600 font-Chewy text-2xl mx-auto text-center ' >HTML</h1>
                        <div className="w-[80%] bg-gray-300 h-6 mx-auto  rounded-full">
                            <div className="bg-red-600 h-6 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                    </a>
                    <a href="https://www.geeksforgeeks.org/Css/" className=' sm:px-6 sm:flex sm:flex-row hover:cursor-pointer  flex-col mx-auto justify-evenly items-center my-6  hover:transition rounded-xl  transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105' >
                        <label htmlFor="file"><svg className=' mt-4 mx-auto h-20 w-20 lg:h-24 lg:w-24 xl:w-28 xl:h-28' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            className='fill-blue-700' d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" /></svg></label>
                        <h1 className='text-blue-700 font-Chewy  px-2 text-2xl text-center ' >CSS</h1>
                        <div className="w-[80%] bg-gray-300 h-6  mx-auto rounded-full">
                            <div className="bg-blue-700 h-6 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                    </a>
                    <a href="https://www.geeksforgeeks.org/Javascript/" className='sm:px-6 sm:flex sm:flex-row hover:cursor-pointer flex-col mx-auto justify-evenly items-center my-6  hover:transition rounded-xl  transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105'>
                        <label htmlFor="file"><svg className=' mt-4 mx-auto h-20 w-20 lg:h-24 lg:w-24 xl:w-28 xl:h-28' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className='fill-yellow-400' d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg></label>
                        <h1 className='text-yellow-400 font-Chewy px-2  text-2xl text-center ' >Js</h1>
                        <div className="w-[80%] bg-gray-300 h-6  mx-auto rounded-full">
                            <div className="bg-yellow-400 h-6 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                    </a>
                    <a href="https://reactjs.org/" className=' hover:cursor-pointer sm:px-6 sm:flex sm:flex-row  flex-col mx-auto justify-evenly items-center my-6  rounded-xl  transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105'>
                        <label htmlFor="file">
                            <svg className=' mt-4 mx-auto h-20 w-20 lg:h-24 lg:w-24 xl:w-28 xl:h-28' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='fill-[#61dafb]' d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                            </svg>
                        </label>
                        <h1 className='text-[#61dafb] font-Chewy text-2xl px-2  text-center ' >React.js</h1>
                        <div className="w-[80%] bg-gray-300 h-6  mx-auto rounded-full">
                            <div className="bg-[#61dafb] h-6 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                    </a>

                </div >

                <div className='py-2'>
                    <h1 className='text-3xl py-2 md:text-4xl lg:text-5xl hover xl:text-5xl font-Chewy rounded-full text-center text-white underline underline-offset-4  ' >Familiar With</h1>
                </div>
                <div className='flex justify-evenly flex-wrap mt-16 lg:mt-40 xl:mt-40 z-40' >
                    <a href='https://www.geeksforgeeks.org/c-plus-plus/?ref=shm' className=' border-4 border-white hover:cursor-pointer rounded-xl py-4 px-2  animate-bounce my-3  z-4' >
                        <svg className='h-36 w-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path className='fill-blue-700' d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path></svg>
                        <h1 className='text-3xl text-blue-700 font-Chewy text-center' >C++</h1>
                    </a>
                    <a href='https://www.geeksforgeeks.org/python-programming-language/?ref=shm' className=' border-4 border-white hover:cursor-pointer rounded-xl py-4 my-3 px-2  animate-bounce z-4' >
                        <svg className='h-36 w-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path></svg>
                        <h1 className='text-3xl text-yellow-400 font-Chewy text-center' >Python</h1>
                    </a>
                    <a href='https://www.geeksforgeeks.org/c-programming-language/' className=' border-4 border-white hover:cursor-pointer rounded-xl py-4 my-3 px-2 animate-bounce z-4' >
                        <svg className='h-36 w-36' xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        ><path fill="#283593" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"></path><path fill="#283593" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"></path><path fill="#283593" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"></path></svg>
                        <h1 className='text-3xl text-[#283593] font-Chewy text-center' >C</h1>
                    </a>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>
        </>

    )
}
