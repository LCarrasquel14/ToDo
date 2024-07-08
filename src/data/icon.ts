import { IconType } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { CiCalendar, CiUser } from "react-icons/ci";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxExit } from "react-icons/rx";

type Icons = {
  [key: string]: IconType;
};

export const icons: Icons = {
  arrowDown: IoIosArrowDown,
  magnifyingGlass: HiOutlineMagnifyingGlass,
  calendar: CiCalendar,
  notification: IoIosNotificationsOutline,
  user: CiUser,
  upload: IoCloudUploadOutline,
  exit: RxExit,
  close: AiOutlineClose,
  rightArrow: MdOutlineKeyboardArrowRight,
};
