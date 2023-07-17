import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import validator from "validator";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const baseUrl = "http://localhost:3000/";
  const baseUrl = "https://todo-api-fawn.vercel.app/";
  //  SIGN UP FUNCTION
  const signUp = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      if (password.length >= 8) {
        axios.post(`${baseUrl}signup`, { email, password }).then((data) => {
          if (data.data === "notexist") {
            toast.success("Your account created successfully.");
            setEmail("");
            setPassword("");
          } else {
            toast.error("Email Already in use");
          }
        });
      } else {
        toast.error("Please Enter 8 character long password");
      }
    } else {
      toast.error("Please Enter a valid email");
    }
  };

  return (
    <div className="flex p-20 justify-center">
      <Toaster />
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              color="brown"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              color="brown"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Button color="brown" fullWidth onClick={signUp}>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className=" font-semibold text-brown-700 transition-colors hover:text-brown-900"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
