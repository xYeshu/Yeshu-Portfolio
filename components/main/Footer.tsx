import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://www.linkedin.com/in/yeshuwanjari/" target="_blank" className="cursor-pointer flex flex-row items-center my-[15px] cursor-pointer ">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                    <a href="https://github.com/xYeshu/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://www.instagram.com/yeshuwanjari/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.linkedin.com/in/yeshuwanjari/" target="_blank" className="cursor-pointer flex flex-row items-center my-[15px] cursor-pointer ">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                    <a href="https://github.com/xYeshu/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://www.instagram.com/yeshuwanjari/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Delhi, India</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Last Updated: 24-01-25</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">yeshu.work@outlook.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Yeshu Wanjari 2025 All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer