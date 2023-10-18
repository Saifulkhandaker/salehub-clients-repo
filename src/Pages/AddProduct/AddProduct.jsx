

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {image, productName, brandName, type, price, description, rating};
        console.log(newProduct); 

        // send date to the server
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-[#F0E8E2] w-[75%] mx-auto my-10">
        <div className="hero-content flex-col">
          <div className="text-center w-[75%] mx-auto">
            <h1 className="text-4xl text-[#374151] font-bold">
              Add New Product
            </h1>
          </div>
          <div className="w-11/12 px-4 py-5 ">
            <form onSubmit={handleAddProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                {/* right side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
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
                    placeholder="Enter Brand Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter Product Type"
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
                    placeholder="Enter Product Price"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter Product Description"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rate Your Product"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-800 border-2 text-white">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddProduct;