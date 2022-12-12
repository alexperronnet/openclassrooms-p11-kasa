export default function Icon({ name, ...props }) {
  switch (name) {
    case 'chevron-down':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      )
  }
}
