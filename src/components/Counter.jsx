import vector1 from '../../images/vector1.png';

const Counter = ({ inProgressCount }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* In-Progress Card */}
            <div className="relative overflow-hidden text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[67px] px-[75px] rounded-2xl shadow-lg border border-white/10 group">
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none bg-no-repeat bg-left-bottom mix-blend-overlay"
                    style={{ backgroundImage: `url(${vector1})`, backgroundSize: '60% auto' }}
                ></div>
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none bg-no-repeat bg-right-top mix-blend-overlay scale-x-[-1] scale-y-[-1]"
                    style={{ backgroundImage: `url(${vector1})`, backgroundSize: '60% auto' }}
                ></div>

                <h1 className="relative z-10 text-[24px] font-medium mb-2 text-white/80">In-Progress </h1>
                <h1 className="relative z-10 text-[60px] font-bold text-white leading-tight">{inProgressCount}</h1>
            </div>


            {/* Completed Card */}
            <div className="relative overflow-hidden text-center bg-gradient-to-r from-[#54CF68] to-[#00827A] py-[67px] px-[75px] rounded-2xl shadow-lg border border-white/10 group">
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none bg-no-repeat bg-left-top mix-blend-overlay"
                    style={{ backgroundImage: `url(${vector1})`, backgroundSize: '60% auto' }}
                ></div>
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none bg-no-repeat bg-right-bottom mix-blend-overlay scale-x-[-1]"
                    style={{ backgroundImage: `url(${vector1})`, backgroundSize: '60% auto' }}
                ></div>

                <h1 className="relative z-10 text-[20px] font-medium mb-2 text-white/80">Completed Tickets</h1>
                <h1 className="relative z-10 text-[48px] font-bold text-white leading-tight">0</h1>
            </div>
        </div>
    );
};

export default Counter;
