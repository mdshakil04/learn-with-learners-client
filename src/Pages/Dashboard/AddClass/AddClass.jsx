import React from 'react';

const AddClass = () => {
    return (
        <div className=" container bg-[#F3FCF8] mx-auto p-8 rounded-xl">
              <h2 className="text-4xl text-center font-mono">Add a Class</h2>
          <form >
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
                  name="notes"
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