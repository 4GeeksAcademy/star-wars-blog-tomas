import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { PeopleList } from "../components/PeopleList.jsx";
import { PLanetList } from "../components/PlanetList.jsx";
import { VehicleList } from "../components/VehicleList.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()



	return (
		<div className="container mt-5">
			<span className="text-danger fs-1 fw-bold mt-5 d-block">Characters</span>
			<PeopleList />
			<span className="text-danger fs-1 fw-bold mt-5 d-block">Planets</span>
			<PLanetList />
			<span className="text-danger fs-1 fw-bold mt-5 d-block">Vehicles</span>
			<VehicleList />
		</div>
	);
}; 