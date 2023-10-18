import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";

const AllBrands = () => {
  const brands = useLoaderData();

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-left ">
        <h1 className="text-3xl font-bold">Top Collection</h1>
        <p className="text-lg md:text-xl ">
          Visit Your Favourite Brands & Get Your Products...
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-5">
                {
                    brands.map(brand => <Brands
                    brand = {brand}
                    ></Brands> )
                }
            </div>
    </div>
  );
};

export default AllBrands;
