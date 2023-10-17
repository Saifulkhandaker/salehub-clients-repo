import banner from "../assets/image/banner.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} className=" w-full" />
     
      <div className="absolute text-[#000000] bottom-14 left-4 md:bottom-20 md:left-10  lg:bottom-44 lg:left-12 ">
        <p className=" font-medium text-xl  md:text-3xl italic mb-2 md:mb-4">New Collection</p>
        <h2 className="text-2xl md:text-5xl font-bold ">Find Your <br /> <span className="text-4xl md:text-6xl lg:text-9xl font-extrabold">Perfect</span></h2>
        <button className="mt-5 btn bg-[#FFFFFF] md:block hidden text-black font-bold md:px-10 rounded-sm lg:ml-2">Show The World </button>
      </div>
    </div>
  );
};

export default Banner;
