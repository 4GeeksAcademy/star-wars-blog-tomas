import { Link } from "react-router-dom";

export const CardVehiculo = ({uid, name, model}) => (
    

    <div className="card mt-5" style={{ width: "18rem", minWidth: "18rem" }}>
        <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`}
            alt={name}
        />
        <div className="card-body">
            <h5 className="card-title mb-1">{name}</h5>
            <p className="mb-0">Model: {model}</p>
            <div className="d-flex flex-row">
                <Link to={`/learn-more/vehicles/${uid}`}>
                <button className="btn btn-primary mt-5" >Learn More!</button>
                </Link>
                <button className="btn btn-warning mt-5 ms-auto">♡</button>
            </div>
        </div>
    </div>
);