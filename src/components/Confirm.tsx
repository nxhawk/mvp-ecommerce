import { Trash } from "lucide-react";
import React from "react";

type Props = {
  message?: string;
  image?: string;
  onConfirm: () => void;
};

const Confirm = ({ message, image, onConfirm }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Trash size={17} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-lg font-semibold mb-2">Xác nhận xóa</h2>
            <p className="text-gray-600 mb-4">{message || "Bạn có chắc muốn xóa không?"}</p>
            <div className="flex items-center justify-center">
              {image && <img src={image} width={100} height={100} />}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                Hủy
              </button>
              <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirm;
