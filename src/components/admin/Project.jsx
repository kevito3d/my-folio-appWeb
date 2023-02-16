import { useState } from "react";
import Spacer from "../Spacer";
import InputForm from "./InputForm";

import styles from "../../css/ProjectAdmin.module.css";

console.log(styles);

export const Project = ({ name, description, techs }) => {
  const [mysTechs, setmysTechs] = useState(techs);

  const [newState, setNewState] = useState("");

  const [images, setImages] = useState([]);

  const handleAddTech = () => {
    console.log(newState);
    if (newState === "") return;
    setmysTechs([newState, ...mysTechs]);
    setNewState("");
  };

  const handleDeleteTech = (tech) => {
    console.log(tech);
    setmysTechs(mysTechs.filter((t) => t !== tech));
  };

  const handleUploadImage = (e) => {
    // if no es una imagen
    if (e.target.files.type !== "image/png") {
      console.log("no es una imagen");
      return;
    }
    if (e.target.files.length === 0) return;
    //remove repited images
    const newImages = [...e.target.files].filter(
      (image) => !images.includes(image)
    );
    setImages([...newImages]);
  };

  const handleDeleteImage = (image) => {
    console.log(image);
    setImages(images.filter((i) => i !== image));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <InputForm tile="Nombre" initialValue={name} width={"100%"} />
        <div className="row">
          <label htmlFor="name">Descripción</label>
          <textarea
            name="name"
            id="name"
            // width="100%"
            rows={7}
            cols={35}
            placeholder="Descripción"
            defaultValue={description}
          />
        </div>
        <Spacer height={10} />
        <div className="text">Tecnologias</div>
        <Spacer height={10} />
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   padding: "0 10px 5px 0px",
              // width: "260px",
              // height: "50px",
              // backgroundColor: "#1e1e1e",
            }}
          >
            <input
              style={{
                margin: "0",
              }}
              type="text"
              placeholder="agrega una nueva tecnología"
              value={newState}
              onChange={(e) => setNewState(e.target.value)}
            />
            <Spacer width={10} />
            <button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 10px",
                borderRadius: "5px",
              }}
              onClick={() => handleAddTech()}
            >
              +
            </button>
          </div>
        </form>

        <div className="">
          {mysTechs.map((tech) => {
            return (
              <div
                key={tech}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#1e1e1e",
                  padding: "0 0 0 10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                }}
              >
                <p>{tech}</p>
                <button
                  style={{
                    backgroundColor: "red",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleDeleteTech(tech)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.images}>
        {/* pick images and show en carrusel */}

        <label htmlFor="name">Imagenes</label>
        <input
          type="file"
          name="name"
          id="name"
          placeholder="Imagenes"
          //only acepte imagenes
          accept="image/*"
          //multiple images

          multiple
          onChange={(e) => {
            handleUploadImage(e);
          }}
        />
        <Spacer height={10} />
        <div className="text">preview images</div>
        <Spacer height={10} />
        <div className={styles.row}>
          {images.map((image) => {
            return (
              <div key={image.name} className={styles["col-3"]}>
                <img
                  className={styles.imgs}
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  // style={{
                  //     width: "100%",
                  //     height: "100%",
                  //     objectFit: "cover",
                  // }}
                />

                <div
                  onClick={() => handleDeleteImage(image)}
                  className={styles.close}
                >
                  x
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
