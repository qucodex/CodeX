import { NavLink } from "react-router-dom"

type TNavLink = {
    name: string;
    path: string;
}

const navLinks: TNavLink[] = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/our-team" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" }
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? "text-cyan-500 font-semibold"
        : "text-white-700 hover:text-cyan-200 transition"

const Navbar = () => {
    return (
        <header className="">
            <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src="/codex_icon.png"
                        alt="CodeX Club logo"
                        className="w-12 h-12"
                    />
                    <h1 className="text-xl font-bold tracking-wide">
                        Code<span className="text-cyan-500">X</span> Club
                    </h1>
                </NavLink>

                {/* Nav Links */}
                <nav className="flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={linkClass}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </header>
    )
}

export default Navbar
