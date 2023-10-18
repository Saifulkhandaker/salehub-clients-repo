

const Brands = ({brand}) => {

    const {id, name, img} = brand;


    return (
        <div className="relative">
            <img className="hero-overlay inset-90 opacity-90 h-64 w-full" src={img} alt="" />
            <h3 className="text-xsm font-bold bg-white rounded-sm py-1  px-8 text-gray-800 absolute bottom-2 left-8 ">{name}</h3>
            
        </div>
    );
};

export default Brands;