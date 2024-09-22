import React from "react";
import { Link } from "react-router-dom";
import CommonForm from "../../components/Common/Form";
import { registerFormControls } from "../../Config";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = React.useState(initialState);

  function onSubmit() {}

  return (
    <>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create New Account
          </h1>
          <p className="mt-2">
            Already have an account{" "}
            <Link
              className="font-medium text-primary hover:underline"
              to={"/auth/login"}
            >
              Login
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default AuthRegister;
