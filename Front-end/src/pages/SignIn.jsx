import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  // const baseUrl = "http://localhost:3000/";
  const baseUrl = "https://todo-api-fawn.vercel.app/";

  // SIGN IN FUNCTION
  const signIn = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      if (password.length >= 8) {
        axios.post(`${baseUrl}signin`, { email, password }).then((data) => {
          if (data.data.email === email) {
            if (data.data.password === password) {
              localStorage.setItem("user", "test");
              nav("/");
              console.log("redirected");
              setEmail("");
              setPassword("");
            } else {
              toast.error("Entered Wrong Password.");
            }
          } else {
            toast.error("Entered Wrong Email.");
            toast.error("No account found on that Email");
          }
        });
      } else {
        toast.error(
          "Please Enter your 8 or more than 8 character long password"
        );
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
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to SignIn.
        </Typography>
        <form className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              color="brown"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              color="brown"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <Button color="brown" fullWidth onClick={signIn}>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{"  "}
            <Link to="/signup" className=" font-semibold text-brown-700 ">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
