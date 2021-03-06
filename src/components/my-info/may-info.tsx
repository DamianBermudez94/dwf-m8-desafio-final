import React, { useState } from "react";
import css from "./index.css";
import { Title, Text } from "ui/typography/title";
import { PrimaryButton } from "ui/buttons/buttons";
import { InputText, InputPassword} from "ui/Text/Text";
import { useMe, useUserEmail, routeValue } from "hooks";
import { getToken, signUp, auth, update } from "lib/api";
import { useNavigate } from "react-router-dom";

export default function MyInfo() {
  const [done, setDone] = useState("");
  const token = getToken();
  const { me } = useMe();
  const [email, setEmail] = useUserEmail();
  const navigate = useNavigate();
  const route = routeValue();
  const routeVal = route == "/profile/info" ? "/" : route;

  const handleInicio = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log("soy el name",name);
    const password = e.target.password.value;

    
    const passwordVerify = e.target["password-verify"].value;
    if (password && password == passwordVerify) {
      !token && (await signUp(email, password, name));
      !token && (await auth(email, password));
      name ? await update(name, password) : await update(password);
      setDone("Tus datos fueron guardados correctamente!");
      setTimeout(() => {
        navigate(routeVal);
      }, 5000);
    } else if (!password && !passwordVerify) {
      name && (await update(name));
      console.log("asd",name);
      
      setDone("Tus datos fueron guardados correctamente!");
      setTimeout(() => {
        navigate(routeVal);
      }, 1000);
    } else if ((password && !passwordVerify) || (passwordVerify && !password)) {
      setDone("Completa todos los campos!");
    } else if (password && passwordVerify) {
      setDone("Las contraseñas no coinciden!");
    }
  };

  return (
    <div className={css.root}>
      <Title>Mis Datos</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputText
          label="NOMBRE"
          name="name"
          placeholder={me?.fullname || ""}

        />
       
        <InputPassword required={!update} />
        <PrimaryButton type="submit">Guardar</PrimaryButton>
      </form>
      <div className={css.containerResponse}>
        <h3>{done}</h3>
      </div>
      <Text onClick={handleInicio}>Volver al Inicio</Text>
    </div>
  );
}