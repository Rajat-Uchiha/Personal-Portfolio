import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
export default function Contact() {

  let submitFunc = () => {
    let youName = document.getElementById("yourName");
  }


  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userMsg, setMsg] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);

  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

  };
  const handleMsgChange = (event) => {
    setMsg(event.target.value);

  };

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;


  // Function to send Email
  function sendEmail(e) {
    e.preventDefault();
    if (e.target != null) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
          swal("Success!", "ThankYou for Contacting Me!", "success");
        }, (error) => {
          swal("Failure!", "Something went wrong!", "warning");
        });
        e.target.reset();
    }
    else {
      swal("Failure!", "Something went wrong!", "warning");
    }

  }


  return (

    <>

      <div className='bg-stone-800' >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
        <div className='py-2 '>
          <h1 className='text-3xl py-2 md:text-4xl lg:text-5xl hover xl:text-5xl font-Chewy rounded-full text-center text-white  underline underline-offset-4 ' >Now It's your turn to say hi! <span className='text-5xl' >
            &#128075;</span> </h1>
          <p className='text-center text-white text-lg font-serif px-5 ' >P-145 Garden Colony, Rupnagar, Punjab, 🇮🇳</p>
        </div>

        {/* Main Form starts from here */}
        <form onSubmit={sendEmail} >
          <div className='  px-2 py-4  mx-auto w-2/3 ' >
            <div className=' flex-col flex justify-start py-2' >
              <label className=' text-white font-Chewy font-light text-3xl my-2' htmlFor="email ">NAME</label>
              <input id='yourName' name='name' value={userName} onChange={handleNameChange} placeholder='Name' className='w-full rounded-lg bg-stone-700 text-lg  placeholder:text-white  focus:border-lime-600 focus:ring-2 focus:ring-lime-600  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' type="text" />
            </div>
            <div className=' flex-col flex justify-start py-2' >
              <label className=' text-white font-Chewy font-light text-3xl my-2 ' htmlFor="email ">EMAIL</label>
              <input placeholder='Email' value={userEmail} onChange={handleEmailChange} name='u_email' className='w-full rounded-lg bg-stone-700 text-lg  placeholder:text-white  focus:border-lime-600 focus:ring-2 focus:ring-lime-600  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' type="email" />

            </div>
            <div className=' flex-col flex justify-start py-2' >
              <label className=' text-white font-Chewy font-light text-3xl  my-2' htmlFor="email ">MESSAGE</label>
              <textarea placeholder='Message' value={userMsg} onChange={handleMsgChange} name='message' className='w-full rounded-lg bg-stone-700 text-lg max-h-5/6 placeholder:text-white  focus:border-lime-600 focus:ring-2 focus:ring-lime-600  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' type="text" />
            </div>
            <div className='mx-auto w-full  my-5' >
              <button onSubmit={submitFunc} disabled={!userName || !userEmail || !userMsg} className='disabled:cursor-not-allowed border-2 rounded-lg w-full py-4 active hover:text-lime-600 bg-stone-700 hover:border-lime-600 hover:bg-stone-800 text-white text-lg border-white' >
                Send Message
              </button>
            </div>
          </div>
        </form>
        <p className='text-center text-white text-lg font-serif px-5 ' >I'll contact you soon! &#128516;</p>
        <div >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </div >
    </>
  )
}
