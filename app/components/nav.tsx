const Nav = () => {
    return (
        <nav className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8 w-52">
            <div className="flex gap-1 flex-col ml-6">
                <h4 className="font-semibold p-2 rounded-md text-lg">Sections</h4>
                <div className="flex flex-col gap-1">
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Introduction</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">About Me</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Projects</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Skills & tools</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Experience</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Education</span>
                    <span className="hover:bg-gray-300 p-2 rounded-md text-lg transition duration-200">Contact</span>
                </div>

            </div>
        </nav>
    )
}

export default Nav;