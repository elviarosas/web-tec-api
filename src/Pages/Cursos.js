import React from 'react';

import { useState, useEffect } from "react";

function Cursos() {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:3005/users/`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
              setData(actualData);
              setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
              setLoading(false);
          });
      }, []);

  return (
    <div>
        <h1>Usuarios de la BD</h1>
    {loading && <div>A moment please...</div>}
    {error && (
      <div>{`There is a problem fetching the post data - ${error}`}</div>
    )}
    <ul>
      {data &&
        data.users.map(({ idUser, email }) => (
          <li key={idUser}>
            <h3>{email}</h3>
          </li>
        ))}
    </ul>
    
    </div>
  )
}

export default Cursos