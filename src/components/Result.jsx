const Result = ({ tickets }) => {
    if (tickets.length === 0) {
        return (
            <div className="card bg-white shadow-xl border border-dashed border-gray-300 h-full flex items-center justify-center p-10 min-h-[300px]">
                <div className="text-center">
                    <div className="text-gray-400 text-5xl mb-4 text-center mx-auto">📋</div>
                    <p className="text-[#627382] font-medium">Select a ticket to view details</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 h-full sticky top-24 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 custom-scrollbar">
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card bg-white shadow-xl border border-gray-100 flex flex-col shrink-0 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="card-body p-5">
                        <div className="border-b border-gray-100 pb-3 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{ticket.id}</span>
                            <h2 className="card-title text-[18px] font-bold text-[#001931] mt-0 leading-tight">{ticket.title}</h2>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <button className="w-full bg-primary text-white">Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Result;
