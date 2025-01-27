import { products } from "@/constants/products";
import Product from "./Product";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-5">
          <h1 className="text-4xl font-bold">Get Inspired</h1>
          <p className="text-gray-600 mt-2">
            Looking for the perfect outfit for your next adventure, everyday wear, or just want to explore the latest
            trends?
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
