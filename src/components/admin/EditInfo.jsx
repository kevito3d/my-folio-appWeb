import React from "react";
import Spacer from "../Spacer";
import InputForm from "./InputForm";

function EditInfo({ 
    user
} ) {
  return (
    <div className="container">
      <div className="col-12">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50px",
            backgroundColor: "#1e1e1e",
            color: "white",
            padding: "0 5px",
            borderRadius: "5px",
          }}
        >
          Editar Información
        </div>
        <Spacer height={10} />
        <InputForm tile="Nombre" initialValue={user.title_name} />
      </div>
      <div className="col-12">
        <InputForm tile="Email" initialValue={user.info_email} />

        <InputForm tile="Télefono" initialValue={user.info_phone} />
      </div>

      <div className="row">
        <label htmlFor="name">Descripción</label>
        <textarea
          name="name"
          id="name"
          rows={7}
          cols={35}
          placeholder="Descripción"
          defaultValue={user.description}
        />
      </div>
    </div>
  );
}

export default EditInfo;
