import React from 'react'
import LinkedIn from "../assets/SocialMedia/linkedin.png"
import whatsapp from "../assets/SocialMedia/whatsapp.png"
import instagram from "../assets/SocialMedia/instagram.png"

function ContactUs() {
  return (
    <div className='flex flex-col justify-center text-center m-6'>
        <h1 className='text-3xl font-bold my-8'>
            Contact Us
        </h1>
        <p>
            We'd love to hear from you! Connect with us through any of the following platforms:
        </p>
        <ul className='flex flex-wrap w-full overflow-hidden'>
            <li className='flex items-center m-4 w-1/3'>
            <img className='h-12 w-12' src={instagram} alt="" /> <p className='mx-4 flex'><p className='mr-4 font-semibold'>Instagram:</p> <p>558alex1</p></p> 
            </li>
            <li className='flex items-center m-4 w-1/3'>
            <img className='h-12 w-12' src={whatsapp} alt="" /><p className='mx-4 flex'><p className='mr-4 font-semibold'>WhatsApp:</p> <p>+14039031631</p></p> 
            </li>
            <li className='flex items-center m-4 w-1/3'>
            <img className='h-12 w-12' src={LinkedIn} alt="" /><p className='mx-4 flex'><p className='mr-4 font-semibold'>LinkedIn:</p> <p>Alexander Meruts</p></p>
            </li>
        </ul>
        <div className='w-full flex flex-col justify-end items-end'>
            <div className='w-2/3'>

            <p className='text-xl font-extrabold'>
                To book an appointment, please ensure you schedule at least one week prior to your event.
            </p>
            <p className='text-xl font-extrabold'>
                Thank you for choosing Setting Milestones in Learning Excellence (SMILE). We look forward to assisting you!
            </p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs