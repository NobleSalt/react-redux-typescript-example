import UserForm from "./UserForm";
import "./styles.css";
import { Provider } from "react-redux";
import Users from "./Users";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
        <Users />
      </div>
    </Provider>
  );
}
