function DropArrow() {
  return (
    <div>
      <svg
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_672)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.74865 0.0217506C4.94065 0.0217506 5.13365 0.094751 5.27965 0.242751L8.22065 3.19575L11.1597 0.24275C11.4517 -0.0512499 11.9267 -0.0512499 12.2207 0.24075C12.5137 0.53275 12.5157 1.00675 12.2227 1.30075L8.75165 4.78775C8.47065 5.07075 7.97065 5.07075 7.68865 4.78775L4.21765 1.30075C3.92565 1.00675 3.92665 0.53275 4.21965 0.240751C4.36565 0.0947506 4.55765 0.0217507 4.74865 0.0217506Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_672"
            x="-0.000717163"
            y="0.0217285"
            width="16.4421"
            height="12.9783"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_672"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_672"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default DropArrow;
