import { AppState } from "@/store";
import { convertToVND } from "@/utils/helper";
import { useSelector } from "react-redux";
import ProductCartItem from "./ProductCartItem";

const ListProductCart = () => {
  const products = useSelector((state: AppState) => state.cart.products);

  const calcTotalPrice = () => {
    let totalPrice = 0;
    products.map((product) => (totalPrice += product.product.price * product.quantity));
    return totalPrice;
  };

  return (
    <>
      <div className="flex-1 flex flex-col mt-2 overflow-y-auto px-2 md:px-4">
        <div className="overflow-y-auto flex flex-col" id="style-2">
          {products.length <= 0 ? (
            <div className="text-center text-gray-400 mt-5">
              Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng.
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {products.map((product) => (
                <ProductCartItem key={product.product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-2">
        <div className="border-t w-full pt-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="font-bold">TỔNG TIỀN</div>
          </div>
          <div className="font-bold text-xl flex-1 text-end">{convertToVND(calcTotalPrice())}</div>
        </div>
      </div>
    </>
  );
};

export default ListProductCart;
