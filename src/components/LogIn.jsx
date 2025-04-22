import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center rounded bg-gradient-to-r from-blue-100 to-gray-100 p-5">
        <div className="w-full max-w-md rounded-lg bg-[#23022E] p-8 shadow-lg">
          <h2 className="mb-2 text-center font-[poppins] text-2xl font-bold text-[#F8CE35]">
            Log in to your
            <span className="font-[Playwrite_HU] text-[#F8CE35]">Account</span>
          </h2>
          <p className="mb-6 text-center font-[poppins] text-gray-500">
            Don't have an account?
            <a className="ml-1 text-blue-400" href="#">
              Sign up
            </a>
          </p>
          <form>
            <input
              className="mb-4 w-full rounded border border-gray-300 p-3 font-[poppins] font-bold text-white"
              placeholder="Email or Phone Number"
              type="text"
            />
            <button
              className="flex w-full items-center justify-center rounded bg-[#F8CE35] p-3 font-[Playwrite_HU] font-bold text-[#23022E]"
              type="submit"
            >
              Log In
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <a
              className="mt-4 block text-center font-[poppins] text-blue-400"
              href="#"
            >
              Forgot password?
            </a>
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 font-[poppins] text-white">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button
              className="flex w-full items-center justify-center rounded border border-gray-300 p-3 font-[poppins] text-white"
              type="button"
            >
              <img
                alt="Google Logo"
                className="mr-2 h-5 w-5"
                src="https://placehold.co/20x20"
              />
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
