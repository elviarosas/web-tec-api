import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TIPOUSUARIO = [
  { id: 1, descripcion: "Administrador" },
  { id: 2, descripcion: "Supervisor" },
];

const CreateUserForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [planta, setPlanta] = useState("");
  const [tipousuario, setTipoUsuario] = useState("");
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");
  const [respPost, setRespPost] = useState("");

  useEffect(() => {
    //postUser();
  }, []);

  const postUser = () => {
    const url = `http://localhost:3005/users/add`;
    const data = {
      email: `${email}`,
      nombre: `${nombre}`,
      password: `${password}`,
      planta: `${planta}`,
      tipoUsuario: `${tipousuario}`,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((respPost) => {
        setRespPost(respPost);
        console.log(respPost.user.id);
        alert(`Alta de Usuario exitosa con id ${respPost.user.insertId}`);
        setExito(true);
        navigate("/usuarios");
      })
      .catch((err) => {
        setError(err);
        setExito(false);
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postUser();
        }}
      >
        <label htmlFor="email">
          <input
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="nombre">
          <input
            id="nombre"
            value={nombre}
            placeholder="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label htmlFor="planta">
          <input
            id="planta"
            value={planta}
            placeholder="planta"
            onChange={(e) => setPlanta(e.target.value)}
          />
        </label>
        <label htmlFor="tipousuario">
          Tipo Usuario:
          <select
            id="tipousuario"
            value={tipousuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
            onBlur={(e) => e.target.value}
          >
            <option />
            {TIPOUSUARIO.map(({ id, descripcion }) => {
              return (
                <option key={id} value={id}>
                  {" "}
                  {descripcion}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
