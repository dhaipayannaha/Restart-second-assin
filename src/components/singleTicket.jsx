const SingleTicket = ({ ticket, onSelect }) => {
    return (
        <div className="group" onClick={onSelect}>
            <div key={ticket.id} className="card bg-[#FFFFFF] shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-[#B9F8CF] cursor-pointer">
                <div className="card-body">
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-[18px] font-medium text-[#001931]">{ticket.title}</h2>
                        <span className={`badge h-auto py-2 px-[12px] gap-2 border-none font-medium text-[16px] rounded-full ${ticket.priority === 'Critical' ? 'badge-error' : 'bg-[#B9F8CF] text-[#0B5E06]'}`}>
                            <p className={`w-[16px] h-[16px] rounded-full ${ticket.priority === 'Critical' ? 'bg-[#991b1b]' : 'bg-[#0B5E06]'}`}></p>
                            {ticket.priority}
                        </span>
                    </div>
                    <p className="text-[#627382] text-[16px] line-clamp-2 h-[48px] overflow-hidden">{ticket.description}</p>
                    <div className="flex justify-between mt-auto">

                        <div className="flex gap-2">
                            <p className="text-[#627382] text-[14px] font-medium">{ticket.id}</p>
                            <p className={`text-[14px] font-medium ${ticket.priority === 'Critical' ? 'text-[#991b1b]' : 'text-[#0B5E06]'}`}>{ticket.priority}</p>

                        </div>
                        <div className="flex gap-2">
                            <p className="text-[#001931] text-[14px] font-medium">{ticket.customer}</p>
                            <p className="text-[#627382] text-[14px] ">{ticket.createdAt.split('T')[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTicket;