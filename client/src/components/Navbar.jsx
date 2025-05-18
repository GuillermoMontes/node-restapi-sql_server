import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 flex justify-between px-4 py-2">
      <Link
        to="https://github.com/GuillermoMontes/node-restapi-sql_server"
        target="_blank"
        className="flex"
      >
        <h1 className="mx-2 text-center ">Repositorio</h1>
        <div className="text-2xl"><FaGithub /></div>
      </Link>

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
