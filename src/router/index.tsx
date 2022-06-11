import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "pages/Home/Home";
import Report from "pages/report-info/report-info";
import Login from "pages/Login/Login";
import Password from "components/auth/password";
import ProfileEdit from "pages/profile-edit/profile-edit";
import NewPetPage from "pages/pet-data/PetData";
import MyPetsPage from "pages/my-data/my-data";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login">
          <Route index element={<Login />} />
          <Route path="password" element={<Password />} />
        </Route>
        <Route path="profile/info" element={<ProfileEdit />} />
        <Route path="pets/new" element={<NewPetPage />} />
        <Route path="me/pets" element={<MyPetsPage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };