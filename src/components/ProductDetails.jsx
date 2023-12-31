import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'


const ProductDetails = () => {

    const productDetail = useLoaderData();

    const { _id, brandName, description, image, price, productName, rating, type} = productDetail;

    const handleAddToCart = () => {
        const addedCartItemsArray = [];

        const cartItems = JSON.parse(localStorage.getItem('items'))

        if(!cartItems) {
            addedCartItemsArray.push(productDetail)
            localStorage.setItem('items',JSON.stringify(addedCartItemsArray))
            Swal.fire({
                title: 'Success!',
                text: 'Successfully added to the cart',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        else{
            addedCartItemsArray.push(...cartItems,productDetail)
            localStorage.setItem('items',JSON.stringify(addedCartItemsArray))
            Swal.fire({
                title: 'Success!',
                text: 'Successfully added to the cart',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }

    return (
        <div className="w-11/12 mx-auto py-10">
            <div>
            <div className="hero min-h-screen border border-gray-300  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{productName}</h1>
      <p className="py-6">{description}</p>
      <div className="flex gap-5 mb-8">
      <p className="text-lg font-medium">Brand: <span className="text-xl font-bold">{brandName}</span></p>
      <p className="text-lg font-medium">Price: <span className="text-xl font-bold">{price}</span> $</p>
      </div>
      <button onClick={handleAddToCart} className="btn bg-white text-black font-medium border border-gray-600 ">Add To Cart</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ProductDetails;