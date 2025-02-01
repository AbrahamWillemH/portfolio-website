export default function Header() {
    return (
      <header className="navbar p-4 pt-6">
        <nav>
          <ul className="flex place-content-around">
            <li><a href="#about" className="text-grey p-4 rounded-full hover:text-white hover:bg-black duration-300 ease-in-out">About</a></li>
            <li><a href="#projects" className="text-grey p-4 rounded-full hover:text-white hover:bg-black duration-300 ease-in-out">Projects</a></li>
            <li><a href="#experiences" className="text-grey p-4 rounded-full hover:text-white hover:bg-black duration-300 ease-in-out">Experiences</a></li>
            <li><a href="#contact" className="text-grey p-4 rounded-full hover:text-white hover:bg-black duration-300 ease-in-out">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
