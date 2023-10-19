import { AiFillStar } from 'react-icons/ai';

const CartProduct = ({ item }) => {
  const {
    _id,
    brandName,
    description,
    image,
    price,
    productName,
    rating,
    type,
  } = item;
  return (
    <div>
      <div className="card border border-gray-200  rounded-lg bg-[#fffefe] shadow-xl">
        <figure>
          <img className="h-96 w-[70%] pt-5"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center items-center">
          <div className="flex gap-6">
          <h2 className="text-lg md:text-sm lg:text-lg">Name: <span className='lg:text-lg font-medium'>{productName}</span></h2>
          <h2 className="text-lg md:text-sm lg:text-lg">Brand: <span className='lg:text-lg font-medium'>{brandName}</span></h2>
          </div>
          <div className="flex gap-4">
          <p className="text-lg">Type: <span className='text-lg font-medium'>{type}</span></p>
            <p className="text-lg">Price: <span className='text-lg font-medium'>{price}$</span></p>
            <p className='flex text-center items-center gap-1'><span className='text-lg font-medium'>{rating}</span> <AiFillStar></AiFillStar></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
