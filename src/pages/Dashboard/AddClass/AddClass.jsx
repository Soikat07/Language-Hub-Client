import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [hostedImg, setHostedImg] = useState('');
  const { user } = useContext(AuthContext);

  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const classImage = form.classImage.files[0];

    const classData = {
      instructor_name: user.email,
      instructor_email: user.displayName,
      course_name: className,
      image: hostedImg,
      price: price,
      available_seats: quantity,
    };
    // console.log(classData);

    // image hosting to imagebb
    const formData = new FormData();
    formData.append('key', import.meta.env.VITE_IMAGE_HOSTING_KEY);
    formData.append('image', classImage);

    fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageResp => {
        if (imageResp.success) {
          setHostedImg(imageResp.data.display_url);
          axiosSecure.post('/classes', classData).then(data => {
            console.log('after post', data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your class has been added',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    };
    
  return (
    <div>
      <form
        onSubmit={handleAddToy}
        className="p-10 lg:p-20 border my-5 bg-zinc-100"
      >
        <h2 className="text-xl lg:text-2xl my-5">
          Add Class by adding some data
        </h2>
        <div className="grid lg:grid-rows-3 lg:grid-flow-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              name="instructorName"
              type="text"
              className="input input-bordered"
              defaultValue={user?.displayName}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              name="instructorEmail"
              type="email"
              className="input input-bordered"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              name="classImage"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Class name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="$Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="Number"
              name="quantity"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control my-6">
          <input
            className="btn btn-block bg-cyan-600 border-none text-white"
            type="submit"
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;