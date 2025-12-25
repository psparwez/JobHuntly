const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
            <h1 className="mb-2 text-3xl font-semibold text-textDarkColor font-clashDisplay ">
                Unnnn! Page Not Found - 404
            </h1>
            <p className="text-base text-textDarkColor ">
                We&apos;re working on it. Be patient!
            </p>
            <button
                onClick={() => window.history.back()}
                className="flex items-center gap-1 px-6 py-3 mt-10 text-base font-semibold rounded-full text-primaryColor bg-primaryColor/20"
            >
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5"
                    >
                        <path d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"></path>
                    </svg>
                </span>
                Go Back
            </button>
        </div>
    );
};

export default NotFound;