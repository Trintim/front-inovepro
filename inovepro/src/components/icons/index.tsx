export const MenuIcon = (tamanho = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tamanho} w-${tamanho}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

export const CloseIcon = (tamanho = 6) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${tamanho} w-${tamanho}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);