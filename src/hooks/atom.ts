import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const queryState = atom({
  key: "query",
  default: "",
});


export const tokenState = atom({
  key: "token",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userData = atom({
  key: "userData",
  default: { email: "", name: "" },
  effects_UNSTABLE: [persistAtom],
});

export const petData = atom({
  key: "petData",
  default: { id: 0, name: "", imgURL: "", lat: 0, lng: 0 },
  effects_UNSTABLE: [persistAtom],
});