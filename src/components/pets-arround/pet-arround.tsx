import React, { useEffect, useState } from "react";
import { PetCardArround } from "ui/pets-card/pet-card";
import { ButtonSpinner } from "ui/buttons/buttons";
import { Text } from "ui/text/text";
import { useUserCoords } from "hooks/atom";
import { getPetsAround } from "lib/api";

const divPetsArroundStyles: any = {
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
};

export function ShowPetsArround() {
   const [cords, setCoords] = useUserCoords();
   const [pets, setPets] = useState([]);

   useEffect(() => {
      // cuando el usuario da sus cordenadas, se ejecuta getPets()
      alert(cords.currentLat && cords.currentLng && getPets());
      cords.currentLat && cords.currentLng && getPets();
   }, [cords]);

   const getPets = async () => {
      // trae las mascotas perdidas cerca de las coordenadas del usuario
      const petsAround: [object] = await getPetsAround(
         cords.currentLat,
         cords.currentLng
      );
      petsAround && setPets(petsAround);
   };

   const getCoords = () => {
      // obtiene las coordenadas del usuario
      navigator.geolocation.getCurrentPosition((position) => {
         setCoords({
            currentLat: position.coords.latitude,
            currentLng: position.coords.longitude,
         });
      });
   };

   return (
      <div>
         {pets ? (
            <div style={divPetsArroundStyles}>
               {pets.map((pet) => (
                  <PetCardArround
                     key={pet.objectID}
                     petId={pet.objectID}
                     image={pet.petimage}
                     petname={pet.petname}
                     ubication={pet.ubication}
                  />
               ))}
            </div>
         ) : (
            <Text>No hay mascotas perdidas cerca tuyo</Text>
         )}
         {pets[0] ? null : (
            <div style={{ textAlign: "center" }}>
               <Text>
                  Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
                  conocer tu ubicación.
               </Text>
               <ButtonSpinner color={"green"} handleClick={getCoords}>
                  Dar mi ubicación
               </ButtonSpinner>
            </div>
         )}
      </div>
   );
}