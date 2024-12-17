import React from 'react'
import HeroPhoto from "../assets/heroPhoto.jpg"
import CEO from "../assets/Erline.png"

function Hero() {
  return (
    <div className='relative flex flex-col items-center justify-center -mt-12 z-10 w-full'>
        <div className='flex'>
            <div style={{borderRadius: "25% 75% 39% 61% / 51% 51% 49% 49%" }}
            className='relative overflow-hidden items-center justify-center flex flex-col w-1/2 brightness-75'>
                <img src={HeroPhoto} alt="" />
            </div>
            <div className='w-1/2 p-6'>
                <h1 className='text-4xl mb-4 text-yellow-200 font-bold mt-8'>Start Your Journy With Us</h1>
                <p>Empower Your Organization, Company, or Individual Self

                    Partner with us to elevate your potential and achieve excellence. Together, we can unlock new levels of success and growth. Join SMILE (Setting Milestones in Learning Excellence) and embark on a journey to transformation.

                    Ready to take the next step? Let's work together to make it happen.</p>
            </div>
        </div>
        <div className='w-full m-6 px-24'>

            <div style={{borderRadius:"25% 75% 39% 61% / 51% 51% 49% 49% "}}
             className='flex items-center justify-evenly w-full rounded-3xl shadow-lg bg-slate-50'>
                            
                <h1 className='w-2/3 flex flex-col justify-center items-center font-bold text-xl'>
                    <p>
                        In our CEO words
                    </p>
                    <p>
                        "Communicating a Will in Achieving Excellence"
                    </p> 
                </h1>
                <div className='w-1/3 max-w-48'>

                    <img className='rounded-full' src={CEO} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero