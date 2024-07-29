import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDashboardCustomize, } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSpinning, setSpinning] = useState(true);
  const [isFullscreen, setFullscreen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setFullscreen(true));
    } else {
      document.exitFullscreen()
        .then(() => setFullscreen(false));
    }
  };

  return (
    <header className="relative">
      <div className="bg-backColor flex items-center justify-between text-white text-[20px] h-[70px] px-4 fixed top-0 left-0 right-0 z-10">
        <div className="header-left flex flex-row text-xl items-center gap-8">
          <div onClick={toggleSidebar} className="cursor-pointer">
            <LuMenu />
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <IoSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent placeholder-custom-placeWeight focus:outline-none text-xs placeholder-gray-500 text-white"
            />
          </div>
          <div>
            <p className="flex items-center gap-2 text-[15px] cursor-pointer hover:text-gray-300">
              Mega Menu <IoIosArrowDown />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <img
              className="cursor-pointer w-6"
              alt="logo"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
            />
          </div>
          <ul className="flex gap-6 text-2xl items-center">
            <li>
              <div className="cursor-pointer">
                <MdOutlineDashboardCustomize />
              </div>
            </li>
            <li>
              <div
                className="text-3xl cursor-pointer"
                onClick={handleFullscreenToggle}
              >
                {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
              </div>
            </li>
            <li>
              <div className="relative cursor-pointer">
                <div className="bg-red-400 rounded-full absolute flex justify-center items-center top-[-35%] right-[-24%] font-bold text-[10px] w-[15px] h-[15px]">
                  3
                </div>
                <div className="animate-ringing">
                  <IoNotificationsOutline />
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  className="w-10 rounded-full border-4 border-gray-600"
                  src="https://skote-v-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                  alt="avatar"
                />
                <p
                  className="flex items-center gap-2 text-sm cursor-pointer"
                  onClick={handleSidebarToggle}
                >
                  admin
                  <IoIosArrowDown />
                </p>
              </div>
            </li>
            <li>
              <div
                className={`cursor-pointer transition-transform duration-default ease-default ${isSpinning ? 'animate-spin' : ''}`}
                onClick={() => setSpinning(!isSpinning)}
              >
                <IoSettingsOutline />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`transition-transform duration-300 ease-in-out fixed top-[70px] right-0 w-40 bg-backColor text-white shadow-md ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 relative z-10">
          <button
            className="absolute top-2 right-2 text-white"
            onClick={handleSidebarToggle}
          >
            X
          </button>
          <ul>
            <li className="mb-2 flex items-center gap-2 cursor-pointer">
              <CgProfile />
              Profile
            </li>
            <li className="mb-2 flex items-center gap-2 cursor-pointer">
              <FaWallet />
              My wallet
            </li>
            <li className="mb-2 flex items-center gap-2 cursor-pointer">
              <IoIosSettings />
              Settings
            </li>
            <li className="mb-2 flex items-center gap-2 cursor-pointer">
              <FaLock />
              Lock screen
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
