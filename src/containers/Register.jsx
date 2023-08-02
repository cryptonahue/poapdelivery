import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { registerFirebase } from "../services/accounts";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, isSubmitError },
    reset,
  } = useForm();

  const [status, setStatus] = useState({
    open: false,
    type: "warning",
    title: "",
  });

  const onSubmit = async (data) => {
    await registerFirebase(data, setStatus);
  };

  return (
    <div className="Modal__container">
      <div className="logo_img_modal">
        <center>
          <img
            alt="Defi LATAM"
            width="176px"
            height="auto"
            src="/img/logo.svg"
          />
        </center>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Register__input">
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Nombre"
            className="input"
          />
        </div>
        <div className="email-input">
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="E-mail"
            className="input"
          />
        </div>
        <div className="pass-input">
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
            className="input"
          />
        </div>

        {/*<div className="Register__input">
          <input
            type="password"
            name="password_repeat"
            className="input"
            {...register("password_repeat")}
            placeholder="Repetir contraseña"
          />
        </div>*/}

        {isSubmitting && (
          <> 
            <LinearProgress color="secondary" />
            <br />
          </>
        )}

        {status.open && (
          <>
            <Alert severity={status.type}>{status.title}</Alert>
            <br />
          </>
        )}

        <div className="Register__input">
          <Button 						type="submit"
						variant="contained"
						color="secondary"
						fullWidth
						className="boton_home">
            Registrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
