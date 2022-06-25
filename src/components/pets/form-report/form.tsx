import React from "react";
import css from "./form.css";
import { Title } from "ui/typography/title";
import { PrimaryButton } from "ui/buttons/buttons";
import { InputText, Textarea } from "ui/Text/Text";
import { reportState, reportValue } from "hooks";
import { newReport } from "lib/api";

export default function FormReportPet() {
  const reportData = reportValue();
  const setReportData = reportState();

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const reporter_name = e.target.name.value;
    const phone_number = e.target.phone.value;
    const message = e.target.description.value;
    const data = { ...reportData, reporter_name, phone_number, message };
    console.log(data);

    setReportData(data);
    await newReport(data);
  };

  return (
    <div className={css.root}>
      <Title>Reportar info de {reportData.petName}</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputText label="TU NOMBRE" name="name"/>
        <InputText label="TU TELEFONO" name="phone"/>
        <Textarea label="DONDE LO VISTE?" name="description" required />
        <PrimaryButton type="submit">Enviar</PrimaryButton>
      </form>
    </div>
  );
}