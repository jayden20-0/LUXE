import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Exclusive Shoes</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;