import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { RootState } from "./store";

export interface UserType {
  name: string;
  age: number;
  email: string;
  id: string;
}

export const initState: UserType[] = [
  {
    id: "",
    name: "",
    age: 0,
    email: ""
  }
];
const user: Slice<UserType[]> = createSlice({
  name: "user",
  initialState: [] as UserType[],
  reducers: {
    addUser(state, action: PayloadAction<UserType>) {
      state.push({ ...action.payload, id: uuid() });
    },
    updateUser(state, action: PayloadAction<UserType>) {
      const userIndex = state.findIndex((i) => i.id === action.payload.id);
      if (userIndex !== -1) {
        state[userIndex] = action.payload;
      }
    }
  }
});

export const { addUser, updateUser } = user.actions;
export const totalUser = (state: RootState) => state.user.length;
export const usersSelector = (state: RootState) => state.user;
export default user.reducer;
