const Footer = () => {
    return (
        <footer className="bg-[#000000] text-gray-300 pt-16 pb-8">
            <div className="max-w-[1416px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 border-b border-gray-800 pb-12 mb-8">
                {/* Column 1: Brand/About */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-xl font-bold tracking-tight">CS — Ticket System</h2>
                    <p className="text-sm leading-relaxed text-gray-400">
                        The ultimate solution for streamlining support and managing customer expectations with efficiency and style.
                    </p>
                </div>

                {/* Column 2: Solutions */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-xs tracking-widest">Company</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a className="hover:text-primary transition-colors cursor-pointer">About Us</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Our Mission</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Contact Saled</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                

                {/* Column 4: Company */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-xs tracking-widest">Services</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Products & Services</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Customer Stories</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Download Apps</a></li>
                    </ul>
                </div>

                {/* Column 5: Support */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-xs tracking-widest">Information</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">Join Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-xs tracking-widest">Social Links</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a className="hover:text-primary transition-colors cursor-pointer">@CS — Ticket System</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">@CS — Ticket System</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">@CS — Ticket System</a></li>
                        <li><a className="hover:text-primary transition-colors cursor-pointer">support@cst.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1416px] mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500">
                <p>© 2026 TicketMaster. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
