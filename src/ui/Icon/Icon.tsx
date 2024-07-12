import React, { Dispatch } from "react";
import { IoIosArrowDown } from "react-icons/io"; //down arrow
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"; //magnifying glass
import { CiCalendar } from "react-icons/ci"; //calendar
import { IoIosNotificationsOutline } from "react-icons/io"; //notification
import { CiUser } from "react-icons/ci"; //user
import { IoCloudUploadOutline } from "react-icons/io5"; //upload
import { RxExit } from "react-icons/rx"; //exit
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; //right arrow
import Image from "next/image";

export type IconProps = {
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
    | "icon"
    | "board"
    | "add"
    | "tasks"
    | "close"
    | "darkmode"
    | "lightmode";

  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const Icon = ({ size, icon, className }: IconProps) => {
  switch (icon) {
    case "arrowDown":
      return <IoIosArrowDown size={size} className={className} />;
    case "darkmode":
      return (
        <Image
          src="/darkmode.svg"
          width={size}
          height={size}
          alt="darkmode"
          className={className}
        />
      );
    case "lightmode":
      return (
        <Image
          src="/lightmode.svg"
          width={size}
          height={size}
          alt="lightmode"
          className={className}
        />
      );
    case "close":
      return <AiOutlineClose size={size} className={className} />;
    case "tasks":
      return (
        <Image
          className={className}
          src="/Tasks.svg"
          width={size}
          height={size}
          alt="tasks"
        />
      );
    case "add":
      return (
        <Image
          className={className}
          src="/Add.png"
          width={size}
          height={size}
          alt="add"
        />
      );
    case "board":
      return (
        <Image
          className={className}
          src="/Board.png"
          width={size}
          height={size}
          alt="board"
        />
      );
    case "threePoints":
      return (
        <Image
          className={className}
          src="/More.png"
          width={size}
          height={size}
          alt="logo"
        />
      );
    case "Logo":
      return (
        <Image
          className={className}
          src="/Logo.png"
          width={26}
          height={26}
          alt="logo"
        />
      );
    case "calendar":
      return <CiCalendar size={size} className={className} />;
    case "notification":
      return <IoIosNotificationsOutline size={size} className={className} />;
    case "user":
      return <CiUser size={size} className={className} />;
    case "upload":
      return <IoCloudUploadOutline size={size} className={className} />;
    case "exit":
      return <RxExit size={size} className={className} />;
    case "rightArrow":
      return <MdOutlineKeyboardArrowRight size={size} className={className} />;
    case "tools":
      return (
        <Image
          src="/Tools.png"
          width={size}
          height={size}
          className={className}
          alt="tools"
        />
      );
    case "search":
      return <HiOutlineMagnifyingGlass size={size} className={className} />;
    case "settings":
      return (
        <Image
          src="/Settings.png"
          width={size}
          height={size}
          className={className}
          alt="settings"
        />
      );
    case "stadistics":
      return (
        <Image
          className={className}
          src="/Stadistics.png"
          width={size}
          height={size}
          alt="stadistics"
        />
      );
    case "icon":
      return (
        <Image
          className={className}
          src="/Icon.png"
          width={size}
          height={size}
          alt="icon"
        />
      );
  }
};

export default Icon;
