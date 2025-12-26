const NotFound = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20 text-center">
      <h1 className="mb-2 font-clashDisplay text-3xl font-semibold text-textDarkColor">
        Unnnn! Page Not Found - 404
      </h1>
      <p className="text-base text-textDarkColor">
        We&apos;re working on it. Be patient!
      </p>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mt-10 flex items-center gap-1 rounded-full bg-primaryColor/20 px-6 py-3 text-base font-semibold text-primaryColor"
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
