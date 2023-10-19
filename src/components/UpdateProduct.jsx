import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, brandName, image, price, productName, rating, type } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const productName = form.productName.value;
    const brandName = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updateProduct = {
      image,
      productName,
      brandName,
      type,
      price,
      rating,
    };
    console.log(updateProduct);

    // send date to the server
    fetch(
      `https://salehub-server-3forepb7q-saifulkhandaker100course-gmailcom.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[#F0E8E2] w-[75%] mx-auto my-10">
        <div className="hero-content flex-col">
          <div className="text-center w-[75%] mx-auto">
            <h1 className="text-2xl text-[#374151] font-bold">
              Update Product : {productName}
            </h1>
          </div>
          <div className="w-11/12 px-4 py-5 ">
            <form onSubmit={handleUpdateProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                {/* right side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Img Url"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    defaultValue={productName}
                    placeholder="Product Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={brandName}
                    placeholder="Enter Brand Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* left side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="Enter Product Price"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Rate Your Product"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    placeholder="Enter Product Type"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-800 border-2 text-white">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
