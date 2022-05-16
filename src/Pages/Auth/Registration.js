import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  // Navigate
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Create User With Email and Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // Sign In With Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleRegistration = async (data) => {
    // Check White Space
    if (!/^\S*$/.test(data.password)) {
      setError("password", {
        type: "whitespace",
        message: "Your password must not contain Whitespaces",
      });
    }
    // Check at least One Uppercase
    else if (!/^(?=.*[A-Z]).*$/.test(data.password)) {
      setError("password", {
        type: "uppercase",
        message: "Your password must have at least one Uppercase Character",
      });
    }
    // Check at least One Lowercase
    else if (!/^(?=.*[a-z]).*$/.test(data.password)) {
      setError("password", {
        type: "lowercase",
        message: "Your password must have at least one Lowercase Character",
      });
    }
    // Check at least one digit
    else if (!/^(?=.*[0-9]).*$/.test(data.password)) {
      setError("password", {
        type: "digit",
        message: "Your password must contain at least one Digit",
      });
    }
    // Check at least one symbol
    else if (
      !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(data.password)
    ) {
      setError("password", {
        type: "symbol",
        message: "Your password must contain at least one Special Symbol",
      });
    }
    // Check Minimum 8 characters
    else if (!/^.{10,16}$/.test(data.password)) {
      setError("password", {
        type: "length",
        message: "Your password must be 10-16 Characters Long",
      });
    } else if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "match",
        message: "Please confirm your password",
      });
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      await console.log(data);
      reset();
    }
  };

  // Navigate
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, googleUser]);

  // Loading
  if (loading || googleLoading || updating) {
    return <Loading />;
  }

  // Error
  if (error) {
    console.log(error.message);
  }
  if (googleError) {
    console.log(googleError.message);
  }
  if (updateError) {
    console.log(updateError.message);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 drop-shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Registration</h2>

          {/* Form Start */}
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className=" flex flex-col gap-3"
          >
            {/* Name Input */}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Name</label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.name && "input-error"
                }`}
                {...register("name", {
                  required: "Please enter your name",
                  minLength: {
                    value: 6,
                    message: "Please enter at least 6 characters",
                  },
                })}
              />
              {/* Name Error Message */}
              {errors.name?.type === "required" && (
                <p className="text-danger text-left text-red-500 pt-2">
                  {errors.name.message}
                </p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Email</label>
              <input
                type="email"
                className={`input input-bordered w-full ${
                  errors.email && "input-error"
                }`}
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please provide a valid email",
                  },
                })}
              />
              {/* Email Error Message */}
              {errors.email?.type === "required" && (
                <p className="text-danger text-left text-red-500 pt-2">
                  {errors.email.message}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input*/}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Password</label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.password && "input-error"
                }`}
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
              {/* Password Error Message */}
              {errors.password?.type === "required" && (
                <p className="text-danger text-left text-red-500 pt-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "whitespace" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "uppercase" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "lowercase" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "digit" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "symbol" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "length" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.password.message}
                </p>
              )}
              <span className="label-text-alt text-left cursor-pointer py-1">
                Forget Password?
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="form-control min-w-[350px]">
              <label className="text-left pb-1">Confirm Password</label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.confirmPassword && "input-error"
                }`}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword?.type === "match" && (
                <p className="text-danger text-left text-red-500 py-2">
                  {errors.confirmPassword.message}
                </p>
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
          {/* Form End */}

          <p>
            New to Doctors Portal?{" "}
            <Link to="/login" className="text-secondary">
              Create new account
            </Link>
          </p>

          {/* Divider */}
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>

          {/* Google Button */}
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

export default Registration;
