export const CardVehiculo = ({ name, modelo}) => (

    <div className="card mt-5" style={{ width: "18rem", minWidth: "18rem" }}>
        <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`}
            alt={name}
        />
        <div className="card-body">
            <h5 className="card-title mb-1">{name}</h5>
            <p className="mb-0">Model: {modelo}</p>
            <div className="d-flex flex-row">
                <button className="btn btn-primary mt-5">Learn More!</button>
                <button className="btn btn-warning mt-5 ms-auto">♡</button>
            </div>
        </div>
    </div>
);