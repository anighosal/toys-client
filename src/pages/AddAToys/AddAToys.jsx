import React, { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const AddAToys = () => {
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const title = form.title.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;

    const orders = {
      customerName: user?.displayName,
      email,
      price,
      rating,
      quantity,
      subCategory,
      description,
      photo,
      title,
    };

    fetch("https://toys-server-d02m4dv6g-anighosal.vercel.app/mytoys", {
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
        toast.success('Order confirmed successfully!');
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
      <form  onSubmit={handleBookService}>
     <div className="grid grid-cols-2 gap-3 border rounded-lg p-3">
     <div className="part-1">
     
           <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Seller Name</span>
            </label>
            <input
              type="text"
              name="customerName"
              defaultValue={user?.displayName}
              placeholder="name"
              className="border shadow-md rounded-md"
            />
          </div> 
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo</span>
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
              <span className="label-text text-white">Price</span>
            </label>
            <input type="price" name="price"  className="border shadow-md rounded-md" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Availabe Quantity</span>
            </label>
            <input
              type="quantity"
              name="quantity"
              placeholder="quantity"
              className="border shadow-md rounded-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>
            <input
              type="rating"
              name="rating"
              placeholder="rating"
              className="border shadow-md rounded-md"
            />
          </div>
          </div>
          <div className="part-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Sub-Category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              placeholder="subCategory"
              className="border shadow-md rounded-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="border shadow-md rounded-md"
            />
          </div>
       
        <div className="text-center">
        <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
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
            value="Confirm Order"
          />
        </div>
          </div>
     </div>
    
     
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddAToys;
