import React from 'react'
import coach from "../assets/Icons/coaching.png"
import improve from "../assets/Icons/Improve.png"
import Star from "../assets/Icons/star-badge.png"

function About() {
  return (
    <div className='relative flex items-center justify-center flex-col mt-12 px-10 py-4 bg-white m-2 rounded-3xl overflow-hidden'>
        <div className='absolute -left-16 -top-16 bg-yellow-100 rounded-full h-44 w-44'></div>
        <div className='absolute -right-16 -bottom-16 bg-yellow-100 rounded-full h-44 w-44'></div>
        <div className='p-8 w-full'>
            <h1 className='font-bold text-3xl text-center'>
                About Us
            </h1>
        
            
            <div className='w-full flex justify-around'>            
                <div className='w-2/3'>
                    <p className='m-2'>
                        SMILE (Setting Milestones in Learning Excellence) is a distinguished company specializing in public speaking, leadership, productivity improvement, effective communication, and a myriad of other critical skills. With over a decade of experience, we are committed to empowering corporate workers and individuals, helping them unlock their full potential and achieve their personal and professional goals.
                    </p>
                </div>
                <div style={{borderRadius:"83% 17% 78% 22% / 68% 57% 43% 32% "}}
                className='bg-yellow-100 w-1/3 justify-center items-center flex'>
                    <img className="bg-white rounded-full h-24 w-34" src={coach} alt="" />
                </div>
            </div>
            <div className='w-full my-8 flex justify-around'>     
                <div className='w-2/3'>
                    <p className='m-2 '>
                        Our dynamic and engaging training methods, combined with an in-depth understanding of these essential areas, make SMILE a leader in the industry. We have a proven track record of transforming the capabilities and confidence of our clients through one-on-one coaching sessions and comprehensive group workshops.
                    </p>
                </div> 
                <div style={{borderRadius:"83% 17% 78% 22% / 68% 57% 43% 32% "}} 
                className='bg-yellow-100 w-1/3 justify-center items-center flex'>
                <img className="bg-white rounded-full h-24 w-34" src={improve} alt="" /></div>
            </div>
            <div className='w-full flex justify-around'>
                <div className='w-2/3'>
                    <p className='m-2'>
                        At SMILE, our dedication to excellence and passion for teaching inspire many to excel in their careers and personal lives. Our commitment to professional development ensures that our clients develop the necessary skills to succeed in today's competitive landscape. With our guidance, countless individuals have achieved new heights in their professional journeys.
                    </p>
                </div> 
                <div style={{borderRadius:"83% 17% 78% 22% / 68% 57% 43% 32% "}}
                className='bg-yellow-100 ml-16 w-1/3 justify-center items-center flex'>
                <img className=" bg-white rounded-full h-24 w-34" src={Star} alt="" /></div>                       
            </div>
        </div>
    </div>
  )
}

export default About