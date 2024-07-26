import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Login with Google');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
    console.log('Login with Facebook');
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Welcome, customer! <br /> Please sign in</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" style={{ backgroundColor: "#D84044" }}>
              Login
            </button>
          </form>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-secondary flex items-center space-x-2 w-full md:w-1/2"
              style={{ backgroundColor: "#DB4437" }}
            >
              <FaGoogle className="text-white text-lg" />
              <span>Google</span>
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn btn-secondary flex items-center space-x-2 w-full md:w-1/2"
              style={{ backgroundColor: "#4267B2" }}
            >
              <FaFacebook className="text-white text-lg" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
