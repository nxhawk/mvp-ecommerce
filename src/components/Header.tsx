import Cart from "@/components/cart/Cart";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full p-2 md:px-8 flex justify-between items-center z-10 shadow">
      <Logo />
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
