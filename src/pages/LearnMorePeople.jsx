import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const LearnMorePeople = () => {
  const { tipo, id } = useParams(); // <-- obtenemos tipo ("people") e id ("1")
  const [imagenUrl, setImagenUrl] = useState("https://picsum.photos/400/300");
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImagenUrl(`https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`);

        const response = await fetch(`https://www.swapi.tech/api/${tipo}/${id}`);
        const data = await response.json();

        if (data.result) {
          setDatos(data.result.properties);
        } else {
          setDatos({ name: "No encontrado" });
        }
      } catch (error) {
        console.error("Error:", error);
        setDatos({ name: "Error al obtener datos" });
      }
    };

    fetchData(); // se ejecuta automáticamente al entrar a la página
  }, [tipo, id]); // se vuelve a ejecutar si cambia el tipo o id

  return (
    <div className="container mt-5">
      <div className="d-flex gap-5 flex-column">
        <div className="container d-flex flex-row gap-5">
          <img src={imagenUrl} alt="imagen aleatoria" />
          <div className="container ">
            <h3 className="d-flex">{datos.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto in? Excepturi fugiat, assumenda,
              laboriosam atque fuga architecto est omnis illum voluptas amet ratione ab dolore labore sed, facilis tempora?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias recusandae quos, eius ab quidem voluptate tenetur reiciendis,
              error, ex veniam? Culpa ducimus dignissimos ea dolorem dicta consequatur alias voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto in? Excepturi fugiat, assumenda,
              laboriosam atque fuga architecto est omnis illum voluptas amet ratione ab dolore labore sed, facilis tempora?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias recusandae quos, eius ab quidem voluptate tenetur reiciendis,
              error, ex veniam? Culpa ducimus dignissimos ea dolorem dicta consequatur alias voluptatem.</p>
          </div>
        </div>
        <hr className="text-danger" />
        <div>
          {datos ? (
            <div>
              <ul className="d-flex justify-content-center flex-row gap-4 list-unstyled text-danger">
                {Object.entries(datos)
                  .filter(([key]) => key !== "name")
                  .map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.replaceAll("_", " ")}:</strong> {value}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Cargando información...</p>
          )}
        </div>
      </div>
    </div>
  );
};

