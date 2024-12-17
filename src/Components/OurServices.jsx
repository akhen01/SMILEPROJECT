import React from 'react'
import { Link } from 'react-router-dom'
import businessEnglish from "../assets/services/Business English.jpg"
import ConflictReselution from "../assets/services/Conflict resolusion.jpg"
import EfectiveComunication from "../assets/services/Effective Communication.jpg"
import EnglishAsASecondLanguage from "../assets/services/English as a second Language.jpg"
import TestPreparation from "../assets/services/IELTS Test Preparation.jpg"
import PersonalityAndConfidence from "../assets/services/Personality Development and Confidence Building.jpg"
import Productivity from "../assets/services/Productivity Improvement.jpg"
import LeaderShip from "../assets/services/Public Speaking and LeaderShip Training.jpg"
import StressManagement from "../assets/services/Stress Managment.jpg"
import TeamBuilding from "../assets/services/Team Building Workshop.jpg"
import Telemarketing from "../assets/services/Telemarketing Training.jpg"
import Rarrow from "../assets/Arrows/next.png"
import Larrow from "../assets/Arrows/back.png"

function OurServices() {
    const ServiceList = [
        {
            name : "Public Speaking and LeaderShip Training",
            pic: LeaderShip,
            slug:"/leadership"
        },
        {
            name : "Personality Development and Confidence Building",
            pic: PersonalityAndConfidence,
            slug:""
        },
        {
            name : "Business English / English In The Workplace",
            pic: businessEnglish,
            slug:""
        },
        {
            name : "ESL(English as a second Language)",
            pic: EnglishAsASecondLanguage,
            slug:""
        },
        {
            name : "Customer Service / Telemarketing Training",
            pic: Telemarketing,
            slug:""
        },
        {
            name : "Team Building Workshop",
            pic: TeamBuilding,
            slug:""
        },
        {
            name : "Productivity Improvement",
            pic: Productivity,
            slug:""
        },
        {
            name : "Effective Communication",
            pic: EfectiveComunication,
            slug:""
        },
        {
            name : "Conflict Resolution",
            pic: ConflictReselution,
            slug:""
        },
        {
            name : "Stress Managment",
            pic: StressManagement,
            slug:""
        },
        {
            name : "TOEFL / IELTS Test Preparation",
            pic: TestPreparation,
            slug:""
        },
    ]
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center overflow-hidden'>
        <h1 className='text-5xl font-bold'>Our Services</h1>
        <div className='w-full justify-center flex'>
            <button className='rounded-full w-24'>
                <img src={Larrow} alt="" />
            </button>
            <ul className='flex overflow-x-auto no-scrollbar m-4 w-3/4 bg-gray-200 rounded-2xl '>
                {
                    ServiceList.map((serv) => (
                        <div
                        style={{borderRadius:"24% 76% 16% 84% / 83% 18% 82% 17% "}}
                        className='m-4 h-96 flex flex-col justify-start items-center text-2xl w-80 text-center rounded-3xl shadow-2xl bg-white' 
                        key={serv.name}>
                            <Link 
                            to={serv.slug}
                            >
                            <div className='w-64 h-64 p-2'>
                                <img
                                className='w-64 h-64 object-contain' 
                                src={serv.pic} alt={serv.name} />
                            </div>
                            <h1 className='text-center m-2 p-1 text-xl font-bold'>{serv.name}</h1>
                            </Link>
                        </div>
                    ))
                }
            </ul>
            <button className='rounded-full w-24'>
                <img src={Rarrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default OurServices