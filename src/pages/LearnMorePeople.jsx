import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LearnMorePeople = () => {
  const { tipo, id } = useParams(); // <-- obtenemos tipo ("people") e id ("1")
  const [imagenUrl, setImagenUrl] = useState("https://picsum.photos/400/300");
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImagenUrl(
          `https://picsum.photos/400/300?random=${Math.floor(
            Math.random() * 1000
          )}`
        );

        const response = await fetch(
          `https://www.swapi.tech/api/${tipo}/${id}`
        );

         if (!response.ok) {
          if (response.status === 429) {
            setDatos({ name: "Demasiadas solicitudes, espera un momento..." });
          } else {
            setDatos({ name: `Error ${response.status}` });
          }
          return; // salimos antes de intentar parsear
        }
        
        if (response.ok) {
          const data = await response.json();
          if (data.result) {
            setDatos(data.result.properties);
          } else {
            setDatos({ name: "No encontrado" });
          }
        }

        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeout);

  }, [tipo, id]); // se vuelve a ejecutar si cambia el tipo o id

  return (
    <div className="container mt-5">
      <div className="d-flex gap-5 flex-column">
        <div className="container d-flex flex-row gap-5">
          <img src={imagenUrl} alt="imagen aleatoria" />
          <div className="container ">
            <h3 className="d-flex">{datos?.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              architecto in? Excepturi fugiat, assumenda, laboriosam atque fuga
              architecto est omnis illum voluptas amet ratione ab dolore labore
              sed, facilis tempora?
            </p>
          </div>
        </div>
        <hr className="text-danger" />
        <div>
          {datos ? (
            <div className="d-flex justify-content-center">
              <div
                className="d-grid text-center w-100"
                style={{ gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}
              >
                {/* Fila de títulos */}
                {["Name", "Birth_year", "Gender", "Height", "Eye_color", "Hair_color"].map((prop) => (
                  <div key={prop} className="fw-bold text-danger">
                    {prop.replaceAll("_", " ")}
                  </div>
                ))}

                {/* Fila de valores */}
                {["name", "birth_year", "gender", "height", "eye_color", "hair_color"].map((prop) => (
                  <div className="text-danger" key={prop}>
                    {datos?.[prop] || "N/A"}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Cargando información...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnMorePeople;
