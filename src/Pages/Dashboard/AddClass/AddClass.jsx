import React from 'react';
import Swal from "sweetalert2";
const AddClass = () => {
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const enrollment = form.enrollment.value;
    const donarImage = form.donarImage.value;
    const newClass = { name, title, price, description,enrollment, donarImage };
    console.log(newClass);
    // send data to the server
    fetch('http://localhost:5000/addedClass', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newClass)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire(
          'Class Added Successfully!',
          'Add another Class?',
          'success'
        )
      }
    })
  }
    return (
        <div className=" container bg-[#F3FCF8] mx-auto p-8 rounded-xl">
              <h2 className="text-4xl text-center font-mono">Add a Class</h2>
          <form onSubmit={handleAddClass}>
            <div className=" grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Instructor Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course Title</span>
                </label>
                <input
                  name='title'
                  type="text"
                  placeholder="Enter Course Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name='price'
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  name='description'
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Enrolment</span>
                </label>
                <input
                  name="enrollment"
                  type="text"
                  placeholder="Total Enroll"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="donarImage"
                  type="text"
                  placeholder="Enter Image url"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div>
                  <input className="btn font-mono mt-8 btn-outline btn-success w-full text-xl" type="submit" value="Add Class" />
            </div>
          </form>
        </div>
    );
};

export default AddClass;