import React from "react";
import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const send = () => {
    history.push("/weather");
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
  };
  return (
    <div class="home">
      <div class="homeText">
        <h2 class="h2_Home">You'r Welcome</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button class="button" onClick={send}>
          {" "}
          login
        </button>
      </div>
    </div>
  );
};
