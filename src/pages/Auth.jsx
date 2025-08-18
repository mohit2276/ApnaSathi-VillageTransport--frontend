
import React, { useState } from "react";
import b1 from "../assets/b1.mp4"; // import your video

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={b1} type="video/mp4" />
      </video>

      {/* Glassmorphic Form Container */}
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-black-600 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username / Mobile No"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-200 mt-4">
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-green-400 font-semibold hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          /* Signup Form */
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />

            {!showOtp ? (
              <button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
                onClick={() => setShowOtp(true)}
              >
                Verify Mobile
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
                >
                  Verify OTP
                </button>
              </>
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black placeholder-gray-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-200 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-400 font-semibold hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
