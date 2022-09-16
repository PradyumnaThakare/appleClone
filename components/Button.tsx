interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

function Button({ title, onClick, width, loading }: Props) {
  return (
    <a href="/#buyscreen">
      <button
        className={` relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md ${
          width ? width : "w-auto"
        }`}
        onClick={onClick}
      >
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white">
            {false && (
              <svg
                //   className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
                //  fill="none"
                // stroke="currentColor"
                viewBox="0 0 24 24"
                //xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  //strokeLinecap="round"
                  //strokeLinejoin="round"
                  //strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            )}
            {loading ? "Loading..." : title}
          </span>
        </span>
      </button>
    </a>
  );
}

export default Button;

{
  /*
<a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Button Text</span>
</span>
</a>
 */
}
