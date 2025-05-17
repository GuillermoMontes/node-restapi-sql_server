import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 flex justify-between px-5 py-2">
      <h1>React SQL server</h1>

      <ul className="flex">
        <li className="mx-4 hover:text-zinc-400">
          <Link to="/">Menu</Link>
        </li>
        <li className="mx-4 hover:text-zinc-400">
          <Link to="/new">Crear tarea</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
