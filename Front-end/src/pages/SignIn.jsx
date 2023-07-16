import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  return (
    <div className="flex p-20 justify-center">
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
            />
          </div>

          <Button color="brown" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{"  "}
            <a href="/signup" className=" font-semibold text-brown-700 ">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
