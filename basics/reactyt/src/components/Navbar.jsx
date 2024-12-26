

const Navbar = () => {
    return (
        <div>
            <nav className="flex py-5 px-10 items-center justify-between">
        <h2 className="text-xl font-bold">Coding</h2>
        <div className="flex gap-8 items-center">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="#account">Account</a>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
