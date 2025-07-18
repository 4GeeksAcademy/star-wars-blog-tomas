import React, { useEffect, useState, useRef } from "react";
import { Card } from "./Card";

export const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null); // Referencia al contenedor

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/people");
                const data = await res.json();

                const detailedPeople = await Promise.all(
                    data.results.map(async (person) => {
                        const detailRes = await fetch(person.url);
                        const detailData = await detailRes.json();
                        return {
                            ...detailData.result.properties,
                            uid: person.uid,
                        };
                    })
                );
                setPeople(detailedPeople);
            } catch (error) {
                console.error("Error fetching people:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    if (loading) return <p>Loading planets...</p>;

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
                {people.map((person) => {
                    return (
                        <Card
                            key={person.uid}
                            uid={person.uid}
                            name={person.name}
                            gender={person.gender}
                            hairColor={person.hair_color}
                            eyeColor={person.eye_color}
                        />
                    );
                })}
            </div>
        </div>
    );
};
