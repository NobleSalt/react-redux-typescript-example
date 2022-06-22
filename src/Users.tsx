import { usersSelector } from "./user";
import { useSelector } from "react-redux";

export default function Users() {
  const users = useSelector(usersSelector);
  return (
    <ul>
      {users.map((i) => (
        <li key={i.id}>{`Name: ${i.name} Age: ${i.age} Email: ${i.email}`}</li>
      ))}
    </ul>
  );
}
