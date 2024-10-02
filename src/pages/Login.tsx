import React from "react";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please enter your username and password</p>
      <form className="login-form">
        <div className="form-element">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Login;
