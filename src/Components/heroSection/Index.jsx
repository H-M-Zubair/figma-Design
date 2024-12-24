import Building from "./icons Components/Building";

const HeroSection = () => {
  return (
    <div className="h-[550px] font-outfit bg-heroBg">
      {/* Orange Div */}
      <div className="  lg:mx[85px] xl:mx-[115px]  pt-[104px] relative h-full">
        <div className="font-bold text-[64px] leading-none">
          <div className="flex ">
            {" "}
            <span>Get The Best </span>
            <span className="text-primary ml-2">
              Deals{" "}
              <svg
                width="163"
                height="8"
                viewBox="0 0 163 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.85352C53.1007 2.41881 105.241 2.07976 157.348 2.07976C157.494 2.07976 162.022 2.13386 162 2.14261C91.7042 5.08881 78.0986 5.38293 31.6127 6.85352C31.6127 6.85352 111.122 6.39607 146.127 6.26528"
                  stroke="#219653"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
          </div>
          Near By You!
        </div>
        <h2 className="mt-[19px] text-xl pl-2">
          Explore nearby deals on map and buy deals to <br /> enjoy quality food
          with your family
        </h2>
        <button className="bg-darkGreenButton hover:cursor-pointer font-semibold text-xl mt-[39px] text-white w-[169px] h-[56px] rounded-[35px]">
          Explore
        </button>
        {/* Building component at the bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <Building />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
