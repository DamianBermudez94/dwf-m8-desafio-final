import React from "react";
import { Title } from "ui/title/Title";
import { FormAddPet } from "components/form-add-pet/form-add-pet";

export function ReportPetPage() {
   return (
      <section>
         <Title>Reportar mascota perdida</Title>
         <FormAddPet />
      </section>
   );
}