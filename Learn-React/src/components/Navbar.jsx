import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>خانه</Link>
      <Link to="/create">ایجاد پست</Link>
    </nav>
  );
}

export default Navbar;