
import { useEffect, useState, useRef } from "react"
import { CardPlaneta } from "./CardPLaneta";

export const PLanetList = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/planets");
                const data = await res.json();

                const detailedPlanets = await Promise.all(
                    data.results.map(async (planet) => {
                        const detailRes = await fetch(planet.url);
                        const detailData = await detailRes.json();
                        return {
                            ...detailData.result.properties,
                            uid: planet.uid,
                        };
                    })
                );
                setPlanets(detailedPlanets);
            } catch (error) {
                console.error("Error fetching planets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, []);

    if (loading) return <p>Loading characters...</p>;

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
                {planets.map((planet) => {
                    return (
                        <CardPlaneta
                            key={planet.uid}
                            uid={planet.uid}
                            name={planet.name}
                            population={planet.population}
                            terrain={planet.terrain}  
                        />
                    );
                })}
            </div>
        </div>
    );
};
