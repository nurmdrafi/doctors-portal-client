import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

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
    // Create user with email and password
    /*
    createUserWithEmailAndPassword(data.email, data.password).then(() => {
       // JWT
          axios
            .post("https://ebike-warehouse.herokuapp.com/login", {
              email: data.email,
            })
            .then(({ data }) => {
              localStorage.setItem("accessToken", data.accessToken);
              setToken(data.accessToken);
            }); 

      // reset input field
      reset();
    });
    */
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
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-left">Email</label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="work@example.com"
                className={`input border-2 border-slate-300 min-w-[350px] ${
                  errors.email && "border-red-500"
                }`}
              />
              {/* border-slate-400 */}
              {/* Error Message */}
              {errors.email?.type === "required" && (
                <p className="text-danger">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-left">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className={`input border-2 border-slate-300 min-w-[350px] ${
                  errors.password && "border-red-500"
                }`}
              />

              {/* Error Message */}
              {errors.password?.type === "required" && (
                <p className="text-danger">Password is required</p>
              )}
              {errors.password?.type === "validate" && (
                <p className="text-danger">errors.password.message</p>
              )}
            </div>
          <button className="btn btn-active btn-accent uppercase min-w-[350px]">Login</button>
          </form>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <button className="btn btn-outline uppercase min-w-[350px]" onClick={() => signInWithGoogle()}>Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
