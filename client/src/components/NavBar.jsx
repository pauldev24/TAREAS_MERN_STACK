import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-10 py-4 flex-nowrap">
      <Link to="/" className="text-white  font-bold">
        <h1>React y Mysql</h1>
      </Link>
      <ul className="flex gap-1">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Inicio</Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">Nueva Tarea</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
