import { fetchUser } from "../utils/fetchUserFromLocalStorage";

const userInfo = fetchUser();
// console.log(userInfo);

export const initialState = {
  user: userInfo,
};
