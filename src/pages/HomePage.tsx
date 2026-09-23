import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className = "flex h-screen w-full-row">
      <Sidebar/>
        <h1 className="text-3xl font-bold text-gray-800">
          Trang chủ
        </h1>

        <p className="mt-4 text-gray-600">
          Chào mừng bạn đến với hệ thống quản lý sinh viên.
        </p>
    </div>
  );
};

export default HomePage;