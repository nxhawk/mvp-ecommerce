import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="text-xl md:text-3xl font-mono font-black text-stone-900"
      style={{
        fontFamily: "Dancing Script",
      }}
    >
      VTON
    </Link>
  );
};

export default Logo;
