import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Usuario from "./Usuario";

function ListaUsuarios() {
  const [idusuario, setIdusuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    requestUsuarios();
  }, []);

  async function requestUsuarios() {
    const res = await fetch(`http://localhost:3005/users/${idusuario}`);
    const json = await res.json();
    setUsuarios(json.users);
  }
  return (
    <div>
      <div>
        {" "}
        <Link to="/usuarios/createuserform">Nuevo Usuario</Link>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestUsuarios();
        }}
      >
        <label htmlFor="idusuario">
          <input
            id="idusuario"
            value={idusuario}
            placeholder="idUsuario"
            onChange={(e) => setIdusuario(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>

      {!usuarios && <div>No Data </div>}
      {usuarios.map((usuario) => (
        <Usuario
          email={usuario.email}
          nombre={usuario.nombre}
          planta={usuario.planta}
          key={usuario.id}
        />
      ))}
    </div>
  );
}
export default ListaUsuarios;
