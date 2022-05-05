import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { HomePage } from "pages/home/Home";
import { VerifyEmailPage } from "pages/verifi-email/verifi-mail";
import { LoginPage } from "pages/login/Login";
import { MyDataPage } from "pages/MyData/MyData"
import { ReportInfoPage } from "pages/report-info/report-info";
import { MyPetsPage } from "pages/MyPets/MyPets";
import { EditPetPage } from "pages/EditPet/EditPet";
import { ReportPetPage } from "pages/PetData/PetData";

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-data" element={<MyDataPage />} />
            <Route path="/report-info" element={<ReportInfoPage />} />
            <Route path="/my-pets" element={<MyPetsPage />} />
            <Route path="/edit-pet" element={<EditPetPage />} />
            <Route path="/report-pet" element={<ReportPetPage />} />
         </Route>
      </Routes>
   );
}