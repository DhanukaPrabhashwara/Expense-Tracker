import React from 'react'
import AuthLayout from "../../components/layouts/AuthLayout"
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {}

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your credentials to log in
      </p>
      
      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="thomas@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Your password"
          type="password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">
          LOGIN
        </button>

        <p className="">
          Don't have an account?{""}
          <Link className="font-medium text-primary underline" to="/signup">
            SignUp
          </Link>
        </p>
      </form>
      </div>
    </AuthLayout>
  )
}

export default Login
