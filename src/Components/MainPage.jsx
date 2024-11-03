import { useState } from 'react'
import MailSection from './MailSection'
import Bell from '../assets/Bell.svg'
import menu from '../assets/Menu.png'
import Grid from '../assets/ViewGridOutline.svg'
import LightBulb from '../assets/LightBulbOutline.svg'
import UserGroup from '../assets/UserGroupOutline.svg'
import ClipboardOutline from '../assets/ClipboardOutline.svg'
import ChartBar from '../assets/ChartBarOutline.svg'
import Star from '../assets/StarOutline.svg'

const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState('Upskill');
  return (
    <div className="flex p-2 lg:p-6  xl:px-10">
        
        <aside className="hidden md:block w-44 lg:w-60 p-6">
        <h2 className="text-2xl font-bold flex lg:gap-4 gap-2 text-gray-800 items-center mb-8"><img className='w-4 h-4 mt-1' src={menu} alt="" />AlgoZenith</h2>
        <ul className="space-y-4 text-gray-700">
          <li
            onClick={() => setActiveMenu('Dashboard')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 rounded ${
              activeMenu === 'Dashboard' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={Grid} alt="" />
            Dashboard
          </li>
          <li
            onClick={() => setActiveMenu('Learn')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 items-center rounded ${
              activeMenu === 'Learn' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={LightBulb} alt="" />
            Learn
          </li>
          <li
            onClick={() => setActiveMenu('Forums')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 items-center rounded ${
              activeMenu === 'Forums' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={UserGroup} alt="" />

            Forums
          </li>
          <li
            onClick={() => setActiveMenu('Upskill')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 items-center rounded ${
              activeMenu === 'Upskill' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={ClipboardOutline} alt="" />

            Upskill
          </li>
          <li
            onClick={() => setActiveMenu('Contest')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 items-center rounded ${
              activeMenu === 'Contest' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={ChartBar} alt="" />

            Contest
          </li>
          <li
            onClick={() => setActiveMenu('Leaderboard')}
            className={`cursor-pointer p-2 text-sm lg:text-base flex lg:gap-4 gap-2 items-center rounded ${
              activeMenu === 'Leaderboard' ? 'bg-blue-100 text-[#172B4D] font-semibold' : 'hover:bg-gray-200'
            }`}
          >
            <img className='w-5' src={Star} alt="" />

            Leaderboard
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ">
        {/* Header */}
        <header className="flex justify-end items-center mb-6">
          
          <div className="flex items-center space-x-4">
            <img className='w-8' src={Bell} alt="" />
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Placeholder for profile icon */}
          </div>
        </header>

        
        <MailSection />
      </main>
    </div>
  )
}

export default MainPage