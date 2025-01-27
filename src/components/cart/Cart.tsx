import React from "react";
import ListProductCart from "./ListProductCart";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/utils/cn";

const Cart = () => {
  const [showCart, setShowCart] = React.useState(false);
  const totalProducts = useSelector((state: AppState) => state.cart.totalProduct);

  const [storeCartCount, setStoreCartCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setStoreCartCount(totalProducts);
    }, 1000);
  }, [totalProducts]);

  return (
    <React.Fragment>
      <button onClick={() => setShowCart(true)} className="relative px-2 py-1">
        <ShoppingCart />
        <div
          className={cn(
            "absolute top-0 right-0 flex rounded-full aspect-square w-4 items-center justify-center bg-red-500 text-white",
            storeCartCount !== totalProducts && "animate-[ping_1s_ease-in-out]",
          )}
        >
          <span className="leading-none text-[9px]">{totalProducts}</span>
        </div>
      </button>

      {/* Sheet Cart */}
      <div
        className={`fixed z-50 top-0 right-0 w-full md:w-[30rem] bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col max-h-dvh min-h-dvh ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Giỏ hàng</h2>
          <button onClick={() => setShowCart(false)}>✖</button>
        </div>
        <ListProductCart />
      </div>

      {/* Overlay (nền tối khi mở cart) */}
      {showCart && <div className="z-30 fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>}
    </React.Fragment>
  );
};

export default Cart;
