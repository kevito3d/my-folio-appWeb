import React from "react";
import "../css/ContactMe.css";

function ContactMe() {
  return (
    <div className="container">
        <div className="contactMe__container">
          <div className="contactMe__container__title">
            
                <span>Contáctame</span>
          </div>
          <div className="contactMe__container__form">
            <form>
              <div className="contactMe__container__form__input">
                <input type="email" placeholder="Correo" />
              </div>
              <div className="contactMe__container__form__input">
                <input type="text" placeholder="Asunto" />
              </div>
              <div className="contactMe__container__form__input">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div className="contactMe__container__form__input">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default ContactMe;
