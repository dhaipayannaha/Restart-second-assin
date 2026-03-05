import { useQuery } from "@tanstack/react-query";
import { fetchCardData } from "../Api/Api";
import SingleTicket from "./singleTicket";

const CustomerTicket = ({ onSelectTicket }) => {


    const { data, isLoading, error } = useQuery({
        queryKey: ['cardData'],
        queryFn: fetchCardData,
    })

    if (isLoading) return <div className="p-10 text-center">Loading ticket data...</div>;
    if (error) return <div className="p-10 text-red-500 text-center">Error: {error.message}</div>;

    console.log("Fetched Data:", data);

    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {data?.map(ticket => (
                    <SingleTicket
                        key={ticket.id}
                        ticket={ticket}
                        onSelect={() => onSelectTicket(ticket)}
                    />
                ))}
            </div>
        </div>
    );
};


export default CustomerTicket;