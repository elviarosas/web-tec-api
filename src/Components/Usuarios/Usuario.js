const Usuario = (props) => {
  return (
    <div>
      <h1>
        {" "}
        {props.email} {props.nombre}{" "}
      </h1>
    </div>
  );
};

export default Usuario;
