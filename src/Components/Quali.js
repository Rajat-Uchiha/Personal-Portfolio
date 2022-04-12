import React from 'react'

export default function Quali(props) {

    return (
        <>
            <div style={props.bgStyle} >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>

                <div className='py-2 '>
                    <h1 className='text-3xl py-2 md:text-4xl lg:text-5xl hover xl:text-5xl font-Chewy rounded-full text-center text-white  underline underline-offset-4 ' >Qualifications</h1>
                </div>

                {/* Main section */}

                <div className='my-4 flex-col lg:flex lg:flex-row xl:flex xl:flex-row w-full px-4 ' >
                    <div className='flex-col shadow-2xl border-2 border-white  justify-center lg:mx-3 xl:mx-3 py-6 mx-auto bg-stone-900 lg:w-1/2 xl:w-1/2 w-full items-center my-6 rounded-3xl' >
                        <div className='w-full mx-auto ' >
                            <svg className='h-28 w-28 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='fill-white' d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z" /></svg>
                        </div>
                        <h1 className=' text-center font-mono text-white text-2xl py-1'>Graduation(2020-2024)</h1>
                        <p className='font-mono text-white text-center text-xl' >Chandigarh University(PB)</p>
                        <div className='px-4 w-4/5 mx-auto py-5' >
                            <p className='font-mono text-white text-xl' > Pursuing Bachelor of Engineering in Computer Science from Chandigarh University. Got <span className='text-lime-500' >7.64</span>  cgpa in my Ist year.</p>
                        </div>
                    </div>
                    <div className='flex-col shadow-2xl border-2 border-white justify-center lg:mx-3 xl:mx-3 py-6 mx-auto bg-stone-900 lg:w-1/2 xl:w-1/2 w-full items-center my-6 rounded-3xl' >
                        <div className='w-full mx-auto ' >
                            <svg className='h-28 w-28 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path className='fill-white' d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z" /></svg>
                        </div>
                        <h1 className=' text-center font-mono text-white text-2xl py-1'>Schooling(C.B.S.E)</h1>
                        <p className='font-mono text-white text-center text-xl' >Shiwalik Public School, Rupnagar(PB)</p>
                        <div className='px-4 w-4/5 mx-auto py-5' >
                            <ul className='list-disc marker:text-white' >
                                <li>
                                    <h1 className='font-mono text-white text-xl underline underline-offset-2'>10th Standard(2018)</h1>
                                    <span className='font-mono text-white text-xl'>Got <span className='text-lime-500' >88.2%</span>  in 10th standard.</span>
                                </li>
                                <li>
                                    <h1 className='font-mono text-white text-xl underline underline-offset-2'>12th Standard(2020)</h1>
                                    <span className='font-mono text-white text-xl'>Got <span className='text-lime-500' > 76.4%</span> in 12th standard including <span className='text-lime-500'>physics, chemistry, maths.</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>

        </>
    )
}











