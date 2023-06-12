import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedBack = () => {
  const id = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    const FeedBackNode = {
      feedback,
    };
    fetch(`https://summer-camp-server-ruby.vercel.app/manageClasses/${id.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(FeedBackNode),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Feedback sent to the instructor',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Send a Feedback to the Instructor</h1>
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:p-20 border my-5 bg-zinc-100"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">FeedBack</span>
          </label>
          <textarea
            cols="100"
            rows="10"
            placeholder="Write your feedback here___"
            name="feedback"
            className="input input-bordered h-1/2 p-4"
            required
          />
        </div>
        <div className="form-control my-6">
          <input
            className="btn w-1/2 bg-cyan-500 border-none hover:bg-cyan-700 text-white"
            type="submit"
            value="Send Feedback"
          />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
