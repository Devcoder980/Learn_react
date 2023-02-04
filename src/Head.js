import { Link, Outlet } from "react-router-dom";
import A from './FilesAll';

const Head = () => {
    return (
        <>
            <nav className="flex flex-wrap gap-3 list-none border-2">
                {A.map((e, index) => (
                    <li className="flex-1 border-2 cursor-pointer p-2 bg-blue-900 text-white" key={index}><Link to={`/` + e.name.name}>{e.name.name}</Link></li>
                ))}
            </nav>

            <Outlet />
        </>
    )
}
export default Head;