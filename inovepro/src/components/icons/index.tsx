export const MenuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

export const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const MapIcon = (tam = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tam} w-${tam}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

export const PhoneIcon = (tam = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tam} w-${tam}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export const MailIcon = (tam = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tam} w-${tam}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export const InstaIcon = (tam = 6, color = "") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`h-${tam} w-${tam} ${color}`}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
  </svg>
);

export const PinterestIcon = (tam = 6, color = "") => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tam} w-${tam} ${color}`}
  >
    <path
      d="M344.479 52.9C397.45 79.2793 432 126.619 432 199.667C432 257.366 407.764 304.128 374.901 333.788C343.225 362.376 298.946 378.359 260.262 363.68C247.936 359.003 237.589 352.199 228.968 344.096L205.402 434.584C201.685 449.392 177.654 482.695 166.302 479.826C154.531 476.851 150.815 435.573 154.531 420.765L196.152 250.336C183.902 209.629 188.284 172.03 216.939 152.823C222.666 148.984 230.372 146.107 239.35 146.777C248.144 147.433 255.16 151.268 260.156 155.415C268.336 162.205 271.894 173.059 269.311 183.348L248.212 276.63C249.762 283.043 251.802 289.145 254.353 294.695C260.646 308.383 269.207 317.137 280.018 321.239C292.196 325.86 314.973 322.496 337.638 302.04C359.116 282.655 376.505 241.462 376.505 199.667C376.505 148.347 350.434 113.942 315.543 96.5665C279.68 78.7067 233.829 78.6122 195.661 99.5278C158.317 119.992 142.801 151.438 138.593 182.158C134.141 214.661 136.033 241.123 154.531 259.548C160.579 265.572 154.531 285.482 145.282 301.004C132.621 309.603 112.281 289.241 103.648 276.63C93.7924 262.241 83.8707 219.709 89.7714 176.633C95.9164 131.774 117.668 83.234 173.031 52.8962C227.349 23.1307 292.481 27.0046 344.479 52.9Z"
      fill="black"
    />
  </svg>
);

export const FaceIcon = (tam = 6, color = "") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className={`h-${tam} w-${tam} ${color}`}
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

export const LinkdinIcon = (tam = 6, color = "") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3333 3102"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
    className={`h-${tam} w-${tam} ${color}`}
  >
    <path
      d="M1204 925h640c26 0 47 21 47 47v196c52-57 118-109 199-151 107-56 240-92 395-92 356 0 569 113 693 299 122 183 155 433 155 715v1114c0 26-21 47-47 47h-667c-26 0-47-21-47-47v-988c0-113-1-243-42-340-37-88-111-152-258-152-154 0-241 55-290 138-52 88-64 211-64 336v1005c0 26-21 47-47 47h-667c-26 0-47-21-47-47V970c0-26 21-47 47-47zm593 94h-546v1988h572v-958c0-140 15-278 77-384 65-111 178-185 371-185 195 0 294 88 345 210 48 114 49 254 49 376v941h573V1940c0-265-30-499-139-663-107-161-295-258-615-258-139 0-257 32-352 82-114 59-194 142-239 222-8 14-23 24-41 24h-9c-26 0-47-21-47-47v-281zM789 393c0 109-44 207-116 279-71 71-170 116-279 116s-207-44-279-116C44 601-1 502-1 393s44-207 116-279C186 43 285-2 394-2s207 44 279 116c71 71 116 170 116 279zM607 605c54-54 88-129 88-212s-34-158-88-212-129-88-212-88-158 34-212 88-88 129-88 212 34 158 88 212 129 88 212 88 158-34 212-88zM48 924h694c26 0 47 21 47 47v2082c0 26-21 47-47 47H48c-26 0-47-21-47-47V971c0-26 21-47 47-47zm647 94H95v1988h600V1018z"
      fill-rule="nonzero"
    />
  </svg>
);
