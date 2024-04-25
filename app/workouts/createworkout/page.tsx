const page = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-10 text-3xl">Workoutplan</h1>
      </div>
      <div className="flex justify-between mt-20 h-full">
        <div className="w-1/2 text-center">
          <h2>Your exercises</h2>
          <div>Exercises</div>
        </div>
        <div className="w-1/2 text-center flex flex-col bg-gray-100 ">
          <div className="flex-grow">
            <label className="input input-bordered flex items-center gap-2 w-1/3 m-auto">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div>
              <p>Benchpress</p>
              <input type="button" value="click" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
