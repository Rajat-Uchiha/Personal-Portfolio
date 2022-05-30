import React, { useEffect } from 'react'
import pic from './Pic.png'
import { init } from 'ityped'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
export default function Homepage() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: [' Developer', ' Designer'],
        });
    }, [])

    const LinkedIn = () => {
        window.open("https://www.linkedin.com/in/rajat-kalotra-319521230/", "_blank");
    }
    const HackerRank = () => {
        window.open("https://www.hackerrank.com/rajat_171", "_blank");
    }
    const Insta = () => {
        window.open("https://www.instagram.com/urs_rajat7/", "_blank");
    }
    const Github = () => {
        window.open("https://github.com/Rajat-Uchiha", "_blank");
    }

    return (
        <>

            {/* Main section */}
            <section className="font-Chewy min-h-screen bg-stone-800  to-white text-white" id="homeSection">
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>

                <div
                    id="HomeContainer"
                    className=" flex flex-col mx-auto min-h-screen items-center justify-between"
                >

                    {/* <!-- Social Media --> */}


                    {/* <!-- Image and Button container --> */}

                    <div className='flex-col my-auto  w-full justify-center lg:flex lg:flex-row lg:items-center lg:justify-evenly ' >

                        {/* Pic */}
                        <Bounce top>
                            <div className="w-4/6 drop-shadow-2xl my-5 mx-auto lg:mx-4">
                                <img className="rounded-full mx-auto drop-shadow-2xl bg-stone-900 border-4 border-white hover:transition transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" src={pic} alt="MyImage" />
                            </div>
                        </Bounce>



                        {/* Name and all the stuff */}

                        <div className="w-5/6  mx-auto text-center flex-col justify-center lg:mx-4">
                            <div className="mx-auto bg-white drop-shadow-2xl rounded-lg ">
                                <h1 className=" lg:py-4 md:py-3 xl:py-3 mx-auto  md:text-5xl lg:text-6xl xl:text-7xl text-4xl py-2 text-stone-900 text-center">
                                    Hi! I'm <span className="text-stone-900">Rajat</span>
                                </h1>
                            </div>
                            <div className="mx-auto ">
                                <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white">A</h1>
                            </div>
                            <div className="mx-auto bg-white drop-shadow-2xl rounded-lg ">
                                <h1 className=" text-center text-4xl py-2 md:py-3 lg:py-4 md:text-5xl lg:text-6xl xl:text-7xl  xl:py-3 text-stone-900 ">
                                    Web
                                    <span ref={textRef}
                                    ></span>
                                </h1>
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="my-5 w-full lg:w-5/6 xl:w-5/6 mx-auto">
                                <Slide left>

                                    <div
                                        className="w-1/2 hover:cursor-pointer bg-stone-900 shadow-2xl  my-2 float-left clear-both border-2 hover:transition rounded-lg border-white hover:border-lime-400 transition duration-500 ease-in-out hover:bg-stone-900 transform 
                                hover:-translate-y-1 hover:scale-110 hover:border-4 "
                                    >
                                        <Link to="/contact" ><button className="py-1 text-xl w-full md:text-2xl lg:text-2xl xl:text-3xl lg:py-2 text-white hover:text-lime-400">Contact</button></Link>

                                    </div>
                                </Slide>
                                <Slide right>
                                    <div
                                        className="w-1/2 hover:cursor-pointer bg-stone-900  my-2 float-right clear-both border-2 hover:transition rounded-lg border-white hover:border-lime-400 transition duration-500 ease-in-out hover:bg-stone-900 transform 
                            hover:-translate-y-1 hover:scale-110  hover:border-4 "
                                    >
                                        <Link to="/skills" ><button className="py-1 text-xl w-full md:text-2xl lg:text-2xl xl:text-3xl lg:py-2 text-white hover:text-lime-400">Skills</button></Link>

                                    </div>
                                </Slide>

                                <Slide left>
                                    <div
                                        className="w-1/2 hover:cursor-pointer bg-stone-900  my-2 float-left clear-both border-2 hover:transition rounded-lg border-white hover:border-lime-400 transition duration-500 ease-in-out hover:bg-stone-900 transform 
                            hover:-translate-y-1 hover:scale-110 hover:border-4 "
                                    >
                                        <Link to="/qualifications"> <button className="py-1 text-xl w-full md:text-2xl lg:text-2xl xl:text-3xl lg:py-2 text-white hover:text-lime-400">Qualification</button></Link>

                                    </div></Slide>


                                <Slide right > <div
                                    className="w-1/2 hover:cursor-pointer bg-stone-900  my-2 float-right clear-both border-2 hover:transition rounded-lg border-white hover:border-lime-400 transition duration-500 ease-in-out hover:bg-stone-900 transform 
                            hover:-translate-y-1 hover:scale-110 hover:border-4 "
                                >
                                    <Link to="/projects"> <button className="py-1 text-xl w-full md:text-2xl lg:text-2xl xl:text-3xl lg:py-2 text-white hover:text-lime-400 ">Projects</button></Link>

                                </div></Slide>

                            </div>
                        </div>

                    </div>

                </div>

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </section>


            <div className=" border-none py-3 flex-wrap w-full opacity-100 hover:opacity-100 delay-50 duration-300 ease-in-out bg-stone-900 transition-all items-center transform flex flex-row justify-center ">
                <Slide left>
                    <div className='flex justify-center items-center ' >
                        <svg className='h-7 w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='fill-white' d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                        <p className='text-lg font-Chewy text-white' > +91 9464649773</p>
                    </div>
                </Slide>

                <Rotate >
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-6 '>
                        <button onClick={LinkedIn}>
                            <svg className=" hover:cursor-pointer h-8 w-8 mx-auto my-2 hover:transition transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path className="fill-white hover:fill-lime-500" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </button>
                    </div>
                </Rotate>


                <Rotate>
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-6 '>
                        <button onClick={Github}>
                            <svg className=" hover:cursor-pointer h-8 w-8 mx-auto my-2 hover:transition transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className='fill-white
                            hover:fill-lime-500' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </button>
                    </div>
                </Rotate>

                <Rotate>
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-6 '>
                        <button onClick={HackerRank}>
                            <svg className=" hover:cursor-pointer h-8 w-8 mx-auto my-2 hover:transition transition duration-500 ease-in-out     transform hover:-translate-y-1 hover:scale-105 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path className="fill-white hover:fill-lime-500" d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" />
                            </svg>
                        </button>
                    </div>
                </Rotate>

                <Rotate>
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-6 '>
                        <button onClick={Insta}>
                            <svg
                                className=" hover:cursor-pointer h-8 w-8 mx-auto my-auto hover:transition transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    className="fill-white hover:fill-lime-500 "
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                        </button>
                    </div>
                </Rotate>
                <Slide right >
                    <div className='flex justify-center items-center ' >
                        <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='fill-white' d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" /></svg>
                        <p className='text-lg font-Chewy text-white' > rajatraguvanshi3900@gmail.com</p>
                    </div>
                </Slide>


            </div>


        </>
    )
}
