import React from "react";
import { VerifyEmailComp } from "components/verify-mail/verifi-mail";
import { Title } from "ui/title/Title";

export function VerifyEmailPage() {
   return (
      <section>
         <Title>Ingresar</Title>
         <VerifyEmailComp />
      </section>
   );
}