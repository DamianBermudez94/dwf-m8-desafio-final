import React from "react";
import { MyPetsComp } from "components/my-pets/my-pets";
import { Title } from "ui/title/Title";

export function MyPetsPage() {
   return (
      <section>
         <Title>Mis mascotas reportadas</Title>
         <MyPetsComp />
      </section>
   );
}