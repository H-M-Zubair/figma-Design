import image1 from "../../assets/images/1.png";
function NearbyDeals() {
  return (
    <div className=" py-[133px] px-[120px] ">
      <div className="">
        <div className="flex  justify-between">
          <div className="flex font-bold font-outfit text-[54px] ">
            {" "}
            <span>Nearby</span>
            <span className="text-primary ml-2">
              Deals{" "}
              <div className="-mt-4">
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
              </div>
            </span>{" "}
          </div>
          <div>
            <button className="bg-darkGreenButton hover:cursor-pointer font-semibold text-xl mt-[39px] text-white w-[169px] h-[56px] rounded-[35px]">
              View on Map
            </button>
          </div>
        </div>
        <div>
          Find deals of the day here & save money with offers and avail wide
          discounts on everything.
        </div>

        <div className="mt-[55px]">
          <div className="max-w-sm hover:shadow-lg  bg-white border border-gray-200 rounded-2xl shadow ">
            <div href="#">
              <img className="rounded-t-lg" src={image1} alt="" />
            </div>
            <div className="p-5">
              <div>
                <div className="mb-4">
                  <svg
                    width="108"
                    height="19"
                    viewBox="0 0 108 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99999 0.214844C6.96385 0.214844 6.77134 3.75882 5.55911 5.01097C4.34688 6.26312 0.578199 4.83145 0.0545867 7.05396C-0.467925 9.27761 2.92235 10.0321 3.34036 11.9399C3.76057 13.8476 1.68922 16.528 3.45916 17.862C5.2291 19.1948 7.13435 16.1781 8.99999 16.1781C10.8656 16.1781 12.7709 19.1948 14.5408 17.862C16.3108 16.528 14.2405 13.8476 14.6596 11.9399C15.0787 10.0321 18.4679 9.27761 17.9454 7.05396C17.4229 4.83145 13.6531 6.26312 12.442 5.01097C11.2297 3.75882 11.0361 0.214844 8.99999 0.214844Z"
                      fill="#F3BE00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.5 0.214844C29.4638 0.214844 29.2713 3.75882 28.0591 5.01097C26.8469 6.26312 23.0782 4.83145 22.5546 7.05396C22.0321 9.27761 25.4224 10.0321 25.8404 11.9399C26.2606 13.8476 24.1892 16.528 25.9592 17.862C27.7291 19.1948 29.6343 16.1781 31.5 16.1781C33.3656 16.1781 35.2709 19.1948 37.0408 17.862C38.8108 16.528 36.7405 13.8476 37.1596 11.9399C37.5787 10.0321 40.9679 9.27761 40.4454 7.05396C39.9229 4.83145 36.1531 6.26312 34.942 5.01097C33.7297 3.75882 33.5361 0.214844 31.5 0.214844Z"
                      fill="#F3BE00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M54 0.214844C51.9638 0.214844 51.7713 3.75882 50.5591 5.01097C49.3469 6.26312 45.5782 4.83145 45.0546 7.05396C44.5321 9.27761 47.9224 10.0321 48.3404 11.9399C48.7606 13.8476 46.6892 16.528 48.4592 17.862C50.2291 19.1948 52.1343 16.1781 54 16.1781C55.8656 16.1781 57.7709 19.1948 59.5408 17.862C61.3108 16.528 59.2405 13.8476 59.6596 11.9399C60.0787 10.0321 63.4679 9.27761 62.9454 7.05396C62.4229 4.83145 58.6531 6.26312 57.442 5.01097C56.2297 3.75882 56.0361 0.214844 54 0.214844Z"
                      fill="#F3BE00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M76.5 0.214844C74.4638 0.214844 74.2713 3.75882 73.0591 5.01097C71.8469 6.26312 68.0782 4.83145 67.5546 7.05396C67.0321 9.27761 70.4224 10.0321 70.8404 11.9399C71.2606 13.8476 69.1892 16.528 70.9592 17.862C72.7291 19.1948 74.6343 16.1781 76.5 16.1781C78.3656 16.1781 80.2709 19.1948 82.0408 17.862C83.8108 16.528 81.7405 13.8476 82.1596 11.9399C82.5787 10.0321 85.9679 9.27761 85.4454 7.05396C84.9229 4.83145 81.1531 6.26312 79.942 5.01097C78.7297 3.75882 78.5361 0.214844 76.5 0.214844Z"
                      fill="#F3BE00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M99 0.214844C96.9638 0.214844 96.7713 3.75882 95.5591 5.01097C94.3469 6.26312 90.5782 4.83145 90.0546 7.05396C89.5321 9.27761 92.9224 10.0321 93.3404 11.9399C93.7606 13.8476 91.6892 16.528 93.4592 17.862C95.2291 19.1948 97.1343 16.1781 99 16.1781C100.866 16.1781 102.771 19.1948 104.541 17.862C106.311 16.528 104.241 13.8476 104.66 11.9399C105.079 10.0321 108.468 9.27761 107.945 7.05396C107.423 4.83145 103.653 6.26312 102.442 5.01097C101.23 3.75882 101.036 0.214844 99 0.214844Z"
                      fill="#ECECEC"
                    />
                  </svg>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Loaded Fries At Aloo Cart{" "}
                </h5>
              </div>
              <div className="flex my-2 ">
                <div>
                  {" "}
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0846 8.90813C12.0846 7.75707 11.1519 6.82437 10.0017 6.82437C8.85067 6.82437 7.91797 7.75707 7.91797 8.90813C7.91797 10.0583 8.85067 10.991 10.0017 10.991C11.1519 10.991 12.0846 10.0583 12.0846 8.90813Z"
                      stroke="#219653"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99959 17.6495C9.00086 17.6495 3.75 13.4012 3.75 8.95853C3.75 5.48048 6.54758 2.66031 9.99959 2.66031C13.4516 2.66031 16.25 5.48048 16.25 8.95853C16.25 13.4012 10.9983 17.6495 9.99959 17.6495Z"
                      stroke="#219653"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>Pakistan,Lahore</div>
              </div>
              <div className="flex my-2 ">
                <div>
                  {" "}
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0846 8.90813C12.0846 7.75707 11.1519 6.82437 10.0017 6.82437C8.85067 6.82437 7.91797 7.75707 7.91797 8.90813C7.91797 10.0583 8.85067 10.991 10.0017 10.991C11.1519 10.991 12.0846 10.0583 12.0846 8.90813Z"
                      stroke="#219653"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99959 17.6495C9.00086 17.6495 3.75 13.4012 3.75 8.95853C3.75 5.48048 6.54758 2.66031 9.99959 2.66031C13.4516 2.66031 16.25 5.48048 16.25 8.95853C16.25 13.4012 10.9983 17.6495 9.99959 17.6495Z"
                      stroke="#219653"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>Pakistan,Lahore</div>
              </div>
              <div className=" flex justify-end">
                <button className=" bg-primary  text-md items-center px-6 py-1  font-medium text-center text-white  rounded-2xl  focus:ring-4 focus:outline-none">
                  Get Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyDeals;
