import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-full min-h-[80vh] flex flex-col justify-center items-center gap-4 font-regular text-lg">
            <h1 className="text-center text-9xl font-semibold text-neutral-950">404</h1>
            <p className="text-center text-neutral-700">The page you requested for seems to not exist.</p>
            <p>Back to <Link to="/" className="text-red-500" >Home</Link></p>
        </div>
    );
};

export default Error;