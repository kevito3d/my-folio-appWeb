import React from "react";

function InputForm({ tile, initialValue, width = "280px" }) {
  return (
    <div className="row-form" style={
      {
       
        width:  width,
      }
    }>
      <div className="col-form">
        <div className="form-group">
          <label htmlFor="name">{tile}</label>
          <input type="text" name="name" id="name" placeholder={tile} defaultValue = {initialValue}
           />
        </div>
      </div>
    </div>
  );
}

export default InputForm;
