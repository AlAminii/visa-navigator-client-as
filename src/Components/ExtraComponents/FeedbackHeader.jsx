

const FeedbackHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-8 p-4 gap-y-3 ">
         <h5 className="border border-[#da8549] inline-block p-2 text-white  rounded-sm">Client Feedbacks</h5>
         <h1 className="text-5xl font-sm bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">Best Reviews From Our Clients</h1>
         <p className="text-slate-400" >Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna 
            <br />aliqua. Enim minim veniam quis nostrud exercitation</p>
        </div>
    );
};

export default FeedbackHeader;