import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="bg-emerald-500">
            <nav className="flex py-5 px-10 items-center justify-between">
        <h2 className="text-2xl font-extrabold text-[#ff651d]">Coding</h2>
        <div className="flex gap-8 items-center">
          <Link className=" text-gray-900 font-semibold" to="/">Home</Link>
          <Link className=" text-gray-900 font-semibold" to="/about">About</Link>
          <Link className=" text-gray-900 font-semibold" to="/contact">Contact</Link>
          <Link className=" text-gray-900 font-semibold" to="/product">Product</Link>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
