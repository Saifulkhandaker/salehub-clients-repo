import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import slider1 from '../assets/image/blog-1_540x.png'
import slider2 from '../assets/image/blog-2_540x.png'
import slider3 from '../assets/image/blog-3_540x.png'


const AllProducts = () => {

    const allProducts = useLoaderData()


    return (
        <div className="w-11/12 mx-auto space-y-5 mb-10">
           {/* slider start */}
           <div className="carousel h-[70vh] w-[60%] mt-10 ml-20 md:ml-36 lg:ml-64">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
           {/* slider end */}
           <div className="text-center">
      <h1 className="text-3xl font-light">
        “There are no ugliest one, there are just the ones who <br /> don't know how to
        make them look good.” <br /> <span className="text-sm font-medium">___ SaleHub Fashion</span>
      </h1>
      <h1 className="text-left text-3xl font-medium italic mt-10">Collect Your Favourite Ones...</h1>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allProducts.map(product => <ProductCard
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;