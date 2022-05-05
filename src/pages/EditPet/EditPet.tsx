import React from "react";
import { FormEditPet } from "components/form-edit-pet/form-edit-pet";
import { Title } from "ui/title/Title";

export function EditPetPage() {
   return (
      <section>
         <Title>Editar mascota perdida</Title>

         <FormEditPet />
      </section>
   );
}