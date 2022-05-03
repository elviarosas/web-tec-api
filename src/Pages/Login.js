import { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3005/users/login";

      const response = await axios.post(
        url,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const token = response.data.token;
      const tipoUsuario = response.data.tipoUsuario;
      const id = response.data.id;
      const nombre = response.data.nombre;
      const planta = response.data.planta;
      setAuth({ id, email, password, tipoUsuario, token, nombre, planta });
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          {" "}
          Email:
          <input
            id="email"
            type="text"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label htmlFor="password">
          {" "}
          Password:
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <button>Log in </button>
      </form>
    </div>
  );
};

export default Login;
