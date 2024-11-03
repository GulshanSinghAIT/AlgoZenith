import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import DocumentDuplicateOutline from "../assets/DocumentDuplicateOutline.svg";
import ClockOutline from "../assets/ClockOutline.svg";
import ChartBarOutline from "../assets/ChartBarOutline.svg";
import CodeOutline from "../assets/CodeOutline.svg";
import PlayOutline from "../assets/PlayOutline.svg";
import Vector from "../assets/Vector.svg";

const CourseSection = ({ completedPercentage, id, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getProgressWidth = () => {
    return `${completedPercentage}%`;
  };

  return (
    <div className="relative  shadow-lg mx-auto border border-[#99E4FF] rounded-lg ">
      {" "}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col lg:flex-row justify-between  items-center p-4 overflow-hidden rounded-lg relative cursor-pointer"
      >
        <div className="w-full  pb-3 ">
          <div className="flex">
            <p className="text-xs lg:text-sm  text-gray-500">PART {id}</p>
          </div>
          <h2 className="text-sm lg:text-lg  font-semibold">
            Lorem Ipsum Dolor Sit Amet
          </h2>
        </div>
        <div className=" flex flex-col justify-end items-end gap-4">
          <div className="flex gap-4 items-center  space-x-4 ml-4">
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              02:00:00
            </span>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ChartBarOutline} alt="" />
              Medium
            </span>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={DocumentDuplicateOutline} alt="" />
              {items}
            </span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className="text-xs text-center  w-[8em] relative border-[#99E4FF] border-[1.5px] text-gray-500 bg-[#E4F3FF] px-1 py-0.5 rounded-md">
            {completedPercentage}% Completed
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-[#EFF5FF] h-1.5 rounded-b-lg">
          {" "}
          <div
            className="bg-[#384A68] h-1.5  transition-all duration-300"
            style={{ width: getProgressWidth() }}
          ></div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden pl-4 pr-4 "
      >
        <div className="mt-4">
          <div className="flex justify-between items-center py-5 border-b border-gray-200">
            <p className="flex items-center space-x-2">
              <img className="w-4" src={PlayOutline} alt="" />
              <span>Video 1</span>
            </p>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              10:00
            </span>
          </div>
          <div className="flex justify-between items-center py-5 border-b border-gray-200">
            <p className="flex items-center space-x-2">
              <img className="w-4" src={Vector} alt="" />
              <span>Article 1</span>
            </p>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              10:00
            </span>
          </div>
          <div className="flex justify-between items-center py-5 border-b border-gray-200">
            <p className="flex items-center space-x-2">
              <img className="w-4" src={Vector} alt="" />

              <span>Quiz 1</span>
            </p>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              10:00
            </span>
          </div>
          <div className="flex justify-between items-center py-5 border-b border-gray-200">
            <p className="flex items-center space-x-2">
              <img className="w-4" src={CodeOutline} alt="" />

              <span>Coding Exercise 1</span>
            </p>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              10:00
            </span>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="flex items-center space-x-2">
              <img className="w-4" src={DocumentDuplicateOutline} alt="" />

              <span>Combined Resource 1</span>
            </p>
            <span className="text-gray-500 flex gap-1">
              <img className="w-5" src={ClockOutline} alt="" />
              10:00
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseSection;
