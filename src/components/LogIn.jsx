import React from "react";

// LogIn component renders the login form UI
const LogIn = () => {
  return (
    <>
      {/* Centered container with gradient background */}
      <div className="flex h-full w-full items-center justify-center rounded bg-gradient-to-r from-blue-100 to-gray-100 p-5">
        {/* Login form card */}
        <div className="w-full max-w-md rounded-lg bg-[#23022E] p-8 shadow-lg">
          {/* Title */}
          <h2 className="mb-2 text-center font-[poppins] text-2xl font-bold text-[#F8CE35]">
            Log in to your
            <span className="font-[Playwrite_HU] text-[#F8CE35]">Account</span>
          </h2>
          {/* Sign up prompt */}
          <p className="mb-6 text-center font-[poppins] text-gray-500">
            Don't have an account?
            <a className="ml-1 text-blue-400" href="#">
              Sign up
            </a>
          </p>
          {/* Login form */}
          <form>
            {/* Email or phone input */}
            <input
              className="mb-4 w-full rounded border border-gray-300 p-3 font-[poppins] font-bold text-white"
              placeholder="Email or Phone Number"
              type="text"
            />
            {/* Log In button */}
            <button
              className="flex w-full items-center justify-center rounded bg-[#F8CE35] p-3 font-[Playwrite_HU] font-bold text-[#23022E]"
              type="submit"
            >
              Log In
              {/* Arrow icon */}
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            {/* Forgot password link */}
            <a
              className="mt-4 block text-center font-[poppins] text-blue-400"
              href="#"
            >
              Forgot password?
            </a>
            {/* Divider with "or" */}
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 font-[poppins] text-white">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            {/* Google sign-in button */}
            <button
              className="flex w-full items-center justify-center rounded border border-gray-300 p-3 font-[poppins] text-white"
              type="button"
            >
              {/* Google logo */}
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
