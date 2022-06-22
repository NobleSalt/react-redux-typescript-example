import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, initState, UserType } from "./user";

export default function UserForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserType>(initState[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser(initState[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        required
        type="text"
        value={user.name}
        name="name"
      />
      <input
        onChange={handleChange}
        required
        type="number"
        value={user.age}
        name="age"
      />
      <input
        onChange={handleChange}
        required
        type="email"
        value={user.email}
        name="email"
      />

      <button type="submit">Signup</button>
    </form>
  );
}
