import { useState } from 'react';
import CourseSection from './Course';
import ClockOutline from "../assets/ClockOutline.svg";
import Bag from "../assets/Bag.svg";
import Calender from "../assets/CalendarOutline.svg";
import info from "../assets/info.svg";
const ChapterLayout = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [activeButton, setActiveButton] = useState('Learning Material');

  const chapters = [
    { id: 1, name: 'Chapter 1', duration: '05:00:00' },
    { id: 2, name: 'Chapter 2', duration: '02:00:00' },
    { id: 3, name: 'Chapter 3', duration: '04:00:00' },
    { id: 4, name: 'Chapter 4', duration: '06:00:00' },
    { id: 5, name: 'Chapter 5', duration: '01:30:00' },
  ];

  const sections = [
    { id: 1, title: 'Lorem Ipsum Dolor Sit Amet', duration: '02:00:00', difficulty: 'Medium', items: 5, completion: 45 },
    { id: 2, title: 'Lorem Ipsum Dolor Sit Amet', duration: '02:00:00', difficulty: 'Medium', items: 12, completion: 20 },
    { id: 3, title: 'Lorem Ipsum Dolor Sit Amet', duration: '02:00:00', difficulty: 'Medium', items: 12, completion: 0 },
  ];

  return (
    <div className=" border-[#99E4FF] border-[1.5px] mx-auto p-4 md:p-6  bg-white shadow rounded-lg">
      <div className="flex  justify-between items-center mb-4">
        <div className="flex  space-x-4 p-2 rounded-lg bg-gradient-to-b from-[#eff3fa] to-[#FCFDFF]">
        
          <button
            onClick={() => setActiveButton('Mentor Sessions')}
            className={`px-4 text-sm lg:text-base flex gap-2 items-center  py-2 font-semibold rounded-md ${
              activeButton === 'Mentor Sessions' ? 'bg-white  font-medium border-[1.5px] border-black/20 shadow-lg ' : ' font-light'
            }`}
          > <img className='w-5' src={Calender} alt="" />
            Mentor Sessions
          </button>
          <button
            onClick={() => setActiveButton('Learning Material')}
            className={`px-4 text-sm lg:text-base py-2 flex items-center gap-2 font-semibold rounded-md ${
              activeButton === 'Learning Material' ? 'bg-white font-medium border-[1.5px] border-black/20 shadow-lg ' : ' font-light'
            }`}
          >
            <img className='w-5' src={Bag} alt="" />
            Learning Material
          </button>
        </div>
        <button className="px-4 text-sm lg:text-base py-2 flex gap-2 items-center border-[#99E4FF] border-[1.5px] rounded-md"><img className='w-4' src={info} alt="" />How it works</button>
      </div>
        <hr />

      <div className="flex py-8 gap-5 xl:gap-9">
        {/* Sidebar for Chapters */}
        <div className="w-1/4  text-sm xl:text-base">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter.id)}
              className={`p-4  cursor-pointer whitespace-nowrap flex flex-col lg:flex-row justify-between lg:items-center rounded-lg mb-2 ${
                selectedChapter === chapter.id ? 'bg-[#EFF5FF] font-semibold' : ''
              }`}
            >
              <h3 className="">{chapter.name}</h3>
              {selectedChapter === chapter.id && chapter.duration && ( // Only display duration when the tab is active
                <span className="text-gray-500 whitespace-nowrap  flex gap-1">
                  <img className="w-4 hidden md:block" src={ClockOutline} alt="" />
                  {chapter.duration}
                </span>
              )}
            </div>
          ))}
        </div>

        
        <div className="w-3/4">
          {sections.map((section) => (
            <div key={section.id} className="mb-4">
              <CourseSection
                completedPercentage={section.completion}
                id={section.id}
                items = {section.items}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterLayout;
