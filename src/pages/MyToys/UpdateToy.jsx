import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
 

  const handleUpdateService = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const name = form.seller.value; // Corrected the input name
    const description = form.description.value;

    const orders = {
      customerName: name,
      email,
      price,
      quantity,
      description,
      photo,
    };

    fetch("https://toys-client.vercel.app/mytoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Show success notification
      toast.success('Update confirmed successfully!');
    })
    .catch((error) => {
      console.error('Error confirming order:', error);
      // Show error notification
      toast.error('Failed to confirm order. Please try again.');
    });
   
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl text-white mt-5 mb-5">Add Your Choice: {user?.displayName}</h2>
      <form onSubmit={handleUpdateService}>
        <div className="grid grid-cols-2 border rounded-lg p-3 gap-4">
          <div className="part-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="sellername"
              className="border shadow-md rounded-md"
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
              className="border shadow-md rounded-md"
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
              className="border shadow-md rounded-md"
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
              className="border shadow-md rounded-md"
            />
          </div>
          </div>
          
          <div className="part-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="border shadow-md rounded-md "
            />
          </div>
          <div className="text-center mt-9">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="border shadow-md rounded-md  w-full h-full text-black"
            rows="4"
          ></textarea>
        </div>
        <div className="form-control mt-5">
        <input
            className="btn-block border shadow-md rounded-md bg-green-400 text-white cursor-pointer"
            type="submit"
            value=" Update Confirm"
          />
        </div>
        </div>
  
          </div>

      
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateToy;
