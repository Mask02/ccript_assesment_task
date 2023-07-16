import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function SignUp() {
  return (
    <div className="flex p-20 justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" color="brown" />
            <Input size="lg" label="Email" color="brown" required />
            <Input
              type="password"
              size="lg"
              label="Password"
              color="brown"
              required
            />
          </div>

          <Button color="brown" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="signin"
              className=" font-semibold text-brown-700 transition-colors hover:text-brown-900"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
      .
    </div>
  );
}
