import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ onSet }) => {
    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue.token));
    });
  };

export const userAtom = atom({
  key: "user",
  default: {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    image: null,
    email: null,
    token: localStorage.getItem("testToken"),
  },
  effects: [localStorageEffect("testToken")],
});
