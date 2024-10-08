// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(""); // To handle errors

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      // Save token to local storage or context
      localStorage.setItem("token", response.data.token);
      // Optionally handle redirection or state update
      // window.location.href = "/dashboard"; // Example: Redirect to dashboard
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError(error.response?.data?.error || "An error occurred during login");
    }
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
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-full flex items-center justify-center p-8">
          <div className="w-full flex space-x-4 bg-white rounded-lg shadow-md">
            <div className="flex-1">
              <img
                src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9qYXBhbmVzZV90b25rYXRzdV9yYW1lbl81NWYyMWEzYi1iMzI5LTQxOGEtYTJjOC0wOWE4MDc3MjJiNWRfMS5qcGc.jpg" // Replace with your banner image URL
                alt="Banner"
                className="object-cover w-full h-full rounded-l-lg" // Adjust the height if needed
              />
            </div>
            <div className="flex-1 p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">Welcome, customer! <br /> Please sign in</h2>
              {error && <p className="text-red-500 text-center">{error}</p>}
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
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-secondary flex items-center space-x-2 w-1/2" // Adjusted width
                  style={{ backgroundColor: "#DB4437" }}
                >
                  <FaGoogle className="text-white text-lg mr-2" />
                  <span>Google</span>
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="btn btn-secondary flex items-center space-x-2 w-1/2" // Adjusted width
                  style={{ backgroundColor: "#4267B2" }}
                >
                  <FaFacebook className="text-white text-lg mr-2" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
