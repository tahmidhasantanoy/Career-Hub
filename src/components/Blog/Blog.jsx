import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-52">
        <h3 className="text-4xl font-semibold text-center mt-24 mb-64 mr-5">
          Blogs
        </h3>
        <div className="flex sm:flex-col md:flex-row lg:flex-row justify-center">
          <div className=" w-9/12 mb-12">
            <p>
              <span className="font-semibold text-2xl">
                When should you use context api?{" "}
              </span>{" "}
              <span className="text-slate-700">
                <br /> <strong>Ans :</strong> when we use some data to many
                accessible components at different nesting levels then we can
                use context api
              </span>
            </p>
            <br />
            <p>
              <span className="font-semibold text-2xl">
                What is custom hook in react?{" "}
              </span>
              <span className="text-slate-700">
                <br /> <strong>Ans : </strong>Custom hooks are reusable
                functions that developers can use to add special and unique
                functionality according to their need in the React applications.
              </span>
            </p>
            <br />
            <p>
              <span className="font-semibold text-2xl">
                what is useRef & useMemo hook?{" "}
              </span>{" "}
              <br />{" "}
              <span className="text-slate-700">
                <br /> <strong>Ans : </strong> <br /> <u>useRef</u> can be used
                to store a mutable value (one that can be changed without
                creating an entirely new value) that does not cause a re-render
                when updated. It can be used to access a DOM element directly.
              </span>
              <br /> <u>useMemo</u> allows to memoize larger functions.For that
              it can avoid calling same type of calculation on every render.
              <br />
            </p>
            <br />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
