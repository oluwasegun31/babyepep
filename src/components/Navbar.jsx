import logo from "../assets/logo.webp";
export default function Navbar() {
  return (
    <nav className="py-2 px-4 w-[95%] mx-auto bg-gray-200 mt-4 rounded-2xl border-4 border-[#b96c76] darkbg flex justify-between items-center">
      <img
        src={logo}
        alt="logo"
        className="md:w-16 sm:w-12 w-10 object-contain"
      />
      <div className="flex justify-enter items-center gap-4">
        <svg
          className="sm:w-7 w-5 sm:h-7 h-5 cursor-pointer text-gray-800 dark:text-[#ec9fa9]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
        </svg>

        <svg
          className="sm:w-8 w-6 sm:h-8 h-6 cursor-pointer text-gray-800 dark:text-[#ec9fa9] rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
          />
        </svg>
      </div>
    </nav>
  );
}
