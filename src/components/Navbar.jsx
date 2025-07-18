import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 img-fluid"  style={{ height: "80px" }} src="https://imgs.search.brave.com/2Gxsv85nlhDhDwuf5u_KuAGlmMrqfGLT2yPm1NQB_UA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFmVmFhaTM3ZEwu/anBn"></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary dropdown-toggle">Favourites 
							<span className="bg-secondary text-white px-2  ms-2 rounded">X</span>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};