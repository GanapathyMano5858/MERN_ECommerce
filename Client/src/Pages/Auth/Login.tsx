import React from "react";
import { Link } from "react-router-dom";
import CommonForm from "../../components/Common/Form";
import { loginFormControls } from "../../Config";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = React.useState(initialState);

  function onSubmit() {}

  return (
    <>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your Account
          </h1>
          <p className="mt-2">
            Don't have an account{" "}
            <Link
              className="font-medium text-primary hover:underline"
              to={"/auth/register"}
            >
              Register
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default AuthLogin;
