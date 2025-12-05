import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center px-4">
      <h1 className="text-8xl font-extrabold text-cyan-500 drop-shadow-lg">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        The page you’re looking for slipped into another universe.
      </p>

      <NavLink
        to="/"
        className="mt-8 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-gray-900 transition"
      >
        Return to Base
      </NavLink>
    </div>
  )
}

export default NotFound
