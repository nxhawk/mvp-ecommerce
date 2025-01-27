import { AppDispatch } from "@/store";
import { addToCart } from "@/store/cart";
import { IProduct } from "@/types/product";
import { convertToVND } from "@/utils/helper";
import { useDispatch } from "react-redux";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
      }),
    );
  };

  return (
    <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
      <div>
        <div className="relative group overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-50 object-cover rounded-md"
            title={product.name}
          />
          <button
            className="bg-black text-white w-full py-2 uppercase absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ
          </button>
        </div>
        <h2 className="text-md font-semibold line-clamp-1">{product.name}</h2>
        <p className="text-gray-600">{convertToVND(product.price)}</p>
      </div>
    </div>
  );
};

export default Product;
