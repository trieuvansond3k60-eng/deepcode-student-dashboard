import { Button, Input, Popconfirm, Select, Space, Table } from "antd";
import Sidebar from "../components/Sidebar";
import { DeleteOutlined, EditOutlined, PlusOutlined, ReloadOutlined, SaveOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

type Student = {
  key: string;
  id: number;
  name: string;
  age: number;
  major: string;
  score: number;
};

const StudentPage = () => {
     const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
   {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Major",
    dataIndex: "major",
    key: "major",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Thao tác",
    key: "action",
    render: (_: unknown, record: Student) => (
      <Space>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        >
          Sửa
        </Button>

        <Popconfirm
          title="Xóa sinh viên"
          description={`Bạn có chắc muốn xóa ${record.name}?`}
          okText="Xóa"
          cancelText="Hủy"
          okButtonProps={{ danger: true }}
          onConfirm={() => handleDelete(record)}
        >
          <Button danger icon={<DeleteOutlined />}>
            Xóa
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];
        const handleEdit = (record: Student) => {
        console.log("Sửa sinh viên:", record);
        };

        const handleDelete = (record: Student) => {
        console.log("Xóa sinh viên:", record);
        };

  const data = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Văn Vẻ",
      email:"nguyenvanve@example.com",
      age: 20,
      major: "AI",
      score: 8.5,
    },
    {
      key: "2",
      id: 2,
      name: "Trần Văn Võ",
      email:"tranvanvo@example.com",
      age: 21,
      major: "IT",
      score: 9.0,
    },
    {
      key: "3",
      id: 3,
      name: "Lê Thị Cẩm Duyên",
      email:"lethicamduyen@example.com",
      age: 20,
      major: "Software Engineering",
      score: 8.0,
    },
    ];
    return (
        <div className = "flex h-screen w-full flex-row">
        <Sidebar/>

            <div className="flex-1 flex-col bg-gray-100">
                <div className="flex h-25 w-full bg-amber-200">
                 {/* HEADER */}
                    <header>
                        {/* KHUNG TÌM KIẾM */}
                        <div className="search-container mb-3 bg-amber-50 p-1 rounded-lg shadow-sm">
                            <div className="search-box">
                                <button type="button"> < SearchOutlined /></button>

                                <input
                                    type="text"
                                    id="searchStudent"
                                    placeholder="  Tìm kiếm sinh viên..."
                                />
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <UserOutlined className="text-2xl text-blue-600 mt-1" />
      
                            <div className="flex flex-col">

                                {/* Tiêu đề */}
                                <h1 className="text-xl font-bold text-gray-800">
                                    Quản lý sinh viên
                                </h1>

                                <p className="text-sm text-gray-500">
                                    Thêm, sửa, xóa và quản lý danh sách sinh viên
                                </p>
                                </div>
                            </div>
                    </header>

                </div>
                     {/* THÊM SINH VIÊN */}
                        <div className="bg-white m-4 p-5 rounded-lg shadow-sm">

                            <h2 className="font-semibold text-gray-800 mb-4">
                            <PlusOutlined className="mr-2 text-blue-600" />
                            Thêm sinh viên mới
                            </h2>

                            <div className="grid grid-cols-3 gap-5">

                            {/* Họ tên */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                Họ tên <span className="text-red-500">*</span>
                                </label>

                                <Input
                                placeholder="Nhập họ tên"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                Email <span className="text-red-500">*</span>
                                </label>

                                <Input
                                placeholder="Nhập email"
                                />
                            </div>


                            {/* Tuổi */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                Tuổi <span className="text-red-500">*</span>
                                </label>

                                <Input
                                type="number"
                                placeholder="Nhập tuổi"
                                />
                            </div>


                            {/* Chuyên ngành */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                Chuyên ngành <span className="text-red-500">*</span>
                                </label>

                                <Select
                                className="w-full"
                                placeholder="Chọn chuyên ngành"
                                options={[
                                    {
                                    value: "AI",
                                    label: "AI",
                                    },
                                    {
                                    value: "IT",
                                    label: "IT",
                                    },
                                    {
                                    value: "software-engineering",
                                    label: "Software Engineering",
                                    },
                                ]}
                                />
                            </div>

                            </div>


                            {/* BUTTON */}
                            <div className="flex gap-3 mt-5">

                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                            >
                                Lưu sinh viên
                            </Button>

                            <Button
                                icon={<ReloadOutlined />}
                            >
                                Đặt lại
                            </Button>

                            </div>

                        </div>


                <Table columns={columns} dataSource={data} bordered />
            </div>
        </div>
    );
};

export default StudentPage;