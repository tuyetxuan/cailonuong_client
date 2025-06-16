import CardItem from "@components/CardProduct/cardItem.jsx";
import { Icon } from "@iconify/react";
import { Breadcrumb, List, Pagination, Tag } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";

const mockProducts = Array.from({ length: 67 }, (_, index) => ({
  id: index + 1,
  name: `Sản phẩm ${index + 1}`,
}));

const MenuProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pageSize = 6;

  const items = [
    {
      href: "/",
      title: <span className="text-xl">Home</span>,
    },
    {
      title: (
        <span className="text-xl font-medium text-orange-700">Menu bánh</span>
      ),
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = mockProducts.slice(startIndex, startIndex + pageSize);

  const categories = [
    { name: "Bánh Flan Gato", count: 6, key: "flan" },
    { name: "Bánh Kem Matcha", count: 4, key: "matcha" },
    { name: "Bánh Trung Thu", count: 8, key: "trung-thu" },
    { name: "Bánh Kem Trà Sữa", count: 10, key: "tra-sua" },
    { name: "Bánh Kem Socola", count: 12, key: "socola" },
    { name: "Bánh Kem Trái Cây", count: 15, key: "trai-cay" },
    { name: "Bánh Kem Bắp", count: 5, key: "bap" },
    { name: "Bánh Kem Tiramisu", count: 7, key: "tiramisu" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Danh mục sản phẩm - Tiệm bánh kem - bánh sinh nhật chất lượng cao, đẹp
          mắt tại HCM
        </title>
      </Helmet>
      <main className="mt-[25px] mb-[25px] w-full p-0">
        <div className="max-w-container mx-auto mb-3 flex flex-col">
          <Breadcrumb
            separator={<Icon icon="mdi:menu-right" className="text-3xl" />}
            items={items}
          />
        </div>

        <div className="max-w-container mx-auto flex flex-col text-justify text-base leading-relaxed text-gray-800">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="w-full md:w-1/4">
              <List
                size="large"
                header={
                  <div className="flex items-center gap-2 font-bold">
                    <Icon
                      icon="material-symbols:menu"
                      className="text text-3xl"
                    />
                    Danh mục sản phẩm
                  </div>
                }
                bordered
                dataSource={categories}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => setSelectedCategory(item.key)}
                    className={`flex cursor-pointer items-center justify-start gap-2 ${selectedCategory === item.key ? "bg-bg-primary text-bg-white" : ""} hover:bg-bg-primary hover:text-bg-white transition-all duration-200 ease-in-out`}
                  >
                    <span>{item.name}</span>
                    <Tag color="#DD9932" style={{ borderRadius: "10px" }}>
                      {item.count} sản phẩm
                    </Tag>
                  </List.Item>
                )}
              />
            </div>

            <div className="w-full md:w-3/4">
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {currentItems.map((product) => (
                  <CardItem key={product.id} data={product} />
                ))}
              </div>
              <div className="flex justify-center">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={mockProducts.length}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuProduct;
