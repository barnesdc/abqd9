import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="brand">
                    {/* <img src="/abqd9-logo.png" alt="ABQD9 logo" /> */}
                    <span>ABQD9</span>
                </div>
                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/organizations">Organizations</NavLink>
                    <NavLink to="/calendar">Calendar</NavLink>
                    <NavLink to="/initiatives">Initiatives</NavLink>
                    <NavLink to="/leadership">Leadership</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}