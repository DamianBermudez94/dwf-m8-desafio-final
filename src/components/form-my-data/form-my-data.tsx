import React from "react";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/inputs";
import { MainButton } from "ui/buttons/main-button";
import { emailRegex, getTokenUser, singUp } from "lib/api";
import { useUserDataAtom } from "hooks/atom";

const formStyle: any = {
   display: "flex",
   alignItems: "center",
   marginBottom: "40px",
   flexDirection: "column",
};

export function FormMyData() {
   const navigate = useNavigate();
   const [userData, setUserData] = useUserDataAtom();

   const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
      // crea un nuevo usuario, o actualiza los sus datos
      e.preventDefault();
      const fullname: string = e.target.fullname.value;
      const email: string = e.target.email.value;
      const password: string = e.target.password.value;
      const passwordConfirm: string = e.target.passwordConfirm.value;

      if (!fullname || !email || !password) return alert("Ingrese todos los datos");
      if (!emailRegex.test(email)) return alert("Por favor ingrese un email válido");
      if (password !== passwordConfirm) return alert("Las contraseñas no coinciden");

      const user: string = await singUp({ fullname, email, password });
      const token: string = await getTokenUser(email, password);

      if (user && token) {
         alert(`Bienvenidx ${fullname}`);
         setUserData({ fullname, email, token });
         navigate("/");
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit} style={formStyle}>
            <MainInput
               label={"nombre"}
               name={"fullname"}
               defaultValue={userData.fullname}
            />
            <MainInput label={"email"} name={"email"} defaultValue={userData.email} />
            <MainInput label={"contraseña"} type={"password"} name={"password"} />
            <MainInput
               label={"confirmar contraseña"}
               type={"password"}
               name={"passwordConfirm"}
            />
            <MainButton>Guardar</MainButton>
         </form>
      </div>
   );
}