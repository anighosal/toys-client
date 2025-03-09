import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";

  // Handle login with email & password
  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setError("Email and password are required.");
      toast.error("Email and password are required.");
      return;
    }

    try {
      const result = await signIn(email, password);
      console.log("User logged in:", result.user);
      toast.success("Login Successfully", { position: "top-right" });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  // Handle Google Sign-in
  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login:", result.user);
      toast.success("Logged in with Google!", { position: "top-right" });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login error:", error.message);
      setError("Google login failed. Please try again.");
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className="hero min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h2 className="text-center font-bold text-3xl">Login</h2>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="input input-bordered pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mt-2">
              Not registered?{" "}
              <Link className="text-red-600 font-bold" to="/auth/register">
                Create an account
              </Link>
            </p>

            <button
              className="btn btn-outline btn-secondary mt-4 flex items-center justify-center gap-2"
              onClick={handleGoogle}
            >
              <FaGoogle />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
