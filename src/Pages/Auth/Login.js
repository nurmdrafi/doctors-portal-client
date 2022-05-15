import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  // Create User With Email And Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Sign In With Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // React Hook Form
  const onSubmit = (data) => {
    // Email Validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      setError("email", {
        type: "validate",
        message: "Please provide a valid email.",
      });
    }
    // Password Validation
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        data.password
      )
    ) {
      setError("password", {
        type: "validate",
        message:
          "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.",
      });
    }

    // Confirm Password
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "match",
        message: "Password did not match.",
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 drop-shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
          >
            {/* Email Input */}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Email</label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="work@example.com"
                className={`input border-2 border-slate-300 w-full ${
                  errors.email && "border-red-500"
                }`}
              />
              {/* Email Error Message */}
              {errors.email?.type === "required" && (
                <p className="text-danger">Email is required</p>
              )}
            </div>

            {/* Password Input */}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className={`input border-2 border-slate-300 w-full ${
                  errors.password && "border-red-500"
                }`}
              />

              {/* Password Error Message */}
              {errors.password?.type === "required" && (
                <p className="text-danger">Password is required</p>
              )}
              {errors.password?.type === "validate" && (
                <p className="text-danger">errors.password.message</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-active btn-accent uppercase min-w-[350px]"
            >
              Login
            </button>
          </form>
          <p>
            New to Doctors Portal?{" "}
            <Link to="/register" className="text-secondary">
              Create new account
            </Link>
          </p>
          {/* Divider */}
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <button
            className="btn btn-outline uppercase min-w-[350px]"
            onClick={() => signInWithGoogle()}
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
