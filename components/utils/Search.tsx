const Search = () => {
  return (
    <div className="lg:flex mb-2 lg:mb-0 relative max-lg:mr-4">
      <input
        placeholder="Search GitHub"
        className="glass max-lg:bg-neutral-50 max-lg:w-full  w-[240px] lg:px-2 h-[38px] max-lg:h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] max-lg:placeholder:text-[16px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-white focus:text-black border-[1px] lg:border-neutral-500 max-lg:border-neutral-300 rounded-md"
        type="text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
        aria-hidden="true"
        className="mr-1 absolute right-0 top-[10px] max-lg:hidden"
      >
        <path
          fill="none"
          stroke="#979A9C"
          opacity=".4"
          d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
        ></path>
        <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
      </svg>
    </div>
  );
};

export default Search;
