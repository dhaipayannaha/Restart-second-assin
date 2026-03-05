const Header = () => {
    const navOptions = (
        <>
            <li><a className="hover:text-primary transition-colors">Dashboard</a></li>
            <li><a className="hover:text-primary transition-colors">All Tickets</a></li>
            <li><a className="hover:text-primary transition-colors">Analytics</a></li>
        </>
    );

    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-[100]">
            <div className="navbar max-w-[1416px] mx-auto px-6 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-[22px] font-bold text-[#001931] tracking-tight">CS — Ticket System</span>
                    </a>
                </div>
                <div className="navbar-end gap-2 sm:gap-6">
                    <ul className="menu menu-horizontal px-1 gap-4 font-medium text-[#627382] hidden lg:flex">
                        {navOptions}
                    </ul>
                    <button className="btn btn-primary rounded-full px-4 sm:px-8 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        <span className="hidden sm:inline ">+ New Ticket</span>
                        <span className="sm:hidden text-xl">+</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
