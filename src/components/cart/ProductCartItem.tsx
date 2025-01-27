import { AppDispatch } from "@/store";
import { addToCart, removeFromCart } from "@/store/cart";
import { IProductCart } from "@/store/cart/type";
import { convertToVND } from "@/utils/helper";
import { useDispatch } from "react-redux";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import Confirm from "../Confirm";

type Props = {
  product: IProductCart;
};

const ProductCartItem = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeProductCount = (quantity: number) => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      }),
    );
  };

  const handleDeleteProduct = () => {
    dispatch(removeFromCart(product.product.id));
  };

  return (
    <div className="w-full flex gap-4 border-b-2 border-dashed pb-2">
      <img src={product.product.image} width={80} height={80} alt="product image" />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start py-1">
          <div className="text-sm font-[600] line-clamp-2">{product.product.name}</div>
          <div className="w-fit">
            <Confirm onConfirm={handleDeleteProduct} message={product.product.name} image={product.product.image} />
          </div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className={cn(
                "focus:outline-red-500 p-1 rounded-full border border-red-500",
                product.quantity <= 1 && "opacity-50",
              )}
              onClick={() => handleChangeProductCount(-1)}
              disabled={product.quantity <= 1}
            >
              <Minus size={15} className="text-red-500" />
            </button>
            <div className="font-bold text-lg">{product.quantity}</div>
            <button
              type="button"
              className="focus:outline-red-500 p-1 rounded-full border border-red-500"
              onClick={() => handleChangeProductCount(1)}
            >
              <Plus size={15} className="text-red-500" />
            </button>
          </div>
          <div className="text-red-500 font-semibold">{convertToVND(product.product.price * product.quantity)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
