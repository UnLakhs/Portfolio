const Nav = () => {
  return (
    <nav className="sticky top-0 h-screen py-6 pr-4 lg:py-8 w-52 overflow-auto no-scrollbar">
      <div className="flex gap-1 flex-col ml-6">
        <h4 className="font-semibold p-2 rounded-md text-lg">Sections</h4>
        <div className="flex flex-col text-lg gap-1">
          <a
            href="/"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Introduction
          </a>
          <a
            href="/AboutMe"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            About Me
          </a>
          <a
            href="/Projects"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Projects
          </a>
          <a
            href="/Skills"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Skills & tools
          </a>
          <a
            href="/Experience"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Experience
          </a>
          <a
            href="/Education"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Education
          </a>
          <a
            href="/Contact"
            className="hover:bg-gray-300 p-2 rounded-md transition duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
