
import { useEffect, useState, useRef } from "react"
import { CardVehiculo } from "./CardVehiculo";

export const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/vehicles");
                const data = await res.json();

                const detailedVehicles = await Promise.all(
                    data.results.map(async (vehicle) => {
                        const detailRes = await fetch(vehicle.url);
                        const detailData = await detailRes.json();
                        return {
                            ...detailData.result.properties,
                            uid: vehicle.uid,
                        };
                    })
                );
                setVehicles(detailedVehicles);
            } catch (error) {
                console.error("Error fetching vehicles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    if (loading) return <p>Loading vehicles...</p>;

    const scroll = (direction) => {
        const container = carouselRef.current;
        const scrollAmount = 400;
        container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    return (

        <div className="position-relative">
            <button onClick={() => scroll("left")} className="btn btn-light position-absolute end-100 top-50 translate-middle-y">
                ◀
            </button>
            <button onClick={() => scroll("right")} className="btn btn-light position-absolute start-100 top-50 translate-middle-y">
                ▶
            </button>

            {/* Carrusel */}
            <div
                ref={carouselRef}
                className="d-flex overflow-auto gap-3 py-3 px-2"
                style={{ scrollBehavior: "smooth" }}
            >
                {vehicles.map((vehicle) => {
                    return (
                        <CardVehiculo
                            key={vehicle.uid}
                            uid={vehicle.uid}
                            name={vehicle.name}
                            model={vehicle.model} 
                        />
                    );
                })}
            </div>
        </div>
    );
};
