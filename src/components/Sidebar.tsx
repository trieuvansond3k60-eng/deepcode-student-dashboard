import { IoMdHome, IoMdPerson, IoIosSettings } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className= "w-64 flex-col h-screen bg-gray-800 text-white p-4 flex">
        <div className="flex items-center mb-6">
            <IoMdHome className="mr-2" />
            <span>Trang chủ</span>
        </div>
        <div className="flex items-center mb-6">
            <IoMdPerson className="mr-2" />
            <span>Quản lý sinh viên</span>
        </div>
        <div className="flex items-center mb-6">
            <FaBookReader className="mr-2" />
            <span>Khóa học</span>
        </div>
        <div className="flex items-center">
            <IoIosSettings className="mr-2" />
            <span>Cài đặt</span>
        </div>
    </div>
  );
};

export default Sidebar;
