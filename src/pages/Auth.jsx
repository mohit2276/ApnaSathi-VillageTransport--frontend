
import React, { useState, useEffect } from "react";
import b1 from "../assets/b1.mp4"; // import your video

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  // Signup form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict characters live
    if ((name === "firstName" || name === "lastName") && /[^a-zA-Z]/.test(value)) {
      return; // allow only letters
    }
    if (name === "mobile" && /[^0-9]/.test(value)) {
      return; // allow only digits
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Validate values whenever they change
  useEffect(() => {
    const newErrors = {};

    // First / Last
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Mobile (10 digits)
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Enter 10 digit number";
    }

    // Password strength (≥6, upper, lower, digit, special)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Include uppercase, lowercase, a digit, a special character; min 6 chars";
    }

    // Confirm match
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please re-enter password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const showError = (field) =>
    (touched[field] || submitAttempted) && errors[field] ? (
      <p className="text-red-500 text-sm">{errors[field]}</p>
    ) : null;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    // Mark all fields as touched on submit attempt
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      mobile: true,
      password: true,
      confirmPassword: true,
    });

    if (isFormValid) {
      // proceed with registration
      // ... your submit logic
    }
  };

  return (
    // ⬇️ Only change: center when login, keep previous top spacing for signup
    <div className={`relative min-h-screen flex justify-center ${isLogin ? "items-center" : "items-start pt-24 pb-10"}`}>
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
        <h2 className="text-2xl font-bold text-center text-black mb-6">
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
                onClick={() => {
                  setIsLogin(false);
                  // reset touched/errors visibility for a clean start
                  setTouched({});
                  setSubmitAttempted(false);
                }}
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          /* Signup Form */
          <form className="space-y-4" onSubmit={handleRegisterSubmit}>
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("firstName")}

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("lastName")}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email ID"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("email")}

            {/* Mobile */}
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mobile No"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="10"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("mobile")}

            {/* OTP flow */}
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

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("password")}

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Re-enter Password"
              className="w-full rounded-md px-4 py-2 bg-white/70 border border-white/40 text-black focus:outline-none"
            />
            {showError("confirmPassword")}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 rounded-md transition ${
                isFormValid
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-200 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-400 font-semibold hover:underline"
                onClick={() => {
                  setIsLogin(true);
                  setTouched({});
                  setSubmitAttempted(false);
                }}
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
