import { navItems } from "../../utils/data";

const Nav = () => {

    return(
        <nav className="mainNav">
            <ul>
                { navItems.map( item=>(
                    <li className="navItem" key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;