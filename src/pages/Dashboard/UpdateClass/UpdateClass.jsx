import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateClass = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  // console.log(loadedData);
  const { _id,course_name,price,available_seats,} = loadedData;

  const handleUpdateToy = event => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const classImage = form.classImage.files[0];
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
          const hostImg = imageResp.data.display_url;
          const classData = {
            instructor_name: user.displayName,
            instructor_email: user.email,
            course_name: className,
            image: hostImg,
            price: price,
            available_seats: quantity,
          };
          fetch(`http://localhost:5000/myClasses/${_id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(classData),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: 'Success!',
                  text: 'Class Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool',
                });
              }
            });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateToy}
        className="p-10 lg:p-20 border my-5 bg-zinc-100"
      >
        <h2 className="text-xl lg:text-2xl my-5">
          You can update Class by modify the data
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
              <span className="label-text">Class Image*</span>
            </label>
            <input
              required
              name="classImage"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name*</span>
            </label>
            <input
              defaultValue={course_name}
              type="text"
              name="className"
              placeholder="Class name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              defaultValue={price}
              type="number"
              placeholder="$Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats*</span>
            </label>
            <input
              defaultValue={available_seats}
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
            className="btn btn-block bg-cyan-500 hover:bg-cyan-700 border-none text-white"
            type="submit"
            value="Update Class"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;