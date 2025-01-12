function CenteredCartIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle cx="20" cy="20" r="20" fill="#E9E9E9" />

      {/* Group for Cart Icon */}
      <g transform="translate(11, 11)">
        {" "}
        {/* Adjusting the translation to center the cart icon */}
        <path
          d="M1.29297 1.6543L3.0263 1.95408L3.8288 11.5081C3.89297 12.2883 4.54547 12.8871 5.3288 12.8846H14.4196C15.1671 12.8862 15.8013 12.3366 15.9071 11.5972L16.698 6.13608C16.7863 5.52568 16.3621 4.95942 15.7521 4.87115C15.6988 4.86366 3.30464 4.85949 3.30464 4.85949"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7734 7.93815H13.0843"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.96505 15.7715C5.21589 15.7715 5.41839 15.9748 5.41839 16.2248C5.41839 16.4757 5.21589 16.679 4.96505 16.679C4.71422 16.679 4.51172 16.4757 4.51172 16.2248C4.51172 15.9748 4.71422 15.7715 4.96505 15.7715Z"
          fill="black"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3635 15.7712C14.6143 15.7712 14.8177 15.9746 14.8177 16.2246C14.8177 16.4754 14.6143 16.6787 14.3635 16.6787C14.1127 16.6787 13.9102 16.4754 13.9102 16.2246C13.9102 15.9746 14.1127 15.7712 14.3635 15.7712Z"
          fill="black"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default CenteredCartIcon;
