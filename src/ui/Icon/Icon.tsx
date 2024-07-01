import React from "react";
import { IoIosArrowDown } from "react-icons/io"; //down arrow
import { CiCircleMore } from "react-icons/ci"; //three points
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"; //magnifying glass
import { CiCalendar } from "react-icons/ci"; //calendar
import { IoIosNotificationsOutline } from "react-icons/io"; //notification
import { CiUser } from "react-icons/ci"; //user
import { IoCloudUploadOutline } from "react-icons/io5"; //upload
import { RxExit } from "react-icons/rx"; //exit
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; //right arrow
import Image from "next/image";

type Props = {
  size: number;
  icon:
    | "arrowDown"
    | "threePoints"
    | "Logo"
    | "calendar"
    | "notification"
    | "user"
    | "upload"
    | "exit"
    | "rightArrow"
    | "tools"
    | "search"
    | "settings"
    | "stadistics"
    | "icon";
  onClick?: () => void;
};

const Icon = ({ size, icon }: Props) => {
  switch (icon) {
    case "arrowDown":
      return <IoIosArrowDown size={size} />;
    case "threePoints":
      return <CiCircleMore size={size} />;
    case "Logo":
      return <Image src="/Logo.png" width={size} height={size} alt="logo" />;
    case "calendar":
      return <CiCalendar size={size} />;
    case "notification":
      return <IoIosNotificationsOutline size={size} />;
    case "user":
      return <CiUser size={size} />;
    case "upload":
      return <IoCloudUploadOutline size={size} />;
    case "exit":
      return <RxExit size={size} />;
    case "rightArrow":
      return <MdOutlineKeyboardArrowRight size={size} />;
    case "tools":
      return <Image src="/Tools.png" width={size} height={size} alt="tools" />;
    case "search":
      return <HiOutlineMagnifyingGlass size={size} />;
    case "settings":
      return (
        <Image src="/Settings.png" width={size} height={size} alt="settings" />
      );
    case "stadistics":
      return (
        <Image
          src="/Stadistics.png"
          width={size}
          height={size}
          alt="stadistics"
        />
      );
    case "icon":
      return <Image src="/Icon.png" width={size} height={size} alt="icon" />;
  }
};

export default Icon;
