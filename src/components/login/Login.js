import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { public_url } from "../../constants/Api";
import FormError from "./FormError";

const schema = yup.object().shape({
  email: yup.string().required('Please enter an email adress').email('Please enter a valid email adress'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })


 async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(public_url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="email" placeholder="Email" {...register("email")} />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>

          <div>
            <input name="password" placeholder="Password" {...register("password")} />
            {errors.password && <FormError>{errors.password.message}</FormError>}
          </div>

          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  )

}

export default Login;