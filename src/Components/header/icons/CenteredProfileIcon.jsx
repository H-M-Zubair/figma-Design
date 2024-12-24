function CenteredProfileIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#E9E9E9" />

      <g transform="translate(13, 11)">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.9873 11.7266C3.76428 11.7266 1.0119 12.2135 1.0119 14.1637C1.0119 16.1139 3.74682 16.6183 6.9873 16.6183C10.2103 16.6183 12.9619 16.1305 12.9619 14.1811C12.9619 12.2318 10.2278 11.7266 6.9873 11.7266Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.98661 8.94504C9.10169 8.94504 10.816 7.23119 10.816 5.11763C10.816 3.00407 9.10169 1.29102 6.98661 1.29102C4.87153 1.29102 3.15646 3.00407 3.15646 5.11763C3.14931 7.22405 4.85249 8.9379 6.95963 8.94504H6.98661Z"
          stroke="black"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default CenteredProfileIcon;
