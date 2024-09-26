import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/Common/Form";
import { registerFormControls } from "../../Config";
import { registerUser } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { useToast } from "../../hooks/use-toast";

interface RegisterFormData {
  userName: string;
  email: string;
  password: string;
}

const initialState: RegisterFormData = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] =
    React.useState<RegisterFormData>(initialState);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }


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
