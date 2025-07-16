import { Link } from "react-router-dom"

export const MenuItems = ({ parentMenu, activeMenu }: any) => {
  return (
    <ul className="main-menu__list">
      <li className={parentMenu === 'Home' ? 'dropdown current-menu-item' : ''}>
        <Link to="/">Inicio</Link>
      </li>
      <li className={parentMenu === 'Pages' ? 'dropdown current-menu-item' : ''}>
        <Link to="/about">Nosotros</Link>
      </li>
      <li className={parentMenu === 'Services' ? 'dropdown current-menu-item' : ''}>
        <Link to="/services">Productos y Servicios</Link>
      </li>
      <li className={parentMenu === 'Event' ? 'dropdown current-menu-item' : ''}>
        <Link to="/gallery">Galeria</Link>
      </li>
      <li className={parentMenu === 'Contact' ? 'current-menu-item' : ''}>
        <Link to="/contact" className={activeMenu === '/contact' ? 'active-menu' : ''}>
          Contactanos
        </Link>
      </li>
    </ul>
  )
}