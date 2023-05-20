import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;

    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const orders = {
      customerName: name,
      email,
      price,
      rating,
      quantity,
      subCategory,
      description,
      photo,
    };
    console.log(orders);

    fetch("http://localhost:5000/mytoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>hello</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="title"
              defaultValue={name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="sellername"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="photoURL"
              name="photo"
              placeholder="photoURL"
              defaultValue={user?.photoURL}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="price"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availabe Quantity</span>
            </label>
            <input
              type="quantity"
              name="quantity"
              placeholder="quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="text-center mt-5">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
