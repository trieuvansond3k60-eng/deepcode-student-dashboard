import { IoMdHome, IoMdPerson, IoIosSettings } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
   <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
  <Link
    to="/"
    className="flex items-center gap-3 p-3 mb-2 rounded hover:bg-gray-700"
  >
    <IoMdHome />
    <span>Trang chủ</span>
  </Link>

  <Link
    to="/student"
    className="flex items-center gap-3 p-3 mb-2 rounded hover:bg-gray-700"
  >
    <IoMdPerson />
    <span>Quản lý sinh viên</span>
  </Link>

  <Link
    to="/course"
    className="flex items-center gap-3 p-3 mb-2 rounded hover:bg-gray-700"
  >
    <FaBookReader />
    <span>Khóa học</span>
  </Link>

  <Link
    to="/setting"
    className="flex items-center gap-3 p-3 rounded hover:bg-gray-700"
  >
    <IoIosSettings />
    <span>Cài đặt</span>
  </Link>
  );
};

export default Sidebar;
