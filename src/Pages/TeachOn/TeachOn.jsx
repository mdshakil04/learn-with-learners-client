import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const TeachOn = () => {
  const handleAddTeacher = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const experience = form.experience.value;
    const category = form.category.value;
    const image = form.image.value;
    const newTeacher = { name, title, experience, category, image };
    console.log(newTeacher);
    // send data to the server
    // fetch('https://tech-connect-pro-server-jo1olxand-shakils-projects-08aa60f0.vercel.app/product', {
    //   method: 'POST',
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(newTeacher)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   if(data.insertedId){
    //     Swal.fire(
    //       'Product Added Successfully!',
    //       'Add another Product?',
    //       'success'
    //     )
    //   }
    // })
  };
  return (
    <div className=" container mx-auto pt-24">
        <SectionTitle
            heading={'Join as a Teacher'}
        ></SectionTitle>
      <div className=" flex items-center">
        <div className=" w-1/2">
          <div className=" container bg-[#3caef0ea] mx-auto p-8 my-8">
            {/* onSubmit={handleAddProduct} */}
            <form onSubmit={handleAddTeacher} className="">
              <div className=" grid md:grid-cols-2  gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Title Area */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">Title</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Enter Title here"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* ------------------------ */}
                {/* Experience selection */}
                <div>
                  <label className="label">
                    <span className="label-text text-xl text-white">
                      Experience Level
                    </span>
                  </label>
                  <select
                    className="select select-info w-full "
                    name="experience"
                    type="text"
                  >
                    <option type="text" disabled value defaultValue>
                      Select Your Experience Level
                    </option>
                    <option type="text" value="Beginner">
                      Beginner
                    </option>
                    <option type="text" value="Intermediate">
                      Intermediate
                    </option>
                    <option type="text" value="Experienced">
                      Experienced
                    </option>
                  </select>
                </div>
                {/* ---------------------- */}
                {/* Category Selections */}
                <div>
                  <label className="label">
                    <span className="label-text text-xl text-white">
                      Category
                    </span>
                  </label>
                  <select
                    className="select select-info w-full "
                    name="category"
                    type="text"
                  >
                    <option type="text" value disabled defaultValue>
                      Select your Category
                    </option>
                    <option type="text" value="Web Development">
                      Web Development
                    </option>
                    <option type="text" value="Digital Marketing">
                      Digital Marketing
                    </option>
                    <option type="text" value="Video Editing">
                      Video Editing
                    </option>
                  </select>
                </div>
                {/* ----------------------------- */}
              </div>
              <div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-xl text-white">Image</span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="Enter Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <input
                  className=" text-xl font-bold btn border-2 border-slate-700 btn-info mt-4 w-full"
                  type="submit"
                  value="Submit Now"
                />
              </div>
            </form>
          </div>
        </div>
        {/* Form Image */}
        <div className="h-full w-1/2">
          <img
            className=" w-full "
            src="https://i.ibb.co/5hDM5mX/3d-rendering-website-hosting-concept.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeachOn;
