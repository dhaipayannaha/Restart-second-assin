import { useState } from "react";
import Counter from "../components/Counter";
import CustomerTicket from "../components/CustomerTicket";
import Result from "../components/Result";

const Home = () => {
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [inProgressCount, setInProgressCount] = useState(0);

    const handleSelectTicket = (ticket) => {
        // Only add if it's not already in the list to avoid duplicates
        const alreadyExists = selectedTickets.find(t => t.id === ticket.id);

        if (!alreadyExists) {
            setSelectedTickets(prev => [...prev, ticket]);
            setInProgressCount(prev => prev + 1);
        }
    };

    return (
        <div>
            <div className="p-6 max-w-[1416px] mx-auto bg-[#F5F7FA]">
                <Counter inProgressCount={inProgressCount} />
            </div>
            <div className="p-6 max-w-[1416px] mx-auto bg-[#F5F7FA]">
                <h1 className="text-[24px] font-bold mb-4 text-[#001931]">Customer Tickets</h1>
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <CustomerTicket onSelectTicket={handleSelectTicket} />
                    </div>
                    <div className="col-span-1">
                        <Result tickets={selectedTickets} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
